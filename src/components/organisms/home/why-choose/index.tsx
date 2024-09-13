import { TITLES } from "@/constants/titles";
import { sectionData } from "@/constants/why-choose";
import Image from "next/image";
import React from "react";
import { IoArrowForward } from "react-icons/io5";

export const WhyChoose = () => {
  return (
    <section className="mb-[70px]">
      <div className="container">
        <div className="flex items-center">
          <div className="max-w-[600px] max-h-[600px]">
            <Image
              width={1000}
              height={1000}
              className="object-cover rounded-lg w-full h-full"
              src={"/svg/home.svg"}
              alt="home"
            />
          </div>
          <div className="max-w-lg ms-auto">
            <h3 className="text-[34px] leading-[45px] text-black roboto font-bold mb-[18px]">
              Why You Should Choose <br />
              With Us
            </h3>
            <p className="text-[14px] leading-[26px] text-black roboto font-normal">
              Pellentesque egestas elementum egestas faucibus sem. Velit nunc
              egestas ut morbi. Leo diam diam nibh eget fermentum massa pretium.
              Mi mauris nulla ac dictum ut mauris non.
            </p>
            <div className="mt-[35px] flex justify-between gap-10">
              {sectionData.map((section, index) => (
                <div key={index}>
                  <h5 className="text-[18px] leading-[18px] text-black roboto font-bold">
                    {section.title}
                  </h5>
                  <p className="text-[13px] leading-[24px] text-black roboto font-medium mt-[17px]">
                    {section.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-[35px]">
              <button className="flex items-center gap-1 px-[31px] rounded-[9px] focus:outline-none font-bold leading-[47px] bg-secondary roboto text-white text-[14px]">
                {TITLES.LEARN_MORE} <IoArrowForward />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
