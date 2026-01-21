import React from 'react';
import { Play } from 'lucide-react';
import QuoteCalculator from './QuoteCalculator';
import '../styles/Hero.css';
import heroBg from '../assets/hero-bg.png';

const Hero = () => {
    return (
        <>
            <section className="hero" id="home" style={{ backgroundImage: `url(${heroBg})` }}>
                <div className="hero-overlay"></div>
                <div className="container hero-container">
                    <div className="hero-content fade-in">
                        <span className="hero-badge">SUSTAINABLE</span>
                        <h1 className="hero-title">
                            Power Your Future with <br />
                            <span className="text-highlight">Solar Energy</span>
                        </h1>
                        <p className="hero-subtitle">
                            We provide clean, renewable energy solutions for homes and businesses.
                            Switch to solar and start saving today.
                        </p>
                        <div className="hero-actions">
                            <button className="btn btn-primary">Get Started</button>
                            <button className="btn btn-secondary">
                                <Play size={16} fill="white" /> Watch Video
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container relative-container">
                <QuoteCalculator />
            </div>
        </>
    );
};

export default Hero;
