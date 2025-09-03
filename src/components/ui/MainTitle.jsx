import React from "react";

const MainTitle = ({ title, classCss = "lg:text-3xl font-bold", bgDark }) => {
  return (
    <header className="h-[37px] lg:justify-start justify-between gap-6 w-full flex items-center text-lg px-4">
      <h2
        className={`  ${classCss} whitespace-nowrap font-bold ${
          bgDark ? "text-primaryText" : "text-primary"
        }`}
      >
        {title}
      </h2>
      <hr
        className={`w-full border-t lg:block  hidden ${
          bgDark ? "border-gray-500" : "border-primary"
        }`}
      />
      <div
        className={`inline-flex items-center justify-center whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 underline-offset-4 hover:underline w-[34px] font-normal text-sm text-center underline p-0 h-auto cursor-pointer hover:text-secondary duration-300 ${
          bgDark ? "text-primaryText" : "text-primary"
        }`}
      >
        المزيد
      </div>
    </header>
  );
};

export default MainTitle;
