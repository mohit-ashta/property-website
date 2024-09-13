import { socialLinks } from "@/constants/footer";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import LinksSection from "../link-section";
import ContactDetails from "../contact-details";

export const Footer = () => {
  return (
    <section className="bg-primary px-[72px] pt-[80px]">
      <div className="container">
        <div className="flex justify-between gap-10">
          <div className="flex flex-col w-[527px]">
            <h4 className="text-[42px] font-bold inter leading-normal text-secondary mb-[54px]">
              Rental Properties
            </h4>
            <p className="text-[16px] font-medium leading-[28px] text-white inter min-w-[300px] mb-[40px]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <div className="flex gap-[13px]">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="w-10 h-10 transition cursor-pointer duration-300 ease-in-out text-white hover:text-primary hover:bg-secondary hover:border-secondary rounded-full bg-transparent border flex justify-center items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <LinksSection title="Links" linkType="rental" />
            <LinksSection title="Reach" linkType="reach" />
            <ContactDetails />
          </div>
        </div>
     
        <div className="border-t border-secondary text-center mt-[84px]">
          <h4 className="text-[14px] py-[30px] text-white">
            Copyright © 2024. All Rights Reserved
          </h4>
        </div>
      </div>
    </section>
  );
};
