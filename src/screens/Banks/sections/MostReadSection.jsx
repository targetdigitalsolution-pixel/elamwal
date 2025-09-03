import React from "react";
import { Card, CardContent } from "../../../components/ui/card";
import { Badge } from "../../../components/ui/badge";
import MainTitle from "../../../components/ui/MainTitle";
import { ClockIcon } from "@heroicons/react/24/outline";
import Banks_insurance_1 from "../../../assets/images/Banks_insurance_1.webp";
import Banks_insurance_2 from "../../../assets/images/Banks_insurance_2.webp";
import Banks_insurance_3 from "../../../assets/images/Banks_insurance_3.webp";
import Banks_insurance_4 from "../../../assets/images/Banks_insurance_4.webp";

export const MostReadSection = () => {
  const mostReadArticles = [
    {
      id: 1,
      category: "بنوك و تأمين",
      categoryColor: "bg-[#2a3eb10d] text-[#2a3eb1]",
      title: "البنك الأهلي يطلق خدمات مصرفية رقمية جديدة",
      image: Banks_insurance_1,
      timeAgo: "منذ ساعة",
      readCount: "15,420"
    },
    {
      id: 2,
      category: "استثمار و بورصة",
      categoryColor: "bg-[#00c1660d] text-[#00c166]",
      title: "صعود قوي للبورصة المصرية في بداية الأسبوع",
      image: Banks_insurance_2,
      timeAgo: "منذ ساعتين",
      readCount: "12,850"
    },
    {
      id: 3,
      category: "بنوك و تأمين",
      categoryColor: "bg-[#2a3eb10d] text-[#2a3eb1]",
      title: "قرارات جديدة من البنك المركزي بشأن القروض العقارية",
      image: Banks_insurance_3,
      timeAgo: "منذ 3 ساعات",
      readCount: "11,200"
    },
    {
      id: 4,
      category: "استثمار و بورصة",
      categoryColor: "bg-[#00c1660d] text-[#00c166]",
      title: "ارتفاع أسعار الذهب عالمياً يؤثر على السوق المصرية",
      image: Banks_insurance_4,
      timeAgo: "منذ 4 ساعات",
      readCount: "9,750"
    },
    {
      id: 5,
      category: "بنوك و تأمين",
      categoryColor: "bg-[#2a3eb10d] text-[#2a3eb1]",
      title: "شهادات استثمار جديدة بعائد مرتفع من بنك مصر",
      image: Banks_insurance_1,
      timeAgo: "منذ 5 ساعات",
      readCount: "8,900"
    },
    {
      id: 6,
      category: "استثمار و بورصة",
      categoryColor: "bg-[#00c1660d] text-[#00c166]",
      title: "تحليل: توقعات أداء البورصة المصرية في الربع الثاني",
      image: Banks_insurance_2,
      timeAgo: "منذ 6 ساعات",
      readCount: "7,650"
    }
  ];

  return (
    <section className="w-full">
      <div className="flex flex-col gap-6">
        <MainTitle title="أكثر قراءة" />
        
        <div className="flex flex-col gap-4">
          {mostReadArticles.map((article, index) => (
            <Card
              key={article.id}
              className="flex items-center gap-4 bg-white rounded-lg border border-[#f6f6f6] shadow-sm overflow-hidden hover:shadow-md transition group cursor-pointer p-4"
            >
              <div className="flex-shrink-0">
                <span className="flex items-center justify-center w-8 h-8 bg-primary text-white rounded-full text-sm font-bold">
                  {index + 1}
                </span>
              </div>
              
              <img
                className="w-[80px] h-[60px] rounded object-cover group-hover:scale-105 duration-300"
                alt="Article image"
                src={article.image}
              />
              
              <div className="flex-1 flex flex-col gap-2">
                <Badge className={`w-fit h-[20px] px-2 py-0 rounded text-xs ${article.categoryColor}`}>
                  {article.category}
                </Badge>
                
                <h3 className="text-sm font-medium text-black duration-300 group-hover:text-primary line-clamp-2">
                  {article.title}
                </h3>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ClockIcon className="w-3 h-3 text-gray-500" />
                    <span className="text-xs text-gray-400">
                      {article.timeAgo}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500">
                    {article.readCount} قراءة
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};