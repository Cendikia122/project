import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'swiper/css/bundle';
import 'react-modal-video/css/modal-video.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-photo-view/dist/react-photo-view.css';
import 'react-circular-progressbar/dist/styles.css';
import 'rc-slider/assets/index.css';

import '@/assets/css/animate.css';
import '@/assets/css/font-awesome.min.css';
import '@/assets/css/flaticon-set.css';

import '@/assets/css/nice-select.css';
import '@/assets/css/validnavs.css';
import '@/assets/css/helper.css';
import '@/assets/css/unit-test.css';
import '@/assets/css/style.css';

import Dependency from '@/components/utilities/Dependency';
import { ToastContainer } from 'react-toastify';
import { Manrope, Outfit } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });
const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Fasel Consulting | – Training - Leadership| Experiential Learning Indonesia",
  description:
    "Fasel, Inc adalah perusahaan teknologi yang menyediakan solusi digital inovatif untuk bisnis Anda.",
  keywords: ["Experiental Learning", "Training", "Leadership", "Bisnis"],
  openGraph: {
    title: "Bantu upgrade perusahaan anda dengan Fasel Consultant",
    description:
      "Fasel Consultant adalah perusahaan teknologi yang menyediakan solusi digital inovatif untuk bisnis Anda.",
    url: "https://www.faselconsulting.com",
    siteName: "Fasel Consultant",
    images: [
      {
        url: "https://faselconsulting.com/_next/image?url=%2Fassets%2Fimg%2Fprojects%2Ffaselevent1.jpg&w=3840&q=75",
        width: 1200,
        height: 630,
        alt: "Fasel Consulting - Experiental Learning Indonesia",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fasel Consulting",
    description:
      "Fasel Consulting adalah perusahaan teknologi yang menyediakan solusi digital inovatif untuk bisnis Anda.",
    images: ["https://www.fasel.com/images/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} ${manrope.className}`}>
        <ToastContainer />
        <Dependency />
        {children}
      </body>
    </html>
  );
}
