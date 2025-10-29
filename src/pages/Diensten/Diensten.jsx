"use client";

import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { Form, Button } from "react-bootstrap";

export default function Diensten() {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "bottom", // hướng xuất hiện
      distance: "40px", // khoảng cách di chuyển
      duration: 1000, // thời gian (ms)
      delay: 200,
      easing: "ease-in-out",
      reset: false, // true = chạy lại mỗi khi scroll
    });

    // Reveal từng phần
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
            Hoe kan EU Customs u helpen?
          </h2>

          <p className="diensten-text text-gray-700 leading-relaxed mb-4">
            EU Customs helpt bij de vakkundige afwikkeling van alle denkbare
            douaneformaliteiten. Onze douanespecialisten in Nederland en België
            zorgen onder meer voor een snelle afhandeling van al uw import-, export-
            en doorvoeractiviteiten, helpen bij het aanmaken en aanvragen van
            vergunningen en documenten en staan u bij met advies over
            internationaal zaken doen.
          </p>

          <p className="diensten-text text-gray-700 leading-relaxed mb-6">
            Omdat wij over een AGS-(NL) en een PLDA-aansluiting (BE) beschikken,
            kunnen we uw aangifte direct bij de douane in het computersysteem zetten.
          </p>

          <h3 className="diensten-title text-xl font-semibold text-[#f2692a] mb-4">
            Ons pakket aan diensten bestaat onder andere uit:
          </h3>

          <ul className="diensten-list list-disc list-inside text-gray-700 space-y-2 mb-8">
            <li>
              In- en{" "}
              <a
                href="#"
                className="text-[#f2692a] hover:underline font-medium"
              >
                uitvoeraangiften
              </a>{" "}
              als directe vertegenwoordiger
            </li>
            <li>
              Voorschieten van invoerrechten, heffingen, accijnzen en BTW bij{" "}
              <a
                href="#"
                className="text-[#f2692a] hover:underline font-medium"
              >
                importdocumenten
              </a>
            </li>
            <li>
              Aanvragen van{" "}
              <a
                href="#"
                className="text-[#f2692a] hover:underline font-medium"
              >
                douanevergunningen
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#f2692a] hover:underline font-medium"
              >
                Passieve veredeling
              </a>
            </li>
            <li>
              Aanvragen en afgeven van certificaten (EUR1, EUR-MED, ATR, CvO)
            </li>
            <li>
              <a
                href="#"
                className="text-[#f2692a] hover:underline font-medium"
              >
                Advies
              </a>{" "}
              op gebied van douaneprocedures
            </li>
            <li>
              Optreden als{" "}
              <a
                href="#"
                className="text-[#f2692a] hover:underline font-medium"
              >
                beperkt fiscaalvertegenwoordiger
              </a>
            </li>
            <li>Oplossen van geschillen met de douane</li>
            <li>Bezwaaren beroepsprocedures</li>
            <li>
              Elektronische NCTS (Transit) T1/T2 documenten met borgstelling
            </li>
            <li>Verzorgen van GBD Keuring bij binnenkomst</li>
          </ul>

          <p className="diensten-text text-gray-700">
            Heeft u vragen over deze of de vele andere mogelijkheden?{" "}
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
            Vragen? Neem contact met ons op
          </h3>

          <Form className="space-y-4">
            <Form.Group controlId="formName">
              <Form.Control type="text" placeholder="Je naam" />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Control type="email" placeholder="Je e-mail" />
            </Form.Group>

            <Form.Group controlId="formSubject">
              <Form.Control type="text" placeholder="Onderwerp" />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Control as="textarea" rows={5} placeholder="Je bericht" />
            </Form.Group>

            <div className="text-right mt-4">
              <Button
                variant="dark"
                className="bg-[#0D1635] hover:bg-[#1E2A52] px-5 py-2 rounded-full text-white font-semibold"
              >
                Verzenden
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
}
