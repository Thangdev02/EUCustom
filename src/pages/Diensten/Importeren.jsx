"use client";

import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import ServicesSidebar from "../../components/Diensten/ServicesSidebar";
import { useTranslation } from "react-i18next";

export default function Importeren() {
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

    sr.reveal(".import-title", { delay: 200 });
    sr.reveal(".import-text", { delay: 400 });
    sr.reveal(".import-form", { delay: 600, origin: "right" });
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12">
        {/* LEFT CONTENT */}
        <div className="md:col-span-2">
          <h2 className="import-title text-2xl md:text-3xl font-bold text-[#f2692a] mb-6">
            {t("importeren.title")}
          </h2>

          <p className="import-text text-gray-700 leading-relaxed mb-4">
            {t("importeren.text1")}
          </p>

          <h3 className="import-title text-xl font-semibold text-[#f2692a] mb-4">
            {t("importeren.section1_title")}
          </h3>

          <p className="import-text text-gray-700 leading-relaxed mb-4">
            {t("importeren.section1_text")}
          </p>

          <h3 className="import-title text-xl font-semibold text-[#f2692a] mb-4">
            {t("importeren.section2_title")}
          </h3>

          <p className="import-text text-gray-700 leading-relaxed mb-4">
            {t("importeren.section2_text")}
          </p>

          <h3 className="import-title text-xl font-semibold text-[#f2692a] mb-4">
            {t("importeren.contact_title")}
          </h3>

          <p className="import-text text-gray-700 leading-relaxed mb-6">
            {t("importeren.contact_text")}
          </p>

          <img
            src="/importship.jpg"
            alt="Import ship"
            className="rounded-lg shadow-md w-full"
          />
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="import-form">
          <ServicesSidebar />
        </div>
      </div>
    </section>
  );
}