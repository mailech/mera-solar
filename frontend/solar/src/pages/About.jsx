import React from 'react';
import '../styles/About.css';
import { Shield, Award, Lightbulb, Users, Globe, Leaf, ArrowRight, Zap, Target } from 'lucide-react';

// Using placeholders for team/timeline if specific assets aren't ready, but structure is key.

const About = () => {
    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="about-hero">
                <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop" alt="Solar Farm" className="about-hero-bg" />
                <div className="about-hero-overlay"></div>
                <div className="container about-hero-content">
                    <span className="breadcrumb"><a href="/">Home</a> / About Us</span>
                    <h1>Driving a <span className="highlight">Sustainable</span><br />Future with Solar Power</h1>
                    <p>Empowering lives and businesses with clean, renewable energy <br />solutions that protect our planet and reduce costs.</p>
                </div>
            </section>

            {/* Mission & Stats Section */}
            <section className="about-mission container">
                <div className="mission-grid">
                    <div className="mission-text">
                        <span className="section-subtitle">Who We Are</span>
                        <h2>More than just a solar company.</h2>
                        <p>Established in 2010, meraSolar started with a simple belief: clean energy should be accessible to everyone. What began as a small team of passionate engineers has grown into a nationwide leader in renewable energy solutions.</p>
                        <p>We combine cutting-edge technology with uncompromised quality to deliver solar systems that stand the test of time. Our mission is to accelerate the world's transition to sustainable energy.</p>
                        <a href="#contact" className="btn-link">Read Our Story <ArrowRight size={16} /></a>
                    </div>
                    <div className="stats-grid-about">
                        <div className="stat-card-about">
                            <Users className="feature-icon-small" size={24} style={{ marginBottom: '10px' }} />
                            <h3>10k+</h3>
                            <p>Happy Customers</p>
                        </div>
                        <div className="stat-card-about">
                            <Zap className="feature-icon-small" size={24} style={{ marginBottom: '10px' }} />
                            <h3>50MW+</h3>
                            <p>Energy Generated</p>
                        </div>
                        <div className="stat-card-about">
                            <Globe className="feature-icon-small" size={24} style={{ marginBottom: '10px' }} />
                            <h3>15M+</h3>
                            <p>CO2e Offset (tons)</p>
                        </div>
                        <div className="stat-card-about highlight-card">
                            <h3>100%</h3>
                            <p>Service Guaranteed</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="about-values">
                <div className="container">
                    <div className="section-header">
                        <span className="section-subtitle">Our Core Values</span>
                        <h2>Guided by Purpose</h2>
                    </div>
                    <div className="values-grid">
                        <div className="value-card">
                            <div className="value-icon"><Shield size={24} /></div>
                            <h3>Integrity</h3>
                            <p>We build trust through transparency. No hidden fees, no shortcuts. Just honest energy advice.</p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon"><Award size={24} /></div>
                            <h3>Quality</h3>
                            <p>We only use Tier-1 solar panels and components, guaranteeing maximum efficiency and longevity.</p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon"><Lightbulb size={24} /></div>
                            <h3>Innovation</h3>
                            <p>We stay ahead of the curve, integrating the latest smart-home tech and battery storage solutions.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features / Why Choose Section */}
            <section className="about-why container">
                <div className="why-grid">
                    <div className="why-content">
                        <h2>Why Choose meraSolar?</h2>
                        <p>We handle everything from the initial consultation to the final switch-on, making your journey to solar simple and stress-free.</p>

                        <div className="why-features" style={{ marginTop: '40px' }}>
                            <div className="feature-item">
                                <h4><Target size={18} className="feature-icon-small" /> All-in-One Solution</h4>
                                <p style={{ fontSize: '14px', color: '#666' }}>Design, permits, installation, and monitoring.</p>
                            </div>
                            <div className="feature-item">
                                <h4><Shield size={18} className="feature-icon-small" /> 25-Year Warranty</h4>
                                <p style={{ fontSize: '14px', color: '#666' }}>Comprehensive coverage for peace of mind.</p>
                            </div>
                            <div className="feature-item">
                                <h4><Users size={18} className="feature-icon-small" /> Expert Team</h4>
                                <p style={{ fontSize: '14px', color: '#666' }}>Certified engineers with 10+ years experience.</p>
                            </div>
                            <div className="feature-item">
                                <h4><Award size={18} className="feature-icon-small" /> Top Tier Tech</h4>
                                <p style={{ fontSize: '14px', color: '#666' }}>Using the most efficient panels in the market.</p>
                            </div>
                        </div>
                    </div>
                    <div className="why-image" style={{ borderRadius: '24px', overflow: 'hidden', height: '400px' }}>
                        <img src="https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?q=80&w=2070&auto=format&fit=crop" alt="Solar Panels Detail" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="about-timeline">
                <div className="container">
                    <div className="section-header">
                        <span className="section-subtitle">Our Journey</span>
                        <h2>Breaking Down Barriers Since 2010</h2>
                    </div>
                    <div className="timeline-container">
                        <div className="timeline-line"></div>

                        <div className="timeline-item">
                            <div className="timeline-content">
                                <span className="timeline-year">2010</span>
                                <h3 className="timeline-title">The Spark</h3>
                                <p>Founded in a garage with a mission to make solar affordable for local homeowners.</p>
                            </div>
                            <div className="timeline-dot"></div>
                            <div className="timeline-img">
                                <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2026&auto=format&fit=crop" alt="Early Days" />
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-img">
                                <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1974&auto=format&fit=crop" alt="Expansion" />
                            </div>
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <span className="timeline-year">2016</span>
                                <h3 className="timeline-title">Going National</h3>
                                <p>Expanded operations to 15 states, installing our 5,000th residential system.</p>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-content">
                                <span className="timeline-year">2024</span>
                                <h3 className="timeline-title">Smart Energy Era</h3>
                                <p>Launched our proprietary AI-driven energy management app for total home control.</p>
                            </div>
                            <div className="timeline-dot"></div>
                            <div className="timeline-img">
                                <img src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2074&auto=format&fit=crop" alt="Modern Tech" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="about-team container">
                <div className="section-header">
                    <span className="section-subtitle">The Team</span>
                    <h2>Meet the Experts</h2>
                </div>
                <div className="team-grid">
                    <div className="team-card">
                        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop" alt="Sarah Jenkins" className="team-img" />
                        <div className="team-overlay">
                            <h3>Sarah Jenkins</h3>
                            <p>CEO & Founder</p>
                        </div>
                    </div>
                    <div className="team-card">
                        <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop" alt="David Chen" className="team-img" />
                        <div className="team-overlay">
                            <h3>David Chen</h3>
                            <p>Chief Engineer</p>
                        </div>
                    </div>
                    <div className="team-card">
                        <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop" alt="Maria Rodriguez" className="team-img" />
                        <div className="team-overlay">
                            <h3>Maria Rodriguez</h3>
                            <p>Head of design</p>
                        </div>
                    </div>
                    <div className="team-card">
                        <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop" alt="Michael Ross" className="team-img" />
                        <div className="team-overlay">
                            <h3>Michael Ross</h3>
                            <p>Lead Installer</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Commitment Section */}
            <div className="about-commitment">
                <Leaf size={40} color="var(--primary-green)" style={{ marginBottom: '20px' }} />
                <h2>Our Commitment to the Planet</h2>
                <p style={{ maxWidth: '600px', margin: '0 auto', color: '#666' }}>We don't just sell solar; we live it. Our goal is to offset 1 Billion tons of Carbon by 2030 through our installations and reforestation partnerships.</p>
                <div className="commitment-grid">
                    <div className="commitment-item">
                        <h4>3.5M</h4>
                        <p>Trees Planted</p>
                    </div>
                    <div className="commitment-item">
                        <h4>Zero</h4>
                        <p>Office Waste</p>
                    </div>
                    <div className="commitment-item">
                        <h4>100%</h4>
                        <p>Electric Fleet</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;
