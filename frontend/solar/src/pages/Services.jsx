import React, { useEffect } from 'react';
import {
    Home,
    Building2,
    Wrench,
    Battery,
    Zap,
    Activity,
    ArrowRight,
    Leaf,
    DollarSign,
    ShieldCheck,
    Phone,
    FileText,
    PenTool,
    HardHat,
    LayoutGrid,
    Wifi,
    UserCog,
    Headset
} from 'lucide-react';
import '../styles/ServicesPage.css';
import ResImage from '../assets/residential-service.png';
import ComImage from '../assets/commercial-service.png';

const Services = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const services = [
        {
            icon: Home,
            title: 'Residential Solar Installation',
            desc: 'Custom solar systems designed for your home to maximize energy production and savings.',
            link: '#'
        },
        {
            icon: Building2,
            title: 'Commercial & Industrial',
            desc: 'Large-scale solar solutions for businesses to cut operating costs and improve sustainability.',
            link: '#'
        },
        {
            icon: PenTool,
            title: 'System Design & Engineering',
            desc: 'Professional engineering services for optimal system placement, efficiency, and safety.',
            link: '#'
        },
        {
            icon: Battery,
            title: 'Inverter & Battery Solutions',
            desc: 'Advanced energy storage systems for power backup and off-grid capabilities.',
            link: '#'
        },
        {
            icon: Wrench,
            title: 'HVAC & Maintenance',
            desc: 'Full-service maintenance plans and repairs to keep your system running at peak efficiency.',
            link: '#'
        },
        {
            icon: Activity,
            title: 'Monitoring & Upgrades',
            desc: 'Smart monitoring systems to track performance and upgrades for older systems.',
            link: '#'
        },
    ];

    const processSteps = [
        { icon: Zap, title: 'Energy Consumption', desc: 'We analyze your current power usage.' },
        { icon: FileText, title: 'Site Survey', desc: 'Our experts survey your property.' },
        { icon: PenTool, title: 'System Design', desc: 'Engineers design the perfect system.' },
        { icon: HardHat, title: 'Installation', desc: 'Fast, safe, and clean setup.' },
        { icon: Wrench, title: 'Maintenance', desc: '24/7 support and monitoring.' }, // Using Wrench again as placeholder if needed or maybe ShieldCheck
    ];

    return (
        <div className="services-page">
            {/* Hero Section */}
            <section className="services-hero">
                <div className="container">
                    <div className="breadcrumbs">Home / Services</div>
                    <h1>Complete Solar Solutions<br />From Design to Maintenance</h1>
                    <p>Comprehensive solar services for residential, commercial, and industrial clients. From initial consultation to lifetime support.</p>
                </div>
            </section>

            {/* Why SolarTech Services */}
            <section className="why-services section-padding">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2>Why SolarTech Services?</h2>
                        <p className="subtitle">We provide end-to-end solar energy solutions, managing every step from consultation to installation, maintenance, and support for a seamless experience.</p>
                    </div>

                    <div className="why-grid">
                        <div className="why-item">
                            <div className="icon-circle"><Leaf size={24} /></div>
                            <h4>Sustainable Energy</h4>
                        </div>
                        <div className="why-item">
                            <div className="icon-circle"><DollarSign size={24} /></div>
                            <h4>Cost Effective</h4>
                        </div>
                        <div className="why-item">
                            <div className="icon-circle"><ShieldCheck size={24} /></div>
                            <h4>Secure & Safe</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Services Grid */}
            <section className="core-services section-padding bg-light">
                <div className="container">
                    <div className="text-center mb-5">
                        <span className="section-label">Our Expertise</span>
                        <h2>Core Services</h2>
                    </div>

                    <div className="services-grid-main">
                        {services.map((service, index) => (
                            <div className="service-card-main" key={index}>
                                <div className="card-icon-box">
                                    <service.icon size={28} />
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                                <a href={service.link} className="learn-more">Learn One <ArrowRight size={14} /></a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Dual Banner Section - Updated to Separate Cards */}
            <section className="dual-banner-section section-padding">
                <div className="container">
                    <div className="dual-card-container">
                        {/* Residential Card */}
                        <div className="service-banner-card" style={{ backgroundImage: `url(${ResImage})` }}>
                            <div className="banner-overlay">
                                <div className="banner-content">
                                    <div className="banner-header">
                                        <Home size={32} className="banner-icon" />
                                        <h3>Residential</h3>
                                    </div>
                                    <ul className="banner-features">
                                        <li><ShieldCheck size={16} className="feature-icon" /> 3kW - 10kW Systems</li>
                                        <li><ShieldCheck size={16} className="feature-icon" /> Subsidy Support</li>
                                        <li><ShieldCheck size={16} className="feature-icon" /> Aesthetic Installation</li>
                                    </ul>
                                    <button className="btn-explore">Explore Residential</button>
                                </div>
                            </div>
                        </div>

                        {/* Commercial Card */}
                        <div className="service-banner-card" style={{ backgroundImage: `url(${ComImage})` }}>
                            <div className="banner-overlay">
                                <div className="banner-content">
                                    <div className="banner-header">
                                        <Building2 size={32} className="banner-icon" />
                                        <h3>Commercial</h3>
                                    </div>
                                    <ul className="banner-features">
                                        <li><ShieldCheck size={16} className="feature-icon" /> 50kW+ Custom Projects</li>
                                        <li><ShieldCheck size={16} className="feature-icon" /> Tax Depreciation Benefits</li>
                                        <li><ShieldCheck size={16} className="feature-icon" /> High ROI focus</li>
                                    </ul>
                                    <button className="btn-explore">Explore Commercial</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Process */}
            <section className="process-section section-padding">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2>Our Service Process</h2>
                        <p className="subtitle">Simple and transparent steps to go solar.</p>
                    </div>

                    <div className="process-timeline">
                        {processSteps.map((step, index) => (
                            <div className="process-step" key={index}>
                                <div className="step-icon-wrapper">
                                    <step.icon size={24} />
                                    <div className="step-accent"><Leaf size={10} fill="var(--primary-green)" /></div>
                                </div>
                                <h4>{step.title}</h4>
                                <p>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech & Why Us - "Ditto" Design */}
            <section className="tech-why-section section-padding">
                <div className="container">
                    <div className="tech-why-grid">
                        {/* Left: Tier 1 Tech */}
                        <div className="tech-side">
                            <h3 className="section-title-white">Tier-1 Technology</h3>
                            <p className="section-desc-grey">We partner with global leaders to bring you high-efficiency panels and smart inverters.</p>

                            <div className="tech-card-grid">
                                <div className="tech-card">
                                    <div className="tech-icon-box"><LayoutGrid size={24} /></div>
                                    <div>
                                        <h5>Monocrystalline</h5>
                                        <p>High Efficiency Panels</p>
                                    </div>
                                </div>
                                <div className="tech-card">
                                    <div className="tech-icon-box"><Zap size={24} /></div>
                                    <div>
                                        <h5>Smart Inverters</h5>
                                        <p>98% Efficiency</p>
                                    </div>
                                </div>
                                <div className="tech-card">
                                    <div className="tech-icon-box"><Wifi size={24} /></div>
                                    <div>
                                        <h5>Remote Monitor</h5>
                                        <p>App Connected</p>
                                    </div>
                                </div>
                                <div className="tech-card">
                                    <div className="tech-icon-box"><ShieldCheck size={24} /></div>
                                    <div>
                                        <h5>25-Year Warranty</h5>
                                        <p>Performance Guarantee</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Why Choose Us */}
                        <div className="why-side">
                            <h3 className="section-title-white">Why Choose Us?</h3>
                            <div className="why-list-container">
                                <div className="why-list-item">
                                    <div className="check-icon-circle"><UserCog size={20} /></div>
                                    <div>
                                        <h5>Experienced Engineers</h5>
                                        <p>Our team consists of certified professionals with over 10 years of experience.</p>
                                    </div>
                                </div>
                                <div className="why-list-item">
                                    <div className="check-icon-circle"><DollarSign size={20} /></div>
                                    <div>
                                        <h5>Transparent Pricing</h5>
                                        <p>No hidden costs. We provide detailed quotations with ROI calculations.</p>
                                    </div>
                                </div>
                                <div className="why-list-item">
                                    <div className="check-icon-circle"><Headset size={20} /></div>
                                    <div>
                                        <h5>Dedicated Support</h5>
                                        <p>Our customer support team is available to assist you post-installation.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="bottom-cta-section section-padding">
                <div className="container">
                    <div className="cta-box">
                        <div className="cta-content-text">
                            <h2>Looking for Reliable Solar Services?</h2>
                            <p>Start your journey towards energy independence today. Get a custom design and quote tailored to your needs.</p>
                        </div>
                        <div className="cta-buttons">
                            <button className="btn-primary-green">Get a Free Quote</button>
                            <button className="btn-outline-dark-bg">Book Site Visit</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
