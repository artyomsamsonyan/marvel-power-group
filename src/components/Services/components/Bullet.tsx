export default function Bullet() {
    return (
        <span
            className="bg-white flex-shrink-0 mt-[6px] md:mt-[8px]"
            style={{
                width: 'clamp(4px, 0.5vw, 6px)',
                height: 'clamp(4px, 0.5vw, 6px)',
            }}
            aria-hidden="true"
        />
    )
};