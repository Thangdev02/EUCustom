"use client";

import { useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import ScrollReveal from "scrollreveal";
import { useTranslation } from "react-i18next";

export default function Vacatures() {
  const { t } = useTranslation();

  useEffect(() => {
    const sr = ScrollReveal({
      distance: "50px",
      duration: 1000,
      delay: 100,
      reset: false,
      easing: "ease-out",
    });

    sr.reveal(".reveal-top", { origin: "top", interval: 100 });
    sr.reveal(".reveal-left", { origin: "left", interval: 100 });
    sr.reveal(".reveal-right", { origin: "right", interval: 100 });
    sr.reveal(".reveal-bottom", { origin: "bottom", interval: 100 });
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12">
        {/* LEFT CONTENT */}
        <div className="md:col-span-2">
          <div className="row">
            <div className="col-9">
              <h3 className="reveal-top text-2xl md:text-3xl font-bold text-[#f2692a] mb-6">
                {t("vacature.title")}
              </h3>
            </div>
          </div>

          <h3 className="reveal-top text-xl md:text-2xl font-bold text-[#f2692a] mb-4">
            {t("vacature.subtitle")}
          </h3>

          <p className="reveal-left text-gray-700 leading-relaxed mb-6">
            {t("vacature.intro")}
          </p>

          <h3 className="reveal-top text-xl md:text-2xl font-bold text-[#f2692a] mb-4">
            {t("vacature.function_title")}
          </h3>
          <p className="reveal-left text-gray-700 leading-relaxed mb-6">
            {t("vacature.function_text1")}
          </p>
          <p className="reveal-left text-gray-700 leading-relaxed mb-6">
            {t("vacature.function_text2")}
          </p>
          <p className="reveal-left text-gray-700 leading-relaxed mb-6">
            {t("vacature.function_text3")}
          </p>
          <p className="reveal-left text-gray-700 leading-relaxed mb-6">
            {t("vacature.function_text4")}
          </p>

          <h3 className="reveal-top text-xl md:text-2xl font-bold text-[#f2692a] mb-4">
            {t("vacature.employer_title")}
          </h3>
          <p className="reveal-left text-gray-700 leading-relaxed mb-6">
            {t("vacature.employer_text1")}
          </p>
          <p className="reveal-left text-gray-700 leading-relaxed mb-6">
            {t("vacature.employer_text2")}
          </p>
        </div>

        {/* RIGHT CONTACT FORM */}
        <div className="reveal-right bg-[#F4F4F7] p-8 rounded-lg shadow-sm">
          <h3 className="text-lg md:text-xl font-semibold mb-6 text-gray-800">
            {t("vacature.form_title")}
          </h3>

          <Form className="space-y-4">
            <Form.Group controlId="formName">
              <Form.Control type="text" placeholder={t("vacature.placeholder_name")} />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Control type="email" placeholder={t("vacature.placeholder_email")} />
            </Form.Group>

            <Form.Group controlId="formSubject">
              <Form.Control type="text" placeholder={t("vacature.placeholder_subject")} />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Control as="textarea" rows={5} placeholder={t("vacature.placeholder_message")} />
            </Form.Group>

            <div className="text-right mt-4">
              <Button
                variant="dark"
                className="bg-[#0D1635] hover:bg-[#1E2A52] px-5 py-2 rounded-full text-white font-semibold"
              >
                {t("vacature.send_button")}
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
}