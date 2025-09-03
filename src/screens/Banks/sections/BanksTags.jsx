import React from "react";
import { Badge } from "../../../components/ui/badge";

export const BanksTags = () => {
  const tags = [
    "بنوك و تأمين",
    "استثمار و بورصة", 
    "البنك المركزي",
    "أسعار الفائدة",
    "شهادات الاستثمار",
    "القروض المصرفية",
    "التأمين الصحي",
    "البورصة المصرية",
    "صناديق الاستثمار",
    "العملات الأجنبية"
  ];

  return (
    <section className="w-full mb-8">
      <div className="flex flex-wrap gap-3">
        {tags.map((tag, index) => (
          <Badge
            key={index}
            className="px-4 py-2 text-sm font-medium bg-white border border-gray-200 text-gray-700 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 cursor-pointer"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </section>
  );
};