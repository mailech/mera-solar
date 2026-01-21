import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../components/Layout';
import { Mail, Calendar, User } from 'lucide-react';
import { toast } from 'react-toastify';

const Inquiries = () => {
    // Mock data until backend endpoint is confirmed/created for fetching all contacts
    // Currently only POST endpoint exists for contacts
    const [inquiries, setInquiries] = useState([
        { id: 1, full_name: 'John Doe', email: 'john@example.com', subject: 'Installation Quote', message: 'I need a solar quote for my villa.', created_at: '2024-01-15' },
        { id: 2, full_name: 'Sarah Smith', email: 'sarah@business.com', subject: 'Commercial partnership', message: 'Looking for industrial solutions.', created_at: '2024-01-18' }
    ]);

    return (
        <Layout>
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Inquiries</h2>
                <p className="text-gray-500">View messages from users</p>
            </div>

            <div className="space-y-4">
                {inquiries.map(inquiry => (
                    <div key={inquiry.id} className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-2">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                                    <User size={20} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">{inquiry.full_name}</h4>
                                    <div className="flex items-center text-sm text-gray-500 gap-2">
                                        <Mail size={12} /> {inquiry.email}
                                    </div>
                                </div>
                            </div>
                            <span className="text-xs text-gray-400 flex items-center gap-1">
                                <Calendar size={12} /> {inquiry.created_at}
                            </span>
                        </div>
                        <div className="ml-13 pl-13 border-l-2 border-gray-100 pl-4 mt-2">
                            <h5 className="text-sm font-semibold text-gray-700 mb-1">{inquiry.subject}</h5>
                            <p className="text-gray-600 text-sm">{inquiry.message}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    );
};

export default Inquiries;
