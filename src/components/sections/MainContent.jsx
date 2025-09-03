import React from "react";
import { Sidebar } from "./Sidebar";
import { CenterContent } from "./CenterContent";
import { RightSidebar } from "./RightSidebar";

export const MainContent = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-[260px] py-6">
      {/* Left Sidebar - Hidden on mobile, shown on desktop */}
      <aside className="hidden xl:block w-[376px]">
        <Sidebar />
      </aside>

      {/* Center Content */}
      <main className="flex-1 min-w-0">
        <CenterContent />
      </main>

      {/* Right Sidebar - Shown on tablet and desktop */}
      <aside className="hidden lg:block w-full lg:w-[376px]">
        <RightSidebar />
      </aside>
    </div>
  );
};