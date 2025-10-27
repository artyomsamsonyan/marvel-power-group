"use client";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative">
      <div className="relative z-20 mx-auto max-w-[1142px] px-[15px] py-[53px] md:pt-[93px] md:pb-[140px]">
        <h2
          className="font-alata font-normal text-black mb-[34px] md:mb-[50px]"
          style={{
            fontSize: 'clamp(40px, 6vw, 90px)',
            lineHeight: 'clamp(36px, 7vw, 100px)',
          }}
        >
          About Us
        </h2>
        <div
          className="mb-[35px] md:mb-[55px] bg-yellow"
          style={{
            height: 'clamp(4px, 0.5vw, 6px)',
            width: 'clamp(65px, 8vw, 100px)',
          }}
        />
        <div className="flex flex-col md:flex-row items-start gap-[30px] md:gap-[68px]">
          <div className="relative w-full md:w-auto flex-shrink-0">
            <Image
              src="/assets/images/aboutUsImg.jpg"
              alt="Modern city architecture showcasing urban development"
              width={486}
              height={315}
              sizes="(max-width: 768px) 100vw, 486px"
              quality={90}
              className="object-cover w-full md:w-[486px]"
            />
          </div>
          <div
            className="flex flex-col md:gap-6 max-w-[490px] font-sofia font-light"
            style={{
              fontSize: 'clamp(14px, 1.5vw, 18px)',
              lineHeight: 'clamp(24px, 2vw, 26px)',
            }}
          >
            <p>
              Our dynamic, solutions-oriented team brings decades
              of relevant transactional, analytical and regulatory experience to supporting our clients’ unique agendas.
              <br />
              <br />
              We are experienced practitioners who have run companies, successfully originated and closed complex deals, advocated and negotiated favorable policy and advanced technological innovation and climate leadership.
              <br />
              <br />
              We specialize in structuring balanced solutions for all affected stakeholders and uncovering economic opportunities in otherwise opaque environments.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[-7px] left-0 right-0 hidden md:flex flex-col items-center justify-center w-full">
        <div className="flex justify-between z-10 w-full items-end ">
          <div className=""></div>
          <div className="h-[15px] w-px bg-black"></div>
          <div className="h-[15px] w-px bg-black"></div>
          <div className="h-[15px] w-px bg-black"></div>
          <div className="h-[15px] w-px bg-black"></div>
          <div className="h-[15px] w-px bg-black"></div>
          <div className=""></div>
        </div>
      </div>
    </section>
  );
}