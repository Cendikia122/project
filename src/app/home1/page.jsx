import LayoutStyle1 from "@/components/Layouts/LayoutStyle1";
import AboutStyle1 from "@/components/about/AboutStyle1";
import BannerStyle1 from "@/components/banner/BannerStyle3";
import BlogStyle1 from "@/components/blog/BlogStyle1";
import ChooseStyle1 from "@/components/choose/ChooseStyle1";
import PartnerStyle1 from "@/components/partner/PartnerStyle1";
import ProcessStyle1 from "@/components/process/ProcessStyle1";
import ProjectStyle1 from "@/components/project/ProjectStyle1";
import RequestCallStyle1 from "@/components/request/RequestCallStyle1";
import ServicesStyle1 from "@/components/services/ServicesStyle1";
import TeamStyle1 from "@/components/team/TeamStyle1";
import TestimonialStyle1 from "@/components/testimonial/TestimonialStyle1";
import React from "react";

// ✅ SEO untuk halaman ini
export const metadata = {
  title: "Fasel, Inc | Solusi Digital Terbaik",
  description:
    "Fasel, Inc adalah perusahaan teknologi yang menyediakan solusi digital inovatif untuk bisnis Anda.",
  keywords: ["Fasel", "Solusi Digital", "Teknologi", "Bisnis"],
  openGraph: {
    title: "Fasel, Inc",
    description:
      "Fasel, Inc adalah perusahaan teknologi yang menyediakan solusi digital inovatif untuk bisnis Anda.",
    url: "https://www.fasel.com",
    siteName: "Fasel, Inc",
    images: [
      {
        url: "https://www.fasel.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fasel, Inc - Solusi Digital",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fasel, Inc",
    description:
      "Fasel, Inc adalah perusahaan teknologi yang menyediakan solusi digital inovatif untuk bisnis Anda.",
    images: ["https://www.fasel.com/images/og-image.jpg"],
  },
};

const Home1 = () => {
  return (
    <LayoutStyle1>
      <BannerStyle1 />
      <AboutStyle1 />
      <ServicesStyle1 />
      <ProcessStyle1 />
      <ChooseStyle1 />
      <PartnerStyle1 sectionClass="default-padding" />
      <TeamStyle1 sectionClass="bg-gray" teamTitle={true} />
      <ProjectStyle1 />
      <RequestCallStyle1 />
      <TestimonialStyle1 />
      <BlogStyle1 sectionClass="bg-gray" />
    </LayoutStyle1>
  );
};

export default Home1;
