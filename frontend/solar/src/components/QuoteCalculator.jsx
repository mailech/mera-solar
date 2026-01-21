import React, { useState } from 'react';
import { Home, Building2, Factory, ArrowRight } from 'lucide-react';
import '../styles/QuoteCalculator.css';

const QuoteCalculator = () => {
    const [activeTab, setActiveTab] = useState('residential');
    const [rangeValue, setRangeValue] = useState(450);

    return (
        <div className="quote-calculator fade-in">
            <div className="calculator-tabs">
                <button
                    className={`tab-btn ${activeTab === 'residential' ? 'active' : ''}`}
                    onClick={() => setActiveTab('residential')}
                >
                    <Home size={18} /> Residential
                </button>
                <button
                    className={`tab-btn ${activeTab === 'commercial' ? 'active' : ''}`}
                    onClick={() => setActiveTab('commercial')}
                >
                    <Building2 size={18} /> Commercial
                </button>
                <button
                    className={`tab-btn ${activeTab === 'industrial' ? 'active' : ''}`}
                    onClick={() => setActiveTab('industrial')}
                >
                    <Factory size={18} /> Industrial
                </button>
            </div>

            <div className="calculator-content">
                <div className="calc-grid">
                    <div className="calc-group">
                        <label>Zip Code</label>
                        <input type="text" placeholder="Enter Zip Code" defaultValue="94103" />
                    </div>

                    <div className="calc-group">
                        <label>Monthly Bill</label>
                        <div className="range-container">
                            <span>${rangeValue}</span>
                            <input
                                type="range"
                                min="50"
                                max="1000"
                                value={rangeValue}
                                onChange={(e) => setRangeValue(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="calc-group">
                        <label>Solar Capacity</label>
                        <div className="select-wrapper">
                            <select>
                                <option>5 kW</option>
                                <option>10 kW</option>
                                <option>15 kW</option>
                            </select>
                        </div>
                    </div>
                </div>

                <button className="btn btn-primary calculate-btn">
                    Calculate Savings <ArrowRight size={18} />
                </button>
            </div>
        </div>
    );
};

export default QuoteCalculator;
