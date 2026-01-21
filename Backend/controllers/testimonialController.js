const db = require('../config/db');

exports.getAllTestimonials = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM testimonials');
        res.status(200).json({
            success: true,
            data: rows
        });
    } catch (error) {
        console.error('Error fetching testimonials:', error);
        res.status(500).json({
            success: false,
            message: 'Server Error fetching testimonials'
        });
    }
};

exports.createTestimonial = async (req, res) => {
    const { author, role, content, rating } = req.body;
    try {
        const [result] = await db.query(
            'INSERT INTO testimonials (author, role, content, rating) VALUES (?, ?, ?, ?)',
            [author, role, content, rating]
        );
        res.status(201).json({ success: true, data: { id: result.insertId, ...req.body } });
    } catch (error) {
        console.error('Error creating testimonial:', error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};

exports.deleteTestimonial = async (req, res) => {
    try {
        await db.query('DELETE FROM testimonials WHERE id = ?', [req.params.id]);
        res.status(200).json({ success: true, message: 'Testimonial deleted' });
    } catch (error) {
        console.error('Error deleting testimonial:', error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};
