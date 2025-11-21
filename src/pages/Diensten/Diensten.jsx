"use client";

import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { Form, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export default function Diensten() {
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

    sr.reveal(".diensten-title", { delay: 200 });
    sr.reveal(".diensten-text", { delay: 400 });
    sr.reveal(".diensten-list li", { interval: 100 });
    sr.reveal(".diensten-form", { delay: 600, origin: "right" });
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12">
        {/* LEFT CONTENT */}
        <div className="md:col-span-2">
          <h2 className="diensten-title text-2xl md:text-3xl font-bold text-[#f2692a] mb-6">
            {t("diensten.title")}
          </h2>

          <p className="diensten-text text-gray-700 leading-relaxed mb-4">
            {t("diensten.text1")}
          </p>

          <p className="diensten-text text-gray-700 leading-relaxed mb-6">
            {t("diensten.text2")}
          </p>

          <h3 className="diensten-title text-xl font-semibold text-[#f2692a] mb-4">
            {t("diensten.list_title")}
          </h3>

          <ul className="diensten-list list-disc list-inside text-gray-700 space-y-2 mb-8">
            <li>
              {t("diensten.list1")}
            </li>
            <li>
              {t("diensten.list2")}
            </li>
            <li>
              {t("diensten.list3")}
            </li>
            <li>
              {t("diensten.list4")}
            </li>
            <li>
              {t("diensten.list5")}
            </li>
            <li>
              {t("diensten.list6")}
            </li>
            <li>
              {t("diensten.list7")}
            </li>
            <li>{t("diensten.list8")}</li>
            <li>{t("diensten.list9")}</li>
            <li>{t("diensten.list10")}</li>
            <li>{t("diensten.list11")}</li>
          </ul>

          <p className="diensten-text text-gray-700">
            {t("diensten.contact_text")}{" "}
            <a
              href="#"
              className="text-[#f2692a] font-semibold hover:underline"
            >
              Neem contact met ons op.
            </a>
          </p>
        </div>

        {/* RIGHT FORM */}
        <div className="diensten-form bg-[#F4F4F7] p-8 rounded-lg shadow-sm">
          <h3 className="text-lg md:text-xl font-semibold mb-6 text-gray-800">
            {t("diensten.form_title")}
          </h3>

          <Form className="space-y-4">
            <Form.Group controlId="formName">
              <Form.Control type="text" placeholder={t("diensten.placeholder_name")} />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Control type="email" placeholder={t("diensten.placeholder_email")} />
            </Form.Group>

            <Form.Group controlId="formSubject">
              <Form.Control type="text" placeholder={t("diensten.placeholder_subject")} />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Control as="textarea" rows={5} placeholder={t("diensten.placeholder_message")} />
            </Form.Group>

            <div className="text-right mt-4">
              <Button
                variant="dark"
                className="bg-[#0D1635] hover:bg-[#1E2A52] px-5 py-2 rounded-full text-white font-semibold"
              >
                {t("diensten.send_button")}
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
}