import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, ShoppingCart } from 'lucide-react';
import '../styles/Navbar.css';
import logo from '../assets/logo.png';

const Navbar = ({ theme, toggleTheme }) => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    // Check if we are on the homepage
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        // Initial check
        setScrolled(window.scrollY > 50);

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isLoggedIn = !!localStorage.getItem('token');

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <Link to="/" className="logo">
                    <div className="logo-icon-wrapper">
                        <img src={logo} alt="meraSolar Logo" className="logo-img" />
                    </div>
                    <span className="logo-text">mera<span className="logo-text-highlight">Solar</span></span>
                </Link>

                <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
                    <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                    <Link to="/shop" onClick={() => setMobileMenuOpen(false)}>Shop Packages</Link>
                    <Link to="/services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
                    <Link to="/projects" onClick={() => setMobileMenuOpen(false)}>Projects</Link>
                    <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                </div>

                <div className="nav-actions">
                    <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
                        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                    </button>
                    <Link to="/cart" className="cart-icon-btn">
                        <ShoppingCart size={20} />
                    </Link>
                    {isLoggedIn ? (
                        <Link to="/profile" className="btn btn-secondary" style={{ marginRight: '10px', textDecoration: 'none', padding: '0.5rem 1rem', borderRadius: '0.5rem', fontWeight: '500', color: 'var(--text-heading)' }}>Profile</Link>
                    ) : (
                        <Link to="/login" className="btn btn-secondary" style={{ marginRight: '10px', textDecoration: 'none', padding: '0.5rem 1rem', borderRadius: '0.5rem', fontWeight: '500', color: 'var(--text-heading)' }}>Login</Link>
                    )}
                    <button className="btn btn-primary desktop-cta">Get a Quote</button>
                    <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
