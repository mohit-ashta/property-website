import { Title } from "@/components/atoms/title";
import { Card } from "@/components/molecules/card";
import { propertyData } from "@/constants/cost-Saving-properties";

import React from "react";

export const CostProperties = () => {
  return (
    <section className="mt-[70px] mb-[95px] overflow-hidden">
      <div className="container">
        <div className="mb-3 text-center">
          <Title title="Cost Saving Properties" />
        </div>
        <div className="grid grid-cols-3 gap-[25px] mt-[36px]">
          {propertyData.map((item) => (
            <div key={item.id}>
              <Card
                imageSrc={item.imageSrc}
                address={item.location}
                price={item.price}
                title={item.title}
                bath={item.bath}
                bed={item.bed}
                sqr={item.sqr}
                month={item.month}
                propertyTypes={item.propertyTypes}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
