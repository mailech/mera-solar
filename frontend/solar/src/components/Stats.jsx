import React from 'react';
import { Users, Globe2, Award, Zap } from 'lucide-react';
import '../styles/Stats.css';

const statsData = [
    { icon: Users, value: '100k+', label: 'Happy Customers' },
    { icon: Globe2, value: '45', label: 'Countries Served' },
    { icon: Award, value: '100%', label: 'Satisfaction Rate' },
    { icon: Zap, value: '50MW+', label: 'Energy Generated' },
];

const Stats = () => {
    return (
        <section className="section-padding stats-section">
            <div className="container">
                <div className="partners-banner text-center">
                    <p>Trusted by 200+ companies worldwide</p>
                    <div className="partner-names">
                        <span>SolarFlex</span>
                        <span>EcoPower</span>
                        <span>GreenTech</span>
                        <span>SunLife</span>
                        <span>FutureEnergy</span>
                    </div>
                </div>

                <div className="stats-grid">
                    {statsData.map((stat, index) => (
                        <div className="stat-card" key={index}>
                            <div className="stat-icon-wrapper">
                                <stat.icon size={28} color="#00D084" />
                            </div>
                            <h3 className="stat-value">{stat.value}</h3>
                            <p className="stat-label">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
