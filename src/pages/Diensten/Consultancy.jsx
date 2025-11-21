"use client";

import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import ServicesSidebar from "../../components/Diensten/ServicesSidebar";
import { useTranslation } from "react-i18next";

export default function Consultancy() {
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

    sr.reveal(".consult-title", { delay: 200 });
    sr.reveal(".consult-text", { delay: 400 });
    sr.reveal(".consult-section", { interval: 150 });
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12">
        {/* LEFT CONTENT */}
        <div className="md:col-span-2">
          <h2 className="consult-title text-2xl md:text-3xl font-bold text-[#f2692a] mb-6">
            {t("consultancy.title")}
          </h2>

          <p className="consult-text text-gray-700 leading-relaxed mb-4">
            {t("consultancy.intro")}
          </p>

          <div className="consult-section mt-10">
            <h3 className="text-xl font-semibold text-[#f2692a] mb-3">
              {t("consultancy.section1_title")}
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              {t("consultancy.section1_text")}
            </p>
          </div>

          <div className="consult-section mt-10">
            <h3 className="text-xl font-semibold text-[#f2692a] mb-3">
              {t("consultancy.section2_title")}
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              {t("consultancy.section2_text")}
            </p>
          </div>

          <div className="consult-section mt-10">
            <h3 className="text-xl font-semibold text-[#f2692a] mb-3">
              {t("consultancy.section3_title")}
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              {t("consultancy.section3_text")}
            </p>
          </div>

          <div className="consult-section mt-10">
            <h3 className="text-xl font-semibold text-[#f2692a] mb-3">
              {t("consultancy.section4_title")}
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              {t("consultancy.section4_text")}
            </p>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div>
          <ServicesSidebar />
        </div>
      </div>
    </section>
  );
}