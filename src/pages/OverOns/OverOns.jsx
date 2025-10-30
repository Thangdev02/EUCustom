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
          <div className="row">
            <div className="col-3">
              <img style={{ width: "100%", height: "80%" }} src="./over.jpg" alt="" />
            </div>
            <div className="col-9">
          <h2 className="reveal-top text-2xl md:text-3xl font-bold text-[#f2692a] mb-6">
            EU Customs: expertise in douanezaken, gevestigd in Brabant
          </h2>

          <p className="reveal-left text-gray-700 leading-relaxed mb-6">
            EU Customs begeleidt al ruim 20 jaar bedrijven en organisaties bij alle douaneformaliteiten en transportdocumenten. Door onze strategische locatie op Hazeldonk, aan de Belgische grens bij Breda, bedienen wij eenvoudig klanten in Nederland en door heel Europa.
          </p>
          </div>
          </div>
        

          <h3 className="reveal-top text-xl md:text-2xl font-bold text-[#f2692a] mb-4">
            Één aanspreekpunt voor al uw douanezaken.
          </h3>

          <p className="reveal-left text-gray-700 leading-relaxed mb-6">
            Door continu te investeren in kennis en ervaring heeft
            <a href="#" className="text-[#f2692a] hover:underline font-medium mx-1">
             EU Customs
            </a>
             
              zich ontwikkeld tot een allround douane-expediteur voor alle sectoren.
              <br />
            Maar daar is het niet bij gebleven: sinds 2020 is het platform
            <a href="#" className="text-[#f2692a] hover:underline font-medium mx-1">
             We Are Customs actief.
            </a>
            Hierin is de specialistische kennis van
            <a href="#" className="text-[#f2692a] hover:underline font-medium mx-1">
             EU Customs
            </a>
              gecombineerd met de online DIY-service van YourCustoms en de douanesoftware van 
              <a href="#" className="text-[#f2692a] hover:underline font-medium mx-1">
              WAYC.
            </a>
            <br/>
            Via
            <a href="#" className="text-[#f2692a] hover:underline font-medium mx-1">
             We Are Customs
             </a>
              brengen we al onze expertise en diensten samen, zodat we voor elke douanevraag de meest passende oplossing kunnen bieden – afgestemd op uw onderneming.
          </p>

          <div className="reveal-bottom flex flex-wrap gap-8 my-8">
            <img src="/overbn.jpg" alt="WA Customs" className="rounded-lg shadow" style={{ width: "100%", height: "200px", objectFit: "cover" }} />
          </div>

          <h3 className="reveal-top text-xl md:text-2xl font-bold text-[#f2692a] mb-4">
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
