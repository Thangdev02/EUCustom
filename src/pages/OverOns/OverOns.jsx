"use client";

import { useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import ScrollReveal from "scrollreveal";

export default function OverOns() {
  useEffect(() => {
    // Cấu hình ScrollReveal
    const sr = ScrollReveal({
      distance: "50px",
      duration: 1000,
      delay: 100,
      reset: false, // không reset khi cuộn lại
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
          <h2 className="reveal-top text-2xl md:text-3xl font-bold text-[#2B5A8E] mb-6">
            EU Customs: dé douanespecialist in Breda
          </h2>

          <p className="reveal-left text-gray-700 leading-relaxed mb-6">
            Al ruim 20 jaar helpt WA Customs bedrijven en organisaties met hun
            douaneformaliteiten en andere transportdocumenten. Onze centrale
            ligging op Hazeldonk, aan de Belgische grens bij Breda, zorgt ervoor
            dat ons kantoor makkelijk bereikbaar is voor zowel de Nederlandse
            als de Belgische markt.
          </p>

          <h3 className="reveal-top text-xl md:text-2xl font-bold text-[#2B5A8E] mb-4">
            Alle douanezaken op 1 adres
          </h3>

          <p className="reveal-left text-gray-700 leading-relaxed mb-6">
            Door te investeren in kennis heeft EU Customs zich ontwikkeld tot
            allround douane-expediteur voor alle sectoren. En daar is het niet
            bij gebleven: sinds 2020 is het platform{" "}
            <a href="#" className="text-[#2B5A8E] hover:underline font-medium">
              We Are Customs
            </a>{" "}
            actief. Hier is de specialistische kennis van{" "}
            <a href="#" className="text-[#2B5A8E] hover:underline font-medium">
              EU Customs
            </a>{" "}
            gebundeld met de online DIY-service van{" "}
            <a href="#" className="text-[#2B5A8E] hover:underline font-medium">
              YourCustoms
            </a>{" "}
            en de douanesoftware van{" "}
            <a href="#" className="text-[#2B5A8E] hover:underline font-medium">
              WAYC
            </a>
            . Via We Are Customs komen al onze services samen en kunnen we voor
            elke douanevraag gericht kijken wat het beste bij u en uw
            onderneming past.
          </p>

          <div className="reveal-bottom flex flex-wrap gap-8 my-8">
            <img src="/overimage1.jpg" alt="WA Customs" className="w-62 h-auto rounded-lg shadow" />
          </div>

          <h3 className="reveal-top text-xl md:text-2xl font-bold text-[#2B5A8E] mb-4">
            Gespecialiseerd in service
          </h3>
          <p className="reveal-left text-gray-700 leading-relaxed mb-6">
            In de 25 jaar dat EU Customs – voorheen EU – nu bestaat
            zijn kennis en service tot speerpunten verheven. Onder leiding van
            Benny van Laerhoven is de voormalige eenmanszaak gegroeid tot een
            team van douane-expediteurs met elk hun eigen specialiteit.
            Daarnaast is er veel oog voor (aanvullende) opleidingen en
            technologische ontwikkeling. Zo kan EU Customs altijd maatwerk
            leveren en u snel van dienst zijn.
          </p>

          <h3 className="reveal-top text-xl md:text-2xl font-bold text-[#2B5A8E] mb-4">
            Ook actief in België
          </h3>
          <p className="reveal-right text-gray-700 leading-relaxed mb-6">
            EU Customs is er niet alleen voor Nederlandse bedrijven, maar heeft
            ook een kantoor in Hoogstraten. Als douane-expediteur in het
            grensgebied, vlakbij Antwerpen, biedt dit veel voordelen omdat we
            ook de Belgische markt kunnen bedienen. Op de{" "}
            <a href="#" className="text-[#2B5A8E] hover:underline font-medium">
              website
            </a>{" "}
            van onze Belgische collega’s vindt u hierover meer informatie.
          </p>

          <p className="reveal-bottom text-gray-700">
            Meer weten over onze diensten? Of heeft u een specifieke
            douanevraag? Neem gerust vrijblijvend{" "}
            <a href="#" className="text-[#2B5A8E] font-semibold hover:underline">
              contact
            </a>{" "}
            met ons op!
          </p>
        </div>

        {/* RIGHT CONTACT FORM */}
        <div className="reveal-right bg-[#F4F4F7] p-8 rounded-lg shadow-sm">
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
