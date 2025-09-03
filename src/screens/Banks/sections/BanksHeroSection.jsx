import React from "react";
import { Badge } from "../../../components/ui/badge";
import { Card, CardContent } from "../../../components/ui/card";
import MainTitle from "../../../components/ui/MainTitle";
import Banks_insurance_1 from "../../../assets/images/Banks_insurance_1.webp";

export const BanksHeroSection = () => {
  const featuredArticle = {
    id: 1,
    category: "بنوك و تأمين",
    categoryColor: "bg-[#2a3eb10d] text-[#2a3eb1]",
    title: "البنك المركزي المصري يعلن عن قرارات جديدة بشأن أسعار الفائدة",
    image: Banks_insurance_1,
    content: "في قرار مهم للاقتصاد المصري، أعلن البنك المركزي المصري عن تعديلات جديدة على أسعار الفائدة، والتي من المتوقع أن تؤثر على القطاع المصرفي والاستثماري في البلاد..."
  };

  return (
    <section className="w-full mb-8">
      <div className="flex flex-col gap-6">
        <MainTitle title="بنوك و تأمين" />
        
        <Card className="flex flex-col lg:flex-row gap-6 bg-white rounded-lg border border-[#f6f6f6] shadow-sm overflow-hidden hover:shadow-md transition group cursor-pointer">
          <div className="lg:w-1/2">
            <img
              className="w-full h-[300px] lg:h-[400px] object-cover group-hover:scale-105 duration-300"
              alt="Featured article"
              src={featuredArticle.image}
            />
          </div>
          
          <CardContent className="flex flex-col justify-center lg:w-1/2 gap-6 p-6">
            <Badge className={`w-fit h-[30px] px-4 py-1 rounded ${featuredArticle.categoryColor}`}>
              <span className="text-sm font-medium text-center">
                {featuredArticle.category}
              </span>
            </Badge>
            
            <h1 className="text-2xl lg:text-3xl font-bold text-black leading-tight group-hover:text-primary duration-300">
              {featuredArticle.title}
            </h1>
            
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              {featuredArticle.content}
            </p>
            
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>منذ ساعتين</span>
              <span>•</span>
              <span>5 دقائق قراءة</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};