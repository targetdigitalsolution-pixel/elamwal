import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import elnaft from "../../../../assets/images/patrol.png";
import MainTitle from "../../../../components/ui/MainTitle";
import al7arb from "../../../../assets/images/الحرب_التجارية.png";
import etfakyat from "../../../../assets/images/توقيع_اتفاقيات.png";
import nash2a from "../../../../assets/images/الشركات_الناشئة.png";
import barchelona from "../../../../assets/images/العداله_تبتسم_لبرشلونة.png";
import salah from "../../../../assets/images/ابو_صلاح.png";
import united from "../../../../assets/images/يونيتاد.png";
import Egypt from "../../../../assets/images/المنتخب.png";
import badrya from "../../../../assets/images/بدريه طلبة.png";
import emam from "../../../../assets/images/محمد_عادلامام.png";
import asala from "../../../../assets/images/اليسا.png";
import shakoosh from "../../../../assets/images/شاكوش.png";

export const LatestNewsSection = () => {
  const newsCategories = [
    {
      title: "بترول طاقة",
      lineImage: "/line-276-6.svg",
      featuredArticle: {
        title: "انخفاض أسعار النفط لادنى مستوى في 4 سنوات",
        backgroundImage: elnaft,
      },
      articles: [
        {
          title: "الحرب التجارية بين أمريكا والصين تضغط على أسعار النفط عالميا",
          image: al7arb,
        },
        {
          title:
            "توقيع اتفاقيات تاريخية بين مصر وفرنسا بقطاعي الكهرباء والطاقة المتجددة",
          image: etfakyat,
        },
        {
          title:
            "الشركات الناشئة تلعب دورا محوريا في تطوير الابتكار وتحقيق التنمية الاقتصادية",
          image: nash2a,
        },
      ],
    },
    {
      title: "عالم رياضي",
      lineImage: "/line-276-4.svg",
      featuredArticle: {
        title:
          "العدالة تبتسم لبرشلونة.. المحكمة ترفض استئناف الرابطة وتبقي على...",
        backgroundImage: barchelona,
      },
      articles: [
        {
          title:
            "ليفربول يعلن عن جولة تحضيرية في شرق آسيا استعدادا للموسم الجديد",
          image: salah,
        },
        {
          title:
            "مواجهتان مرتقبتان في الدوري المصري و يونايتد يصطدم بليون.. مباريات الخميس...",
          image: united,
        },
        {
          title:
            "المنتخب المصري يستعد لمباراة ودية ضد الأرجنتين في إطار التحضيرات لكأس العالم",
          image: Egypt,
        },
      ],
    },
    {
      title: "فنون",
      lineImage: "/line-276-17.svg",
      featuredArticle: {
        title:
          'بدرية طلبة تهاجم تصوير جنازات الفنانين: "بياخدوا اللقطة عشان...',
        backgroundImage: badrya,
      },
      articles: [
        {
          title: 'محمد إمام يغزو "نتفليكس" بفيلمه الكوميدي "اللعب مع العيال"',
          image: emam,
        },
        {
          title:
            "شام الذهبي توضح أسباب إغلاق مركزها الطبي وأصالة تساندها في محنتها",
          image: asala,
        },
        {
          title: 'القانون يجبر حسن شاكوش على دفع نفقة "خيالية" لطليقته',
          image: shakoosh,
        },
      ],
    },
  ];

  return (
    <section className="container flex justify-center w-full px-4 mb-12">
      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {newsCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="flex flex-col gap-6">
            <MainTitle title={category.title} />

            <Card className="h-[236px] relative rounded overflow-hidden border-0 shadow-none">
              <CardContent
                className="relative flex flex-col items-end justify-end w-full h-full p-0"
                style={{
                  backgroundImage: `linear-gradient(180deg,rgba(0,0,0,0) 0%,rgba(0,0,0,0.5) 55%), url(${category.featuredArticle.backgroundImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "50% 50%",
                }}
                //  main
              >
                <div className="absolute inset-0 flex flex-col justify-end px-5 py-9">
                  <h3 className="text-xl font-bold text-white">
                    {category.featuredArticle.title}
                  </h3>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col w-full gap-6">
              {category.articles.map((article, articleIndex) => (
                <article
                  key={articleIndex}
                  className="h-[110px] flex items-center gap-4 w-full relative group cursor-pointer"
                >
                  <img
                    className="w-[110px] h-[110px] rounded object-cover"
                    alt="Image"
                    src={article.image}
                  />
                  <div className="flex-1 text-xl font-medium leading-normal text-black duration-300 font-tajawal group-hover:text-primary">
                    {article.title}
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
