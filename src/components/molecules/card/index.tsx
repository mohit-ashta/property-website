import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiLocationOn } from "react-icons/ci";

interface CardProps {
  title: string;
  price: string;
  bath: string;
  bed: string;
  sqr: string;
  address: string;
  link?: string;
  imageSrc: string;
  month?: string;
  propertyTypes?: string[];
}

export const Card: React.FC<CardProps> = ({
  title,
  address,
  price,
  imageSrc,
  link,
  bed,
  bath,
  month,
  propertyTypes = [],
  sqr,
}) => {
  return (
    <div className="w-full">
      <Link className="block bg-white rounded-xl" href={link || "#"}>
        <div className="relative h-[257px]">
          <Image
            width={1000}
            height={1000}
            className="w-full h-full object-cover object-center rounded-lg"
            src={imageSrc}
            alt={title}
          />
          <div className="absolute top-0 left-0 pt-[19px] px-[16px]">
            {propertyTypes.length > 0 && (
              <div className="flex gap-[7px] items-center">
                {propertyTypes.map((type, index) => (
                  <div key={index} className="bg-secondary rounded-[27px]">
                    <h6 className="text-[10px] leading-[27px] px-[14px] text-white roboto font-bold">
                      {type}
                    </h6>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="pt-[16px]">
          <div className="border-b border-black pb-[13px]">
            <h5 className="text-base leading-[19px] text-primary font-bold roboto mb-[5px]">
              {title}
            </h5>
            <p className="text-[13px] leading-[25px] text-black flex items-center gap-2 mb-[13px]">
              <CiLocationOn className="text-cherry-red" size={22} />
              {address}
            </p>
          </div>
          <div className="flex justify-between items-center mt-[16px]">
            <div className="flex items-center gap-3">
              <div className="flex gap-[13px] items-center border-e h-4 pe-3">
                <Image
                  width={22}
                  height={22}
                  className="object-cover object-center"
                  src="/svg/bed.svg"
                  alt="bed"
                />
                <span className="text-[13px] leading-[14px] roboto">{bed}</span>
              </div>
              <div className="flex gap-[13px] items-center border-e h-4 pe-3">
                <Image
                  width={22}
                  height={22}
                  className="object-cover object-center"
                  src="/svg/bath.svg"
                  alt="bath"
                />
                <span className="text-[13px] leading-[14px] roboto">
                  {bath}
                </span>
              </div>
              <div className="flex gap-[13px] items-center">
                <Image
                  width={22}
                  height={22}
                  className="object-cover object-center"
                  src="/svg/sqr.svg"
                  alt="square feet"
                />
                <span className="text-[13px] leading-[14px] roboto">{sqr}</span>
              </div>
            </div>
            <div className="flex items-center gap-[2px]">
              <h5 className="text-[17px] leading-[26px] text-primary roboto font-semibold">
                ${price}
              </h5>
              {month && (
                <h5 className="text-[12px] leading-[18px] text-primary roboto font-normal">
                  /{month}
                </h5>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
