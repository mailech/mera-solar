const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

dotenv.config();

const createUsersTable = async () => {
    try {
        console.log('Connecting to TiDB Cloud...');
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            port: process.env.DB_PORT || 4000,
            ssl: {
                minVersion: 'TLSv1.2',
                rejectUnauthorized: true
            }
        });

        console.log('✅ Connected successfully!');

        // Create Users Table
        console.log('Creating users table...');
        await connection.execute(`
            CREATE TABLE IF NOT EXISTS users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                username VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL UNIQUE,
                password VARCHAR(255) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);
        console.log('✅ Users table created.');

        await connection.end();
        console.log('🎉 Database update complete!');
        process.exit(0);

    } catch (error) {
        console.error('❌ Error updating database:', error.message);
        process.exit(1);
    }
};

createUsersTable();
