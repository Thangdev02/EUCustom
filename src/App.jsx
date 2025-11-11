"use client"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import "./App.css"
import HomePage from "./pages/HomePage"
import Header from "./layouts/Header"
import Footer from "./layouts/Footer"
import News from "./pages/News/News"
import NewsDetail from "./pages/News/NewsDetail"
import 'bootstrap/dist/css/bootstrap.min.css';
import Diensten from "./pages/Diensten/Diensten"
import OverOns from "./pages/OverOns/OverOns"
import Contact from "./pages/Contact/Contact"
import Exporteren from "./pages/Diensten/Exporteren"
import Importeren from "./pages/Diensten/Importeren"
import Consultancy from "./pages/Diensten/Consultancy"
import Transitdocumenten from "./pages/Diensten/Transitdocumenten"
import Vacatures from "./pages/OverOns/Vacatures"
import DynamicContentPage from "./pages/DynamicContentPage"
import { dienstenPages } from "./data/dienstenData"


export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Router>
      <Header />
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/diensten" element={<Diensten />} />
        <Route path="/over-ons" element={<OverOns />} />
        <Route path="/over-ons/vacature" element={<Vacatures />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/diensten/exporteren" element={<Exporteren />} />
        <Route path="/diensten/importeren" element={<Importeren />} />
        <Route path="/diensten/consultancy" element={<Consultancy />} />
        <Route path="/diensten/transitdocumenten" element={<Transitdocumenten />} />
        {Object.values(dienstenPages).map((page) => (
              <Route
                key={page.slug}
                path={`/diensten/${page.slug}`}
                element={<DynamicContentPage pageData={page} />}
              />
            ))}
      </Routes>
      <Footer />

    </Router>
    </main>
  )
}
