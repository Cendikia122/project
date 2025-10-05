import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';
import BlogSingleWithSidebarContent from '@/components/blog/BlogSingleWithSidebarContent';
import blogData from '@/assets/jsonData/blog/BlogData.json';
import React from 'react';

export const metadata = {
  title: "Experiential Learning dalam Leadership: Strategi Efektif Mengembangkan Kompetensi Karyawan",
  description:
    "Experiential Learning adalah metode pembelajaran yang menekankan pada belajar dari pengalaman nyata. Konsep ini pertama kali dipopulerkan oleh David Kolb, yang menyatakan bahwa belajar paling efektif terjadi ketika seseorang terlibat langsung dalam proses, merefleksikan pengalaman, lalu mengaplikasikan kembali pengetahuan tersebut.",
  keywords: ["Experiental Learning", "Pelatihan Kepemimpinan", "Leadership Development Program", "Human Capital"],
  openGraph: {
    title: "Bantu upgrade perusahaan anda dengan Fasel, Inc!",
    description:
      "Fasel, Inc adalah perusahaan teknologi yang menyediakan solusi digital inovatif untuk bisnis Anda.",
    url: "https://www.fasel.com",
    siteName: "Fasel, Inc",
    images: [
      {
        url: "https://www.fasel.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fasel Consultant - Experiental Learning",
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

const BlogSingleWithSidebar = ({ params }) => {

    const { id } = params
    const data = blogData.find(blog => blog.id === parseInt(id))

    return (
        <>
            <LayoutStyle7 breadCrumb="Experiental Learning" title="Experiential Learning dalam Leadership: Strategi Efektif Mengembangkan Kompetensi Karyawan">
                <BlogSingleWithSidebarContent blogInfo={data} />
            </LayoutStyle7>
        </>
    );
};

export default BlogSingleWithSidebar;