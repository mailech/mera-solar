const db = require('../config/db');
const { validationResult } = require('express-validator');

exports.submitContactForm = async (req, res) => {
    // Validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { fullName, email, subject, message } = req.body;

    try {
        const sql = 'INSERT INTO contacts (full_name, email, subject, message) VALUES (?, ?, ?, ?)';
        const [result] = await db.execute(sql, [fullName, email, subject, message]);

        res.status(201).json({
            success: true,
            message: 'Contact form submitted successfully',
            data: { id: result.insertId, fullName, email, subject, message }
        });
    } catch (error) {
        console.error('Error submitting contact form:', error);
        res.status(500).json({
            success: false,
            message: 'Server Error submitting contact form'
        });
    }
};
