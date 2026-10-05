// Navbar — simple navigation for the virtual museum

import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import '../styles/navbar.css';

export default function Navbar() {
  const location = useLocation();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Museum page has a solid navbar
  const isSolid = location.pathname === '/museum';

  // Change navbar when scrolling
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <nav className={`navbar ${scrolled || isSolid ? 'scrolled' : ''}`}>

      {/* Logo */}
      <Link to="/" className="navbar-logo">
        <span className="logo-icon">🏛️</span>
        <span>Indian Heritage</span>
      </Link>

      {/* Mobile hamburger */}
      <button
        className="hamburger"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      {/* Navigation */}
      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>

        {/* Home */}
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

      </ul>

    </nav>
  );
}