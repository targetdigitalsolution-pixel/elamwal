import React from "react";
import { Header } from "../../components/layout/Header";
import { UserProfile } from "../../components/layout/UserProfile";
import { Navbar } from "../../components/layout/Navbar";
import { Footer } from "../../components/sections/Footer";
import { BanksHeroSection } from "./sections/BanksHeroSection";
import { BanksMainContent } from "./sections/BanksMainContent";

export const Banks = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50" dir="rtl">
      <div className="relative w-full bg-gray-50">
        <Header />
        <UserProfile />
        <Navbar />
        
        <div className="container pt-6">
          <BanksHeroSection />
          <BanksMainContent />
        </div>
        
        <Footer />
      </div>
    </div>
  );
};