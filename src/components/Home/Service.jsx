"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      image: "./homeimage1.jpg",
      title: "Exporteren",
      description: "Professionele export services",
      link: "/diensten/exporteren",
    },
    {
      image: "./homeimage2.jpg",
      title: "Importeren",
      description: "Veilige import procedures",
      link: "/diensten/importeren",
    },
    {
      image: "./homeimage3.jpg",
      title: "Consultancy",
      description: "Complete consultancy",
      link: "/diensten/consultancy",
    },
    {
      image: "./homeimage4.jpg",
      title: "Transitdocumenten",
      description: "Advies door experts",
      link: "/diensten/transitdocumenten",
    },
  ];

  const [itemsPerView, setItemsPerView] = useState(3);
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const calc = () => {
      if (window.innerWidth < 640) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  const maxIndex = Math.max(0, services.length - itemsPerView);
  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <section className="py-16 md:py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-[#f37727]">
          Onze diensten
        </h2>

        <div className="relative">
          {/* Slider container */}
          <div className="overflow-hidden" ref={containerRef}>
            <motion.div
              className="flex cursor-grab active:cursor-grabbing"
              drag="x"
              dragConstraints={{ left: -containerRef.current?.scrollWidth || 0, right: 0 }}
              animate={{ x: `-${index * (100 / itemsPerView)}%` }}
              transition={{ type: "tween", duration: 0.6, ease: "easeInOut" }}
            >
              {services.map((s, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 p-3"
                  style={{ width: `calc(100% / ${itemsPerView})` }}
                >
                  <Link
                    to={s.link}
                    className="group block bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition h-full flex flex-col border border-transparent hover:border-[#f37727]"
                  >
                    <div className="h-48 bg-gray-100 overflow-hidden">
                      <motion.img
                        src={s.image}
                        alt={s.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 flex-1">
                      <h3 className="text-xl font-bold text-[#f37727] mb-2 group-hover:underline">
                        {s.title}
                      </h3>
                      <p className="text-gray-600">{s.description}</p>
                    </div>
                   
                  </Link>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Prev / Next buttons */}
          <button
            onClick={prev}
            disabled={index === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-2 rounded-full hover:bg-gray-100 transition hidden md:inline-flex ${
              index === 0 ? "opacity-40 cursor-not-allowed" : ""
            }`}
          >
            <ChevronLeft size={20} className="text-[#f37727]" />
          </button>

          <button
            onClick={next}
            disabled={index === maxIndex}
            className={`absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-2 rounded-full hover:bg-gray-100 transition hidden md:inline-flex ${
              index === maxIndex ? "opacity-40 cursor-not-allowed" : ""
            }`}
          >
            <ChevronRight size={20} className="text-[#f37727]" />
          </button>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-8">
          <Link
            to="/diensten"
            className="bg-[#f37727] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#d65c0d] transition flex items-center gap-2"
          >
            ALLE DIENSTEN
            <ChevronRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
