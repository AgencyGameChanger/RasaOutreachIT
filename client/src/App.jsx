import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import ThreeCard from './ThreeCard'
import Home from './pages/Home'
import Discover from './pages/Discover'
import HowItWorks from './pages/HowItWorks'
import Pricing from './pages/Pricing'
import Dashboard from './pages/Dashboard'

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul className="nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/discover">Discover</Link></li>
          <li><Link to="/how-it-works">How It Works</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <ThreeCard />
    </BrowserRouter>
  )
}
