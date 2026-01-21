import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import '../styles/Features.css';
import technicianImg from '../assets/technician.png';

const featuresList = [
    { title: 'The Best Quality', desc: 'We use Tier-1 solar panels guaranteed to last 25+ years.' },
    { title: 'Save Money', desc: 'Reduce your electricity bills by up to 90% immediately.' },
    { title: 'Eco Friendly', desc: 'Reduce your carbon footprint and help save the planet.' },
];

const Features = () => {
    return (
        <section className="section-padding features-section" id="about">
            <div className="container features-container">
                <div className="features-content">
                    <span className="section-subtitle">Why Choose Us</span>
                    <h2 className="section-title">Leading the Way in <br /> <span className="text-highlight">Clean Energy Innovation</span></h2>
                    <p className="features-desc">
                        We are committed to providing the most efficient and sustainable energy solutions.
                        Our advanced technology ensures you get the most out of every ray of sunshine.
                    </p>

                    <div className="features-list">
                        {featuresList.map((item, index) => (
                            <div className="feature-item" key={index}>
                                <div className="feature-icon">
                                    <CheckCircle2 color="#00D084" size={20} />
                                </div>
                                <div>
                                    <h4>{item.title}</h4>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="btn btn-primary" style={{ marginTop: '32px' }}>More About Us</button>
                </div>

                <div className="features-image-wrapper">
                    <img src={technicianImg} alt="Solar Technician" className="features-img" />
                    <div className="experience-badge">
                        <span className="exp-number">25K</span>
                        <span className="exp-text">Installations Completed</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
