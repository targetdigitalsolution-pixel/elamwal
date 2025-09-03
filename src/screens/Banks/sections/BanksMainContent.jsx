import React from "react";
import { Card, CardContent } from "../../../components/ui/card";
import { Badge } from "../../../components/ui/badge";
import MainTitle from "../../../components/ui/MainTitle";
import Sidebar from "../../../components/sections/Sidebar";
import { ClockIcon } from "@heroicons/react/24/outline";
import Banks_insurance_1 from "../../../assets/images/Banks_insurance_1.webp";
import Banks_insurance_2 from "../../../assets/images/Banks_insurance_2.webp";
import Banks_insurance_3 from "../../../assets/images/Banks_insurance_3.webp";
import Banks_insurance_4 from "../../../assets/images/Banks_insurance_4.webp";

export const BanksMainContent = () => {
  const bankingArticles = [
    {
      id: 1,
      category: "بنوك و تأمين",
      categoryColor: "bg-[#2a3eb10d] text-[#2a3eb1]",
      title: "تعديلات مرتقبة على شهادات بنك مصر الأسبوع القادم",
      image: Banks_insurance_1,
      timeAgo: "منذ 3 ساعات",
      excerpt: "يستعد بنك مصر لإجراء تعديلات جوهرية على شهادات الاستثمار..."
    },
    {
      id: 2,
      category: "بنوك و تأمين", 
      categoryColor: "bg-[#2a3eb10d] text-[#2a3eb1]",
      title: "هل يعطي تخفيض سعر الفائدة دفعة للاقتصاد أم يحمل مخاطر؟",
      image: Banks_insurance_2,
      timeAgo: "منذ 5 ساعات",
      excerpt: "تحليل شامل لتأثير قرارات البنك المركزي على الاقتصاد المصري..."
    },
    {
      id: 3,
      category: "بنوك و تأمين",
      categoryColor: "bg-[#2a3eb10d] text-[#2a3eb1]",
      title: "ارتفاع سعر الدولار اليوم مقابل الجنيه المصري قبيل اجتماع البنك المركزي",
      image: Banks_insurance_3,
      timeAgo: "منذ 6 ساعات",
      excerpt: "شهدت أسعار الصرف تحركات ملحوظة في السوق المصرفية..."
    },
    {
      id: 4,
      category: "بنوك و تأمين",
      categoryColor: "bg-[#2a3eb10d] text-[#2a3eb1]",
      title: "البنك المركزي المصري: تباطؤ التضخم الأساسي إلى 9.4% في مارس",
      image: Banks_insurance_4,
      timeAgo: "منذ 8 ساعات",
      excerpt: "أظهرت البيانات الرسمية تحسناً في مؤشرات التضخم..."
    },
    {
      id: 5,
      category: "استثمار و بورصة",
      categoryColor: "bg-[#00c1660d] text-[#00c166]",
      title: "نمو قوي في المدفوعات عبر التسوية اللحظية بالربع الأول",
      image: Banks_insurance_1,
      timeAgo: "منذ 10 ساعات",
      excerpt: "سجلت أنظمة الدفع الإلكتروني نمواً استثنائياً..."
    },
    {
      id: 6,
      category: "بنوك و تأمين",
      categoryColor: "bg-[#2a3eb10d] text-[#2a3eb1]",
      title: "قطاع التأمين يشهد نمواً بنسبة 15% في الربع الأول من 2025",
      image: Banks_insurance_2,
      timeAgo: "منذ 12 ساعة",
      excerpt: "حققت شركات التأمين المصرية أرقاماً قياسية..."
    }
  ];

  const latestNews = [
    {
      id: 7,
      category: "عاجل",
      categoryColor: "bg-[#d132320d] text-[#d13232]",
      title: "اجتماع طارئ للبنك المركزي لمناقشة السياسة النقدية",
      image: Banks_insurance_3,
      timeAgo: "منذ ساعة",
    },
    {
      id: 8,
      category: "بنوك و تأمين",
      categoryColor: "bg-[#2a3eb10d] text-[#2a3eb1]",
      title: "إطلاق خدمات مصرفية رقمية جديدة في البنك الأهلي",
      image: Banks_insurance_4,
      timeAgo: "منذ ساعتين",
    },
    {
      id: 9,
      category: "استثمار و بورصة",
      categoryColor: "bg-[#00c1660d] text-[#00c166]",
      title: "ارتفاع مؤشرات البورصة المصرية بنسبة 2.5%",
      image: Banks_insurance_1,
      timeAgo: "منذ 3 ساعات",
    }
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-8 mb-12">
      {/* Main Content */}
      <main className="flex-1">
        {/* Main Articles Grid */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bankingArticles.map((article) => (
              <Card
                key={article.id}
                className="flex flex-col gap-4 bg-white rounded-lg border border-[#f6f6f6] shadow-sm overflow-hidden hover:shadow-md transition group cursor-pointer"
              >
                <div className="overflow-hidden h-[200px] sm:h-[220px] lg:h-[240px]">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 duration-300"
                    alt="Article image"
                    src={article.image}
                  />
                </div>
                
                <CardContent className="flex flex-col gap-4 p-4">
                  <Badge className={`w-fit h-[25px] px-3 py-0 rounded ${article.categoryColor}`}>
                    <span className="text-xs font-normal text-center">
                      {article.category}
                    </span>
                  </Badge>
                  
                  <h3 className="text-lg font-bold leading-snug text-black duration-300 group-hover:text-primary line-clamp-2">
                    {article.title}
                  </h3>
                  
                  {article.excerpt && (
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {article.excerpt}
                    </p>
                  )}
                  
                  <div className="flex items-center justify-end gap-2">
                    <ClockIcon className="w-4 h-4 text-gray-500" />
                    <span className="text-xs font-medium text-gray-400 whitespace-nowrap">
                      {article.timeAgo}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Latest Banking News */}
        <section className="mb-12">
          <MainTitle title="آخر أخبار البنوك" />
          <div className="grid grid-cols-1 gap-4 mt-6">
            {latestNews.map((article) => (
              <Card
                key={article.id}
                className="flex items-center gap-4 bg-white rounded-lg border border-[#f6f6f6] shadow-sm overflow-hidden hover:shadow-md transition group cursor-pointer p-4"
              >
                <img
                  className="w-[120px] h-[80px] rounded object-cover group-hover:scale-105 duration-300"
                  alt="Article image"
                  src={article.image}
                />
                
                <div className="flex-1 flex flex-col gap-2">
                  <Badge className={`w-fit h-[20px] px-2 py-0 rounded text-xs ${article.categoryColor}`}>
                    {article.category}
                  </Badge>
                  
                  <h3 className="text-base font-medium text-black duration-300 group-hover:text-primary line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <div className="flex items-center gap-2">
                    <ClockIcon className="w-4 h-4 text-gray-500" />
                    <span className="text-xs text-gray-400">
                      {article.timeAgo}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>

      {/* Sidebar */}
      <aside className="w-full lg:w-[376px]">
        <Sidebar />
      </aside>
    </div>
  );
};