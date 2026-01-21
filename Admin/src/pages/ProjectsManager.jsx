import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../components/Layout';
import { Plus, Trash2, Edit2, MapPin } from 'lucide-react';
import { toast } from 'react-toastify';

const ProjectsManager = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/projects');
            setProjects(res.data.data);
        } catch (error) {
            toast.error('Failed to fetch projects');
        }
    };

    return (
        <Layout>
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">Projects</h2>
                    <p className="text-gray-500">Manage portfolio & case studies</p>
                </div>
                <button className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
                    <Plus size={20} /> Add Project
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map(project => (
                    <div key={project.id} className="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-md transition-shadow">
                        <div className="h-48 bg-gray-200 relative">
                            {project.image_url && <img src={project.image_url} alt={project.title} className="w-full h-full object-cover" />}
                            <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded text-xs font-semibold shadow-sm">
                                {project.category}
                            </div>
                        </div>
                        <div className="p-5">
                            <h3 className="text-lg font-bold text-gray-800 mb-1">{project.title}</h3>
                            <div className="flex items-center text-gray-500 text-sm mb-3">
                                <MapPin size={14} className="mr-1" /> {project.location}
                            </div>
                            <div className="flex justify-between items-center pt-4 border-t">
                                <span className="text-sm font-medium text-primary">{project.capacity}</span>
                                <div className="flex gap-2">
                                    <button className="text-gray-400 hover:text-blue-500"><Edit2 size={18} /></button>
                                    <button className="text-gray-400 hover:text-red-500"><Trash2 size={18} /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    );
};

export default ProjectsManager;
