"use client";

import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { Form, Button } from "react-bootstrap";
import ServicesSidebar from "../../components/Diensten/ServicesSidebar";

export default function Exporteren() {
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

    return (<section className="py-16 md:py-24 bg-white overflow-hidden"> <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12">
        {/* LEFT CONTENT */} <div className="md:col-span-2"> <h2 className="export-title text-2xl md:text-3xl font-bold text-[#f2692a] mb-6">
            Probleemloos exporteren </h2>

            <p className="export-text text-gray-700 leading-relaxed mb-4">
                Wilt u goederen exporteren naar een bestemming buiten de Europese Unie?
                Dan zijn er bepaalde, specifieke zaken waar u rekening mee moet houden.
                Denk hierbij aan de benodigde bewijslast waarmee aangetoond wordt dat uw
                goederen naar een land buiten de EU geëxporteerd worden of, in het geval van
                dierlijke producten of plantmateriaal, de verplichte{" "}
                <a href="#" className="text-[#f2692a] hover:underline font-medium">
                    fytocertificaten
                </a>{" "}
                of een{" "}
                <a href="#" className="text-[#f2692a] hover:underline font-medium">
                    Certificaat van Oorsprong
                </a>
                . Hoe beter uw zending voorbereid is, hoe sneller en gemakkelijker de export plaatsvindt.
                WA Customs helpt u bij deze voorbereidingen met{" "}
                <a href="#" className="text-[#f2692a] hover:underline font-medium">
                    advies
                </a>{" "}
                en uitvoering zodat uw goederen niet stil komen te staan bij de grens.
            </p>

            <h3 className="export-title text-xl font-semibold text-[#f2692a] mb-4">
                Van belang bij export
            </h3>

            <p className="export-text text-gray-700 leading-relaxed mb-4">
                Wanneer u producten verkoopt naar een partner buiten de Europese Unie
                gebeurt dit tegen een BTW-percentage van 0 procent. Maar dit geldt enkel
                wanneer u ook daadwerkelijk kunt aantonen dat de goederen de EU hebben
                verlaten. Ook loont het om te werken met een{" "}
                <a href="#" className="text-[#f2692a] hover:underline font-medium">
                    EUR1
                </a>{" "}
                of{" "}
                <a href="#" className="text-[#f2692a] hover:underline font-medium">
                    EUR-MED
                </a>{" "}
                certificaat waarmee vrijstelling op invoerrechten kan worden verkregen.
                WA Customs verzorgt de documentatie die nodig is voor uw zending, koppelt
                bewijslast digitaal terug en adviseert u graag over douanezaken.
            </p>

            <h3 className="export-title text-xl font-semibold text-[#f2692a] mb-4">
                Uitzonderingen en restricties
            </h3>

            <p className="export-text text-gray-700 leading-relaxed mb-4">
                Zoveel landen, zoveel regels. Voor uw export is het van belang goed te weten
                welke aanvullende documenten nodig zijn voor het specifieke land van bestemming.
                Zo stelt het Verenigd Koninkrijk sinds de{" "}
                <a href="#" className="text-[#f2692a] hover:underline font-medium">
                    Brexit
                </a>{" "}
                bepaalde eisen aan verschillende producten. Deze zijn anders dan de vereisten
                voor bijvoorbeeld Zwitserland of Japan. Daarnaast zijn er ook landen waarvoor
                restricties zijn ingesteld vanwege militaire sancties. Dankzij de expertise van
                WA Customs voorkomt u problemen aan de grens en weet u zeker dat uw export aan
                alle geldende regels en normen voldoet.
            </p>

            <h3 className="export-title text-xl font-semibold text-[#f2692a] mb-4">
                Vrijblijvend contact
            </h3>

            <p className="export-text text-gray-700 leading-relaxed mb-6">
                Heeft u vragen over uw export of gaat u voor het eerst goederen uitvoeren naar
                een bestemming buiten de EU? Neem gerust vrijblijvend{" "}
                <a href="#" className="text-[#f2692a] hover:underline font-medium">
                    contact
                </a>{" "}
                met ons op. We vertellen u graag wat we voor u kunnen betekenen.
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
