import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";
import { Carousel } from "../../../../components/ui/carousel";
import { useCarousel } from "../../../../hooks/useCarousel";

export const NavigationSection = () => {
  const breakingNews = [
    {
      id: 1,
      category: "البورصة المصرية",
      title: "زيارة «ماكرون» تحد من خسائر البورصة المصرية بختام اليوم الاثنين",
      backgroundImage: "url(../frame-2147224295.png)",
    },
    {
      id: 2,
      category: "الاقتصاد",
      title: "ارتفاع معدلات النمو الاقتصادي في مصر خلال الربع الأول من العام",
      backgroundImage: "url(../frame-2147224295.png)",
    },
    {
      id: 3,
      category: "الاستثمار",
      title: "توقيع اتفاقيات استثمارية جديدة بقيمة 5 مليارات دولار",
      backgroundImage: "url(../frame-2147224295.png)",
    },
    {
      id: 4,
      category: "التكنولوجيا",
      title: "إطلاق منصة رقمية جديدة لتسهيل الخدمات الحكومية",
      backgroundImage: "url(../frame-2147224295.png)",
    },
    {
      id: 5,
      category: "الطاقة",
      title: "مشروعات جديدة للطاقة المتجددة بقدرة 2000 ميجاوات",
      backgroundImage: "url(../frame-2147224295.png)",
    },
  ];

  const { currentIndex, goToNext, goToPrevious, goToSlide } = useCarousel({
    itemsLength: breakingNews.length,
    autoPlayInterval: 6000,
    autoPlay: true,
  });

  return (
    <section className="flex flex-col w-full max-w-[792px] items-start gap-6 relative">
      <header className="h-[37px] justify-end gap-6 self-stretch w-full flex items-center relative">
        <div className="w-[34px] h-[37px] mt-[-1.00px] [font-family:'Tajawal',Helvetica] font-normal text-[#00a651] text-sm text-center underline [direction:rtl] relative tracking-[0] leading-[normal]">
          المزيد
        </div>

        <img
          className="w-[513px] h-px relative object-cover"
          alt="Line"
          src="/line-276-16.svg"
        />

        <h2 className="w-[197px] h-[37px] mt-[-1.00px] [font-family:'Tajawal',Helvetica] font-bold text-[#00a651] text-[32px] whitespace-nowrap [direction:rtl] relative tracking-[0] leading-[normal]">
          الأخبار العاجلة
        </h2>
      </header>

      <Carousel
        currentIndex={currentIndex}
        onNext={goToNext}
        onPrevious={goToPrevious}
        onDotClick={goToSlide}
        showArrows={true}
        showDots={true}
        className="relative self-stretch w-full"
        arrowClassName="bg-white/20 hover:bg-white/40 text-white border-0"
        dotsClassName="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2"
      >
        {breakingNews.map((news) => (
          <Card 
            key={news.id} 
            className="flex flex-col h-[400px] items-end justify-between px-[52px] py-9 relative self-stretch w-full rounded bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.5)_100%),url(../frame-2147224295.png)_50%_50%_/_cover] border-0"
          >
            <CardContent className="p-0 w-full h-full flex flex-col justify-between items-end">
              <Badge className="w-fit h-10 bg-[#2a3eb1] rounded-md flex items-center justify-center gap-2 px-3 py-0 hover:bg-[#2a3eb1]">
                <span className="[font-family:'Tajawal',Helvetica] font-normal text-white text-base text-center [direction:rtl] tracking-[0] leading-[normal]">
                  {news.category}
                </span>
              </Badge>

              <div className="flex flex-col items-end justify-end relative self-stretch w-full">
                <h3 className="max-w-[538px] [font-family:'Tajawal',Helvetica] font-bold text-white text-[32px] [direction:rtl] relative tracking-[0] leading-[normal] mb-6">
                  {news.title}
                </h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </Carousel>
    </section>
  );
};