"use client";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import ServicesSidebar from "../../components/Diensten/ServicesSidebar";

export default function Transitdocumenten() {
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
            Alles over Transitdocumenten
          </h2>

          <p className="transit-text text-gray-700 leading-relaxed mb-4">
            Wanneer goederen de Europese Unie binnenkomen, bijvoorbeeld via de haven van Rotterdam,
            hoeven ze niet per definitie direct te worden aangegeven voor invoer. Ze kunnen vanaf
            Rotterdam worden doorgevoerd naar elke willekeurige locatie in de EU, mits ze onder
            douanetoezicht staan. Hiervoor is een NCTS Transitdocument nodig: een elektronische
            aangifte die toestemming geeft de zending verder te vervoeren.
          </p>

          <p className="transit-text text-gray-700 leading-relaxed mb-4">
            Het voordeel hiervan is dat de goederen niet bij elke landsgrens hoeven te worden
            ingeklaard; dit gebeurt pas als ze op hun eindbestemming arriveren. Met de juiste
            documentatie is het zelfs mogelijk om zendingen naar bepaalde landen die niet tot de EU
            behoren, zoals Noorwegen of Zwitserland, te vervoeren.
          </p>

          <h3 className="transit-title text-xl font-semibold text-[#f2692a] mb-4">
            Welk document voor welke bestemming
          </h3>

          <p className="transit-text text-gray-700 leading-relaxed mb-4">
            Voor het aanmaken van het juiste Transitdocument is het van belang te weten wat de
            eindbestemming van de zending is.
          </p>

          <h4 className="text-lg font-semibold text-gray-800 mb-2">T1-document</h4>
          <p className="transit-text text-gray-700 leading-relaxed mb-4">
            Met een T1-document kunnen goederen afkomstig uit een land buiten de EU worden vervoerd
            binnen de EU, ook als deze eerst worden opgeslagen in een{" "}
            <a href="#" className="text-[#f2692a] hover:underline font-medium">
              douane-entrepot
            </a>
            . De eventuele invoerrechten en BTW hoeven pas te worden betaald in het land van
            inklaring: de uiteindelijke bestemming dus.
          </p>

          <h4 className="text-lg font-semibold text-gray-800 mb-2">T2-document</h4>
          <p className="transit-text text-gray-700 leading-relaxed mb-4">
            Een T2-document geeft toestemming om goederen die al zijn ingeklaard in de EU of van
            Europese oorsprong zijn door te voeren naar of door het binnenland van landen die niet
            tot de EU behoren. Voorbeelden zijn transporten van Nederland naar Italië door
            Zwitserland of een zending naar een ontvanger in Noorwegen. De goederen worden pas
            ingeklaard bij de eindbestemming.
          </p>

          <p className="transit-text text-gray-700 leading-relaxed mb-6">
            Landen die bereikt of doorkruist kunnen worden met een T2-document zijn: IJsland,
            Noorwegen, Zwitserland, Liechtenstein, Turkije, Macedonië en Servië.
          </p>

          <h3 className="transit-title text-xl font-semibold text-[#f2692a] mb-4">
            Toegang tot het douanesysteem
          </h3>

          <p className="transit-text text-gray-700 leading-relaxed mb-6">
            Voor het opstellen van een Transitdocument is een douanevergunning nodig en toegang tot
            het elektronische NCTS-douanesysteem. WA Customs beschikt als erkend
            douane-expediteur uiteraard over deze vergunningen. Wilt u gebruik maken van een T1- of
            T2-document voor uw zending? Neem dan gerust{" "}
            <a href="#" className="text-[#f2692a] hover:underline font-medium">
              contact
            </a>{" "}
            met ons op. Wij helpen u graag op weg met de juiste documentatie en staan voor u klaar
            met advies of informatie over dit onderwerp.
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
