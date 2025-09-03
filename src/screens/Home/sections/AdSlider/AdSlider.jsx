import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import LeftArrow from "../../../../assets/icons/LeftArrow.svg";
import RightArrow from "../../../../assets/icons/RightArrow.svg";
const AdSlider = () => {
  const ads = [1, 2, 3, 4, 5, 6];

  return (
    <section className="container relative my-8 lg:my-12">
      {/* Custom Button */}
      <button className="absolute z-10 rounded-full custom-prev top-[40%] lg:top-[45%] left-[-20px] lg:block hidden">
        <img src={LeftArrow} className="w-6" />
      </button>
      <button className="absolute z-10 rounded-full custom-next top-[40%] lg:top-[45%] right-[-20px] lg:block hidden">
        <img src={RightArrow} className="w-6" />
      </button>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
      >
        {ads.map((ad, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col w-full items-center gap-2.5 p-4 md:p-10 bg-white rounded-md border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
              <div className="h-[120px] md:h-[165px] rounded-[3px] flex items-center justify-center gap-2.5 p-2.5 w-full bg-neutral-100 hover:bg-neutral-200 transition-colors">
                <div className="text-xl font-bold text-center text-gray-500 lg:text-2xl whitespace-nowrap">
                  مساحة اعلانيه
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default AdSlider;
