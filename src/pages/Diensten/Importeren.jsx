"use client";

import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { Form, Button } from "react-bootstrap";
import ServicesSidebar from "../../components/Diensten/ServicesSidebar";

export default function Importeren() {
    useEffect(() => {
        const sr = ScrollReveal({
            origin: "bottom",
            distance: "40px",
            duration: 1000,
            delay: 200,
            easing: "ease-in-out",
            reset: false,
        });

        sr.reveal(".import-title", { delay: 200 });
        sr.reveal(".import-text", { delay: 400 });
        sr.reveal(".import-form", { delay: 600, origin: "right" });

    }, []);

    return (<section className="py-16 md:py-24 bg-white overflow-hidden"> <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12">
        {/* LEFT CONTENT */} <div className="md:col-span-2"> <h2 className="import-title text-2xl md:text-3xl font-bold text-[#f2692a] mb-6">
            Probleemloos importeren </h2>

            <p className="import-text text-gray-700 leading-relaxed mb-4">
                Wanneer u met uw Nederlandse onderneming goederen wil gaan importeren vanuit een land
                buiten de Europese Unie zijn er een aantal zaken waar u rekening mee moet houden. Zo is
                het verplicht om bij de Douane aan te geven welke producten u importeert en uit welk
                land deze afkomstig zijn. De herkomst en aard van de goederen bepalen ook mede welke
                documenten er vereist zijn om ze de Nederlandse grens over te krijgen. Daarnaast krijgt
                u te maken met BTW, invoerrechten en in sommige gevallen ook accijns, verbruiksbelasting
                of overige heffingen.
            </p>

            <h3 className="import-title text-xl font-semibold text-[#f2692a] mb-4">
                Invoeren in de EU
            </h3>

            <p className="import-text text-gray-700 leading-relaxed mb-4">
                Alle zendingen die van buiten de EU de grenzen van de handelsunie over gaan moeten worden
                aangegeven bij de Douane, zodat ze officieel kunnen worden toegelaten in het vrije verkeer.
                Of deze import is toegestaan is afhankelijk van het soort goederen in de zending en uit
                welk land deze afkomstig zijn: op sommige producten en landen staan restricties. Hier
                komen zaken als keuringplicht en goederencode om de hoek kijken. Ook moet u ervoor zorgen
                dat u van tevoren leveringsvoorwaarden{" "}
                <a href="#" className="text-[#f2692a] hover:underline font-medium">
                    (Incoterms)
                </a>{" "}
                opstelt in samenspraak met de afzender. Hierin staat wie verantwoordelijk is voor de
                inklaring en of de goederen bij u worden afgeleverd of dat u dit transport zelf moet regelen.
            </p>

            <h3 className="import-title text-xl font-semibold text-[#f2692a] mb-4">
                Zelf importeren?
            </h3>

            <p className="import-text text-gray-700 leading-relaxed mb-4">
                Importeren lijkt ogenschijnlijk eenvoudig, maar er komt vaak veel meer bij kijken dan op
                het eerste gezicht duidelijk is. Daarom is het raadzaam om hierover van tevoren informatie
                in te winnen bij een onafhankelijk douane-expediteur zoals WA Customs. Wij kijken graag
                met u mee en geven advies over hoe u uw import het beste kunt aanpakken. Heeft u geen
                tijd om zelf de benodigde documentatie in orde te maken of is uw import dusdanig
                ingewikkeld dat hiervoor meer expertise nodig is? Dan kunt u alle zaken omtrent de invoer
                ook volledig overlaten aan onze specialisten.
            </p>

            <h3 className="import-title text-xl font-semibold text-[#f2692a] mb-4">
                Vrijblijvend contact
            </h3>

            <p className="import-text text-gray-700 leading-relaxed mb-6">
                Heeft u vragen over uw import of gaat u voor het eerst goederen invoeren vanuit land
                buiten de EU? Neem gerust vrijblijvend{" "}
                <a href="#" className="text-[#f2692a] hover:underline font-medium">
                    contact
                </a>{" "}
                met ons op. We vertellen u graag wat we voor u kunnen betekenen.
            </p>

            <img
                src="/importship.jpg"
                alt="Import ship"
                className="rounded-lg shadow-md w-full"
            />
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="import-form">
            <ServicesSidebar />
        </div>
    </div>
    </section>

    );
}
