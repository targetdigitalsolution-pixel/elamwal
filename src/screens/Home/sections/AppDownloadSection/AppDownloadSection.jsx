import React from "react";
import { Button } from "../../../../components/ui/button";
import AAmwal from "../../../../assets/images/Ammwaall three.webp";
import apple from "../../../../assets/icons/apple.svg";
import andirod from "../../../../assets/icons/andirod.svg";
const AppDownloadSection = () => {
  return (
    <section className="relative w-full bg-white ">
      <div className="container flex flex-col items-center gap-8 px-4 py-12 md:flex-row-reverse md:px-0">
        <img
          className="w-full md:w-[582px] h-auto object-contain drop-shadow-2xl img-shadow"
          alt="Group"
          src={AAmwal}
        />
        <style>{`.img-shadow{
          filter: drop-shadow(2px 4px 6px black) !important
        }`}</style>
        <div className="flex flex-col items-start w-full gap-8">
          <div className="flex flex-col items-start w-full gap-4">
            <h2 className="text-3xl font-bold text-black md:text-5xl ">
              احصل على التطبيق الآن
            </h2>
            <p className="w-full text-lg font-medium text-black md:text-2xl">
              حمل التطبيق الآن وتمتع بإمكانية الوصول السريع لكل ما تحتاجه في أي
              وقت، ومن أي مكان.
            </p>
          </div>

          <div className="flex flex-col items-start w-full gap-4">
            <p className="w-full text-base font-normal text-gray-600 ">
              حمل التطبيق من
            </p>

            <div className="flex flex-col items-center w-full gap-4 sm:flex-row sm:gap-8">
              <Button className="w-full  h-[78px] bg-[#1c1b1e] rounded-lg p-0">
                <div className="flex items-center gap-3 px-4 py-3">
                  <div className="flex flex-col">
                    <span className="text-xs text-white">Download on the</span>
                    <span className="text-lg text-white sm:text-xl">
                      Apple Store
                    </span>
                  </div>
                  <img className="w-10 h-10" alt="Apple Store" src={apple} />
                </div>
              </Button>
              <Button className="w-full  h-[78px] bg-[#1c1b1e] rounded-lg p-0">
                <div className="flex items-center gap-3 px-4 py-3">
                  <div className="flex flex-col">
                    <span className="text-xs text-white">Get it on</span>
                    <span className="text-lg text-white sm:text-xl">
                      Google Play
                    </span>
                  </div>
                  <img className="w-10 h-10" alt="Google Play" src={andirod} />
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;
