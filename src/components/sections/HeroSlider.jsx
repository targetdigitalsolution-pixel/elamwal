import React from "react";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import main_slide_1 from "../../assets/images/main_slide_1.webp";
import "./HeroSlider.css";
import MainTitle from "../ui/MainTitle";
export const HeroSlider = () => {
  const breakingNews = [
    {
      id: 1,
      category: "البورصة المصرية",
      title: "زيارة «ماكرون» تحد من خسائر البورصة المصرية بختام اليوم الاثنين",
      backgroundImage: main_slide_1,
    },
    {
      id: 2,
      category: "الاقتصاد",
      title: "ارتفاع معدلات النمو الاقتصادي في مصر خلال الربع الأول من العام",
      backgroundImage: main_slide_1,
    },
    {
      id: 3,
      category: "الاستثمار",
      title: "توقيع اتفاقيات استثمارية جديدة بقيمة 5 مليارات دولار",
      backgroundImage: main_slide_1,
    },
  ];

  return (
    <section className="w-full">
      <div className="">
        <div className="flex flex-col items-start gap-6 ">
          <MainTitle title="الأخبار العاجلة" />

          <div className="relative w-full">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              pagination={{
                clickable: true,
                el: ".hero-swiper-pagination",
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
              }}
              autoplay={{
                delay: 6000,
                disableOnInteraction: false,
              }}
              loop={true}
              className="w-full hero-swiper"
            >
              {breakingNews.map((news) => (
                <SwiperSlide key={news.id}>
                  <Card
                    className="relative flex flex-col h-[250px] lg:h-[400px] items-end justify-between px-6 md:px-[52px] py-6 md:py-9 w-full lg:rounded-md rounded-lg  border-0 overflow-hidden"
                    style={{
                      backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 100%), url(${news.backgroundImage})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <CardContent className="relative z-10 flex flex-col items-start justify-between w-full h-full p-0">
                      <Badge className="flex items-center justify-center h-8 gap-2 px-3 py-0 bg-blue-700 rounded-md w-fit md:h-10 hover:bg-blue-700">
                        <span className="text-sm font-normal text-center text-white md:text-base">
                          {news.category}
                        </span>
                      </Badge>

                      <div className="flex flex-col items-start justify-end w-full">
                        <h3 className="mb-6 text-lg font-bold leading-tight text-white duration-300 cursor-pointer lg:text-xl text-start ">
                          {news.title}
                        </h3>
                      </div>
                    </CardContent>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Enhanced Custom Pagination - Centered at bottom */}
            <div className="absolute z-20 hero-swiper-pagination bottom-4 lg:start-[70%] lg:w-[30%] w-full  text-center ">
              <style>{`
                .hero-swiper-pagination {
                  display: flex !important;
                  gap: 8px;
                  position: static !important;
                }
                span.swiper-pagination-bullet {
                  width: 48px;
                  height: 12px;
                  background: rgba(255, 255, 255, 0.4);
                  opacity: 1;
                  margin: 0;
                  border-radius: 50%;
                  transition: all 0.3s ease;
                  cursor: pointer;
                }
               
                .hero-swiper-pagination .swiper-pagination-bullet:hover {
                  background: rgba(255, 255, 255, 0.7);
                  transform: scale(1.1);
                }
                .hero-swiper-pagination .swiper-pagination-bullet-active {
                  background: #ffffff;
                  transform: scale(1.2);
                }
              `}</style>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
