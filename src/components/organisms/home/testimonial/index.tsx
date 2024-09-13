import { StatsCard } from "@/components/molecules/stats";
import { TestimonialCard } from "@/components/molecules/testimonial-card";
import { statsData, testimonialsData } from "@/constants/testimonial";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
export const Testimonial = () => {
  return (
    <section className="bg-secondary min-h-[600px] flex justify-center items-center">
      <div className="container">
        <div className="flex justify-between items-center">
          <div>
            <h5 className="text-[30px] leading-[30px] text-black font-bold poppins">
              More than 10 Years of Experience
            </h5>
            <p className="text-[14px] leading-[26px] text-black font-normal poppins mt-[10px]">
              Lorem ipsum dolor sit amet, consectetur.
            </p>
            <div className="grid grid-cols-3 gap-[90px] mt-[60px]">
              {statsData.map((stat, index) => (
                <StatsCard
                  key={index}
                  percentage={stat.percentage}
                  description={stat.description}
                />
              ))}
            </div>
          </div>
          <div className="w-full max-w-[400px] ms-auto testimonial-wrapper mt-20">
            <Swiper
              direction={"horizontal"}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              loop={true}
              autoplay={true}
              spaceBetween={30}
              slidesPerView={1}
              className="mySwiper"
            >
              {testimonialsData.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <TestimonialCard
                    key={index}
                    title={testimonial.title}
                    description={testimonial.description}
                    profileImage={testimonial.profileImage}
                    name={testimonial.name}
                    position={testimonial.position}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};
