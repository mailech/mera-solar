const Category = require('../models/Category');

// Get all categories
exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find().sort({ createdAt: -1 });
        res.status(200).json({ success: true, data: categories });
    } catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// Create category
exports.createCategory = async (req, res) => {
    const { name, description } = req.body;
    try {
        const newCategory = new Category({
            name,
            description
        });

        const savedCategory = await newCategory.save();
        res.status(201).json({ success: true, data: savedCategory });
    } catch (error) {
        console.error('Error creating category:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// Delete category
exports.deleteCategory = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);

        if (!category) {
            return res.status(404).json({ success: false, message: 'Category not found' });
        }

        await Category.findByIdAndDelete(req.params.id);
        res.status(200).json({ success: true, message: 'Category deleted' });
    } catch (error) {
        console.error('Error deleting category:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};
