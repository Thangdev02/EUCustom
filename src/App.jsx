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
import Vacatures from "./pages/Vacatures/Vacatures"


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
        <Route path="/contact" element={<Contact />} />
        <Route path="/vacatures" element={<Vacatures />} />
      </Routes>
      <Footer />

    </Router>
    </main>
  )
}
