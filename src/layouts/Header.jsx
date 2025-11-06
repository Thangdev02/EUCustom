"use client";

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showOver, setShowOver] = useState(false);

  const diensten = [
    { title: "EXPORTEREN", link: "/diensten/exporteren" },
    { title: "IMPORTEREN", link: "/diensten/importeren" },
    { title: "CONSULTANCY", link: "/diensten/consultancy" },
    { title: "TRANSIT DOCUMENTEN", link: "/diensten/transitdocumenten" },
  ];

  const overons = [
    { title: "VACATURE", link: "/over-ons/vacature" },
  ];


  const navLinks = [
    { to: "/news", label: "NIEUWS" },
    { to: "/contact", label: "CONTACT" },
  ];

  return (
    <header className="bg-[white] text-orange-600 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img src="/logofinal.png" alt="Logo" className="w-14 h-14" />
        </div>
        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 font-semibold relative">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `pb-1 border-b-2 transition-all duration-200 ${isActive
                ? "border-[#122967] text-[#122967]"
                : "border-transparent text-orange-600 hover:text-[#122967]"
              }`
            }
          >
            HOME
          </NavLink>

          {/* Dropdown DIENSTEN */}
          <div
  className="relative"
  onMouseEnter={() => setShowServices(true)}
  onMouseLeave={() => setShowServices(false)}
>
  {/* Clickable main link */}
  <NavLink
    to="/diensten"
    className={`flex items-center gap-1 pb-1 border-b-2 transition-all duration-200 ${
      showServices
        ? "border-[#122967] text-[#122967]"
        : "border-transparent text-orange-600 hover:text-[#122967]"
    }`}
  >
    DIENSTEN
    <ChevronDown
      size={16}
      className={`transition-transform ${showServices ? "rotate-180" : "rotate-0"}`}
    />
  </NavLink>

  {/* Dropdown menu */}
  <div
    className={`absolute left-0 top-full mt-2 bg-white rounded-md shadow-lg transform transition-all duration-300 ease-out origin-top ${
      showServices
        ? "opacity-100 scale-y-100 visible"
        : "opacity-0 scale-y-0 invisible"
    }`}
  >
    <ul className="flex flex-col py-3 px-6 w-60">
      {diensten.map((item) => (
        <li key={item.link}>
          <NavLink
            to={item.link}
            className="block py-2 text-[#122967] text-sm hover:text-[#E96C27] transition-colors"
          >
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
</div>


          <div
            className="relative"
            onMouseEnter={() => setShowOver(true)}
            onMouseLeave={() => setShowOver(false)}
          >
            {/* Clickable main link */}
            <NavLink
              to="/over-ons"
              className={`flex items-center gap-1 pb-1 border-b-2 transition-all duration-200 ${showOver
                  ? "border-[#122967] text-[#122967]"
                  : "border-transparent text-orange-600 hover:text-[#122967]"
                }`}
            >
              OVER ONS
              <ChevronDown
                size={16}
                className={`transition-transform ${showOver ? "rotate-180" : "rotate-0"}`}
              />
            </NavLink>

            {/* Dropdown menu */}
            <div
              className={`absolute left-0 top-full mt-2 bg-white rounded-md shadow-lg transform transition-all duration-300 ease-out origin-top ${showOver
                  ? "opacity-100 scale-y-100 visible"
                  : "opacity-0 scale-y-0 invisible"
                }`}
            >
              <ul className="flex flex-col py-3 px-6 w-60">
                {overons.map((item) => (
                  <li key={item.link}>
                    <NavLink
                      to={item.link}
                      className="block py-2 text-[#122967] text-sm hover:text-[#E96C27] transition-colors"
                    >
                      {item.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* OTHER LINKS */}
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end
              className={({ isActive }) =>
                `pb-1 border-b-2 transition-all duration-200 ${isActive
                  ? "border-[#122967] text-[#122967]"
                  : "border-transparent text-orange-600 hover:text-[#122967]"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

          <button className="ml-4 bg-orange-600 text-[white] px-3 py-1 rounded-full text-sm font-semibold hover:bg-gray-100 transition">
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
        className={`md:hidden bg-[#122967] transition-all duration-300 overflow-hidden ${isOpen ? "max-h-96 py-4" : "max-h-0"
          }`}
      >
        <nav className="flex flex-col items-start gap-4 px-6 text-sm font-medium text-white">
          <NavLink to="/" end onClick={() => setIsOpen(false)}>
            HOME
          </NavLink>

          {/* Mobile dropdown */}
          <div className="w-full">
            <button
              onClick={() => setShowServices(!showServices)}
              className="w-full flex justify-between items-center"
            >
              DIENSTEN
              <ChevronDown
                size={16}
                className={`transition-transform ${showServices ? "rotate-180" : "rotate-0"
                  }`}
              />
            </button>

            {showServices && (
              <ul className="pl-4 mt-2 flex flex-col gap-2 text-white">
                {diensten.map((item) => (
                  <li key={item.link}>
                    <NavLink
                      to={item.link}
                      onClick={() => setIsOpen(false)}
                      className="block hover:text-[#F48425]"
                    >
                      {item.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className="hover:text-[#F48425]"
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
