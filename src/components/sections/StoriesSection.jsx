import React, { useRef } from "react";
import { Card, CardContent } from "../ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import MainTitle from "../ui/MainTitle";
import store_1 from "../../assets/images/store_1.webp";
import store_2 from "../../assets/images/store_2.webp";
import store_3 from "../../assets/images/store_3.webp";
import store_4 from "../../assets/images/store_4.webp";
import store_5 from "../../assets/images/store_5.webp";
import LeftArrow from "../../assets/icons/LeftArrow.svg";
import RightArrow from "../../assets/icons/RightArrow.svg";

export const StoriesSection = () => {
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const stories = [
    {
      image: store_1,
      title: "إزاي نجيب ساويرس بقى واحد من أغنى أغنياء العرب؟",
    },
    {
      image: store_2,
      title: "من حكومة مبارك للبيزنس العالمي.. قصة محمد منصور",
    },
    {
      image: store_3,
      title: "صاحب أكبر شركة عقارات في مصر؟ ياسين منصور بيعمل إيه!",
    },
    {
      image: store_4,
      title: "من حديد التسليح للشهرة والإعلام: أبو هشيمة ",
    },
    {
      image: store_5,
      title: "ليه محمود العربي كان مختلف عن باقي رجال الأعمال؟",
    },
    {
      image: store_1,
      title: "إزاي نجيب ساويرس بقى واحد من أغنى أغنياء العرب؟",
    },
    {
      image: store_2,
      title: "من حكومة مبارك للبيزنس العالمي.. قصة محمد منصور",
    },
    {
      image: store_3,
      title: "صاحب أكبر شركة عقارات في مصر؟ ياسين منصور بيعمل إيه!",
    },
    {
      image: store_4,
      title: "من حديد التسليح للشهرة والإعلام: أبو هشيمة ",
    },
    {
      image: store_5,
      title: "ليه محمود العربي كان مختلف عن باقي رجال الأعمال؟",
    },
  ];

  return (
    <section
      className="w-full py-12 bg-[#1E1E1E] store  z-30 relative"
      style={{
        backgroundImage: "url('/path-to-your-image.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "25px 25px",
      }}
    >
      <style>
        {`
          .stories-swiper .swiper-pagination {
            display: flex !important;
            gap: 8px;
            position: static !important;
            justify-content: center;
            margin-top: 24px;
          }
          
          .stories-swiper .swiper-pagination .swiper-pagination-bullet {
            width: 48px;
            height: 8px;
            background: rgba(255, 255, 255, 0.4);
            opacity: 1;
            margin: 0;
            border-radius: 25px;
            transition: all 0.3s ease;
            cursor: pointer;
          }
          
          .stories-swiper .swiper-pagination .swiper-pagination-bullet:hover {
            background: rgba(255, 255, 255, 0.7);
            transform: scale(1.1);
          }
          
          .stories-swiper .swiper-pagination .swiper-pagination-bullet-active {
            background: #00a651;
            transform: scale(1.1);
          }
        `}
      </style>

      <div className="container">
        <div className="flex flex-col gap-6">
          <MainTitle title=" قصص شخصيات وشركات" bgDark={true} />
          <div className="relative">
            <Swiper
              ref={swiperRef}
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={2}
              loop={true}
              loopFillGroupWithBlank={false}
              loopedSlides={stories.length}
              speed={600}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              onSwiper={(swiper) => {
                setTimeout(() => {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                  swiper.navigation.destroy();
                  swiper.navigation.init();
                  swiper.navigation.update();
                }, 0);
              }}
              pagination={{
                clickable: true,
                type: "bullets",
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
                1280: { slidesPerView: 5 },
              }}
              className="stories-swiper"
            >
              {stories.map((story, index) => (
                <SwiperSlide key={index}>
                  <Card className="flex flex-col items-start gap-4 bg-transparent border-none shadow-none">
                    <CardContent className="w-full p-0">
                      <img
                        className="w-full h-[250px] md:h-[357px] rounded object-cover hover:scale-105 transition-transform duration-300"
                        alt="Story image"
                        src={story.image}
                      />
                      <p className="mt-4 text-sm font-medium leading-relaxed text-white md:text-base">
                        {story.title}
                      </p>
                    </CardContent>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <button
              ref={prevRef}
              className="absolute left-[-50px] z-10 items-center justify-center hidden w-10 h-10 transition-all duration-300 -translate-y-1/2 rounded-full cursor-pointer top-1/2 hover:scale-110 lg:flex"
              aria-label="Previous slide"
            >
              <img src={LeftArrow} alt="prev" className="w-7 " />
            </button>
            <button
              ref={nextRef}
              className="absolute right-[-50px] z-10 items-center justify-center hidden w-10 h-10 transition-all duration-300 -translate-y-1/2 rounded-full cursor-pointer top-1/2 hover:scale-110 lg:flex"
              aria-label="Next slide"
            >
              <img src={RightArrow} alt="next" className="w-7" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
