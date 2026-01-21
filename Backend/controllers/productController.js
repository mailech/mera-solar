const db = require('../config/db');

// Get all products
exports.getAllProducts = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT p.*, c.name as category_name FROM products p LEFT JOIN categories c ON p.category_id = c.id');
        res.status(200).json({ success: true, data: rows });
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};

// Create product
exports.createProduct = async (req, res) => {
    const { title, price, capacity, category_id, image_url, tag, description, features } = req.body;
    try {
        const featuresJson = JSON.stringify(features); // Ensure JSON format
        const sql = 'INSERT INTO products (title, price, capacity, category_id, image_url, tag, description, features) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
        const [result] = await db.query(sql, [title, price, capacity, category_id, image_url, tag, description, featuresJson]);

        res.status(201).json({ success: true, data: { id: result.insertId, ...req.body } });
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};

// Delete product
exports.deleteProduct = async (req, res) => {
    try {
        await db.query('DELETE FROM products WHERE id = ?', [req.params.id]);
        res.status(200).json({ success: true, message: 'Product deleted' });
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};
