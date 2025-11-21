"use client";

import { useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import ScrollReveal from "scrollreveal";
import { useTranslation } from "react-i18next";

export default function OverOns() {
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
            <div className="col-3">
              <img style={{ width: "100%", height: "80%" }} src="./over.jpg" alt="" />
            </div>
            <div className="col-9">
              <h2 className="reveal-top text-2xl md:text-3xl font-bold text-[#f2692a] mb-6">
                {t("overons.title")}
              </h2>

              <p className="reveal-left text-gray-700 leading-relaxed mb-6">
                {t("overons.intro")}
              </p>
            </div>
          </div>

          <h3 className="reveal-top text-xl md:text-2xl font-bold text-[#f2692a] mb-4">
            {t("overons.section1_title")}
          </h3>

          <p className="reveal-left text-gray-700 leading-relaxed mb-6">
            {t("overons.section1_text")}
          </p>

          <div className="reveal-bottom flex flex-wrap gap-8 my-8">
            <img src="/overbn.jpg" alt="WA Customs" className="rounded-lg shadow" style={{ width: "100%", height: "200px", objectFit: "cover" }} />
          </div>

          <h3 className="reveal-top text-xl md:text-2xl font-bold text-[#f2692a] mb-4">
            {t("overons.section2_title")}
          </h3>

          <p className="reveal-left text-gray-700 leading-relaxed mb-6">
            {t("overons.section2_text")}
          </p>
        </div>

        {/* RIGHT CONTACT FORM */}
        <div className="reveal-right bg-[#F4F4F7] p-8 rounded-lg shadow-sm">
          <h3 className="text-lg md:text-xl font-semibold mb-6 text-gray-800">
            {t("overons.form_title")}
          </h3>

          <Form className="space-y-4">
            <Form.Group controlId="formName">
              <Form.Control type="text" placeholder={t("overons.placeholder_name")} />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Control type="email" placeholder={t("overons.placeholder_email")} />
            </Form.Group>

            <Form.Group controlId="formSubject">
              <Form.Control type="text" placeholder={t("overons.placeholder_subject")} />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Control as="textarea" rows={5} placeholder={t("overons.placeholder_message")} />
            </Form.Group>

            <div className="text-right mt-4">
              <Button
                variant="dark"
                className="bg-[#0D1635] hover:bg-[#1E2A52] px-5 py-2 rounded-full text-white font-semibold"
              >
                {t("overons.send_button")}
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
}