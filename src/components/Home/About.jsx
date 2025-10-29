"use client";

import { motion } from "framer-motion";

export default function About() {
  // Animation variants (cho hiệu ứng reveal mượt)
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fade = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Tiêu đề chính */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-[#2B5A8E] text-center md:text-left"
        >
          Al uw douanezaken volledig verzorgd
        </motion.h2>

        {/* Phần giới thiệu và logo */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            className="md:col-span-2"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-gray-600 leading-relaxed mb-6">
              Douanezaken moeilijk en tijdrovend? Niet als u ze overlaat aan de experts van WA Customs. Ons team van
              douanespecialisten handelt al uw douanezaken af en zorgt dat alle benodigde documenten zoals inklaringen,
              oorsprongscertificaten en transportdocumenten tijdig en correct worden aangeleverd bij de douane. Zo weet
              u zeker dat uw zending altijd op de juiste manier en voorzien van de vereiste documentatie wordt verwerkt.
            </p>
            <a
              href="#"
              className="text-[#2B5A8E] font-semibold hover:underline inline-block"
            >
              Lees hier meer over ons bedrijf →
            </a>
          </motion.div>

          {/* Logo bên phải */}
          <motion.div
            className="flex flex-col gap-6 justify-center items-center"
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="w-72 h-48 bg-gray-100 rounded-lg flex items-center justify-center shadow-sm">
              <img
                src="/sectionlogo1.png"
                alt="KIWA Logo"
                className="w-72 h-48 object-contain"
              />
            </div>
          </motion.div>
        </div>

        {/* Phần 2 */}
        <motion.div
          className="border-t pt-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#2B5A8E]">
            Dé douanespecialisten voor Nederland en België
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            De experts van WA Customs beschikken over alle kennis en vergunningen die nodig zijn om uw import en export
            volgens alle geldende regels te laten verlopen. Ze kennen de procedures door en door waarom ze voor elke
            zending van en naar Nederland of België de juiste benodigde documenten kunnen aanmaken. Zo worden uw
            douanezaken snel, accuraat en tijdig afgehandeld.
          </p>
        </motion.div>

        {/* Phần 3 */}
        <motion.div
          className="border-t pt-12 mt-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#2B5A8E]">
            Advies en ondersteuning
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Daarnaast is WA Customs er voor u met advies over uw internationale handel en wanneer u vragen heeft over
            import- en exportprocessen of regelgeving. We ondersteunen u bij de voorbereiding en realisatie van invoer
            en uitvoer, ook als het gaat om uitzonderlijke, eenmalige zendingen. Met onze expertise vinden we overal een
            oplossing voor.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
