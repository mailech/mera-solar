import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    Trash2, Plus, Minus, ChevronDown, ChevronUp,
    LayoutGrid, Zap, Home, Hammer, ShieldCheck,
    CreditCard, CheckCircle, HelpCircle, MessageCircle
} from 'lucide-react';
import '../styles/Cart.css';

const Cart = () => {
    const location = useLocation();
    // Default mock data if no state passed
    const defaultData = {
        name: "Premium Home Solar System Kit",
        capacity: "5kW",
        id: "#RES-5KW-2023",
        hasBattery: false,
        subtotal: 325000,
        installCost: 25000,
        total: 247000, // After rebate calculation approximation
        batteryCost: 0
    };

    const cartData = location.state?.cartItem || defaultData;
    const finalTotal = cartData.total;
    const tax = Math.round(cartData.subtotal * 0.08); // EST Tax

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [quantity, setQuantity] = useState(1);
    const [expandedSection, setExpandedSection] = useState('panels'); // 'panels', 'inverter', etc.

    const toggleSection = (section) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    return (
        <div className="cart-page">
            <div className="cart-container">
                {/* Header */}
                <div className="cart-header-section">
                    <div className="breadcrumbs">
                        <Link to="/">Home</Link> / <Link to="/shop">Shop</Link> / <span>Cart</span>
                    </div>
                    <h1>Your Cart</h1>
                    <p>Review and customize your solar package before checkout.</p>
                </div>

                <div className="cart-grid">
                    {/* Left Column: Cart Items & Config */}
                    <div className="cart-items-section">

                        {/* Main Product Card */}
                        <div className="cart-product-card">
                            <div className="product-image-col">
                                <img
                                    src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                                    alt="Solar System"
                                />
                            </div>
                            <div className="product-info-col">
                                <div className="tags">
                                    <span className="tag-residential">Residential</span>
                                    <span className="tag-capacity">{cartData.capacity} Capacity</span>
                                </div>
                                <h2>{cartData.name}</h2>
                                <p className="product-id">Base Package ID: {cartData.id}</p>
                            </div>
                            <div className="product-action-col">
                                <div className="qty-selector">
                                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))}><Minus size={14} /></button>
                                    <span>{quantity}</span>
                                    <button onClick={() => setQuantity(quantity + 1)}><Plus size={14} /></button>
                                </div>
                                <button className="btn-remove">
                                    <Trash2 size={14} /> Remove
                                </button>
                            </div>
                        </div>

                        {/* System Components Accordion */}
                        <div className="system-components">
                            <div className="section-title-row">
                                <h3>SYSTEM COMPONENTS</h3>
                                <span className="customizable-text"><Zap size={12} fill="currentColor" /> Customizable</span>
                            </div>

                            {/* Item 1: Solar Panels */}
                            <div className={`component-item ${expandedSection === 'panels' ? 'expanded' : ''}`}>
                                <div className="component-header" onClick={() => toggleSection('panels')}>
                                    <div className="comp-icon"><LayoutGrid size={18} /></div>
                                    <div className="comp-title">Solar Panels (12x)</div>
                                    <div className="comp-chevron">
                                        {expandedSection === 'panels' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                    </div>
                                </div>
                                {expandedSection === 'panels' && (
                                    <div className="component-body">
                                        <label>Select Brand & Model</label>
                                        <select className="comp-select">
                                            <option>SunPower Maxeon 3 (400W) - Premium Efficiency (Included)</option>
                                            <option>Canadian Solar (450W)</option>
                                            <option>REC Alpha Pure (420W)</option>
                                        </select>
                                        <div className="component-info-box">
                                            <HelpCircle size={14} color="#007bff" style={{ marginTop: '2px' }} />
                                            <div>
                                                <strong>SunPower Maxeon 3:</strong> Top-tier durability with 22.8% efficiency. 40-year warranty included.
                                            </div>
                                        </div>
                                        <div className="component-row-price">
                                            <span>Component Total:</span>
                                            <strong>₹{(cartData.basePrice || 4200).toLocaleString('en-IN')}</strong>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Item 2: Hybrid Inverter */}
                            <div className={`component-item ${expandedSection === 'inverter' ? 'expanded' : ''}`}>
                                <div className="component-header" onClick={() => toggleSection('inverter')}>
                                    <div className="comp-icon"><Zap size={18} /></div>
                                    <div className="comp-title">Hybrid Inverter</div>
                                    <div className="comp-chevron">
                                        {expandedSection === 'inverter' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                    </div>
                                </div>
                                {expandedSection === 'inverter' && (
                                    <div className="component-body">
                                        <div className="component-row-price">
                                            <span>Current: SolarEdge Energy Hub 5kW</span>
                                            <strong>₹85,000</strong>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Item 3: Mounting Structure */}
                            <div className={`component-item ${expandedSection === 'mounting' ? 'expanded' : ''}`}>
                                <div className="component-header" onClick={() => toggleSection('mounting')}>
                                    <div className="comp-icon"><Home size={18} /></div>
                                    <div className="comp-title">Mounting Structure</div>
                                    <div className="comp-chevron">
                                        {expandedSection === 'mounting' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                    </div>
                                </div>
                            </div>

                            {/* Item 4: Installation */}
                            <div className={`component-item ${expandedSection === 'installation' ? 'expanded' : ''}`}>
                                <div className="component-header" onClick={() => toggleSection('installation')}>
                                    <div className="comp-icon"><Hammer size={18} /></div>
                                    <div className="comp-title">Professional Installation</div>
                                    <div className="comp-chevron">
                                        {expandedSection === 'installation' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Warranty Note */}
                        <div className="warranty-slat">
                            <span><CheckCircle size={14} fill="#00D084" color="white" /> 25-Year Performance Warranty Included</span>
                            <a href="#">Update Package</a>
                        </div>

                        {/* Add-ons */}
                        <div className="addons-section">
                            <h3>Recommended Add-ons</h3>
                            <div className="addon-grid">
                                <div className="addon-card">
                                    <input type="checkbox" />
                                    <div className="addon-info">
                                        <h4>Extended Maintenance</h4>
                                        <p>2 extra years of free onsite checks and cleaning.</p>
                                    </div>
                                    <div className="addon-price">₹499</div>
                                </div>
                                <div className="addon-card">
                                    <input type="checkbox" />
                                    <div className="addon-info">
                                        <h4>Smart Home Hub</h4>
                                        <p>Integrate solar data with Alexa/Google Home.</p>
                                    </div>
                                    <div className="addon-price">₹299</div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Sticky Summary */}
                    <div className="cart-sidebar">
                        <div className="summary-card">
                            <h3>Order Summary</h3>

                            <div className="summary-line">
                                <span>Subtotal (1 Item)</span>
                                <span>₹{cartData.subtotal.toLocaleString('en-IN')}</span>
                            </div>
                            <div className="summary-line green-text">
                                <span>Brand Adjustments</span>
                                <span>+ ₹0.00</span>
                            </div>
                            <div className="summary-line">
                                <span>Installation <HelpCircle size={12} color="#aaa" /></span>
                                <span>₹{cartData.installCost.toLocaleString('en-IN')}</span>
                            </div>
                            {cartData.hasBattery && (
                                <div className="summary-line">
                                    <span>Battery Unit</span>
                                    <span>₹{cartData.batteryCost.toLocaleString('en-IN')}</span>
                                </div>
                            )}
                            <div className="summary-line">
                                <span>Taxes (Estimated)</span>
                                <span>₹{tax.toLocaleString('en-IN')}</span>
                            </div>

                            <div className="total-block">
                                <span>Total Payable</span>
                                <div className="total-amount">
                                    ₹{(cartData.total + tax).toLocaleString('en-IN')}
                                    <span className="currency-code">Currency in INR</span>
                                </div>
                            </div>

                            <button className="btn-checkout">Proceed to Checkout</button>
                            <button className="btn-quote">Request Final Quote</button>

                            <div className="trust-badges">
                                <div className="t-badge">
                                    <CreditCard size={18} />
                                    <span>Secure Payment</span>
                                </div>
                                <div className="t-badge">
                                    <ShieldCheck size={18} />
                                    <span>25-Year Warranty</span>
                                </div>
                                <div className="t-badge">
                                    <Hammer size={18} />
                                    <span>Certified Installers</span>
                                </div>
                            </div>
                        </div>

                        <div className="expert-card">
                            <div className="expert-icon">
                                <MessageCircle size={24} color="#00D084" />
                            </div>
                            <div>
                                <h4>Need Help Customizing?</h4>
                                <p>Our solar engineers are available to review your cart with you.</p>
                                <a href="#">Chat with an Expert</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
