"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Services() {
  const services = [
    { image: "./homeimage1.jpg", title: "Exporteren", description: "Professionele export services" },
    { image: "./homeimage2.jpg", title: "Importeren", description: "Veilige import procedures" },
    { image: "./homeimage3.jpg", title: "Transitdocumenten", description: "Complete transit documentation" },
    { image: "./homeimage4.jpg", title: "Douaneadvies", description: "Advies door experts" },
  ];

  const [itemsPerView, setItemsPerView] = useState(3);
  const [index, setIndex] = useState(0);

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

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-3xl md:text-4xl font-bold mb-10 text-center text-[#2B5A8E]"
        >
          Onze diensten
        </motion.h2>

        <div className="relative">
          <div className="overflow-hidden">
            <AnimatePresence initial={false}>
              <motion.div
                key={index}
                className="flex"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                {services.slice(index, index + itemsPerView).map((s, i) => (
                  <motion.div
                    key={i}
                    className="flex-shrink-0 p-3"
                    style={{ width: `calc(100% / ${itemsPerView})` }}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition h-full flex flex-col">
                      <div className="h-48 bg-gray-100 overflow-hidden">
                        <motion.img
                          src={s.image}
                          alt={s.title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.4 }}
                        />
                      </div>
                      <div className="p-6 flex-1">
                        <h3 className="text-xl font-bold text-[#2B5A8E] mb-2">{s.title}</h3>
                        <p className="text-gray-600">{s.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Prev / Next buttons */}
          <button
            onClick={prev}
            disabled={index === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-2 rounded-full hover:bg-gray-100 transition hidden md:inline-flex ${
              index === 0 ? "opacity-40 cursor-not-allowed" : ""
            }`}
          >
            <ChevronLeft size={20} className="text-[#2B5A8E]" />
          </button>

          <button
            onClick={next}
            disabled={index === maxIndex}
            className={`absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-2 rounded-full hover:bg-gray-100 transition hidden md:inline-flex ${
              index === maxIndex ? "opacity-40 cursor-not-allowed" : ""
            }`}
          >
            <ChevronRight size={20} className="text-[#2B5A8E]" />
          </button>
        </div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex justify-center mt-8"
        >
          <button className="bg-[#1a1a2e] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#0f0f1e] transition flex items-center gap-2">
            ALLE DIENSTEN
            <ChevronRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
