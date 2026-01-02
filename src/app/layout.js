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
import Script from 'next/script';
import FbPixelClient from '@/components/FbPixelClient';

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
        {/* Meta Pixel - initialize after interactive */}
        <Script id="fb-pixel-init" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1396576578921257');
fbq('track', 'PageView');`}
        </Script>

        {/* Fallback for no-JS */}
        <noscript>
          <img height="1" width="1" style={{display:'none'}}
            src="https://www.facebook.com/tr?id=1396576578921257&ev=PageView&noscript=1" />
        </noscript>

        <ToastContainer />
        <Dependency />
        {children}

        {/* Client component to record PageView on client-side route changes */}
        <FbPixelClient />
      </body>
    </html>
  );
}
