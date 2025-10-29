"use client";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { getAllNews } from "../../services/newsApi";

export default function News() {
  const [newsItems, setNewsItems] = useState([]);

   useEffect(() => {
     getAllNews().then((data) => setNewsItems(data));
   }, []);
 
  if (newsItems.length === 0)
    return <p className="text-center py-20">Loading...</p>;

  const mainNews = newsItems[0];
  const sideNews = newsItems.slice(1);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#f2692a]"
        >
          Blijf op de hoogte
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main News */}
          <motion.div
            className="md:col-span-2"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Link to={`/news/${mainNews.id}`} className="block group">
              <motion.div
                className="relative h-72 md:h-96 rounded-lg overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={mainNews.image}
                  alt={mainNews.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4">
                  <h3 className="text-2xl font-bold">{mainNews.title}</h3>
                  <p className="text-sm">{mainNews.description}</p>
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
            <h3 className="text-xl font-bold text-[#f2692a] mb-4">ONZE RUBRIEKEN:</h3>
            <div className="space-y-3">
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
                    className="block border rounded-lg p-4 hover:shadow-md transition bg-white"
                  >
                    <h4 className="font-semibold text-gray-800 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.shortDescription}</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
