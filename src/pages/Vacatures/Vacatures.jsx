import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Vacatures = () => {
  return (
    <section className="bg-gray-50 min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Tiêu đề */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#0d1b2a] mb-6">
          Vacatures
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Wil jij deel uitmaken van een groeiend team dat gespecialiseerd is in douane- en logistieke diensten? 
          Bekijk onze openstaande functies hieronder en solliciteer vandaag nog!
        </p>

        {/* Danh sách công việc */}
        <div className="grid md:grid-cols-2 gap-8 text-left">
          {/* Job 1 */}
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-[#0d1b2a] mb-2">
              Douane Declarant
            </h3>
            <p className="text-gray-600 mb-4">
              Verantwoordelijk voor het opstellen en indienen van douanedocumenten voor import en export.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-[#0d1b2a] font-semibold hover:text-[#1b263b] transition"
            >
              Meer informatie
              <ChevronRight size={18} />
            </Link>
          </div>

          {/* Job 2 */}
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-[#0d1b2a] mb-2">
              Logistiek Coördinator
            </h3>
            <p className="text-gray-600 mb-4">
              Beheer de dagelijkse logistieke operaties en werk samen met internationale partners.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-[#0d1b2a] font-semibold hover:text-[#1b263b] transition"
            >
              Meer informatie
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>

        {/* Nút chung cuối trang */}
        <div className="mt-16">
          <Link
            to="/contact"
            className="bg-[#0d1b2a] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#1b263b] transition inline-flex items-center gap-2"
          >
            Solliciteer nu
            <ChevronRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Vacatures;
