"use client";

import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import ServicesSidebar from "../../components/Diensten/ServicesSidebar";

export default function Consultancy() {
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
            Consultancy
          </h2>

          <p className="consult-text text-gray-700 leading-relaxed mb-4">
            Douanezaken kunnen knap lastig zijn: de regels voor invoer en uitvoer verschillen vaak
            per land. Daarnaast veranderen ze regelmatig. Daarom staan de experts van WA Customs
            voor u klaar met consultancy op maat. Zij helpen u graag met bijvoorbeeld
            certificeringen, douanevergunningen, classificaties en andere douanedocumenten.
          </p>

          <div className="consult-section mt-10">
            <h3 className="text-xl font-semibold text-[#f2692a] mb-3">
              Douanevergunning
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Als ervaren douane-expediteur beschikt WA Customs uiteraard over alle benodigde{" "}
              <a href="#" className="text-[#f2692a] hover:underline font-medium">
                douanevergunningen
              </a>{" "}
              en hebben we toegang tot de (online) systemen hiervoor. Zo kunnen wij u helpen bij
              vrijwel alle douanezaken. Daarnaast adviseren we u graag over het aanvragen van een
              douanevergunning voor uw bedrijf of organisatie, zoals een vergunning{" "}
              <a href="#" className="text-[#f2692a] hover:underline font-medium">
                passieve
              </a>{" "}
              of{" "}
              <a href="#" className="text-[#f2692a] hover:underline font-medium">
                actieve veredeling
              </a>
              . De specialisten van WA Customs weten wat er nodig is voor het regelen van de aanvraag
              en waar u de vergunning aan kunt vragen. Ook kunnen ze helpen bij het in orde maken van
              de juiste documenten.
            </p>
          </div>

          <div className="consult-section mt-10">
            <h3 className="text-xl font-semibold text-[#f2692a] mb-3">
              Douanedocumenten
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Voor wie niet op regelmatige basis bezig is met douanezaken kan het aanvragen van de
              juiste documenten voor een zending een aardige uitdaging vormen. Gelukkig kan WA Customs
              uw organisatie hierbij ondersteunen. Wij zijn dagelijks bezig met het maken en opstellen
              van verschillende douanedocumenten voor bijvoorbeeld{" "}
              <a href="#" className="text-[#f2692a] hover:underline font-medium">
                import
              </a>
              ,{" "}
              <a href="#" className="text-[#f2692a] hover:underline font-medium">
                export
              </a>{" "}
              of het doorvoeren van producten. Wij weten precies welke vergunningen en applicaties nodig
              zijn voor de verschillende documenten en beschikken over de juiste kennis voor elke soort
              zending.
            </p>
          </div>

          <div className="consult-section mt-10">
            <h3 className="text-xl font-semibold text-[#f2692a] mb-3">
              Gericht advies
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              In welke sector uw organisatie ook actief is, WA Customs kan u gericht adviseren over de
              regelgeving en vereisten met betrekking tot uw internationale handel. Daarnaast volgen we
              actuele ontwikkelingen op de voet. Zo zijn we op de hoogte van{" "}
              <a href="#" className="text-[#f2692a] hover:underline font-medium">
                de meest recente Brexit-regelgeving
              </a>{" "}
              en weten we welke handelssancties er gelden tegenover bepaalde landen. Onze
              douane-experts houden hun kennis up-to-date door regelmatig relevante opleidingen en
              cursussen te volgen.
            </p>
          </div>

          <div className="consult-section mt-10">
            <h3 className="text-xl font-semibold text-[#f2692a] mb-3">
              Vragen?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Heeft u vragen over zaken waar u niet aan uitkomt, twijfel dan niet om contact met ons op
              te nemen. Zowel WA Customs Nederland als{" "}
              <a href="#" className="text-[#f2692a] hover:underline font-medium">
                WA Customs België
              </a>{" "}
              is geopend van maandag tot en met vrijdag tussen 7.00 en 21.00 en op zaterdag tussen
              10.00 en 14.00. U kunt ons bereiken via e-mail{" "}
              <a
                href="mailto:info@wacustoms.nl"
                className="text-[#f2692a] hover:underline font-medium"
              >
                info@wacustoms.nl
              </a>{" "}
              of via het{" "}
              <a href="#" className="text-[#f2692a] hover:underline font-medium">
                contactformulier
              </a>
              .
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
