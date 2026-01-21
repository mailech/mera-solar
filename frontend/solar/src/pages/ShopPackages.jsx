import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Zap, Battery, ArrowRight, Sun, Shield } from 'lucide-react';
import '../styles/ShopPackages.css';

// Mock Data
const packages = [
    {
        id: '3kw-system',
        title: '3kW Starter Kit',
        price: '1,80,000',
        capacity: '3kW',
        type: 'Residential',
        image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        tag: 'Popular'
    },
    {
        id: '5kw-system',
        title: '5kW Family Plan',
        price: '3,00,000',
        capacity: '5kW',
        type: 'Residential',
        image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        tag: 'Best Value'
    },
    {
        id: '8kw-system',
        title: '8kW Pro System',
        price: '4,80,000',
        capacity: '8kW',
        type: 'Residential',
        image: 'https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        tag: 'High Efficiency'
    },
    {
        id: '10kw-system',
        title: '10kW Powerhouse',
        price: '6,00,000',
        capacity: '10kW',
        type: 'Commercial',
        image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        tag: 'Max Power'
    }
];

const ShopPackages = () => {
    const [filter, setFilter] = useState('All');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const filteredPackages = filter === 'All'
        ? packages
        : packages.filter(pkg => pkg.type === filter);

    return (
        <div className="shop-page">
            {/* Hero */}
            <section className="shop-hero">
                <div className="container">
                    <h1>Energy Independence Starts Here</h1>
                    <p>Select a pre-configured solar package designed for performance and reliability.</p>
                </div>
            </section>

            {/* Filters */}
            <div className="shop-filters">
                <div className="container filter-container">
                    {['All', 'Residential', 'Commercial'].map(cat => (
                        <button
                            key={cat}
                            className={`filter-btn ${filter === cat ? 'active' : ''}`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Grid */}
            <section className="container">
                <div className="packages-grid">
                    {filteredPackages.map((pkg) => (
                        <Link to={`/shop/${pkg.id}`} key={pkg.id} className="package-card">
                            <div className="card-image-wrapper">
                                <img src={pkg.image} alt={pkg.title} />
                                {pkg.tag && <span className={`tag-badge ${pkg.tag === 'Popular' ? 'tag-popular' : 'tag-new'}`}>{pkg.tag}</span>}
                            </div>
                            <div className="card-content">
                                <h3 className="card-title">{pkg.title}</h3>
                                <div className="card-specs">
                                    <div className="spec-item"><Sun size={16} /> {pkg.capacity}</div>
                                    <div className="spec-item"><Shield size={16} /> Tier-1</div>
                                    <div className="spec-item"><Zap size={16} /> Hybrid</div>
                                </div>
                                <div className="card-price-section">
                                    <div className="price">₹{pkg.price} <span>/ kit</span></div>
                                    <div className="btn-view">
                                        <ArrowRight size={20} />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ShopPackages;
