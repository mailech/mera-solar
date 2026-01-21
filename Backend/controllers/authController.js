const jwt = require('jsonwebtoken'); // Assuming we might add JWT later, but for now simple response
// Note: In a real app, use bcrypt and a database for users. 
// For this "minimal" request, we'll check against env vars or hardcoded admin.

exports.login = async (req, res) => {
    const { email, password } = req.body;

    // Hardcoded Admin Credentials (move to .env in production)
    const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@merasolar.com';
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        // Successful login
        res.status(200).json({
            success: true,
            data: {
                id: 1,
                name: 'Admin User',
                email: ADMIN_EMAIL,
                role: 'admin'
            },
            message: 'Login successful'
        });
    } else {
        res.status(401).json({
            success: false,
            message: 'Invalid email or password'
        });
    }
};
