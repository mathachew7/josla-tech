// File: src/layout/App.jsx
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/globals.css'

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-neutralLight to-white text-neutralDark">
      <Header />
      <main className="flex-grow">
        {/* Wrap sections with consistent spacing */}
        <div className="space-y-20">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}
