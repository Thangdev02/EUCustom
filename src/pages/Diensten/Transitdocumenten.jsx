"use client";

import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import ServicesSidebar from "../../components/Diensten/ServicesSidebar";
import { useTranslation } from "react-i18next";

export default function Transitdocumenten() {
  const { t } = useTranslation();

  useEffect(() => {
    const sr = ScrollReveal({
      origin: "bottom",
      distance: "40px",
      duration: 1000,
      delay: 200,
      easing: "ease-in-out",
      reset: false,
    });

    sr.reveal(".transit-title", { delay: 200 });
    sr.reveal(".transit-text", { delay: 400 });
    sr.reveal(".transit-list li", { interval: 100 });
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12">
        {/* LEFT CONTENT */}
        <div className="md:col-span-2">
          <h2 className="transit-title text-2xl md:text-3xl font-bold text-[#f2692a] mb-6">
            {t("transit.title")}
          </h2>

          <p className="transit-text text-gray-700 leading-relaxed mb-4">
            {t("transit.text1")}
          </p>

          <p className="transit-text text-gray-700 leading-relaxed mb-4">
            {t("transit.text2")}
          </p>

          <h3 className="transit-title text-xl font-semibold text-[#f2692a] mb-4">
            {t("transit.section1_title")}
          </h3>

          <p className="transit-text text-gray-700 leading-relaxed mb-4">
            {t("transit.section1_intro")}
          </p>

          <h4 className="text-lg font-semibold text-gray-800 mb-2">
            {t("transit.t1_title")}
          </h4>
          <p className="transit-text text-gray-700 leading-relaxed mb-4">
            {t("transit.t1_text")}
          </p>

          <h4 className="text-lg font-semibold text-gray-800 mb-2">
            {t("transit.t2_title")}
          </h4>
          <p className="transit-text text-gray-700 leading-relaxed mb-4">
            {t("transit.t2_text")}
          </p>

          <p className="transit-text text-gray-700 leading-relaxed mb-6">
            {t("transit.t2_countries")}
          </p>

          <h3 className="transit-title text-xl font-semibold text-[#f2692a] mb-4">
            {t("transit.section2_title")}
          </h3>

          <p className="transit-text text-gray-700 leading-relaxed mb-6">
            {t("transit.section2_text")}
          </p>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="transit-sidebar">
          <ServicesSidebar />
        </div>
      </div>
    </section>
  );
}