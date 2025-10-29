"use client";

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "HOME" },
    { to: "/diensten", label: "DIENSTEN" },
    { to: "/over-ons", label: "OVER ONS" },
    { to: "/news", label: "NIEUWS" },
    { to: "/contact", label: "CONTACT" },
  ];

  return (
    <header className="bg-gradient-to-r from-[#f48425] to-[#f1672a] text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center border-4 border-[#E63946] shadow-sm">
            <span className="text-[#E63946] font-extrabold text-xl">EU</span>
          </div>
          <span className="hidden sm:inline font-bold text-xl tracking-wide">
            CUSTOMS
          </span>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 font-semibold">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end
              className={({ isActive }) =>
                `relative transition-all duration-200 ${
                  isActive
                    ? "text-[#122967] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-[#122967]"
                    : "text-white hover:text-[#122967]"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

          <button className="ml-4 bg-white text-[#2B5A8E] px-3 py-1 rounded-full text-sm font-semibold hover:bg-gray-100 transition">
            EN
          </button>
        </nav>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden bg-[#1A2E57] transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col items-start gap-4 px-6 text-sm font-medium">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? "text-[#FFD700]"
                    : "text-white hover:text-[#FFD700]"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <button className="mt-2 bg-white text-[#2B5A8E] px-3 py-1 rounded-full text-sm font-semibold hover:bg-gray-100 transition">
            EN
          </button>
        </nav>
      </div>
    </header>
  );
}
