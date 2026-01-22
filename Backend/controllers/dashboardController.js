const Inquiry = require('../models/Inquiry');
const Product = require('../models/Product');
const Category = require('../models/Category');
const { mysqlPool } = require('../config/db');

exports.getDashboardStats = async (req, res) => {
    try {
        // Hybrid Queries: MySQL for Services/Projects, MongoDB for Products/Categories/Inquiries
        const productCount = await Product.countDocuments();
        const categoryCount = await Category.countDocuments();

        const [services] = await mysqlPool.execute('SELECT COUNT(*) as count FROM services');
        const [projects] = await mysqlPool.execute('SELECT COUNT(*) as count FROM projects');

        const inquiryCount = await Inquiry.countDocuments();

        const recentInquiries = await Inquiry.find().sort({ createdAt: -1 }).limit(5);

        res.json({
            success: true,
            counts: {
                products: productCount,
                services: services[0].count,
                projects: projects[0].count,
                categories: categoryCount,
                inquiries: inquiryCount,
            },
            recentInquiries
        });
    } catch (error) {
        console.error('Error fetching dashboard stats:', error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};
