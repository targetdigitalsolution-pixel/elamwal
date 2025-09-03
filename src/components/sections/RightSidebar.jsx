import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Carousel } from "../ui/carousel";
import { useCarousel } from "../../hooks/useCarousel";

export const RightSidebar = () => {
  const stories = [
    {
      image: "/image-7.png",
      title: "ليه محمود العربي كان مختلف عن باقي رجال الأعمال؟",
    },
    {
      image: "/image-8.png",
      title: "من حديد التسليح للشهرة والإعلام: أبو هشيمة",
    },
    {
      image: "/image-9.png",
      title: "صاحب أكبر شركة عقارات في مصر؟ ياسين منصور بيعمل إيه!",
    },
    {
      image: "/image-10.png",
      title: "من حكومة مبارك للبيزنس العالمي.. قصة محمد منصور",
    },
    {
      image: "/image-11.png",
      title: "إزاي نجيب ساويرس بقى واحد من أغنى أغنياء العرب؟",
    },
  ];

  const { currentIndex, goToNext, goToPrevious, goToSlide } = useCarousel({
    itemsLength: stories.length,
    autoPlayInterval: 5000,
    autoPlay: true,
  });

  return (
    <section className="flex flex-col w-full items-center justify-center gap-6 px-4 md:px-8 py-6 md:py-8 border-t border-b border-[#f6f6f6] bg-[linear-gradient(0deg,rgba(30,30,30,1)_0%,rgba(30,30,30,1)_100%)] rounded-lg">
      <header className="h-[37px] justify-end gap-6 w-full flex items-center">
        <h2 className=" font-bold text-primary text-2xl md:text-[32px] whitespace-nowrap">
          قصص شخصيات وشركات
        </h2>

        <img
          className="flex-1 h-px object-cover"
          alt="Line"
          src="/src/assets/icons/line-276-2.svg"
        />

        <Button
          variant="link"
          className="w-[34px] font-normal text-[#00A651] text-sm text-center underline h-auto  p-0"
        >
          المزيد
        </Button>
      </header>

      <Carousel
        currentIndex={currentIndex}
        onNext={goToNext}
        onPrevious={goToPrevious}
        onDotClick={goToSlide}
        showArrows={false}
        showDots={true}
        className="w-full"
        dotsClassName="flex items-center justify-center gap-2 w-full"
      >
        {Array.from(
          { length: Math.ceil(stories.length / 5) },
          (_, slideIndex) => (
            <div
              key={slideIndex}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-10 w-full"
            >
              {stories
                .slice(slideIndex * 5, (slideIndex + 1) * 5)
                .map((story, index) => (
                  <Card
                    key={index}
                    className="flex flex-col items-start gap-4 bg-transparent border-none"
                  >
                    <CardContent className="p-0 w-full">
                      <img
                        className="w-full h-[250px] md:h-[357px] rounded object-cover"
                        alt="Story image"
                        src={`/src/assets/images${story.image}`}
                      />
                      <p className="font-medium text-white text-sm md:text-base h-[37px]  mt-4">
                        {story.title}
                      </p>
                    </CardContent>
                  </Card>
                ))}
            </div>
          )
        )}
      </Carousel>
    </section>
  );
};
