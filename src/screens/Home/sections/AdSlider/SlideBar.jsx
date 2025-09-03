import React from "react";
import { Button } from "../../../../components/ui/button";
import MainTitle from "../../../../components/ui/MainTitle";
import walk from "../../../../assets/images/walkcompany.png";
import money from "../../../../assets/images/money.png";
import cars from "../../../../assets/images/cars.png";
import mans from "../../../../assets/images/mmans.png";
import vape from "../../../../assets/images/vape.png";
import woman from "../../../../assets/images/womman.png";
import woman1 from "../../../../assets/images/woomaaan.png";
import AdvistingSpace from "../LatestNewsSection/AdvistingSpace";
const articles = [
  {
    id: 1,
    image: walk,
    title:
      "شركة «Najma Walk» تطلق المرحلة الأولى بمشروعها بالقاهرة الجديدة بالربع الثاني 2025  ",
  },
  {
    id: 2,
    image: money,
    title: "زيادة 15% تنتظرك.. اعرف تفاصيل صرف معاشات مايو وموعد الزيادة",
  },
  {
    id: 3,
    image: cars,
    title:
      "الأرصاد تُحذر من طقس غير مستقر.. برودة وأمطار ورياح نشطة تضرب عدة مناطق  ",
  },

  {
    id: 4,
    image: mans,
    title:
      "مصر تسرع برنامج الطروحات الحكومية مع مستشارين عالميين وطرح شركات البترول والأغذية ... ",
  },
  {
    id: 5,
    image: vape,
    title:
      "التدخين الإلكتروني والتجارة غير المشروعة: كيف تؤثر القيود الصارمة على السوق السوداء؟ ",
  },
  {
    id: 5,
    image: woman,
    title:
      "جيهان النجار المستشار الاعلامى السابق بباريس وبروكسل: علاقات راسخة وآفاق واعدة... ",
  },
  {
    id: 6,
    image: woman1,
    title: "حلا شيحة تثير التساؤلات مجددًا حول الحجاب بعد دعمها لابنتها خديجة",
  },
];

const SlideBar = ({ video, adImage }) => {
  return (
    <aside className="flex flex-col w-full gap-8 lg:w-full">
      <section className="flex flex-col gap-4 lg:gap-6">
        <MainTitle title="فيديو" />
        {/* <a
          href={video}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        > */}
        <iframe
          width="100%"
          height="350"
          src="https://www.youtube.com/embed/e0E-OEStbSk"
          title="فيديو مميز"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded"
        />
        {/* </a> */}
      </section>

      <section className="flex flex-col gap-4 lg:gap-6">
        <MainTitle title="اخترنا لكم" />
        <div className="flex flex-col gap-4 p-2 bg-white rounded-lg">
          {articles.map((article) => (
            <div
              key={article.id}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-[100px] h-[70px] flex-shrink-0 overflow-hidden rounded">
                <img
                  src={article.image}
                  alt={article.subtitle}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-xs font-medium leading-5 text-black duration-300 md:text-sm group-hover:text-primary">
                {article.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* First Ad Space */}
      <AdvistingSpace />

      <section className="flex-col hidden gap-3 lg:flex">
        <h2 className="text-xl font-bold text-gray-800">
          اشترك الآن بالنشرة الإخبارية
        </h2>
        <p className="text-base text-gray-500 w-[90%]">
          نشرة إخبارية ترسل مباشرة لبريدك الإلكتروني يوميا
        </p>
        <input
          type="email"
          placeholder="أدخل بريدك الإلكتروني"
          className="px-3 py-2 text-sm bg-white rounded-md shadow-md focus:outline-none focus:border-green-500"
        />
        <Button className="text-lg text-white bg-green-600 rounded-md hover:bg-green-700">
          إشترك
        </Button>
      </section>
    </aside>
  );
};

export default SlideBar;
