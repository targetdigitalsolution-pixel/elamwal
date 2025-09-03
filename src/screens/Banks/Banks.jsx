import React from "react";
import { Header } from "../../components/layout/Header";
import { UserProfile } from "../../components/layout/UserProfile";
import { Navbar } from "../../components/layout/Navbar";
import { Footer } from "../../components/sections/Footer";
import { BanksTags } from "./sections/BanksTags";
import { BanksSlider } from "./sections/BanksSlider";
import { MostReadSection } from "./sections/MostReadSection";
import Sidebar from "../../components/sections/Sidebar";
import BlogSection from "../../components/sections/BlogSection";
import Banks_insurance_1 from "../../assets/images/Banks_insurance_1.webp";
import Banks_insurance_2 from "../../assets/images/Banks_insurance_2.webp";
import Banks_insurance_3 from "../../assets/images/Banks_insurance_3.webp";
import Banks_insurance_4 from "../../assets/images/Banks_insurance_4.webp";

export const Banks = () => {
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
      title: "ارتفاع سعر الدولار اليوم مقابل الجنيه المصري قبيل اجتماع البنك المركزي اليوم",
      image: Banks_insurance_3,
    },
    {
      id: 4,
      category: "بنوك و تأمين",
      categoryColor: "bg-[#2a3eb10d] text-[#2a3eb1]",
      title: "هل يعطي تخفيض سعر الفائدة دفعة للاقتصاد أم يحمل مخاطر ؟....",
      image: Banks_insurance_4,
    },
    {
      id: 5,
      category: "استثمار و بورصة",
      categoryColor: "bg-[#00c1660d] text-[#00c166]",
      title: "مليارات تتدفق لحظيا.. نمو قوي بالمدفوعات عبر التسوية اللحظية بالربع الأول",
      image: Banks_insurance_1,
    },
    {
      id: 6,
      category: "استثمار و بورصة",
      categoryColor: "bg-[#00c1660d] text-[#00c166]",
      title: "البنك المركزي المصري: تباطؤ التضخم الأساسي إلى 9.4% في مارس",
      image: Banks_insurance_2,
    },
  ];

  const investmentArticles = [
    {
      id: 7,
      category: "استثمار و بورصة",
      categoryColor: "bg-[#00c1660d] text-[#00c166]",
      title: "صعود قوي للبورصة المصرية في بداية الأسبوع",
      image: Banks_insurance_3,
    },
    {
      id: 8,
      category: "استثمار و بورصة",
      categoryColor: "bg-[#00c1660d] text-[#00c166]",
      title: "ارتفاع أسعار الذهب عالمياً يؤثر على السوق المصرية",
      image: Banks_insurance_4,
    },
    {
      id: 9,
      category: "بنوك و تأمين",
      categoryColor: "bg-[#2a3eb10d] text-[#2a3eb1]",
      title: "شهادات استثمار جديدة بعائد مرتفع من بنك مصر",
      image: Banks_insurance_1,
    },
    {
      id: 10,
      category: "استثمار و بورصة",
      categoryColor: "bg-[#00c1660d] text-[#00c166]",
      title: "تحليل: توقعات أداء البورصة المصرية في الربع الثاني",
      image: Banks_insurance_2,
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50" dir="rtl">
      <div className="relative w-full bg-gray-50">
        <Header />
        <UserProfile />
        <Navbar />
        
        <div className="container pt-6">
          {/* Tags Section */}
          <BanksTags />
          
          {/* Main Layout: 2/3 and 1/3 */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content - 2/3 */}
            <main className="flex-1 lg:w-2/3">
              <BanksSlider />
              <div className="bg-white rounded-lg p-6 mt-6">
                <BlogSection data={bankingArticles} title="بنوك و تأمين" />
                <div className="mt-8">
                  <BlogSection data={investmentArticles} title="استثمار و بورصة" />
                </div>
              </div>
            </main>
            
            {/* Sidebar - 1/3 */}
            <aside className="w-full lg:w-1/3 space-y-8">
              <MostReadSection />
              <Sidebar />
            </aside>
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
};