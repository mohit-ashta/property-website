import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsDot } from "react-icons/bs";
import { IoArrowForward } from "react-icons/io5";
interface CardProps {
  imageSrc: string;
  propertyType: string;
  date: string;
  desc: string;
}

export const CardLink: React.FC<CardProps> = ({
  imageSrc,
  propertyType,
  date,
  desc,
}) => {
  return (
    <div className="w-full border border-black rounded-[13px]">
      <div className="block bg-white rounded-xl">
        <div className="h-[200px]">
          <Image
            width={1000}
            height={1000}
            className="w-full h-full object-cover object-center rounded-t-lg overflow-hidden"
            src={imageSrc}
            alt="home"
          />
        </div>
        <div className="py-[16px] px-[36px] text-center">
          <div className="mb-[7px] flex items-center justify-center text-[12px] leading-[23px]text-black roboto font-normal">
            <span>{propertyType}</span> <BsDot size={28} />
            <h5>{date}</h5>
          </div>
          <h5 className="text-[14px] leading-[21px]text-black roboto font-bold mb-[13px]">
            {desc}
          </h5>
          <div className="flex items-center justify-center">
            <span className="text-[12px] leading-[24px]text-black roboto font-bold cursor-pointer">
              Read More
            </span>
            <IoArrowForward className="cursor-pointer pl-2" size={22} />
          </div>
        </div>
      </div>
    </div>
  );
};
