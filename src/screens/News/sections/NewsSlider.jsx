import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Badge } from "../../../components/ui/badge";
import { Card, CardContent } from "../../../components/ui/card";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import main_slide_1 from "../../../assets/images/main_slide_1.webp";
import OnTrend_1 from "../../../assets/images/OnTrend_1.webp";
import OnTrend_2 from "../../../assets/images/OnTrend_2.webp";
import OnTrend_3 from "../../../assets/images/OnTrend_3.webp";
import OnTrend_4 from "../../../assets/images/OnTrend_4.webp";

export const NewsSlider = () => {
  const sliderArticles = [
    {
      id: 1,
      category: "عاجل",
      title: "الرئيس السيسي يستقبل وفداً رفيع المستوى من الاتحاد الأوروبي",
      backgroundImage: main_slide_1,
    },
    {
      id: 2,
      category: "أخبار محلية",
      title: "افتتاح مشروعات تنموية جديدة في محافظات الصعيد",
      backgroundImage: OnTrend_1,
    },
    {
      id: 3,
      category: "اقتصاد",
      title: "نمو الاقتصاد المصري يحقق أرقاماً قياسية في الربع الأول",
      backgroundImage: OnTrend_2,
    },
    {
      id: 4,
      category: "أخبار عالمية",
      title: "قمة عربية طارئة لمناقشة التطورات الإقليمية",
      backgroundImage: OnTrend_3,
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
            el: ".news-swiper-pagination",
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="w-full news-swiper"
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
                  <Badge className="flex items-center justify-center h-8 gap-2 px-3 py-0 bg-red-600 rounded-md w-fit md:h-10 hover:bg-red-600">
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
        <div className="absolute z-20 news-swiper-pagination bottom-4 lg:start-[70%] lg:w-[30%] w-full text-center">
          <style>{`
            .news-swiper-pagination {
              display: flex !important;
              gap: 8px;
              position: static !important;
            }
            .news-swiper-pagination .swiper-pagination-bullet {
              width: 48px;
              height: 12px;
              background: rgba(255, 255, 255, 0.4);
              opacity: 1;
              margin: 0;
              border-radius: 50%;
              transition: all 0.3s ease;
              cursor: pointer;
            }
            .news-swiper-pagination .swiper-pagination-bullet:hover {
              background: rgba(255, 255, 255, 0.7);
              transform: scale(1.1);
            }
            .news-swiper-pagination .swiper-pagination-bullet-active {
              background: #ffffff;
              transform: scale(1.2);
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};