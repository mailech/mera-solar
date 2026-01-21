import React from 'react';
import { Home, Building2, Wrench, Activity, ArrowRight } from 'lucide-react';
import '../styles/Services.css';

const services = [
    { icon: Home, title: 'Residential Solar', desc: 'Custom solar systems designed for your home to maximize savings.' },
    { icon: Building2, title: 'Commercial Solar', desc: 'Turnkey solar solutions for businesses to reduce operating costs.' },
    { icon: Wrench, title: 'Solar Repair', desc: 'Expert maintenance and repair services to keep your system peak.' },
    { icon: Activity, title: 'Monitoring', desc: '24/7 system monitoring to ensure optimal performance.' },
];

const Services = () => {
    return (
        <section className="section-padding services-section" id="services">
            <div className="container">
                <div className="text-center" style={{ marginBottom: '60px' }}>
                    <span className="section-subtitle">Our Expertise</span>
                    <h2 className="section-title">Comprehensive Solar Solutions</h2>
                    <p style={{ color: 'var(--text-light)', maxWidth: '600px', margin: '0 auto' }}>
                        From consultation to installation and maintenance, we handle everything for you.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div className="service-card" key={index}>
                            <div className="service-icon">
                                <service.icon size={24} color="#00D084" />
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                            <a href="#" className="service-link">
                                Learn More <ArrowRight size={16} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
