"use client";

import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import ServicesSidebar from "../../components/Diensten/ServicesSidebar";
import { useTranslation } from "react-i18next";

export default function Exporteren() {
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

    sr.reveal(".export-title", { delay: 200 });
    sr.reveal(".export-text", { delay: 400 });
    sr.reveal(".export-list li", { interval: 100 });
    sr.reveal(".export-form", { delay: 600, origin: "right" });
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12">
        {/* LEFT CONTENT */}
        <div className="md:col-span-2">
          <h2 className="export-title text-2xl md:text-3xl font-bold text-[#f2692a] mb-6">
            {t("exporteren.title")}
          </h2>

          <p className="export-text text-gray-700 leading-relaxed mb-4">
            {t("exporteren.text1")}
          </p>

          <h3 className="export-title text-xl font-semibold text-[#f2692a] mb-4">
            {t("exporteren.important_title")}
          </h3>

          <p className="export-text text-gray-700 leading-relaxed mb-4">
            {t("exporteren.important_text")}
          </p>

          <h3 className="export-title text-xl font-semibold text-[#f2692a] mb-4">
            {t("exporteren.exceptions_title")}
          </h3>

          <p className="export-text text-gray-700 leading-relaxed mb-4">
            {t("exporteren.exceptions_text")}
          </p>

          <h3 className="export-title text-xl font-semibold text-[#f2692a] mb-4">
            {t("exporteren.contact_title")}
          </h3>

          <p className="export-text text-gray-700 leading-relaxed mb-6">
            {t("exporteren.contact_text")}
          </p>

          <img
            src="/container.jpg"
            alt="Export containers"
            className="rounded-lg shadow-md w-full"
          />
        </div>

        {/* RIGHT CONTACT FORM */}
        <div className="import-form">
          <ServicesSidebar />
        </div>
      </div>
    </section>
  );
}