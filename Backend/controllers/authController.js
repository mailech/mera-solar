const { mysqlPool } = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    console.log('Register request received:', req.body);
    const { username, email, password, mobile, enterprise, address, city, zip } = req.body;

    // Validation
    if (!username || !email || !password) {
        return res.status(400).json({ success: false, message: 'Please provide all required fields' });
    }

    try {
        // Check if user exists
        const [existingUsers] = await mysqlPool.execute('SELECT * FROM users WHERE email = ?', [email]);
        if (existingUsers.length > 0) {
            return res.status(400).json({ success: false, message: 'User already exists' });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create user
        const [result] = await mysqlPool.execute(
            'INSERT INTO users (username, email, password, mobile, enterprise, address, city, zip) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [username, email, hashedPassword, mobile || null, enterprise || null, address || null, city || null, zip || null]
        );

        const token = jwt.sign({ id: result.insertId }, process.env.JWT_SECRET || 'secret123', {
            expiresIn: '7d'
        });

        res.status(201).json({
            success: true,
            token,
            user: {
                id: result.insertId,
                username,
                email
            }
        });
    } catch (error) {
        console.error('Register error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ success: false, message: 'Please provide email and password' });
    }

    try {
        // Check user
        const [users] = await mysqlPool.execute('SELECT * FROM users WHERE email = ?', [email]);

        if (users.length === 0) {
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }

        const user = users[0];

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || 'secret123', {
            expiresIn: '7d'
        });

        res.json({
            success: true,
            token,
            user: {
                id: user.id,
                username: user.username,
                email: user.email
            }
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

exports.getMe = async (req, res) => {
    try {
        // req.user from middleware has basic info, fetch full details + orders
        const userId = req.user.id;

        const [users] = await mysqlPool.execute('SELECT id, username, email, mobile, enterprise, address, city, zip, created_at FROM users WHERE id = ?', [userId]);

        if (users.length === 0) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        const user = users[0];

        // Fetch Orders
        const [orders] = await mysqlPool.execute('SELECT * FROM orders WHERE user_id = ? ORDER BY date DESC', [userId]);

        res.status(200).json({
            success: true,
            data: {
                ...user,
                orders: orders // Attach orders to the profile response
            }
        });
    } catch (error) {
        console.error('Get Me Error:', error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};

exports.updateProfile = async (req, res) => {
    console.log('Update Profile Request Body:', req.body);
    console.log('User ID from token:', req.user.id);

    const { mobile, enterprise, address, city, zip } = req.body;
    const userId = req.user.id;

    try {
        const [result] = await mysqlPool.execute(
            'UPDATE users SET mobile = ?, enterprise = ?, address = ?, city = ?, zip = ? WHERE id = ?',
            [mobile || null, enterprise || null, address || null, city || null, zip || null, userId]
        );
        console.log('Update Result:', result);

        if (result.affectedRows === 0) {
            console.warn('No rows updated. User ID might not exist or data is unchanged.');
        }

        res.json({ success: true, message: 'Profile updated successfully' });
    } catch (error) {
        console.error('Update Profile Error Details:', error);
        res.status(500).json({ success: false, message: error.message || 'Server Error' });
    }
};
