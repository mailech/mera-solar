const Product = require('../models/Product');
const Category = require('../models/Category');

// Get all products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find().populate('category_id');

        // Map to flat structure for frontend compatibility
        const formattedProducts = products.map(product => {
            const p = product.toJSON();
            return {
                ...p,
                category_name: product.category_id ? product.category_id.name : null,
                category_id: product.category_id ? product.category_id.id : null // Ensure ID is preserved
            };
        });

        res.status(200).json({ success: true, data: formattedProducts });
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// Create product
exports.createProduct = async (req, res) => {
    const { title, price, capacity, category_id, image_url, tag, description, features } = req.body;
    try {
        const newProduct = new Product({
            title,
            price,
            capacity,
            category_id,
            image_url,
            tag,
            description,
            features
        });

        const savedProduct = await newProduct.save();

        // Populate category for immediate return
        await savedProduct.populate('category_id');

        const responseData = {
            ...savedProduct.toJSON(),
            category_name: savedProduct.category_id ? savedProduct.category_id.name : null
        };

        res.status(201).json({ success: true, data: responseData });
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// Update product
exports.updateProduct = async (req, res) => {
    const { title, price, capacity, category_id, image_url, tag, description, features } = req.body;
    try {
        let product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }

        // Update fields
        product.title = title || product.title;
        product.price = price || product.price;
        product.capacity = capacity || product.capacity;
        product.category_id = category_id || product.category_id;
        product.image_url = image_url || product.image_url;
        product.tag = tag || product.tag;
        product.description = description || product.description;
        product.features = features || product.features;

        const updatedProduct = await product.save();

        // Populate for response
        await updatedProduct.populate('category_id');

        const responseData = {
            ...updatedProduct.toJSON(),
            category_name: updatedProduct.category_id ? updatedProduct.category_id.name : null
        };

        res.status(200).json({ success: true, data: responseData });
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// Delete product
exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }

        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({ success: true, message: 'Product deleted' });
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};
