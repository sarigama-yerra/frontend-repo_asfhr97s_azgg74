import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeatureGrid from './components/FeatureGrid'
import CTA from './components/CTA'
import Footer from './components/Footer'
import AdminLayout from './components/AdminLayout'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-black">
      <Routes>
        <Route
          index
          element={(
            <>
              <Navbar />
              <Hero />
              <FeatureGrid />
              <CTA />
              <Footer />
            </>
          )}
        />
        <Route path="/admin/*" element={<AdminLayout />} />
      </Routes>
    </div>
  )
}
