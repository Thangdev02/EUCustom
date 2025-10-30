"use client";

export default function ServicesSidebar() {
    return (
    <aside className="bg-[#F4F4F7] p-6 rounded-lg shadow-sm h-fit"> <h4 className="text-lg font-bold mb-4 text-[#0D1635]">Diensten</h4>
        <ul className="space-y-3">
            <li>
                <a href="#" className="text-[#f2692a] font-medium hover:underline">
                    Exporteren
                </a>
            </li>
            <li>
                <a href="#" className="text-[#f2692a] hover:underline">
                    EUR1
                </a>
            </li>
            <li>
                <a href="#" className="text-[#f2692a] hover:underline">
                    EUR-MED
                </a>
            </li>
            <li>
                <a href="#" className="text-[#f2692a] hover:underline">
                    Certificaat van Oorsprong
                </a>
            </li>
            <li>
                <a href="#" className="text-[#f2692a] hover:underline">
                    Keuring via e-CertNL
                </a>
            </li>
            <li>
                <a href="#" className="text-[#f2692a] hover:underline">
                    Fyto-certificaat
                </a>
            </li>
        </ul>

        <h4 className="text-lg font-bold mt-8 mb-4 text-[#0D1635]">Importeren</h4>
        <ul className="space-y-3">
            <li>
                <a href="#" className="text-[#0D1635] hover:underline">
                    Beperkt fiscaal vertegenwoordiger
                </a>
            </li>
            <li>
                <a href="#" className="text-[#0D1635] hover:underline">
                    GDB Keuring bij binnenkomst
                </a>
            </li>
        </ul>

        <h4 className="text-lg font-bold mt-8 mb-4 text-[#0D1635]">Transit documenten</h4>
        <ul className="space-y-3">
            <li>
                <a href="#" className="text-[#0D1635] hover:underline">
                    Consultancy
                </a>
            </li>
            <li>
                <a href="#" className="text-[#0D1635] hover:underline">
                    Actieve Veredeling
                </a>
            </li>
            <li>
                <a href="#" className="text-[#0D1635] hover:underline">
                    Beheren van een douane-entrepot
                </a>
            </li>
            <li>
                <a href="#" className="text-[#0D1635] hover:underline">
                    Douanevergunning aanvragen
                </a>
            </li>
            <li>
                <a href="#" className="text-[#0D1635] hover:underline">
                    Geregistreerd exporteur REX
                </a>
            </li>
            <li>
                <a href="#" className="text-[#0D1635] hover:underline">
                    Leveringsvoorwaarden – Incoterms
                </a>
            </li>
            <li>
                <a href="#" className="text-[#0D1635] hover:underline">
                    Passieve veredeling
                </a>
            </li>
        </ul>
    </aside>

    );
}
