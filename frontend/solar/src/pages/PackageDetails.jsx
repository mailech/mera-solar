import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import {
    Zap, Home, Sun, LayoutGrid, ShieldCheck,
    Wifi, CheckCircle, ArrowRight, MessageCircle, Info
} from 'lucide-react';
import '../styles/PackageDetails.css';

const PackageDetails = () => {
    // State simulating the configurator logic
    const [selectedCapacity, setSelectedCapacity] = useState('5kW');
    const [roofType, setRoofType] = useState('Pitched');
    const [addBattery, setAddBattery] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigate = useNavigate();

    // Price Calculation Logic (Mock)
    const basePrices = { '3kW': 180000, '5kW': 300000, '8kW': 480000, '10kW': 600000 };
    const basePrice = basePrices[selectedCapacity] || 300000;
    const installCost = 25000;
    const batteryCost = addBattery ? 150000 : 0;
    const subtotal = basePrice + installCost + batteryCost;
    const rebate = Math.round(subtotal * 0.30); // 30% Tax Credit
    const total = subtotal - rebate;

    const handleAddToCart = () => {
        const cartItem = {
            name: "Premium Home Solar System Kit",
            capacity: selectedCapacity,
            id: `#RES-${selectedCapacity}-2024`,
            roofType,
            hasBattery: addBattery,
            basePrice,
            installCost,
            batteryCost,
            subtotal,
            rebate,
            total,
            estimatedSavings: 1200 // Mock value
        };

        navigate('/cart', { state: { cartItem } });
    };

    return (
        <div className="package-details-page">
            {/* 1. Page Header Section */}
            <section className="package-header-section">
                <div className="container">
                    <div className="breadcrumbs">
                        <Link to="/">Home</Link> / <Link to="/shop">Shop</Link> / <span>Solar Packages</span>
                    </div>
                    <h1>Solar Energy Packages</h1>
                    <p>Customizable, efficient, and affordable solar solutions designed for maximum energy independence.</p>
                </div>
            </section>

            {/* 2. Product Details Section */}
            <section className="package-body-section">
                <div className="container details-grid">
                    {/* Left Column: Configurator */}
                    <div className="details-left">
                        {/* Capacity Selector */}
                        <div className="capacity-selector">
                            <span className="capacity-label">Select System Capacity</span>
                            <div className="capacity-options">
                                {['3kW', '5kW', '8kW', '10kW'].map(cap => (
                                    <button
                                        key={cap}
                                        className={`cap-btn ${selectedCapacity === cap ? 'active' : ''}`}
                                        onClick={() => setSelectedCapacity(cap)}
                                    >
                                        {selectedCapacity === cap && <Zap size={14} fill="currentColor" />}
                                        {cap} System
                                    </button>
                                ))}
                                <button className="cap-btn">Custom Size</button>
                            </div>
                        </div>

                        {/* Main Image */}
                        <div className="package-image-container">
                            <div className="badge-efficiency">
                                <Zap size={14} fill="currentColor" /> HIGH EFFICIENCY
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                                alt="Solar Roof Installation"
                            />
                        </div>

                        {/* Brand Selection */}
                        <div className="config-section">
                            <div className="config-row">
                                <div className="config-group">
                                    <label>Solar Panel Brand <span className="recommend-badge">Recommended</span></label>
                                    <select className="config-select">
                                        <option>Canadian Solar (450W Mono PERC)</option>
                                        <option>REC Alpha Pure (420W)</option>
                                        <option>Q.CELLS (400W)</option>
                                    </select>
                                </div>
                                <div className="config-group">
                                    <label>Inverter Brand <Info size={14} color="#aaa" /></label>
                                    <select className="config-select">
                                        <option>Huawei (SUN2000 Hybrid)</option>
                                        <option>Enphase IQ8 Microinverters</option>
                                        <option>SolarEdge Energy Hub</option>
                                    </select>
                                </div>
                            </div>

                            {/* Mounting & Battery */}
                            <div className="config-row">
                                <div className="config-group" style={{ gridColumn: 'span 2' }}>
                                    <label>Mounting Structure</label>
                                    <div className="mounting-options">
                                        <div
                                            className={`mount-btn ${roofType === 'Pitched' ? 'active' : ''}`}
                                            onClick={() => setRoofType('Pitched')}
                                        >
                                            Pitched Roof
                                            <span className="mount-sub">Standard Rail</span>
                                        </div>
                                        <div
                                            className={`mount-btn ${roofType === 'Flat' ? 'active' : ''}`}
                                            onClick={() => setRoofType('Flat')}
                                        >
                                            Flat Roof
                                            <span className="mount-sub">Tilt Kit</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Battery Add-on */}
                            <div
                                className={`battery-option ${addBattery ? 'active-border' : ''}`}
                                onClick={() => setAddBattery(!addBattery)}
                            >
                                <div className="battery-left">
                                    <input
                                        type="checkbox"
                                        checked={addBattery}
                                        readOnly
                                        style={{ width: '18px', height: '18px', accentColor: '#00D084' }}
                                    />
                                    <div>
                                        <div style={{ fontWeight: '600' }}>Include 5kWh Battery</div>
                                        <div style={{ fontSize: '12px', color: '#666' }}>Backup power during outages</div>
                                    </div>
                                </div>
                                <div className="battery-price">+₹1,50,000</div>
                            </div>
                        </div>

                        {/* What's in the bundle */}
                        <div className="bundle-features">
                            <h3 className="bundle-title">What's in the bundle?</h3>
                            <div className="feature-grid">
                                <div className="bundle-item">
                                    <div className="icon-bundle"><LayoutGrid size={24} /></div>
                                    <h4>12x Panels</h4>
                                    <p>Tier-1 Monocrystalline</p>
                                </div>
                                <div className="bundle-item">
                                    <div className="icon-bundle"><Zap size={24} /></div>
                                    <h4>1x Hybrid Inverter</h4>
                                    <p>{selectedCapacity} Capacity</p>
                                </div>
                                <div className="bundle-item">
                                    <div className="icon-bundle"><Home size={24} /></div>
                                    <h4>Mounting Kit</h4>
                                    <p>Aluminium Rails & Clamps</p>
                                </div>
                                <div className="bundle-item">
                                    <div className="icon-bundle"><Wifi size={24} /></div>
                                    <h4>WiFi Module</h4>
                                    <p>Smart App Monitoring</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Sticky Summary */}
                    <div className="details-right">
                        <div className="summary-card">
                            <h3 className="summary-header">Order Summary</h3>

                            <div className="summary-row">
                                <span>{selectedCapacity} Solar System Base</span>
                                <span>₹{basePrice.toLocaleString('en-IN')}</span>
                            </div>
                            <div className="summary-row">
                                <span>Installation (Est.)</span>
                                <span>₹{installCost.toLocaleString('en-IN')}</span>
                            </div>
                            {addBattery && (
                                <div className="summary-row">
                                    <span>5kWh Battery Unit</span>
                                    <span>₹{batteryCost.toLocaleString('en-IN')}</span>
                                </div>
                            )}
                            <div className="summary-row rebate">
                                <span>Federal Solar Rebate</span>
                                <span>-₹{rebate.toLocaleString('en-IN')}</span>
                            </div>

                            <div className="total-row">
                                <span className="total-label">Total Price<br /><small style={{ fontSize: '11px' }}>Transparency Note</small></span>
                                <div className="total-price">₹{total.toLocaleString('en-IN')}</div>
                            </div>

                            <div className="savings-box">
                                <Zap size={16} fill="currentColor" />
                                <div>
                                    <span style={{ display: 'block', fontSize: '10px', textTransform: 'uppercase', color: '#B45309' }}>Estimated Savings</span>
                                    Save approx. ₹1,200/year on electricity bills.
                                </div>
                            </div>

                            <button className="btn-add-cart" onClick={handleAddToCart}>
                                Add Bundle to Cart <ArrowRight size={18} style={{ verticalAlign: 'middle' }} />
                            </button>
                            <button className="btn-custom-quote">
                                Request Custom Quote
                            </button>

                            <div className="consult-link">
                                <MessageCircle size={16} /> Talk to a Solar Expert
                            </div>

                            <div className="trust-icons">
                                <div className="trust-item">
                                    <ShieldCheck size={20} />
                                    25-Year<br />Warranty
                                </div>
                                <div className="trust-item">
                                    <CheckCircle size={20} />
                                    Fast<br />Delivery
                                </div>
                                <div className="trust-item">
                                    <Home size={20} />
                                    Certified<br />Installers
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PackageDetails;
