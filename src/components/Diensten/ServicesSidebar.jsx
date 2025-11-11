// src/components/Diensten/ServicesSidebar.jsx
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  {
    category: "Exporteren",
    items: [
      { label: "Exporteren", slug: "exporteren" },
      { label: "EUR1", slug: "eur1" },
      { label: "EUR-MED", slug: "eur-med" },
      { label: "Certificaat van Oorsprong", slug: "certificaat-van-oorsprong" },
      { label: "Keuring via e-CertNL", slug: "keuring-via-e-certnl" },
      { label: "Fyto-certificaat", slug: "fyto-certificaat" },
    ],
  },
  {
    category: "Importeren",
    items: [
      { label: "Beperkt fiscaal vertegenwoordiger", slug: "beperkt-fiscaal-vertegenwoordiger" },
      { label: "GDB Keuring bij binnenkomst", slug: "gdb-keuring-bij-binnenkomst" },
    ],
  },
  {
    category: "Transit documenten",
    items: [
      { label: "Consultancy", slug: "consultancy" },
      { label: "Actieve Veredeling", slug: "actieve-veredeling" },
      { label: "Beheren van een douane-entrepot", slug: "beheren-van-een-douane-entrepot" },
      { label: "Douanevergunning aanvragen", slug: "douanevergunning-aanvragen" },
      { label: "Geregistreerd exporteur REX", slug: "geregistreerd-exporteur-rex" },
      { label: "Leveringsvoorwaarden – Incoterms", slug: "leveringsvoorwaarden-incoterms" },
      { label: "Passieve veredeling", slug: "passieve-veredeling" },
    ],
  },
];

export default function ServicesSidebar() {
  const location = useLocation();
  const currentSlug = location.pathname.split("/").pop();

  return (
    <aside className="bg-[#F4F4F7] p-6 rounded-lg shadow-sm h-fit sticky top-24">
      {menuItems.map((group, idx) => (
        <div key={idx} className={idx > 0 ? "mt-8" : ""}>
          <h4 className="text-lg font-bold mb-4 text-[#0D1635]">{group.category}</h4>
          <ul className="space-y-3">
            {group.items.map((item) => {
              const isActive = currentSlug === item.slug;
              const textColor = group.category === "Exporteren" ? "#f2692a" : "#0D1635";

              return (
                <li key={item.slug}>
                  <Link
                    to={`/diensten/${item.slug}`}
                    className={`block font-medium transition-colors hover:underline ${
                      isActive ? "text-[#f2692a] font-bold underline" : ""
                    }`}
                    style={{ color: isActive ? "#f2692a" : textColor }}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </aside>
  );
}