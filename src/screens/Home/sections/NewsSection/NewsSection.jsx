import React, { useState } from "react";

import OnTrend_1 from "../../../../assets/images/OnTrend_1.webp";
import OnTrend_2 from "../../../../assets/images/OnTrend_2.webp";
import OnTrend_3 from "../../../../assets/images/OnTrend_3.webp";
import OnTrend_4 from "../../../../assets/images/OnTrend_4.webp";

import Banks_insurance_1 from "../../../../assets/images/Banks_insurance_1.webp";
import Banks_insurance_2 from "../../../../assets/images/Banks_insurance_2.webp";
import Banks_insurance_3 from "../../../../assets/images/Banks_insurance_3.webp";
import Banks_insurance_4 from "../../../../assets/images/Banks_insurance_4.webp";
import BlogSection from "../../../../components/sections/BlogSection";
const onTrendArticles = [
  {
    id: 1,
    category: "أسواق و ريادة أعمال",
    categoryColor: "bg-[#00c1660d] text-[#00c166]",
    title: "أسعار الدواجن والبيض اليوم الخميس 10 أبريل 2025",
    image: OnTrend_1,
  },
  {
    id: 2,
    category: "أسواق و ريادة أعمال",
    categoryColor: "bg-[#00c1660d] text-[#00c166]",
    title: "تعرف على أسعار الحديد والأسمنت اليوم الخميس 10 أبريل 2025",
    image: OnTrend_2,
  },
  {
    id: 3,
    category: "عاجل",
    categoryColor: "bg-[#d132320d] text-[#d13232]",
    title: "الوزير يبحث مع ممثلي 29 شركة ومؤسسة فرنسية فرص الاستثمار بالسوق...",
    image: OnTrend_3,
  },
  {
    id: 4,
    category: "بنوك و تأمين",
    categoryColor: "bg-[#2a3eb10d] text-[#2a3eb1]",
    title:
      "مليارات تتدفق لحظيا.. نمو قوي بالمدفوعات عبر التسوية اللحظية بالربع الأول",
    image: OnTrend_4,
  },
  {
    id: 5,
    category: "بنوك و تأمين",
    categoryColor: "bg-[#2a3eb10d] text-[#2a3eb1]",
    title:
      "مليارات تتدفق لحظيا.. نمو قوي بالمدفوعات عبر التسوية اللحظية بالربع الأول",
    image: OnTrend_4,
  },
  {
    id: 6,
    category: "أسواق و ريادة أعمال",
    categoryColor: "bg-[#00c1660d] text-[#00c166]",
    title: "أسعار الدواجن والبيض اليوم الخميس 10 أبريل 2025",
    image: OnTrend_1,
  },
];

const bankingArticles = [
  {
    id: 1,
    category: "بنوك و تأمين",
    categoryColor: "bg-[#2a3eb10d] text-[#2a3eb1]",
    title: "تعديلات مرتقبة على شهادات بنك مصر الأسبوع القادم",
    image: Banks_insurance_1,
  },
  {
    id: 2,
    category: "بنوك و تأمين",
    categoryColor: "bg-[#2a3eb10d] text-[#2a3eb1]",
    title: "هل يعطي تخفيض سعر الفائدة دفعة للاقتصاد أم يحمل مخاطر ؟....",
    image: Banks_insurance_2,
  },
  {
    id: 3,
    category: "بنوك و تأمين",
    categoryColor: "bg-[#2a3eb10d] text-[#2a3eb1]",
    title:
      "ارتفاع سعر الدولار اليوم مقابل الجنيه المصري قبيل اجتماع البنك المركزي اليوم",
    image: Banks_insurance_1,
  },
  {
    id: 4,
    category: "بنوك و تأمين",
    categoryColor: "bg-[#2a3eb10d] text-[#2a3eb1]",
    title: "هل يعطي تخفيض سعر الفائدة دفعة للاقتصاد أم يحمل مخاطر ؟....",
    image: Banks_insurance_3,
  },
  {
    id: 5,
    category: "بنوك و تأمين",
    categoryColor: "bg-[#2a3eb10d] text-[#2a3eb1]",
    title:
      "ارتفاع سعر الدولار اليوم مقابل الجنيه المصري قبيل اجتماع البنك المركزي اليوم",
    image: Banks_insurance_4,
  },
  {
    id: 6,
    category: "بنوك و تأمين",
    categoryColor: "bg-[#2a3eb10d] text-[#2a3eb1]",
    title: "البنك المركزي المصري: تباطؤ التضخم الأساسي إلى 9.4% في مارس",
    image: Banks_insurance_3,
  },
];

export const NewsSection = () => {
  return (
    <section className="flex flex-col items-end w-full gap-8 bg-white">
      <BlogSection data={onTrendArticles} title="On Trend" />
      <BlogSection data={bankingArticles} title="بنوك و تأمين" />
    </section>
  );
};
