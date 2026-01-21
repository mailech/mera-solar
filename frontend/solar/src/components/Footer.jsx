import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import '../styles/Footer.css';
import logo from '../assets/logo.png';

const Footer = () => {
    const location = useLocation();
    const showCta = location.pathname !== '/projects' && location.pathname !== '/contact' && location.pathname !== '/services';

    return (
        <footer className="footer-section">
            <div className="container">
                {/* Floating CTA Box */}
                {showCta && (
                    <div className="footer-cta fade-in">
                        <div>
                            <h2>Ready to make the switch?</h2>
                            <p>Get a free quote today and start your journey to energy independence.</p>
                        </div>
                        <div className="cta-input-group">
                            <input type="email" placeholder="Enter your email" />
                            <button className="btn btn-primary">Submit <ArrowRight size={18} /></button>
                        </div>
                    </div>
                )}

                <div className="footer-content">
                    <div className="footer-brand-col">
                        <Link to="/" className="footer-logo">
                            <div className="logo-icon-wrapper">
                                <img src={logo} alt="meraSolar Logo" className="logo-img" />
                            </div>
                            <span className="logo-text">mera<span className="logo-text-highlight">Solar</span></span>
                        </Link>
                        <p>
                            Empowering the world with sustainable energy solutions. Join the
                            revolution today.
                        </p>            <div className="social-links">
                            <a href="#"><Facebook size={20} /></a>
                            <a href="#"><Twitter size={20} /></a>
                            <a href="#"><Instagram size={20} /></a>
                            <a href="#"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h4>Company</h4>
                        <Link to="/about">About Us</Link>
                        <a href="#">Careers</a>
                        <a href="#">Partners</a>
                        <Link to="/contact">Contact</Link>
                    </div>

                    <div className="footer-col">
                        <h4>Services</h4>
                        <a href="#">Residential</a>
                        <a href="#">Commercial</a>
                        <a href="#">Maintenance</a>
                        <a href="#">Consulting</a>
                    </div>

                    <div className="footer-col">
                        <h4>Resources</h4>
                        <a href="#">Blog</a>
                        <a href="#">Support</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>

                <div className="footer-bottom text-center">
                    <p>&copy; 2026 meraSolar. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
