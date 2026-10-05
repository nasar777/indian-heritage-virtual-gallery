// Home page — craft-focused virtual gallery landing page

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Footer from '../components/Footer';
import '../styles/home.css';

const SLIDES = [
  {
    bg: 'https://images.unsplash.com/photo-1737888828619-96e0f50302f4?auto=format&fit=crop&w=1920&q=80',
    label: 'Indian Hand Block Printing',
  },
  {
    bg: 'https://upload.wikimedia.org/wikipedia/commons/d/dc/Woman_doing_Block_Printing_at_Bagru_village%2C_Jaipur%2C_India.jpg',
    label: 'Bagru Hand Block Printing — Rajasthan',
  }
  
];

export default function Home() {
  const [slide, setSlide] = useState(0);

  // Auto-advance slideshow every 5 seconds
  useEffect(() => {
    const id = setInterval(() => {
      setSlide((s) => (s + 1) % SLIDES.length);
    }, 5000);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="home-page">

      {/* ── Hero / Landing Page ── */}
      <section className="hero">

        {/* Background slides */}
        <div className="hero-slides">
          {SLIDES.map((s, i) => (
            <div
              key={i}
              className={`hero-slide ${
                i === slide ? 'active' : ''
              }`}
              style={{
                backgroundImage: `url(${s.bg})`,
              }}
            />
          ))}
        </div>

        {/* Dark overlay */}
        <div className="hero-overlay" />

        {/* Main content */}
        <div className="hero-content">

          <div className="hero-badge">
            ✦ INDIAN HERITAGE VIRTUAL GALLERY ✦
          </div>

          <h1 className="hero-title">
            Explore India's
            <br />
            <span>Living Crafts</span>
          </h1>

          <p className="hero-subtitle">
            Discover India's traditional crafts, textiles, and
            hand-block printing through an immersive virtual
            gallery experience.
          </p>

          {/* ONLY CTA */}
          <div className="hero-buttons">
            <Link
              to="/museum"
              className="btn btn-primary"
            >
              🏛️ Enter the Virtual Gallery
            </Link>
          </div>

        </div>

      </section>

      <Footer />

    </div>
  );
}