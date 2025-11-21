"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  // Animation variants (cho hiệu ứng reveal mượt)
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fade = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Tiêu đề chính */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-[#f2692a] text-center md:text-left"
        >
          {t("about.title")}
        </motion.h2>

        {/* Phần giới thiệu và logo */} 
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            className="md:col-span-2"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-gray-600 leading-relaxed mb-6">
              {t("about.intro")}
            </p>
            <a
              href="#"
              className="text-[#f48124] font-semibold hover:underline inline-block"
            >
              {t("about.readMore")}
            </a>
          </motion.div>

          {/* Logo bên phải */}
          <motion.div
            className="flex flex-col gap-6 justify-center items-center"
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="w-72 h-48 bg-gray-100 rounded-lg flex items-center justify-center shadow-sm">
              <img
                src="/importship.jpg"
                alt="KIWA Logo"
                className="w-72 h-48 object-contain rounded"
              />
            </div>
          </motion.div>
        </div>

        {/* Phần 2 */}
        <motion.div
          className="border-t pt-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#f26f2a]">
            {t("about.section2_title")}
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            {t("about.section2_text")}
          </p>
        </motion.div>

        {/* Phần 3 */}
        <motion.div
          className="border-t pt-12 mt-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#f26f2a]">
            {t("about.section3_title")}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {t("about.section3_text")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}