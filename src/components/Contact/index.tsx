"use client";

import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-black">
      <div className="z-20 relative max-w-[1142px] px-[15px] mx-auto pt-[55px] md:pt-[101px] pb-[70px] md:pb-[94px]">
        <div className="flex h-full w-full flex-col justify-between gap-[93px]">
          <div className="flex flex-col md:flex-row gap-[46px] md:gap-[111px] justify-between">
            <div>
              <h2 className="font-alata font-normal text-[40px] md:text-[90px] leading-[32px] md:leading-[80px] text-white mb-[36px] md:mb-[39px]">Contact</h2>
              <div className="mb-[23px] md:mb-[39 px] h-1 md:h-1.5 w-[65px] md:w-[100px]  bg-yellow" />
              <div className="font-sofia font-bold text-[25px] md:text-[40px] leading-[35px] md:leading-[42px] text-white">Email us here:</div>
              <div className="font-sofia font-bold text-[25px] md:text-[40px] leading-[35px] md:leading-[42px]">
                <a href="mailto:info@marvelpowergroup.com" className="text-yellow break-words underline-offset-4 hover:underline">
                  info@marvelpowergroup.com
                </a>
              </div>
            </div>
            <div className="max-w-[445px] w-full">
              <h3 className="max-w-[350px] font-sofia font-bold text-[25px] md:text-[40px] leading-[35px] md:leading-[42px] text-white mb-[23px] md:mb-[41px] md:mt-[53px]">
                {submitted ? ("Thank you. Your info has been successfully sent") : ("Stay in the loop by getting on our mailing list")}</h3>
              {submitted ? (
                <div className="font-sofia font-light text-[14px] md:text-[18px] leading-[22px] md:leading-[26px] text-white">
                  Your can contact us
                  <a href="mailto:info@marvelpowergroup.com" className="text-yellow break-words underline-offset-4 hover:underline mx-2">
                    info@marvelpowergroup.com
                  </a> <br />
                  if you need additional assistance </div>
              ) : (
                <form onSubmit={onSubmit} className="flex flex-col items-end">
                  <div className="w-full">
                    <input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full bg-white px-[20px] py-[14px] text-white placeholder-black focus:border-yellow mb-[10px] md:mb-[15px] font-sofia font-semibold text-[14px] leading-[14px] tracking-[0.6px]"
                      placeholder="NAME *"
                    />
                  </div>
                  <div className="w-full">
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full bg-white px-[20px] py-[14px] text-white placeholder-black focus:border-yellow mb-[10px] md:mb-3.5 font-sofia font-semibold text-[14px] leading-[14px] tracking-[0.6px]"
                      placeholder="E-MAIL *"
                    />
                  </div>
                  <button
                    type="submit"
                    className="max-w-[196px] md:max-w-[272px] w-full inline-flex justify-center items-center gap-2 bg-yellow px-6 py-[17px] font-medium text-black transition hover:brightness-95 font-sofia font-semibold text-[14px] leading-[14px] tracking-[0.6px]"
                  >
                    Send
                    <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
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