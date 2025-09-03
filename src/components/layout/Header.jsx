import React from "react";
import { CalendarIcon } from "@heroicons/react/24/outline";
import {
  faFacebook,
  faXTwitter,
  faWhatsapp,
  faTelegram,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import sun from "../../assets/icons/Sun cloud angled rain.svg";
export const Header = () => {
  return (
    <header className="hidden w-full border-b bg-primary border-white/20 lg:block">
      <div className="container flex h-[60px] items-center justify-between py-0">
        {/* Right side - Date and weather (RTL) */}
        <div className="flex items-center h-full gap-2 md:gap-2">
          <CalendarIcon className="w-5 h-5 text-white" />

          <div className="text-xs text-white md:text-base">
            الإثنين 7 أبريل 2025 11:07 صـ 8 شوال 1446 هـ
          </div>
        </div>

        {/* Center side  */}
        <div className="flex items-center h-full gap-4 md:gap-8">
          <div className="items-center justify-center hidden gap-1 md:inline-flex ">
            <img
              className="w-[21px] h-[21px]"
              alt="Sun cloud angled"
              src={sun}
            />
            <div className="text-sm text-white md:text-base whitespace-nowrap">
              القاهرة 19C°
            </div>
          </div>
          {/* Left side Social Media */}
          <div className="flex h-full">
            <div className="flex items-center justify-center me-2 group">
              <a
                href="https://www.linkedin.com/in/اسم_الحساب"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTelegram}
                  className="w-5 h-5 p-1 text-lg text-white duration-300 group-hover:text-gray-700 "
                />
              </a>
            </div>
            <div className="flex items-center justify-center me-2 group">
              <a
                href="https://wa.me/201234567890"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="w-5 h-5 p-1 text-lg text-white duration-300 group-hover:text-gray-700 "
                />
              </a>
            </div>
            <div className="flex items-center justify-center me-2 group">
              <a
                href="https://www.tiktok.com/@اسم_الحساب"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="w-5 h-5 p-1 text-lg text-white duration-300 group-hover:text-gray-700 "
                />
              </a>
            </div>

            <div className="flex items-center justify-center me-2 group">
              <a
                href="https://twitter.com/اسم_الحساب"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faXTwitter}
                  // icon={faTwitter}
                  className="w-5 h-5 p-1 text-lg text-white duration-300 group-hover:text-gray-700 "
                />
              </a>
            </div>
            <div className="flex items-center justify-center me-2 group">
              <a href="">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="w-5 h-5 p-1 text-lg text-white duration-300 group-hover:text-gray-700 "
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
