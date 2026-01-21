import React from 'react';
import { ArrowRight } from 'lucide-react';
import '../styles/Projects.css';
import project1 from '../assets/project-1.png';
import project2 from '../assets/project-2.png';
import project3 from '../assets/project-3.png';

const projects = [
    { img: project1, title: 'Private Residence', loc: 'California, USA' },
    { img: project2, title: 'Tech Hub', loc: 'Texas, USA' }, // Commercial
    { img: project3, title: 'Eco Farm', loc: 'Oregon, USA' },   // Farm
];

const Projects = () => {
    return (
        <section className="section-padding projects-section" id="projects">
            <div className="container">
                <div className="projects-header">
                    <div>
                        <span className="section-subtitle">Featured Projects</span>
                        <h2 className="section-title">Latest Solar Installations</h2>
                    </div>
                    <button className="btn btn-primary view-all-btn">
                        View All Projects <ArrowRight size={18} />
                    </button>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <div className="project-img-wrapper">
                                <img src={project.img} alt={project.title} />
                                <div className="project-overlay">
                                    <button className="btn btn-secondary">View Case Study</button>
                                </div>
                            </div>
                            <div className="project-info">
                                <span className="project-loc">{project.loc}</span>
                                <h3 className="project-title">{project.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
