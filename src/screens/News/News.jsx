import React from "react";
import { Header } from "../../components/layout/Header";
import { UserProfile } from "../../components/layout/UserProfile";
import { Navbar } from "../../components/layout/Navbar";
import { Footer } from "../../components/sections/Footer";
import { NewsTags } from "./sections/NewsTags";
import { NewsSlider } from "./sections/NewsSlider";
import { NewsMainContent } from "./sections/NewsMainContent";
import { MostReadSection } from "../Banks/sections/MostReadSection";
import Sidebar from "../../components/sections/Sidebar";

export const News = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50" dir="rtl">
      <div className="relative w-full bg-gray-50">
        <Header />
        <UserProfile />
        <Navbar />
        
        <div className="container pt-6">
          {/* Tags Section */}
          <NewsTags />
          
          {/* Main Layout: 2/3 and 1/3 */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content - 2/3 */}
            <main className="flex-1 lg:w-2/3">
              <NewsSlider />
              <NewsMainContent />
            </main>
            
            {/* Sidebar - 1/3 */}
            <aside className="w-full lg:w-1/3 space-y-8">
              <MostReadSection />
              <Sidebar />
            </aside>
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
};