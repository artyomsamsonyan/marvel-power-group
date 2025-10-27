import { NextRequest, NextResponse } from 'next/server';

const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

setInterval(() => {
    const now = Date.now();
    for (const [key, value] of rateLimitStore.entries()) {
        if (now > value.resetTime) {
            rateLimitStore.delete(key);
        }
    }
}, 5 * 60 * 1000);

const RATE_LIMIT = 3;
const RATE_LIMIT_WINDOW = 60 * 1000;

function getRateLimitKey(ip: string, email: string): string {
    return `${ip}:${email}`;
}

function checkRateLimit(key: string): { allowed: boolean; remaining: number } {
    const now = Date.now();
    const record = rateLimitStore.get(key);

    if (!record || now > record.resetTime) {
        rateLimitStore.set(key, {
            count: 1,
            resetTime: now + RATE_LIMIT_WINDOW,
        });
        return { allowed: true, remaining: RATE_LIMIT - 1 };
    }

    if (record.count >= RATE_LIMIT) {
        return { allowed: false, remaining: 0 };
    }

    record.count++;
    return { allowed: true, remaining: RATE_LIMIT - record.count };
}

export async function POST(request: NextRequest) {
    try {
        const ip = request.headers.get('x-forwarded-for') ||
            request.headers.get('x-real-ip') ||
            'unknown';

        const body = await request.json();
        const { name, email } = body;

        if (!name || !email) {
            return NextResponse.json(
                { error: 'Name and email are required' },
                { status: 400 }
            );
        }

        if (typeof name !== 'string' || name.trim().length < 2) {
            return NextResponse.json(
                { error: 'Name must be at least 2 characters' },
                { status: 400 }
            );
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            );
        }

        const rateLimitKey = getRateLimitKey(ip, email.toLowerCase());
        const { allowed, remaining } = checkRateLimit(rateLimitKey);

        if (!allowed) {
            return NextResponse.json(
                {
                    error: 'Too many requests. Please try again in a minute.',
                    retryAfter: 60
                },
                {
                    status: 429,
                    headers: {
                        'Retry-After': '60',
                        'X-RateLimit-Limit': String(RATE_LIMIT),
                        'X-RateLimit-Remaining': '0',
                    }
                }
            );
        }

        console.log('New subscription:', { name: name.trim(), email: email.toLowerCase() });

        return NextResponse.json(
            {
                ok: true,
                message: 'Successfully subscribed'
            },
            {
                status: 200,
                headers: {
                    'X-RateLimit-Limit': String(RATE_LIMIT),
                    'X-RateLimit-Remaining': String(remaining),
                }
            }
        );

    } catch (error) {
        console.error('Subscription error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}

export async function OPTIONS() {
    return new NextResponse(null, {
        status: 200,
        headers: {
            'Allow': 'POST, OPTIONS',
        },
    });
}