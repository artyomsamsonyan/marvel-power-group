export default function Bullet() {
    return (
        <span
            className="bg-white flex-shrink-0 mt-1.5 md:mt-2"
            style={{
                width: 'clamp(4px, 0.5vw, 6px)',
                height: 'clamp(4px, 0.5vw, 6px)',
            }}
            aria-hidden="true"
        />
    )
};