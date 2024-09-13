import { Title } from "@/components/atoms/title";
import { CardLink } from "@/components/molecules/card-with-link";
import { propertyLinkData } from "@/constants/recent-articles";
import React from "react";

export const RecentArticles = () => {
  return (
    <section className="mt-[70px] mb-[95px] overflow-hidden">
      <div className="container">
        <div className="mb-3 text-center">
          <Title title="Recent Articles & News" />
          <p className="text-[14px] leading-[27px]text-black roboto font-normal mt-[7px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-[25px] mt-[36px]">
          {propertyLinkData.map((item) => (
            <div key={item.id}>
              <CardLink
                imageSrc={item.imageSrc}
                date={item.date}
                desc={item.desc}
                propertyType={item.propertyType}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
