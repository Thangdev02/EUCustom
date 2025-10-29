"use client";
import { useEffect, useState } from "react";
import { getAllNews } from "../../services/newsApi";
import { Link } from "react-router-dom";

export default function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getAllNews().then((data) => setNews(data));
  }, []);

  return (
    <section className="bg-white pb-16">
      {/* Banner section */}
      <div className="relative bg-[#0D1635] text-white py-24 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[url('/banner-news.jpg')] bg-cover bg-center"></div>
        <div className="relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">Nieuws</h1>
          <p className="text-lg md:text-xl font-light">
            Blijf op de hoogte van het laatste nieuws over douane en logistiek
          </p>
        </div>
      </div>

      {/* News list */}
      <div className="max-w-4xl mx-auto px-4 mt-16 space-y-16">
        {news.map((item) => (
          <article key={item.id} className="flex flex-col">
            {item.image && (
              <img
                src={item.image}
                alt={item.title}
                className="rounded-lg shadow-md mb-6 w-full md:w-[80%] mx-auto"
              />
            )}

            <h2 className="text-2xl font-bold text-[#0D1635] mb-1">
              {item.title}
            </h2>
            <p className="text-gray-500 text-sm mb-3">{item.date}</p>
            <p className="text-gray-700 leading-relaxed mb-3">
              {item.shortDescription}
            </p>

            <Link
              to={`/news/${item.id}`}
              className="text-[#2B5A8E] font-semibold hover:underline"
            >
              Lees verder
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
