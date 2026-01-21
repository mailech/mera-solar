import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import '../styles/Contact.css';

// Fix for default Leaflet marker icon missing assets in webpack/vite
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

// Sub-component to center map on new location
function CheckLocation({ center }) {
    const map = useMap();
    useEffect(() => {
        map.setView(center, map.getZoom());
    }, [center, map]);
    return null;
}

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        subject: 'General Inquiry',
        message: ''
    });

    const [position, setPosition] = useState([37.7749, -122.4194]); // Default: San Francisco
    const [hasLocation, setHasLocation] = useState(false);

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    setPosition([pos.coords.latitude, pos.coords.longitude]);
                    setHasLocation(true);
                },
                (err) => {
                    console.error("Location access denied or error:", err);
                }
            );
        }
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for contacting us! We will get back to you shortly.');
        setFormData({ fullName: '', email: '', subject: 'General Inquiry', message: '' });
    };

    return (
        <div className="contact-page">
            <div className="container">
                {/* Header Section */}
                <div className="contact-header">
                    <span className="section-subtitle">GET IN TOUCH</span>
                    <h1 className="contact-title">
                        Let's Power Your Future <br />
                        <span className="text-highlight">Together.</span>
                    </h1>
                    <p className="contact-desc">
                        Ready to make the switch to clean energy? Whether you have questions about installation, pricing, or savings, our team is here to help you every step of the way.
                    </p>
                </div>

                <div className="contact-content-grid">
                    {/* Left Column: Contact Info & Map */}
                    <div className="contact-info-column">
                        <h3 className="info-title">Contact Information</h3>

                        <div className="info-items">
                            <div className="info-item">
                                <div className="icon-box">
                                    <MapPin size={20} className="text-primary" />
                                </div>
                                <div>
                                    <h4>Our Location</h4>
                                    <p>{hasLocation ? "Your Current Location" : "Solar Tech HQ"}<br />
                                        {hasLocation ? `${position[0].toFixed(4)}, ${position[1].toFixed(4)}` : "Solar City, CA 90210"}
                                    </p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="icon-box">
                                    <Phone size={20} className="text-primary" />
                                </div>
                                <div>
                                    <h4>Phone Number</h4>
                                    <p>+1 (555) 012-3456</p>
                                    <span className="info-sub">Mon-Fri 9am-6pm PST</span>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="icon-box">
                                    <Mail size={20} className="text-primary" />
                                </div>
                                <div>
                                    <h4>Email Address</h4>
                                    <p>hello@solartech.energy</p>
                                </div>
                            </div>
                        </div>

                        <div className="map-container" style={{ height: '300px', zIndex: 0 }}>
                            <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={position}>
                                    <Popup>
                                        <div style={{ textAlign: 'center' }}>
                                            <strong>{hasLocation ? "Your Location" : "Solar Tech HQ"}</strong><br />
                                            <a
                                                href={`https://www.google.com/maps/search/?api=1&query=${position[0]},${position[1]}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{ color: '#00D084', textDecoration: 'underline', fontSize: '12px', display: 'block', marginTop: '4px' }}
                                            >
                                                Get Directions
                                            </a>
                                        </div>
                                    </Popup>
                                </Marker>
                                <CheckLocation center={position} />
                            </MapContainer>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="contact-form-column">
                        <div className="form-card">
                            <h3>Send us a Message</h3>
                            <p className="form-subtitle">Fill out the form below and we'll get back to you within 24 hours.</p>

                            <form onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="fullName">Full Name</label>
                                        <input
                                            type="text"
                                            id="fullName"
                                            name="fullName"
                                            placeholder="John Doe"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="john@example.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                    >
                                        <option>General Inquiry</option>
                                        <option>Installation Quote</option>
                                        <option>Maintenance Support</option>
                                        <option>Partnership</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="Tell us about your project or question..."
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary btn-block btn-lg">
                                    Send Message <Send size={18} />
                                </button>
                                <p className="form-footer">By sending this message, you agree to our <a href="#">Privacy Policy</a>.</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
