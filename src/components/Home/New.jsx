"use client";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getAllNews } from "../../services/newsApi";
import { useTranslation } from "react-i18next";

export default function News() {
  const { t, i18n } = useTranslation();
  const [newsItems, setNewsItems] = useState([]);

  // Hàm dịch siêu gọn – fix triệt để lỗi object {nl,en}
  const trans = (field) => {
    if (!field) return "";
    return field[i18n.language] || field.nl || field.en || "";
  };

  useEffect(() => {
    getAllNews().then((data) => {
      setNewsItems(data);
    });
  }, []);

  if (newsItems.length === 0) {
    return <p className="text-center py-20 text-xl">Loading...</p>;
  }

  const mainNews = newsItems[0];
  const sideNews = newsItems.slice(1, 5); // chỉ lấy 4 tin bên cạnh

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Tiêu đề – đa ngôn ngữ */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#f2692a]"
        >
          {t("home.news_title", "Blijf op de hoogte")}
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Tin chính */}
          <motion.div
            className="md:col-span-2"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Link to={`/news/${mainNews.id}`} className="block group">
              <motion.div
                className="relative h-72 md:h-96 rounded-lg overflow-hidden shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={mainNews.image || "/placeholder-news.jpg"}
                  alt={trans(mainNews.title)}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 text-white p-6">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 leading-tight">
                    {trans(mainNews.title)}
                  </h3>
                  <p className="text-sm md:text-base opacity-90 line-clamp-2">
                    {trans(mainNews.shortDescription)}
                  </p>
                </div>
              </motion.div>
            </Link>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-xl font-bold text-[#f2692a] mb-5">
              {t("home.news_sidebar", "ONZE RUBRIEKEN:")}
            </h3>
            <div className="space-y-4">
              {sideNews.map((item, i) => (
                <motion.div
                  key={item.id}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={`/news/${item.id}`}
                    className="block border border-gray-200 rounded-xl p-5 hover:shadow-lg hover:border-[#f2692a]/30 transition-all duration-300 bg-white group"
                  >
                    <h4 className="font-semibold text-gray-800 mb-2 group-hover:text-[#f2692a] transition">
                      {trans(item.title)}
                    </h4>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {trans(item.shortDescription)}
                    </p>
                    <span className="text-xs text-[#f2692a] font-medium mt-2 inline-block">
                      Lees meer →
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Nút xem tất cả */}
            <div className="mt-8 text-center">
              <Link
                to="/news"
                className="inline-block px-8 py-3 bg-[#122967] text-white font-semibold rounded-full hover:bg-[#f2692a] transition shadow-md"
              >
                {t("home.view_all_news", "Bekijk al het nieuws")}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}