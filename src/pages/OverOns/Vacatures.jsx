"use client";

import { useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import ScrollReveal from "scrollreveal";

export default function Vacatures() {
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

                        <div className="col-9">
                            <h3 className="reveal-top text-2xl md:text-3xl font-bold text-[#f2692a] mb-6">
                                Onze actuele vacatures:

                            </h3>

                        </div>
                    </div>


                    <h3 className="reveal-top text-xl md:text-2xl font-bold text-[#f2692a] mb-4">
                        Ga met ons de grens over!
                    </h3>

                    <p className="reveal-left text-gray-700 leading-relaxed mb-6">
                        Als (junior) douanedeclarant bij WA Customs zorg je voor de juiste douanedocumenten die bedrijven nodig hebben voor hun import, export en internationale handel buiten de Europese Unie. Zonder deze documenten komen hun vrachten stil te staan aan de grens. Aan jou de taak om dat te voorkomen.
                    </p>

                    

                    <h3 className="reveal-top text-xl md:text-2xl font-bold text-[#f2692a] mb-4">
                        De functie
                    </h3>
                    <p className="reveal-left text-gray-700 leading-relaxed mb-6">
                        Een (junior) douanedeclarant is communicatief sterk in zowel Nederlands als Engels. Je kunt snel schakelen en handelen en weet goed taken in te delen op prioriteit. Binnen jouw takenpakket komt er van alles voorbij, waaronder het verzorgen van de aangifte van douanegoederen en oorsprongsdocumenten, aanvragen van vergunningen en berekenen van de tarieven van de goederen.
                    </p>
                    <p className="reveal-left text-gray-700 leading-relaxed mb-6">Werkervaring als declarant is mooi meegenomen, maar discipline en de motivatie om (bij) te leren vinden we het allerbelangrijkste. Uiteraard krijg je hierbij de begeleiding die nodig is om je functie goed onder de knie te krijgen. Ook bieden we je de mogelijkheid om relevante opleidingen te volgen zodat je je verder kunt ontwikkelen.</p>
                <p className="reveal-left text-gray-700 leading-relaxed mb-6">Omdat elke opdrachtgever of situatie weer anders is zijn je werkdagen vaak heel afwisselend: de ene keer kun je documenten haast op routine in orde maken, een andere keer heb je te maken met een uitzonderlijke vracht die om veel uitzoekwerk vraagt. En die afwisseling is wat de functie van douanedeclarant zo leuk maakt!</p>
               <p className="reveal-left text-gray-700 leading-relaxed mb-6">We werken met speciale software, dus is het prettig als je digitaal enigszins vaardig bent zodat je dit snel oppikt.</p>
               <h3 className="reveal-top text-xl md:text-2xl font-bold text-[#f2692a] mb-4">
               De werkgever
                    </h3>
                    <p  className="reveal-left text-gray-700 leading-relaxed mb-6">WA Customs is all-round specialist in douaneformaliteiten. Wij zorgen ervoor dat bedrijven probleemloos wereldwijd kunnen handelen. Ons kantoor op Hazeldonk (Breda) heeft een Nederlandse en een Belgische afdeling. Omdat WA Customs van maandag tot vrijdag is geopend van 7.00u tot 21.00u werken we met een wekelijks vast rooster waarin je dienst per dag anders kan zijn. Uiteraard proberen we rekening te houden met jouw wensen, maar flexibiliteit is een vereiste. Daarnaast werk je na de inwerkperiode over het algemeen veel zelfstandig, maar altijd binnen een klein en informeel team van collega’s.</p>
                    <p className="reveal-left text-gray-700 leading-relaxed mb-6">Zin om bij ons te komen werken? We zien je CV en motivatie graag tegemoet! Mailen doe je naar admin@wearecustoms.com.</p>
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
