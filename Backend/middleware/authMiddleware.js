const jwt = require('jsonwebtoken');
const { mysqlPool } = require('../config/db');

exports.protect = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // Get token from header
            token = req.headers.authorization.split(' ')[1];

            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret123');
            console.log("Token decoded:", decoded);

            // Get user from token
            const [users] = await mysqlPool.execute('SELECT id, username, email FROM users WHERE id = ?', [decoded.id]);
            console.log("User found in DB:", users);

            if (users.length === 0) {
                return res.status(401).json({ success: false, message: 'Not authorized, user not found' });
            }

            req.user = users[0];
            next();
        } catch (error) {
            console.error('Auth middleware error:', error);
            res.status(401).json({ success: false, message: 'Not authorized, token failed' });
        }
    }

    if (!token) {
        res.status(401).json({ success: false, message: 'Not authorized, no token' });
    }
};
