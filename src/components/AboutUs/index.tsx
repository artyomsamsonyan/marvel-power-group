import Image from "next/image";

export default function About() {
  return (
    <section id="about">
      <div className="z-20 relative max-w-[1142px] px-4 mx-auto pt-[93px] pb-[140px]">
        <h2 className="font-alata font-normal text-[90px] leading-[100px] text-black mb-[50px]">About Us</h2>
        <div className="mb-[55px] h-1.5 w-[100px] bg-yellow" />
        <div className="flex items-start gap-[68px] ">
          <div className="relative ">
            <Image
              src="/assets/images/aboutUsImg.jpg"
              alt="City architecture"
              width={486}
              height={315}
              className="object-cover "
            />
          </div>
          <div className="flex flex-col gap-6 max-w-[490px] font-sofia font-light text-[18px] leading-[26px]">
            <p>
              Our dynamic, solutions‑oriented team brings decades of relevant transactional, analytical and regulatory experience to support our clients’ unique agendas.
            </p>
            <p>
              We are experienced practitioners who have run companies, successfully originated and closed complex deals, advocated and negotiated favorable policy, and advanced technological innovation and climate leadership.
            </p>
            <p>
              We specialize in structuring balanced solutions for all affected stakeholders and uncovering economic opportunities in otherwise opaque environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}