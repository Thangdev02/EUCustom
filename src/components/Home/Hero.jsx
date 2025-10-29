"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const slides = [
    {
      image: "/image1.jpg",
      title:
        "Onafhankelijk en betrouwbaar douane-expediteur voor Nederland en België",
      description:
        "Hulp nodig bij import, export of andere douanegerelateerde zaken? Het team van EU Customs staat voor u klaar met advies, hulp en de praktische uitvoering van uw internationale handel.",
    },
    {
      image: "/homeimg2.jpg",
      title:
        "Uw betrouwbare partner voor douaneafhandeling en logistieke oplossingen",
      description:
        "EU Customs biedt maatwerkoplossingen voor bedrijven die internationaal handelen, met expertise in douane, transport en compliance.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const variants = {
    enter: (direction) => ({
      opacity: 0,
      x: direction > 0 ? 100 : -100,
    }),
    center: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction < 0 ? 100 : -100,
      transition: { duration: 0.6, ease: "easeIn" },
    }),
  };

  const { title, description, image } = slides[currentSlide];

  return (
    <section className="relative h-[600px] md:h-[700px] text-white overflow-hidden">
      {/* Background transition */}
      <div className="absolute inset-0">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${image})`,
              filter: "brightness(0.6)",
            }}
          />
        </AnimatePresence>
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70"></div>

      {/* Slide content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 max-w-5xl mx-auto text-left">
        <motion.h1
          key={`title-${currentSlide}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg"
        >
          {title}
        </motion.h1>

        <motion.p
          key={`desc-${currentSlide}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-base md:text-lg mb-8 leading-relaxed text-gray-100"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Link
            to="/over-ons"
            className="bg-[#0d1b2a] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#1b263b] transition flex items-center gap-2 w-fit"
          >
            LEES MEER
            <ChevronRight size={20} />
          </Link>
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 p-2 rounded-full transition"
      >
        <ChevronLeft size={24} className="text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 p-2 rounded-full transition"
      >
        <ChevronRight size={24} className="text-white" />
      </button>
    </section>
  );
}
