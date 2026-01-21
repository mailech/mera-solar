import React from 'react';
import { ClipboardList, PenTool, Hammer, Power } from 'lucide-react';
import '../styles/Process.css';

const steps = [
    { icon: ClipboardList, title: 'Consultation', desc: 'Free site survey & energy analysis.' },
    { icon: PenTool, title: 'Design', desc: 'Custom engineering & permitting.' },
    { icon: Hammer, title: 'Installation', desc: '1-day installation by experts.' },
    { icon: Power, title: 'Activation', desc: 'Turn on the power & start saving.' },
];

const Process = () => {
    return (
        <section className="section-padding home-process-section">
            <div className="container">
                <div className="text-center" style={{ marginBottom: '60px' }}>
                    <span className="section-subtitle">How It Works</span>
                    <h2 className="section-title" style={{ color: 'var(--white)' }}>Your Journey to Solar Energy</h2>
                </div>

                <div className="process-steps">
                    {steps.map((step, index) => (
                        <div className="step-item" key={index}>
                            <div className="step-number">{index + 1}</div>
                            <div className="step-icon">
                                <step.icon size={28} color="#fff" />
                            </div>
                            <h3 className="step-title">{step.title}</h3>
                            <p className="step-desc">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
