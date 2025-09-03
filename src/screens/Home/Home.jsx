import React, { useEffect, useState } from "react";
import { Header } from "../../components/layout/Header";
import { UserProfile } from "../../components/layout/UserProfile";
import { Navbar } from "../../components/layout/Navbar";
import { HeroSlider } from "../../components/sections/HeroSlider";
import { StoriesSection } from "../../components/sections/StoriesSection";
import { OpinionWritersSection } from "../../components/sections/OpinionWritersSection";
import { Footer } from "../../components/sections/Footer";
import Sidebar from "../../components/sections/Sidebar";
import AdSlider from "./sections/AdSlider/AdSlider";
import advertisement_2 from "../../assets/images/advertisement_2.webp";
import advertisement_3 from "../../assets/images/advertisement_3.webp";
import { CenterQuestionsSection } from "./sections/CenterQuestionsSection/CenterQuestionsSection";
import { LatestNewsSection } from "./sections/LatestNewsSection/LatestNewsSection";
import CitizenServicesSection from "./sections/CitizenServicesSection/CitizenServicesSection";
import AppDownloadSection from "./sections/AppDownloadSection/AppDownloadSection";
import AdvertisingSpace from "./sections/LatestNewsSection/Advertisingspace";
import { NewsSection } from "./sections/NewsSection/NewsSection";
export const Home = () => {
  const [scrolled, setScrolled] = useState(false);

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
  return (
    <div className="w-full min-h-screen bg-gray-50" dir="rtl">
      <div className="relative w-full bg-gray-50">
        <Header />
        <UserProfile />
        <Navbar />
        {/* Side Advertisement Images */}
        <div
          className={`max-w-[1640px] relative mx-auto ${
            scrolled ? "top-28" : "top-8"
          } `}
        >
          <img
            className="hidden 3xl:block fixed w-32 h-[500px]  left-[30px] rounded-md object-cover  transition-transform duration-300 z-10"
            alt="Image"
            src={advertisement_2}
          />
          <img
            className="hidden 3xl:block fixed w-32 h-[500px]  right-[30px] rounded-md object-cover  transition-transform duration-300 z-10"
            alt="Image"
            src={advertisement_3}
          />
        </div>
        {/* Hero Slider - Full width */}
        <section className="container flex flex-col gap-6 pt-6 lg:flex-row">
          <main className="w-full lg:w-2/3">
            <HeroSlider />
            <div className="bg-white">
              <div className="py-6 lg:px-4">
                <NewsSection />
              </div>
            </div>
          </main>
          <aside className="w-full lg:w-1/3">
            <Sidebar />
          </aside>
        </section>
        
        {/* Advertisement Banner */}
        <AdSlider />
        <LatestNewsSection />
        {/* Stories Section with black background */}
        <StoriesSection />
        <CenterQuestionsSection />

        {/* Opinion Writers Section with black background */}
        <OpinionWritersSection />

        <AdvertisingSpace />
        <AppDownloadSection />
        <CitizenServicesSection />
        <Footer />
      </div>
    </div>
  );
};
