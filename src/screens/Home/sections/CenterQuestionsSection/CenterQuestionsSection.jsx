import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";
import MainTitle from "../../../../components/ui/MainTitle";
import patrol from "../../../../assets/images/patrol.png";
import { ClockIcon } from "@heroicons/react/24/outline";
import SlideBar from "../AdSlider/SlideBar";
import banzeen from "../../../../assets/images/banzeeen.png";
import ahmedmalak from "../../../../assets/images/ahmedmalik.png";
import ttatwer from "../../../../assets/images/tattweer.png";
import alnakel from "../../../../assets/images/alnakel.png";
import a3llan from "../../../../assets/images/a3llan.png";
import al7arb from "../../../../assets/images/الحرب_التجارية.png";
import etfakyat from "../../../../assets/images/توقيع_اتفاقيات.png";
import nash2a from "../../../../assets/images/الشركات_الناشئة.png";
import salah from "../../../../assets/images/ابو_صلاح.png";
import united from "../../../../assets/images/يونيتاد.png";
import Egypt from "../../../../assets/images/المنتخب.png";
const newsCategories = [
  {
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
];
const newsArticles = [
  {
    id: 3,
    image: banzeen,
    category: "مركز الاموال",
    categoryColor: "bg-[#2a3eb10d] text-[#b1592a]",
    title: "اجتماع فريق عمل مؤسسة شباب القادة لمناقشة خطة عمل برامج ...",
    timeAgo: "منذ 9 س",
    icon: <ClockIcon className="w-5 h-5 text-gray-500" />,
  },
  {
    id: 1,
    image: patrol,
    category: "بترول و طاقة",
    categoryColor: "bg-[#4952870d] text-[#485186]",
    title: "انخفاض أسعار النفط لادنى مستوى في 4 سنوات",
    timeAgo: "منذ 5 س",
    icon: <ClockIcon className="w-5 h-5 text-gray-500" />,
  },
  {
    id: 4,
    image: ahmedmalak,
    category: "فنون",
    categoryColor: "bg-[#b12aa80d] text-[#b12aa8]",
    title: "جلسة تصوير تتحول لوصلة رقص.. تارا و أحمد مالك يشعلان السوشيال ...",
    timeAgo: "منذ 8س",
    icon: <ClockIcon className="w-5 h-5 text-gray-500" />,
  },
  {
    id: 2,
    image: banzeen,
    category: "بترول و طاقة",
    categoryColor: "bg-[#4952870d] text-[#485186]",
    title:
      "مصر ترفع أسعار البنزين والسولار وتؤكد: فجوة الوقود مستمرة والدولة...",
    timeAgo: "منذ 2 س",
    icon: <ClockIcon className="w-5 h-5 text-gray-500" />,
  },
];

const newsArticles1 = [
  {
    id: 1,
    image: ttatwer,
    category: "عقارات ",
    categoryColor: "bg-[#2a3eb10d] text-[#b1592a]",
    title: "مزايا للتطوير العقارى تستعد لطرح مشروع عقاري جديد ضمن...",
    timeAgo: "منذ 2 س",
    icon: <ClockIcon className="w-5 h-5 text-gray-500" />,
  },
  {
    id: 2,
    image: alnakel,
    category: "سياحة ونقل ",
    categoryColor: "bg-[#2a3eb10d] text-[#b1592a]",
    title:
      "النقل الدولي واللوجستيات تتوقع 8 % زيادة في أسعار النقل البري بعد رفع...",
    timeAgo: "منذ 2 س",
    icon: <ClockIcon className="w-5 h-5 text-gray-500" />,
  },
];

export const CenterQuestionsSection = () => {
  return (
    <section className="container flex flex-col gap-6 py-12 lg:flex-row">
      <div className="flex flex-col flex-1 w-full gap-8 lg:w-2/3">
        <section className="flex flex-col items-start w-full gap-6">
          <MainTitle title="مركز الأموال و الدراسات" />
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
            {newsArticles.map((article) => (
              <Card
                key={article.id}
                className="flex flex-col items-end gap-4 bg-white rounded-lg border border-[#f6f6f6] shadow-sm overflow-hidden hover:shadow-md transition group cursor-pointer"
              >
                <div className="overflow-hidden h-[200px] sm:h-[220px] lg:h-[240px] w-full">
                  <img
                    className="w-full h-[200px] sm:h-[220px] lg:h-[240px] object-cover group-hover:scale-110 duration-300"
                    alt="Article image"
                    src={article.image}
                  />
                </div>
                <CardContent className="flex flex-col items-start w-full gap-4 px-4 py-3">
                  <Badge
                    className={`h-[25px] px-3 py-0 rounded ${article.categoryColor}`}
                  >
                    <span className="text-xs font-normal text-center">
                      {article.category}
                    </span>
                  </Badge>
                  <h3 className="w-full text-base font-bold leading-snug text-black duration-300 sm:text-lg line-clamp-2 group-hover:text-primary">
                    {article.title}
                  </h3>
                  <div className="flex items-center justify-end gap-2">
                    {article.icon}
                    <span className="text-xs font-medium text-gray-400 sm:text-sm whitespace-nowrap">
                      {article.timeAgo}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="flex flex-col items-start w-full gap-6">
          <MainTitle title="عربي ودولي" />
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
            {newsArticles1.map((article) => (
              <Card
                key={article.id}
                className="flex flex-col items-end gap-4 bg-white rounded-lg border border-[#f6f6f6] shadow-sm overflow-hidden hover:shadow-md transition group cursor-pointer"
              >
                <div className="overflow-hidden h-[200px] sm:h-[220px] lg:h-[240px] w-full">
                  <img
                    className="w-full h-[200px] sm:h-[220px] lg:h-[240px] object-cover group-hover:scale-110 duration-300"
                    alt="Article image"
                    src={article.image}
                  />
                </div>
                <CardContent className="flex flex-col items-start w-full gap-4 px-4 py-3">
                  <Badge
                    className={`h-[25px] px-3 py-0 rounded ${article.categoryColor}`}
                  >
                    <span className="text-xs font-normal text-center">
                      {article.category}
                    </span>
                  </Badge>
                  <h3 className="w-full text-base font-bold leading-snug text-black duration-300 sm:text-lg line-clamp-2 group-hover:text-primary">
                    {article.title}
                  </h3>
                  <div className="flex items-center justify-end gap-2">
                    {article.icon}
                    <span className="text-xs font-medium text-gray-400 sm:text-sm whitespace-nowrap">
                      {article.timeAgo}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        <section className="flex justify-center w-full ">
          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            {newsCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="flex flex-col gap-6">
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
                      <div className="flex-1 text-xl font-medium leading-normal text-black duration-300 font-tajawal group-hover:text-primary ">
                        {article.title}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* العمود الجانبي للـ SlideBar */}
      <aside className="flex-shrink-0 w-full lg:w-1/3">
        <SlideBar
          video="https://www.youtube.com/watch?v=e0E-OEStbSk"
          adImage={a3llan}
        />
      </aside>
    </section>
  );
};
