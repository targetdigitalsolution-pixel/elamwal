import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import MainTitle from "../ui/MainTitle";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BlogSection = ({ data, title }) => {
  const swiperRef = useRef(null);

  if (!data || data.length === 0) return null;

  return (
    <div className="flex flex-col items-start w-full gap-6">
      <MainTitle title={title} />

      {/* Desktop Grid */}
      <div className="hidden w-full grid-cols-1 gap-4 lg:grid lg:grid-cols-2">
        {data?.map((article) => (
          <Card
            key={article.id}
            className="flex items-center justify-start gap-4 bg-transparent border-none shadow-none cursor-pointer group"
          >
            <img
              className="object-cover w-1/3 h-full rounded"
              alt="Article image"
              src={`${article.image}`}
            />
            <CardContent className="flex flex-col items-start justify-center w-2/3 gap-4 p-0">
              {article?.category && (
                <Badge
                  className={`flex w-fit items-center justify-center gap-2 px-3 py-0 rounded ${article.categoryColor}`}
                >
                  <span className="text-xs font-normal text-center">
                    {article.category}
                  </span>
                </Badge>
              )}
              <h3 className="font-medium text-black duration-300 cursor-pointer lg:text-lg hover:text-primary">
                {article.title}
              </h3>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Mobile & Tablet Swiper Carousel */}
      <div className="w-full lg:hidden">
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={16}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          pagination={{
            el: ".swiper-pagination-custom",
            clickable: true,
            dynamicBullets: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + '"></span>';
            },
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={data.length > 1}
          grabCursor={true}
          touchRatio={1}
          threshold={10}
          className="blog-swiper"
        >
          {data?.map((article) => (
            <SwiperSlide key={article.id}>
              <Card className="flex flex-col items-center justify-start gap-4 mx-2 bg-transparent border-none shadow-none cursor-pointer group">
                <img
                  className="object-cover w-full h-[200px] "
                  alt="Article image"
                  src={`${article.image}`}
                />
                <CardContent className="flex flex-col items-start justify-center w-full gap-3 p-0">
                  {article?.category && (
                    <Badge
                      className={`flex w-fit items-center justify-center gap-2 px-3 py-1 rounded-full ${article.categoryColor}`}
                    >
                      <span className="text-xs font-normal text-center">
                        {article.category}
                      </span>
                    </Badge>
                  )}
                  <h3 className="text-sm font-medium text-black duration-300 cursor-pointer sm:text-base hover:text-primary">
                    {article.title}
                  </h3>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}

          {/* Custom Navigation Buttons */}

          {/* Custom Pagination */}
          <div className="flex justify-center gap-2 mt-4 -translate-x-1 swiper-pagination-custom"></div>
        </Swiper>

        <style jsx>{`
          .blog-swiper {
            position: relative;
          }

          .swiper-pagination-custom {
            position: relative !important;
            bottom: 0 !important;
            left: 0 !important;
            width: 100% !important;
            display: flex !important;
            justify-content: center !important;
            gap: 8px !important;
            margin-top: 20px !important;
          }

          .swiper-pagination-custom .swiper-pagination-bullet {
            width: 12px !important;
            height: 12px !important;
            background: #ccefdb !important;
            border-radius: 50% !important;
            transition: all 0.3s ease !important;
            cursor: pointer !important;
            opacity: 1 !important;
            margin: 0 !important;
          }

          .swiper-pagination-custom .swiper-pagination-bullet-active {
            background: #00a651 !important;
            width: 32px !important;
            border-radius: 6px !important;
            transform: scale(1.1);
          }

          .swiper-pagination-custom .swiper-pagination-bullet:hover {
            background: #9ca3af !important;
            transform: scale(1.1);
          }

          .swiper-pagination-custom .swiper-pagination-bullet-active:hover {
            background: #33bf6f !important;
          }

          /* Dynamic bullets styling */
          .swiper-pagination-custom .swiper-pagination-bullet-main {
            background: var(--color-primary, #3b82f6) !important;
          }

          @media (max-width: 640px) {
            .blog-swiper {
            }

            .swiper-button-prev-custom,
            .swiper-button-next-custom {
              padding: 8px;
            }

            .swiper-button-prev-custom svg,
            .swiper-button-next-custom svg {
              width: 14px;
              height: 14px;
            }

            .swiper-pagination-custom .swiper-pagination-bullet {
              width: 10px !important;
              height: 10px !important;
            }

            .swiper-pagination-custom .swiper-pagination-bullet-active {
              width: 28px !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default BlogSection;
