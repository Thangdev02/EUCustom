"use client";

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showOver, setShowOver] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setShowLangMenu(false);
  };

  const diensten = [
    { title: t("header.exporteren"), link: "/diensten/exporteren" },
    { title: t("header.importeren"), link: "/diensten/importeren" },
    { title: t("header.consultancy"), link: "/diensten/consultancy" },
    { title: t("header.transitdocumenten"), link: "/diensten/transitdocumenten" },
  ];

  const overons = [
    { title: t("header.vacature"), link: "/over-ons/vacature" },
  ];

  const navLinks = [
    { to: "/news", label: t("header.nieuws") },
    { to: "/contact", label: t("header.contact") },
  ];

  const currentLang = i18n.language === "en" ? "EN" : "NL";
  const currentFlag = i18n.language === "en" ? "gb" : "nl";

  return (
    <header className="bg-white text-orange-600 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img src="/logofinal.png" alt="Logo" className="w-14 h-14" />
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 font-semibold">
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
            {t("header.home")}
          </NavLink>

          {/* Dropdown DIENSTEN */}
          <div
            className="relative"
            onMouseEnter={() => setShowServices(true)}
            onMouseLeave={() => setShowServices(false)}
          >
            <NavLink
              to="/diensten"
              className={`flex items-center gap-1 pb-1 border-b-2 transition-all duration-200 ${
                showServices
                  ? "border-[#122967] text-[#122967]"
                  : "border-transparent text-orange-600 hover:text-[#122967]"
              }`}
            >
              {t("header.diensten")}
              <ChevronDown
                size={16}
                className={`transition-transform ${showServices ? "rotate-180" : "rotate-0"}`}
              />
            </NavLink>

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

          {/* Dropdown OVER ONS */}
          <div
            className="relative"
            onMouseEnter={() => setShowOver(true)}
            onMouseLeave={() => setShowOver(false)}
          >
            <NavLink
              to="/over-ons"
              className={`flex items-center gap-1 pb-1 border-b-2 transition-all duration-200 ${
                showOver
                  ? "border-[#122967] text-[#122967]"
                  : "border-transparent text-orange-600 hover:text-[#122967]"
              }`}
            >
              {t("header.overons")}
              <ChevronDown
                size={16}
                className={`transition-transform ${showOver ? "rotate-180" : "rotate-0"}`}
              />
            </NavLink>

            <div
              className={`absolute left-0 top-full mt-2 bg-white rounded-md shadow-lg transform transition-all duration-300 ease-out origin-top ${
                showOver
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

          {/* PHẦN NGÔN NGỮ MỚI – SÁT BÊN PHẢI, ĐẸP NHƯ ẢNH */}
          <div className="relative ml-8">
            <button
              onClick={() => setShowLangMenu(!showLangMenu)}
              className="flex items-center gap-3 px-5 py-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-all font-bold text-[#122967] shadow-sm"
            >
              <span className={`fi fi-${currentFlag} fis text-2xl`} />
              <span className="tracking-wider">{currentLang}</span>
              <ChevronDown size={16} className={`transition-transform ${showLangMenu ? "rotate-180" : ""}`} />
            </button>

            {showLangMenu && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50">
                <button
                  onClick={() => changeLanguage("nl")}
                  className={`w-full flex items-center gap-4 px-6 py-4 hover:bg-orange-50 transition ${i18n.language === "nl" ? "bg-orange-100 font-bold" : ""}`}
                >
                  <span className="fi fi-nl fis text-3xl" />
                  <div className="text-left">
                    <div className="font-medium">Nederlands</div>
                    <div className="text-xs text-gray-500">Dutch</div>
                  </div>
                </button>
                <button
                  onClick={() => changeLanguage("en")}
                  className={`w-full flex items-center gap-4 px-6 py-4 hover:bg-orange-50 transition ${i18n.language === "en" ? "bg-orange-100 font-bold" : ""}`}
                >
                  <span className="fi fi-gb fis text-3xl" />
                  <div className="text-left">
                    <div className="font-medium">English</div>
                    <div className="text-xs text-gray-500">English</div>
                  </div>
                </button>
              </div>
            )}
          </div>
        </nav>

        {/* MOBILE TOGGLE */}
        <div className="flex items-center gap-4">
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU – GIỮ NGUYÊN */}
      <div
        className={`md:hidden bg-[#122967] transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col items-start gap-4 px-6 text-sm font-medium text-white">
          <NavLink to="/" end onClick={() => setIsOpen(false)}>
            {t("header.home")}
          </NavLink>

          <div className="w-full">
            <button
              onClick={() => setShowServices(!showServices)}
              className="w-full flex justify-between items-center py-2"
            >
              {t("header.diensten")}
              <ChevronDown
                size={16}
                className={`transition-transform ${showServices ? "rotate-180" : "rotate-0"}`}
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

          <div className="w-full">
            <button
              onClick={() => setShowOver(!showOver)}
              className="w-full flex justify-between items-center py-2"
            >
              {t("header.overons")}
              <ChevronDown
                size={16}
                className={`transition-transform ${showOver ? "rotate-180" : "rotate-0"}`}
              />
            </button>
            {showOver && (
              <ul className="pl-4 mt-2 flex flex-col gap-2 text-white">
                {overons.map((item) => (
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
        </nav>
      </div>
    </header>
  );
}