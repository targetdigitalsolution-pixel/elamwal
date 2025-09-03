import React from "react";
import logo from "../../assets/images/logo.webp";
import arrowFooter from "../../assets/icons/arrowFooter.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faWhatsapp,
  faTelegramPlane,
} from "@fortawesome/free-brands-svg-icons";

const footerLinks = [
  {
    title: "الأموال",
    isTransparent: false,
    links: [
      { text: "عن الأموال", icon: "/vector-4.svg" },
      { text: "كتاب الاموال", icon: "/vector-1.svg" },
      { text: "الشروط و الأحكام", icon: "/vector-1.svg" },
      { text: "سياسة الخصوصية", icon: "/vector-1.svg" },
      { text: "وظائف شاغرة", icon: "/vector-1.svg" },
      { text: "أعلن معنا", icon: "/vector-1.svg" },
      { text: "اتصل بنا", icon: "/vector-1.svg" },
    ],
  },
  {
    title: "روابط هامة",
    isTransparent: false,
    links: [
      { text: "بنوك و تأمين", icon: "/vector-4.svg" },
      { text: "استثمار و بورصة", icon: "/vector-1.svg" },
      { text: "سياحة ونقل", icon: "/vector-1.svg" },
      { text: "عقارات", icon: "/vector-1.svg" },
      { text: "عالم الرياضة", icon: "/vector-1.svg" },
      { text: "بترول و طاقة", icon: "/vector-1.svg" },
      { text: "فنون", icon: "/vector-1.svg" },
    ],
  },
  {
    title: "روابط هامة",
    isTransparent: true,
    links: [
      { text: "مركز الأموال والدراسات", icon: "/vector-4.svg" },
      { text: "تكنولوجيا و اتصالات", icon: "/vector-1.svg" },
      { text: "حوادث وقضايا", icon: "/vector-1.svg" },
      { text: "عربي و دولي", icon: "/vector-1.svg" },
      { text: "رجال واعمال", icon: "/vector-1.svg" },
      { text: "العدد الورقي", icon: "/vector-1.svg" },
      { text: "نبض المحافظات", icon: "/vector-1.svg" },
    ],
  },
  {
    title: "روابط هامة",
    isTransparent: true,
    links: [
      { text: "فيديو", icon: "/vector-4.svg" },
      { text: "بورصة و أسواق", icon: "/vector-1.svg" },
      { text: "شركات و شخصيات", icon: "/vector-1.svg" },
      { text: "خدمات المواطن", icon: "/vector-1.svg" },
      { text: "أسعار الذهب", icon: "/vector-1.svg" },
      { text: "أسعار العملات", icon: "/vector-1.svg" },
      { text: "أسعار السلع", icon: "/vector-1.svg" },
    ],
  },
];
const footerLinksMob = [
  {
    title: "الأموال",
    isTransparent: false,
    links: [
      { text: "عن الأموال", icon: "/vector-4.svg" },
      { text: "كتاب الاموال", icon: "/vector-1.svg" },
      { text: "الشروط و الأحكام", icon: "/vector-1.svg" },
      { text: "سياسة الخصوصية", icon: "/vector-1.svg" },
      { text: "وظائف شاغرة", icon: "/vector-1.svg" },
      { text: "أعلن معنا", icon: "/vector-1.svg" },
      { text: "اتصل بنا", icon: "/vector-1.svg" },
    ],
  },
  {
    title: "روابط هامة",
    isTransparent: false,
    links: [
      { text: "بنوك و تأمين", icon: "/vector-4.svg" },
      { text: "استثمار و بورصة", icon: "/vector-1.svg" },
      { text: "سياحة ونقل", icon: "/vector-1.svg" },
      { text: "عقارات", icon: "/vector-1.svg" },
      { text: "عالم الرياضة", icon: "/vector-1.svg" },
      { text: "بترول و طاقة", icon: "/vector-1.svg" },
      { text: "فنون", icon: "/vector-1.svg" },
      { text: "مركز الأموال والدراسات", icon: "/vector-4.svg" },
      { text: "تكنولوجيا و اتصالات", icon: "/vector-1.svg" },
      { text: "حوادث وقضايا", icon: "/vector-1.svg" },
      { text: "عربي و دولي", icon: "/vector-1.svg" },
      { text: "رجال واعمال", icon: "/vector-1.svg" },
      { text: "العدد الورقي", icon: "/vector-1.svg" },
      { text: "نبض المحافظات", icon: "/vector-1.svg" },
      { text: "فيديو", icon: "/vector-4.svg" },
      { text: "بورصة و أسواق", icon: "/vector-1.svg" },
      { text: "شركات و شخصيات", icon: "/vector-1.svg" },
      { text: "خدمات المواطن", icon: "/vector-1.svg" },
      { text: "أسعار الذهب", icon: "/vector-1.svg" },
      { text: "أسعار العملات", icon: "/vector-1.svg" },
      { text: "أسعار السلع", icon: "/vector-1.svg" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="relative w-full bg-white border border-solid border-[#f6f6f6] z-30">
      {/* Columns */}
      <div className="container relative z-10 flex-col flex-wrap items-start hidden gap-8 px-4 py-8 mx-auto lg:flex md:flex-row md:justify-between">
        {footerLinks.map((column, columnIndex) => (
          <div
            key={columnIndex}
            className="flex flex-col items-start w-full gap-4 md:items-end sm:w-auto"
          >
            <h3
              className={`h-6 font-bold text-xl md:text-3xl mb-4  w-full whitespace-nowrap ${
                column.isTransparent ? "text-transparent" : "text-primary"
              }`}
            >
              {column.title}
            </h3>
            <nav className="flex flex-col items-end gap-4 ">
              {column.links.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  href="#"
                  className="flex items-center justify-end w-full gap-2"
                >
                  <img src={arrowFooter} className="w-2" />
                  <span className="w-full text-sm font-normal text-right text-black duration-300 md:text-xl whitespace-nowrap hover:text-primary">
                    {link.text}
                  </span>
                </a>
              ))}
            </nav>
          </div>
        ))}
      </div>
      {/* Columns Mobile*/}
      <div className="container relative z-10 flex flex-col flex-wrap items-start gap-8 px-4 py-8 mx-auto lg:hidden md:flex-row md:justify-between">
        {footerLinksMob.map((column, columnIndex) => (
          <div
            key={columnIndex}
            className="flex flex-col items-start w-full gap-4 md:items-end sm:w-auto"
          >
            <h3
              className={`h-6 font-bold text-xl md:text-3xl mb-4  w-full whitespace-nowrap ${
                column.isTransparent ? "text-transparent" : "text-primary"
              }`}
            >
              {column.title}
            </h3>
            <nav className="flex flex-col items-end gap-4 ">
              {column.links.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  href="#"
                  className="flex items-center justify-end w-full gap-2"
                >
                  <img src={arrowFooter} className="w-2" />
                  <span className="w-full text-sm font-normal text-right text-black duration-300 md:text-xl whitespace-nowrap hover:text-primary">
                    {link.text}
                  </span>
                </a>
              ))}
            </nav>
          </div>
        ))}
      </div>

      {/* Logo */}
      <div className="absolute bottom-1/2 left-4 w-[350px] h-auto opacity-25 lg:block hidden">
        <img className="object-contain w-full h-auto" alt="Logo" src={logo} />
      </div>

      {/* Bottom Footer */}
      <section className="bg-[#1E1E1E] ">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 px-4 h-auto md:h-[100px] relative z-20 container">
          {/* Social Icons */}
          <div className="flex gap-4 ">
            <a
              href="#"
              className="p-2 text-2xl text-white duration-300 bg-neutral-800 hover:text-primary"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="#"
              className="p-2 text-2xl text-white duration-300 bg-neutral-800 hover:text-primary"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="#"
              className="p-2 text-2xl text-white duration-300 bg-neutral-800 hover:text-primary"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="#"
              className="p-2 text-2xl text-white duration-300 bg-neutral-800 hover:text-primary"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a
              href="#"
              className="p-2 text-2xl text-white duration-300 bg-neutral-800 hover:text-primary"
            >
              <FontAwesomeIcon icon={faTelegramPlane} />
            </a>
          </div>
          {/* Copyright */}
          <p className="w-full text-sm font-normal text-center text-white md:text-xl md:text-left md:w-auto">
            ©2025 الأموال. جميع الحقوق محفوظة{" "}
            <a
              href="https://target-group.org/"
              rel="noopener noreferrer"
              target="_blank"
              className="underline duration-300 hover:text-primary"
            >
              لشركة تارجت للحلول الرقمية
            </a>
          </p>
        </div>
      </section>
    </footer>
  );
};
