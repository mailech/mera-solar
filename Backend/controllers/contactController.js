const db = require('../config/db');
const { validationResult } = require('express-validator');
const Inquiry = require('../models/Inquiry');

exports.submitContactForm = async (req, res) => {
    // Validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { name, email, phone, service_interest, message } = req.body;

    try {
        const newInquiry = new Inquiry({
            name, // Changed from fullName to name to match Schema
            email,
            phone,
            service_interest,
            message
        });

        await newInquiry.save();

        res.status(201).json({
            success: true,
            message: 'Contact form submitted successfully',
            data: newInquiry
        });
    } catch (error) {
        console.error('Error submitting contact form:', error);
        res.status(500).json({
            success: false,
            message: 'Server Error submitting contact form'
        });
    }
};

exports.getAllInquiries = async (req, res) => {
    try {
        const inquiries = await Inquiry.find().sort({ createdAt: -1 });
        // Standardized response format: { success: true, data: [...] }
        res.json({ success: true, data: inquiries });
    } catch (error) {
        console.error('Error fetching inquiries:', error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};

exports.deleteInquiry = async (req, res) => {
    try {
        await Inquiry.findByIdAndDelete(req.params.id);
        res.json({ message: 'Inquiry deleted' });
    } catch (error) {
        console.error('Error deleting inquiry:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};
