import Banner from "@/components/organisms/home/Banner";
import { CostProperties } from "@/components/organisms/home/cost-properties";
import { HowItWork } from "@/components/organisms/home/how-it-work";
import { RecentArticles } from "@/components/organisms/home/recent-articles";
import { RegisterWithUs } from "@/components/organisms/home/register-with-us ";
import { Testimonial } from "@/components/organisms/home/testimonial";
import { WhyChoose } from "@/components/organisms/home/why-choose";
import { Layout } from "@/components/organisms/layout";
import React from "react";

export const HomeTemplate = () => {
  return (
    <Layout>
      <Banner />
      <CostProperties />
      <HowItWork />
      <RecentArticles />
      <WhyChoose />
      <Testimonial />
      <RegisterWithUs />
    </Layout>
  );
};
