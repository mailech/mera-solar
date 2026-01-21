import React from 'react';
import { Star, Quote } from 'lucide-react';
import '../styles/Testimonials.css';

const testimonials = [
    { text: "meraSolar handled everything from permits to installation. My energy bill dropped by 80%!", author: "Sarah Jenkins", role: "Homeowner" },
    { text: "Great investment for our business. The team was professional and the installation was seamless.", author: "Mark Davison", role: "Business Owner" },
    { text: "I love being energy independent. The monitoring app is super easy to use.", author: "Emily Chen", role: "Tech Enthusiast" }
];

const Testimonials = () => {
    return (
        <section className="section-padding testimonials-section" id="testimonials">
            <div className="container">
                <div className="text-center" style={{ marginBottom: '30px' }}>
                    <span className="section-subtitle">Testimonials</span>
                    <h2 className="section-title">Stories of Energy Independence</h2>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((item, index) => (
                        <div className="testimonial-card" key={index}>
                            <div className="quote-icon">
                                <Quote size={24} color="#00D084" style={{ opacity: 0.4 }} />
                            </div>
                            <div className="stars">
                                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#FFD700" color="#FFD700" />)}
                            </div>
                            <p className="testimonial-text">"{item.text}"</p>
                            <div className="testimonial-author">
                                {/* Avatar Placeholder */}
                                <div className="author-avatar">{item.author[0]}</div>
                                <div>
                                    <h4>{item.author}</h4>
                                    <span>{item.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
