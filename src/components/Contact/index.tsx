"use client";

import { useState } from "react";

type FormStatus = 'idle' | 'submitting' | 'success' | 'error' | 'rate-limited';

interface FormErrors {
  name?: string;
  email?: string;
}

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<FormErrors>({});
  const [message, setMessage] = useState("");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!name.trim()) {
      newErrors.name = "Name is required";
    } else if (name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!validate()) return;

    setStatus('submitting');
    setMessage("");

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage("Thank you! Your info has been successfully sent.");
        setName("");
        setEmail("");
        setErrors({});
      } else if (response.status === 429) {
        setStatus('rate-limited');
        setMessage("Too many requests. Please try again in a minute.");
      } else {
        setStatus('error');
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus('error');
      setMessage("Network error. Please check your connection.");
    }
  }

  return (
    <section id="contact" className="bg-black">
      <div className="relative z-20 mx-auto max-w-[1142px] px-[15px] pt-[55px] md:pt-[101px] pb-[70px] md:pb-[94px]">
        <div className="flex h-full w-full flex-col justify-between gap-[93px]">
          <div className="flex flex-col md:flex-row gap-[46px] md:gap-[111px] justify-between">
            <div>
              <h2
                className="font-alata font-normal text-white mb-[36px] md:mb-[39px]"
                style={{
                  fontSize: 'clamp(40px, 6vw, 90px)',
                  lineHeight: 'clamp(32px, 6vw, 80px)',
                }}
              >
                Contact
              </h2>
              <div
                className="mb-[23px] md:mb-[39px] bg-yellow"
                style={{
                  height: 'clamp(4px, 0.5vw, 6px)',
                  width: 'clamp(65px, 8vw, 100px)',
                }}
              />
              <div
                className="font-sofiaBold font-bold text-white"
                style={{
                  fontSize: 'clamp(25px, 3vw, 40px)',
                  lineHeight: 'clamp(35px, 3.5vw, 42px)',
                }}
              >
                Email us here:
              </div>
              <div
                className="font-sofiaBold font-bold"
                style={{
                  fontSize: 'clamp(25px, 3vw, 40px)',
                  lineHeight: 'clamp(35px, 3.5vw, 42px)',
                }}
              >
                <a
                  href="mailto:info@marvelpowergroup.com"
                  className="text-yellow break-words underline-offset-4 hover:underline focus:outline-2 focus:outline-yellow focus:outline-offset-4"
                >
                  info@marvelpowergroup.com
                </a>
              </div>
            </div>

            <div className="max-w-[445px] w-full">
              <h3
                className="max-w-[350px] font-sofiaBold font-bold text-white mb-[23px] md:mb-[41px] md:mt-[53px]"
                style={{
                  fontSize: 'clamp(25px, 3vw, 40px)',
                  lineHeight: 'clamp(35px, 3.5vw, 42px)',
                }}
              >
                {status === 'success'
                  ? "Thank you. Your info has been successfully sent"
                  : "Stay in the loop by getting on our mailing list"}
              </h3>
              <div
                role="status"
                aria-live="polite"
                aria-atomic="true"
                className="sr-only"
              >
                {message}
              </div>
              {status === 'success' ? (
                <div
                  className="font-sofiaLight font-light text-white"
                  style={{
                    fontSize: 'clamp(14px, 1.5vw, 18px)',
                    lineHeight: 'clamp(22px, 2vw, 26px)',
                  }}
                >
                  You can contact us at{' '}
                  <a
                    href="mailto:info@marvelpowergroup.com"
                    className="text-yellow underline-offset-4 hover:underline"
                  >
                    info@marvelpowergroup.com
                  </a>
                  <br />
                  if you need additional assistance
                </div>
              ) : (
                <form onSubmit={onSubmit} className="flex flex-col items-end" noValidate>
                  <div className="w-full mb-[10px] md:mb-[15px]">
                    <label htmlFor="name" className="sr-only">
                      Name (required)
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className={`w-full bg-white px-[20px] py-[14px] text-black placeholder-black font-sofiaSemi font-semibold text-[14px] leading-[14px] tracking-[0.6px] focus:outline-2 focus:outline-offset-0 ${errors.name ? 'focus:outline-red-500 outline outline-2 outline-red-500' : 'focus:outline-yellow'
                        }`}
                      placeholder="NAME *"
                    />
                    {errors.name && (
                      <p
                        id="name-error"
                        className="mt-1 text-sm text-red-400 font-sofiaSemi"
                        role="alert"
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div className="w-full mb-[10px] md:mb-3.5">
                    <label htmlFor="email" className="sr-only">
                      Email (required)
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className={`w-full bg-white px-[20px] py-[14px] text-black placeholder-black font-sofiaSemi font-semibold text-[14px] leading-[14px] tracking-[0.6px] focus:outline-2 focus:outline-offset-0 ${errors.email ? 'focus:outline-red-500 outline outline-2 outline-red-500' : 'focus:outline-yellow'
                        }`}
                      placeholder="E-MAIL *"
                    />
                    {errors.email && (
                      <p
                        id="email-error"
                        className="mt-1 text-sm text-red-400 font-sofiaSemi"
                        role="alert"
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>
                  {(status === 'error' || status === 'rate-limited') && (
                    <div
                      className="w-full mb-3 text-sm font-sofiaSemi"
                      role="alert"
                    >
                      <p className={status === 'rate-limited' ? 'text-yellow' : 'text-red-400'}>
                        {message}
                      </p>
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="max-w-[196px] md:max-w-[272px] w-full inline-flex justify-center items-center gap-2 bg-yellow px-6 py-[17px] font-sofiaSemi font-semibold text-[14px] leading-[14px] tracking-[0.6px] text-black transition hover:brightness-95 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-2 focus:outline-white focus:outline-offset-4"
                  >
                    {status === 'submitting' ? 'Sending...' : 'Send'}
                    <svg
                      width="20"
                      height="10"
                      viewBox="0 0 20 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" clipRule="evenodd" d="M6 2.14286L8.46323 0L14 0V10H8.46323L6 7.85714V2.14286Z" fill="black" />
                      <path d="M14 2H20V4H14V2Z" fill="black" />
                      <path d="M14 6H20V8H14V6Z" fill="black" />
                      <path d="M0 6L0 4H6V6H0Z" fill="black" />
                      <path d="M8 6.5V3.5L9.33333 2H12V8H9.33333L8 6.5Z" fill="#F6D330" />
                    </svg>
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="hidden md:flex flex-col items-center justify-center w-full">
            <div className="flex justify-between z-10 w-full items-end ">
              <div className="h-[15px] w-px bg-white"></div>
              <div className="h-[15px] w-px bg-white"></div>
              <div className="h-[101px] w-px bg-yellow"></div>
              <div className="h-[15px] w-px bg-white"></div>
              <div className="h-[15px] w-px bg-white"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}