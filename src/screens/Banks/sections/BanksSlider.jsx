import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Badge } from "../../../components/ui/badge";
import { Card, CardContent } from "../../../components/ui/card";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Banks_insurance_1 from "../../../assets/images/Banks_insurance_1.webp";
import Banks_insurance_2 from "../../../assets/images/Banks_insurance_2.webp";
import Banks_insurance_3 from "../../../assets/images/Banks_insurance_3.webp";
import Banks_insurance_4 from "../../../assets/images/Banks_insurance_4.webp";

export const BanksSlider = () => {
  const sliderArticles = [
    {
      id: 1,
      category: "بنوك و تأمين",
      title: "البنك المركزي المصري يعلن عن قرارات جديدة بشأن أسعار الفائدة",
      backgroundImage: Banks_insurance_1,
    },
    {
      id: 2,
      category: "استثمار و بورصة",
      title: "نمو قوي في المدفوعات عبر التسوية اللحظية بالربع الأول",
      backgroundImage: Banks_insurance_2,
    },
    {
      id: 3,
      category: "بنوك و تأمين",
      title: "تعديلات مرتقبة على شهادات بنك مصر الأسبوع القادم",
      backgroundImage: Banks_insurance_3,
    },
    {
      id: 4,
      category: "استثمار و بورصة",
      title: "ارتفاع مؤشرات البورصة المصرية بنسبة 2.5%",
      backgroundImage: Banks_insurance_4,
    },
  ];

  return (
    <section className="w-full mb-8">
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{
            clickable: true,
            el: ".banks-swiper-pagination",
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="w-full banks-swiper"
        >
          {sliderArticles.map((article) => (
            <SwiperSlide key={article.id}>
              <Card
                className="relative flex flex-col h-[300px] lg:h-[400px] items-end justify-between px-6 md:px-[52px] py-6 md:py-9 w-full lg:rounded-md rounded-lg border-0 overflow-hidden"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 100%), url(${article.backgroundImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <CardContent className="relative z-10 flex flex-col items-start justify-between w-full h-full p-0">
                  <Badge className="flex items-center justify-center h-8 gap-2 px-3 py-0 bg-blue-700 rounded-md w-fit md:h-10 hover:bg-blue-700">
                    <span className="text-sm font-normal text-center text-white md:text-base">
                      {article.category}
                    </span>
                  </Badge>

                  <div className="flex flex-col items-start justify-end w-full">
                    <h3 className="mb-6 text-lg font-bold leading-tight text-white duration-300 cursor-pointer lg:text-xl text-start">
                      {article.title}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination */}
        <div className="absolute z-20 banks-swiper-pagination bottom-4 lg:start-[70%] lg:w-[30%] w-full text-center">
          <style>{`
            .banks-swiper-pagination {
              display: flex !important;
              gap: 8px;
              position: static !important;
            }
            .banks-swiper-pagination .swiper-pagination-bullet {
              width: 48px;
              height: 12px;
              background: rgba(255, 255, 255, 0.4);
              opacity: 1;
              margin: 0;
              border-radius: 50%;
              transition: all 0.3s ease;
              cursor: pointer;
            }
            .banks-swiper-pagination .swiper-pagination-bullet:hover {
              background: rgba(255, 255, 255, 0.7);
              transform: scale(1.1);
            }
            .banks-swiper-pagination .swiper-pagination-bullet-active {
              background: #ffffff;
              transform: scale(1.2);
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};