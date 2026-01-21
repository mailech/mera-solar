import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../components/Layout';
import { Plus, Trash2, Edit2, Zap } from 'lucide-react';
import { toast } from 'react-toastify';

const ServicesManager = () => {
    const [services, setServices] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({ title: '', description: '', icon: '', category: 'core', link: '#' });

    useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/services');
            setServices(res.data.data);
        } catch (error) {
            toast.error('Failed to fetch services');
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this service?')) {
            try {
                // await axios.delete(`http://localhost:5000/api/services/${id}`); // Need to implement delete in backend if not exists
                toast.info('Delete functionality to be implemented in backend');
            } catch (error) {
                toast.error('Failed to delete service');
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // await axios.post('http://localhost:5000/api/services', formData); // Need to implement create in backend
            toast.info('Create functionality to be implemented in backend');
            setShowModal(false);
        } catch (error) {
            toast.error('Failed to add service');
        }
    };

    return (
        <Layout>
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">Services</h2>
                    <p className="text-gray-500">Manage offered services</p>
                </div>
                <button
                    onClick={() => setShowModal(true)}
                    className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
                >
                    <Plus size={20} /> Add Service
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map(service => (
                    <div key={service.id} className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-blue-50 text-primary rounded-lg">
                                <Zap size={24} />
                            </div>
                            <div className="flex gap-2">
                                <button className="text-gray-400 hover:text-blue-500"><Edit2 size={18} /></button>
                                <button onClick={() => handleDelete(service.id)} className="text-gray-400 hover:text-red-500"><Trash2 size={18} /></button>
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-gray-800 mb-2">{service.title}</h3>
                        <p className="text-gray-600 text-sm">{service.description}</p>
                        <div className="mt-4 pt-4 border-t flex justify-between items-center text-sm">
                            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded">{service.category}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal - Placeholder for now */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6">
                        <h3 className="text-xl font-bold mb-4">Add Service</h3>
                        <p className="text-gray-500 mb-4">Backend support for adding services is pending implementation.</p>
                        <div className="flex justify-end">
                            <button onClick={() => setShowModal(false)} className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg">Close</button>
                        </div>
                    </div>
                </div>
            )}
        </Layout>
    );
};

export default ServicesManager;
