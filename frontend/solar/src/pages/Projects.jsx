import React, { useState, useEffect } from 'react';
import { Filter, ChevronDown, MoveRight, Zap, TrendingUp, CheckCircle, ArrowRight, MapPin, Calendar, X } from 'lucide-react';
import '../styles/ProjectsPage.css';

// Project Data
const projects = [
    {
        id: 1,
        title: "Highland Eco Villa",
        location: "Pasadena, Texas",
        category: "Residential",
        capacity: "12 kW",
        date: "Dec 2023",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: 2,
        title: "TechLogistics HQ",
        location: "San Jose, California",
        category: "Commercial",
        capacity: "850 kW",
        date: "Nov 2023",
        image: "https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: 3,
        title: "GreenGrow Farm",
        location: "Willamette Valley",
        category: "Industrial",
        capacity: "1.2 MW",
        date: "Oct 2023",
        image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: 4,
        title: "Oakridge Elementary",
        location: "Portland, Oregon",
        category: "Commercial",
        capacity: "45 kW",
        date: "Sep 2023",
        image: "https://images.unsplash.com/photo-1594818379496-da1e345b0ded?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: 5,
        title: "City Market Plaza",
        location: "Melbourne, AU",
        category: "Commercial",
        capacity: "125 kW",
        date: "Aug 2023",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: 6,
        title: "The Miller Residence",
        location: "Phoenix, Arizona",
        category: "Residential",
        capacity: "15 kW",
        date: "Jul 2023",
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=600"
    }
];

const Projects = () => {
    const [activeTab, setActiveTab] = useState('All Projects');
    const [selectedProject, setSelectedProject] = useState(null);

    // Close modal on escape key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') setSelectedProject(null);
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    // Prevent scrolling when modal is open
    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => { document.body.style.overflow = 'auto'; };
    }, [selectedProject]);

    return (
        <div className="projects-page">
            {/* Hero Section */}
            <div className="projects-hero">
                <div className="container">
                    <div className="breadcrumb">Home / Projects & Case Studies</div>
                    <h1>Our Projects</h1>
                    <p>Delivering solar solutions across residential, commercial, and industrial sectors worldwide.</p>
                </div>
            </div>

            <div className="container">
                {/* Filters */}
                <div className="projects-filter-bar">
                    <div className="filter-tabs">
                        {['All Projects', 'Residential', 'Commercial', 'Industrial'].map((tab) => (
                            <button
                                key={tab}
                                className={`filter-tab ${activeTab === tab ? 'active' : ''}`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                    <div className="filter-dropdowns">
                        <button className="dropdown-btn">
                            Project Status <ChevronDown size={14} />
                        </button>
                        <button className="dropdown-btn">
                            Location <ChevronDown size={14} />
                        </button>
                    </div>
                </div>

                {/* Grid */}
                <div className="projects-grid">
                    {projects.map((project) => (
                        <div
                            className="project-card-full"
                            key={project.id}
                            onClick={() => setSelectedProject(project)}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="card-image-wrapper">
                                <img src={project.image} alt={project.title} className="card-image" />
                                <span className="category-badge">{project.category}</span>
                            </div>
                            <div className="card-details">
                                <div className="card-header-row">
                                    <h3 className="card-title">{project.title}</h3>
                                    <span className="card-capacity">{project.capacity}</span>
                                </div>
                                <span className="card-location">{project.location}</span>

                                <div className="card-stats-row">
                                    <span>Date: {project.date}</span>
                                    <span style={{ color: '#00D084', fontWeight: '600', cursor: 'pointer' }}>View Case Details &rarr;</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="load-more-container">
                    <button className="btn btn-secondary" style={{ color: 'var(--text-main)', borderColor: 'var(--border-color)' }}>
                        Load More Projects <ChevronDown size={16} />
                    </button>
                </div>

                {/* Spotlight Section - Case Study */}
                {/* Spotlight Section - Case Study */}
                <div className="project-spotlight">
                    <span className="spotlight-label">CASE STUDY FOCUS</span>
                    <h2 className="spotlight-title">Transforming TechLogistics HQ to Net-Zero</h2>

                    <div className="spotlight-meta-bar">
                        <div className="meta-item">
                            <h4>Client Type</h4>
                            <p>Logistics / Warehouse</p>
                        </div>
                        <div className="meta-item">
                            <h4>System Capacity</h4>
                            <p>450 kWp</p>
                        </div>
                        <div className="meta-item">
                            <h4>Timeline</h4>
                            <p>3 Months</p>
                        </div>
                        <div className="meta-item">
                            <h4>Cost Range</h4>
                            <p>$800k - $1M</p>
                        </div>
                    </div>

                    {/* Narrative Row */}
                    <div className="case-study-narrative">
                        <div className="narrative-card red-border">
                            <div className="narrative-icon red"><TrendingUp size={20} /></div>
                            <h4 className="narrative-title">The Problem</h4>
                            <p className="narrative-desc">TechLogistics was facing skyrocketing electricity bills due to 24/7 automated sorting operations. Their carbon footprint was also hindering their ability to secure green partnerships.</p>
                        </div>
                        <div className="narrative-card green-border">
                            <div className="narrative-icon green"><Zap size={20} /></div>
                            <h4 className="narrative-title">The Solution</h4>
                            <p className="narrative-desc">We designed a custom 450kW rooftop solar array utilizing 1,125 high-efficiency monocrystalline panels coupled with a smart inverter system for real-time load management.</p>
                        </div>
                        <div className="narrative-card blue-border">
                            <div className="narrative-icon blue"><TrendingUp size={20} /></div>
                            <h4 className="narrative-title">The Result</h4>
                            <p className="narrative-desc">The facility now generates 85% of its own power, saving $85,000 annually. The system will pay for itself in just 3.5 years, securing decades of free energy.</p>
                        </div>
                    </div>

                    {/* Impact & Visual Row */}
                    <div className="impact-visual-container">
                        {/* Impact Stats */}
                        <div className="impact-section">
                            <h3 className="impact-title">Impact Analysis</h3>

                            <div className="impact-list">
                                <div className="impact-row">
                                    <div className="impact-icon-circle green-ring">
                                        <span className="impact-val">65%</span>
                                    </div>
                                    <div className="impact-details">
                                        <h4>Energy Independence</h4>
                                        <p>Reduced grid reliance significantly</p>
                                    </div>
                                </div>

                                <div className="impact-row">
                                    <div className="impact-icon-circle soft-green">
                                        <span>CO₂</span>
                                    </div>
                                    <div className="impact-details">
                                        <h4>415 Tons Reduced</h4>
                                        <p>Equivalent to planting 12,000 trees</p>
                                    </div>
                                </div>

                                <div className="impact-row">
                                    <div className="impact-icon-circle soft-blue">
                                        <CheckCircle size={20} />
                                    </div>
                                    <div className="impact-details">
                                        <h4>$2.1M Lifetime Savings</h4>
                                        <p>Projected over 25 years</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Visual - Before/After */}
                        <div className="spotlight-visual">
                            <span className="visual-label after-left">After</span>
                            <span className="visual-label before-right">Before</span>

                            {/* Left Side: After (Green Solar) */}
                            <div className="visual-half-container">
                                <img
                                    src="https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?auto=format&fit=crop&q=80&w=800"
                                    alt="After: Solar Array"
                                    className="visual-img"
                                />
                            </div>

                            {/* Right Side: Before (Grayscale/Empty) */}
                            <div className="visual-half-container grayscale-filter">
                                <img
                                    src="https://images.unsplash.com/photo-1623298317883-6b70254edf31?auto=format&fit=crop&q=80&w=800"
                                    alt="Before: Empty Terrace"
                                    className="visual-img"
                                />
                            </div>

                            <div className="visual-split-line">
                                <div className="visual-handle"><MoveRight size={14} /></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer CTA */}
                <div className="projects-cta-footer">
                    <h2>Want a Solar Solution Like This?</h2>
                    <p>Start your journey to energy independence today. We offer free consultations and site surveys for all commercial and residential projects.</p>
                    <div className="cta-buttons">
                        <button className="btn btn-primary">Get a Free Site Survey</button>
                        <button className="btn btn-outline-light">View More Projects</button>
                    </div>
                </div>
            </div>

            {/* Project Details Modal */}
            {selectedProject && (
                <div className="project-modal-overlay" onClick={() => setSelectedProject(null)}>
                    <div className="project-modal-card" onClick={e => e.stopPropagation()}>
                        <button className="modal-close-btn" onClick={() => setSelectedProject(null)}>
                            <X size={24} />
                        </button>
                        <div className="modal-image-wrapper">
                            <img src={selectedProject.image} alt={selectedProject.title} />
                            <span className="category-badge">{selectedProject.category}</span>
                        </div>
                        <div className="modal-content">
                            <h2>{selectedProject.title}</h2>
                            <div className="modal-meta">
                                <span><MapPin size={16} /> {selectedProject.location}</span>
                                <span><Zap size={16} /> {selectedProject.capacity}</span>
                                <span><Calendar size={16} /> {selectedProject.date}</span>
                            </div>
                            <p className="modal-description">
                                This {selectedProject.category.toLowerCase()} solar installation provides sustainable energy solutions for the {selectedProject.location} area.
                                It features high-efficiency panels and advanced monitoring systems to ensure optimal performance year-round.
                            </p>
                            <div className="modal-stats">
                                <div className="stat-box">
                                    <strong>CO₂ Offset</strong>
                                    <span>24 Tons/Yr</span>
                                </div>
                                <div className="stat-box">
                                    <strong>Homes Powered</strong>
                                    <span>15+</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projects;
