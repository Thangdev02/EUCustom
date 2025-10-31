"use client"

import { Phone, Mail, Facebook, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#282828] to-[#070707] text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo */}
          <div>
              <img src="/logofinal.png" alt=""  style={{width: "60%"}}/>
            </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4" style={{color: "#f16929"}}>CONTACTGEGEVENS</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone style={{color: "#106efd"}} size={18} />
                <a href="tel:+31076594921" style={{color: "inherit"}} className="hover:text-[#FFD700] transition">
                + 31 (0) 85 0669 200
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail style={{color: "#106efd"}} size={18} />
                <a href="mailto:info@wacustoms.nl" style={{color: "inherit"}} className="hover:text-[#FFD700] transition">
                  info@eucustoms.nl
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-bold text-lg mb-4" style={{color: "#f16929"}}>OPENINGSTIJDEN</h3>
            <div className="space-y-2 text-sm">
              <p>Ma t/m vr: 07:00 - 17:00</p>
              <p>Watermolen 35, 4751 VK, Oud-Gastel, Noord-Brabant

              </p>
            </div>
          </div>

          
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 pt-8 text-center text-sm text-gray-300">
          <p>Privacy verklaring - Algemene voorwaarden - Realisatie: Dlogie</p>
        </div>
      </div>
    </footer>
  )
}
