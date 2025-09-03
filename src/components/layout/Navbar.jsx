import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import { Dropdown } from "../ui/dropdown";
import { Search } from "../ui/search";
import {
  ChevronDownIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";
import EG from "../../assets/images/Egypt.webp";
import USA from "../../assets/images/USA.png";
import logo from "../../assets/images/logo.webp";
import { Bars3BottomRightIcon } from "@heroicons/react/24/outline";
import sun from "../../assets/icons/Sun cloud angled rain.svg";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 0);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    {
      label: "أخبار",
      active: true,
      href: "/news",
      dropdownItems: [
        { label: "عاجل", value: "local-news", href: "#" },
        { label: "الرياضة", value: "world-news", href: "#" },
        {
          label: "بترول و طاقة",
          value: "economic-news",
          href: "#",
        },
        {
          label: "on trend",
          value: "economic-news",
          href: "#",
        },
      ],
    },
    {
      label: "بنوك",
      active: false,
      href: "/banks",
      dropdownItems: [
        {
          label: "بنوك وتأمين",
          value: "central-bank",
          href: "#",
        },
        {
          label: "استثمار و بورصة",
          value: "commercial-banks",
          href: "#",
        },
        {
          label: "اخترنا لكم",
          value: "interest-rates",
          href: "#",
        },
        {
          label: "تقارير خاصة",
          value: "interest-rates",
          href: "#",
        },
      ],
    },
    {
      label: "دراسات",
      active: false,
      dropdownItems: [
        {
          label: "العدد الورقي",
          value: "economic-studies",
          href: "#",
        },
      ],
    },
    {
      label: "منوعات",
      active: false,
      dropdownItems: [
        {
          label: "فنون",
          value: "economic-studies",
          href: "#",
        },
        {
          label: "سياحة ونقل",
          value: "economic-studies",
          href: "#",
        },
        {
          label: "عقارات",
          value: "economic-studies",
          href: "#",
        },
      ],
    },
    {
      label: "فيديو",
      active: false,
      dropdownItems: [
        {
          label: "ريلز",
          value: "economic-studies",
          href: "#",
        },
        {
          label: "الاكثر مشاهدة",
          value: "economic-studies",
          href: "#",
        },
        {
          label: "اخترنا لكم",
          value: "economic-studies",
          href: "#",
        },
      ],
    },
    {
      label: "بورصة وأسواق",
      active: false,
      dropdownItems: [
        {
          label: "اسواق و ريادة اعمال",
          value: "economic-studies",
          href: "#",
        },
        {
          label: "الذهب",
          value: "economic-studies",
          href: "#",
        },
        {
          label: "اسعار  العملات",
          value: "economic-studies",
          href: "#",
        },
        {
          label: "اسعار السلع",
          value: "economic-studies",
          href: "#",
        },
      ],
    },
    {
      label: "شركات ",
      active: false,
      dropdownItems: [
        {
          label: "رجال واعمال",
          value: "economic-studies",
          href: "#",
        },
      ],
    },
    {
      label: "المزيد",
      active: false,
      dropdownItems: [
        { label: "حديث الصور", value: "about", href: "#" },
        { label: "تكنولوجيا و اتصالات", value: "contact", href: "#" },
        { label: "حوادث وقضايا", value: "terms", href: "#" },
        { label: "عربي و دولي", value: "privacy", href: "#" },
        { label: "نبض المحاقظات", value: "privacy", href: "#" },
        { label: "عين على اسرائيل", value: "privacy", href: "#" },
        { label: "كتاب الاموال", value: "privacy", href: "#" },
        { label: "خدمات المواطن", value: "privacy", href: "#" },
        { label: "من نحن", value: "privacy", href: "#" },
        { label: "توظيف", value: "privacy", href: "#" },
        { label: "اعلن معنا", value: "privacy", href: "#" },
        { label: "تواصل معنا", value: "privacy", href: "#" },
      ],
    },
  ];

  const searchResults = [
    { id: "1", title: "أسعار الذهب اليوم", category: "أسواق" },
    { id: "2", title: "البورصة المصرية", category: "استثمار" },
    { id: "3", title: "أسعار العملات", category: "بنوك" },
    { id: "4", title: "النفط والطاقة", category: "طاقة" },
  ].filter(
    (result) =>
      searchQuery &&
      result.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {!scrolled && (
        <nav className="w-full bg-white lg:bg-gray-100">
          <div className="container flex items-center justify-between gap-3 py-0 h-14 lg:h-16 xl:gap-5">
            {/* Mobile menu button */}
            <div className="flex items-center gap-6 lg:hidden">
              <button className="lg:hidden ">
                <div className="flex flex-col items-center justify-center w-6 h-6">
                  <Bars3BottomRightIcon className="text-black h-7 w-7" />
                </div>
              </button>
              <a href="/">
                <img className="w-20 lg:hidden" alt="Frame" src={logo} />
              </a>
            </div>
            <div className="flex items-center justify-center gap-1 lg:hidden ">
              <img
                className="w-[21px] h-[21px]"
                alt="Sun cloud angled"
                src={sun}
              />
              <div className="text-sm text-primary md:text-base whitespace-nowrap">
                القاهرة 19C°
              </div>
            </div>
            {/* Right side  */}
            <div className="items-center hidden gap-3 lg:inline-flex xl:gap-5 ">
              {navigationItems.map((item, index) =>
                item.href ? (
                  <Link
                    key={index}
                    to={item.href}
                    className={`inline-flex h-14 xl:h-16 items-center justify-center gap-2 px-0 py-2 cursor-pointer hover:bg-gray-100 transition-colors ${
                      location.pathname === item.href ? "border-b-[5px] border-primary" : ""
                    }`}
                  >
                    <div className="text-sm font-medium text-gray-600 md:text-base">
                      {item.label}
                    </div>
                  </Link>
                ) : item.dropdownItems ? (
                  <Dropdown
                    key={index}
                    trigger={
                      <div
                        className={`inline-flex h-14 xl:h-16 items-center justify-center gap-2 px-0 py-2   ${
                          item.active ? "border-b-[5px] border-primary" : ""
                        }`}
                      >
                        <div className="text-sm font-medium text-gray-600 md:text-base">
                          {item.label}
                        </div>
                        <ChevronDownIcon className="w-3 text-gray-500" />
                      </div>
                    }
                    items={item.dropdownItems}
                    className="h-14 xl:h-16"
                  />
                ) : (
                  <div
                    key={index}
                    className={`inline-flex h-14 xl:h-16 items-center justify-center gap-2 px-0 py-2   cursor-pointer hover:bg-gray-100 transition-colors ${
                      item.active ? "border-b-[5px] border-primary" : ""
                    }`}
                  >
                    <div className="text-lg font-semibold text-gray-600 md:text-lg">
                      {item.label}
                    </div>
                    <ChevronDownIcon className="w-3 text-gray-500" />
                  </div>
                )
              )}
            </div>

            {/* Left side  */}
            <div className="items-center hidden gap-3 jus xl:gap-5 lg:flex">
              <Button className="hidden sm:flex items-center justify-center gap-3 xl:gap-5 bg-[#F14D4A] rounded-[10px] px-3 py-2 md:px-4 md:py-3 hover:bg-[#752524] transition-colors">
                <div className="text-sm font-normal text-center text-white md:text-base">
                  <span className="font-medium">المجلة&nbsp;&nbsp;</span>
                  <span className="text-xs font-medium md:text-sm">pdf</span>
                </div>
                <ArrowDownTrayIcon className="w-4 text-white" />
              </Button>
              <Search
                placeholder="البحث في الموقع..."
                onSearch={setSearchQuery}
                results={searchResults}
                className=""
              />
              <Dropdown
                trigger={
                  <div className="flex items-center justify-center gap-1 md:gap-2 px-0 py-2.5">
                    <img className="w-6 h-auto" alt="Vector" src={EG} />
                    <div className="text-sm font-medium text-gray-600 md:text-base">
                      عربي
                    </div>
                    <ChevronDownIcon className="w-3 text-gray-500" />
                  </div>
                }
                items={[
                  { label: "العربية", value: "ar", flag: EG },
                  { label: "English", value: "en", flag: USA },
                ]}
              />
            </div>
          </div>
        </nav>
      )}
      {/* version Fixed */}
      {scrolled && (
        <nav className="fixed top-[100px] left-0 z-40 hidden w-full transition-all duration-500 bg-gray-50 shadow-md lg:block animate-slideDown">
          <div className="container flex items-center justify-between gap-3 py-0 h-14 xl:h-16 xl:gap-5">
            {/* Mobile menu button */}
            <div className="flex items-center gap-6 lg:hidden">
              <button className="lg:hidden ">
                <div className="flex flex-col items-center justify-center w-6 h-6">
                  <Bars3BottomRightIcon className="text-black h-7 w-7" />
                </div>
              </button>
              <a href="/">
              </a>
              <img className="w-20 lg:hidden" alt="Frame" src={logo} />
            </div>
            <div className="flex items-center justify-center gap-1 lg:hidden ">
              <img
                className="w-[21px] h-[21px]"
                alt="Sun cloud angled"
                src={sun}
              />
              <div className="text-sm text-primary md:text-base whitespace-nowrap">
                القاهرة 19C°
              </div>
            </div>
            {/* Right side  */}
            <div className="items-center hidden gap-3 lg:inline-flex xl:gap-5 ">
              {navigationItems.map((item, index) =>
                item.href ? (
                  <Link
                    key={index}
                    to={item.href}
                    className={`inline-flex h-14 xl:h-16 items-center justify-center gap-2 px-0 py-2 cursor-pointer hover:bg-gray-100 transition-colors ${
                      location.pathname === item.href ? "border-b-[5px] border-primary" : ""
                    }`}
                  >
                    <div className="text-sm font-medium text-gray-600 md:text-base">
                      {item.label}
                    </div>
                  </Link>
                ) : item.dropdownItems ? (
                  <Dropdown
                    key={index}
                    trigger={
                      <div
                        className={`inline-flex h-14 xl:h-16 items-center justify-center gap-2 px-0 py-2   ${
                          item.active ? "border-b-[5px] border-primary" : ""
                        }`}
                      >
                        <div className="text-sm font-medium text-gray-600 md:text-base">
                          {item.label}
                        </div>
                        <ChevronDownIcon className="w-3 text-gray-500" />
                      </div>
                    }
                    items={item.dropdownItems}
                    className="h-14 xl:h-16"
                  />
                ) : (
                  <div
                    key={index}
                    className={`inline-flex h-14 xl:h-16 items-center justify-center gap-2 px-0 py-2   cursor-pointer hover:bg-gray-100 transition-colors ${
                      item.active ? "border-b-[5px] border-primary" : ""
                    }`}
                  >
                    <div className="text-lg font-semibold text-gray-600 md:text-lg">
                      {item.label}
                    </div>
                    <ChevronDownIcon className="w-3 text-gray-500" />
                  </div>
                )
              )}
            </div>

            {/* Left side  */}
            <div className="items-center hidden gap-3 jus xl:gap-5 lg:flex">
              <Button className="hidden sm:flex items-center justify-center gap-3 xl:gap-5 bg-[#F14D4A] rounded-[10px] px-3 py-2 md:px-4 md:py-3 hover:bg-[#752524] transition-colors">
                <div className="text-sm font-normal text-center text-white md:text-base">
                  <span className="font-medium">المجلة&nbsp;&nbsp;</span>
                  <span className="text-xs font-medium md:text-sm">pdf</span>
                </div>
                <ArrowDownTrayIcon className="w-4 text-white" />
              </Button>
              <Search
                placeholder="البحث في الموقع..."
                onSearch={setSearchQuery}
                results={searchResults}
                className=""
              />
              <Dropdown
                trigger={
                  <div className="flex items-center justify-center gap-1 md:gap-2 px-0 py-2.5">
                    <img className="w-6 h-auto" alt="Vector" src={EG} />
                    <div className="text-sm font-medium text-gray-600 md:text-base">
                      عربي
                    </div>
                    <ChevronDownIcon className="w-3 text-gray-500" />
                  </div>
                }
                items={[
                  { label: "العربية", value: "ar", flag: EG },
                  { label: "English", value: "en", flag: USA },
                ]}
              />
            </div>
          </div>
        </nav>
      )}
    </>
  );
};