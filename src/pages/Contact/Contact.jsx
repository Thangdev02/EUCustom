"use client";

import { Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";

export default function Contact() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <motion.section
      className="py-16 md:py-24 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
        {/* LEFT MAP + ADDRESSES */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          {/* Map */}
          <motion.div
            className="w-full h-[350px] mb-8"
            variants={fadeUp}
            custom={0.2}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2473.481955553831!2d4.719!3d51.510!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6be0b1e5a3e05%3A0x78e0f4e4b7ff9b0f!2sTreeport%205%2C%204891%20PZ%20Rijsbergen%2C%20Netherlands!5e0!3m2!1sen!2snl!4v1700000000000"
              className="w-full h-full rounded-lg border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

          {/* Addresses */}
          <motion.div variants={fadeUp} custom={0.4}>
            <h3 className="text-lg md:text-xl font-bold text-[#f2692a] mb-3">
              Nederland
            </h3>
            <p className="text-gray-700 mb-1">Amsterdam</p>
            <p className="text-gray-700 mb-1">Oud-Gastel, North Brabant 4751 VK</p>
            <p className="text-gray-700 mb-1">
              Telefoon:{" "}
              <a
                href="tel:+31765964921"
                className="text-[#f2692a] hover:underline"
              >
                + 31 (0) 85 0669 200

              </a>
            </p>
            <p className="text-gray-700 mb-6">
              E-mail:{" "}
              <a
                href="mailto:infoeucustoms.nl"
                className="text-[#f2692a] hover:underline"
              >
                info@eucustoms.nl
              </a>
            </p>

            
          </motion.div>
        </motion.div>

        {/* RIGHT CONTACT FORM */}
        <motion.div
          className="bg-[#F4F4F7] p-8 rounded-lg shadow-sm"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.6}
        >
          <h3 className="text-lg md:text-xl font-semibold mb-6 text-gray-800">
            Of stuur direct een mail
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

            <div className="mt-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="dark"
                  className="bg-[#0D1635] hover:bg-[#1E2A52] px-6 py-2 rounded-full text-white font-semibold"
                >
                  Verzenden
                </Button>
              </motion.div>
            </div>
          </Form>
        </motion.div>
      </div>
    </motion.section>
  );
}
