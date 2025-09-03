import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Carousel } from "../../../../components/ui/carousel";
import { useCarousel } from "../../../../hooks/useCarousel";

export const SidebarSection = () => {
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
    <section className="flex flex-col w-full items-center justify-center gap-6 px-[260px] py-0 relative border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-[#f6f6f6] [background:url(../frame-2147224436.png)_50%_50%_/_cover,linear-gradient(0deg,rgba(30,30,30,1)_0%,rgba(30,30,30,1)_100%)]">
      <header className="h-[37px] justify-end gap-6 self-stretch w-full flex items-center relative">
        <Button
          variant="link"
          className="w-[34px] font-normal text-[#00A651] text-sm text-center underline h-auto  p-0"
        >
          المزيد
        </Button>

        <img
          className="w-[750px] h-px relative object-cover"
          alt="Line"
          src="/line-276-2.svg"
        />

        <h2 className="w-[376px] h-[37px]  font-bold text-[#00A651] text-[32px] whitespace-nowrap">
          قصص شخصيات وشركات
        </h2>
      </header>

      <Carousel
        currentIndex={currentIndex}
        onNext={goToNext}
        onPrevious={goToPrevious}
        onDotClick={goToSlide}
        showArrows={false}
        showDots={true}
        className="relative self-stretch w-full flex-[0_0_auto]"
        dotsClassName="flex items-center justify-center gap-2 relative self-stretch w-full flex-[0_0_auto]"
      >
        {Array.from(
          { length: Math.ceil(stories.length / 5) },
          (_, slideIndex) => (
            <div
              key={slideIndex}
              className="flex items-center justify-center gap-10 relative self-stretch w-full flex-[0_0_auto]"
            >
              {stories
                .slice(slideIndex * 5, (slideIndex + 1) * 5)
                .map((story, index) => (
                  <Card
                    key={index}
                    className="flex flex-col w-[210px] items-start gap-4 relative bg-transparent border-none"
                  >
                    <CardContent className="p-0 w-full">
                      <img
                        className="relative self-stretch w-full h-[357px] rounded object-cover"
                        alt="Story image"
                        src={story.image}
                      />
                      <p className="self-stretch font-medium text-white text-base h-[37px]  mt-4">
                        {story.title}
                      </p>
                    </CardContent>
                  </Card>
                ))}
            </div>
          )
        )}
      </Carousel>

      <img
        className="absolute w-full h-[564px] top-2 left-0"
        alt="Frame"
        src="/frame-2147224328.svg"
      />
    </section>
  );
};
