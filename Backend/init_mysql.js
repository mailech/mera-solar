const mysql = require('mysql2/promise');
const dotenv = require('dotenv');
const fs = require('fs');

dotenv.config();

const createTables = async () => {
    // Check if password was actually updated
    if (process.env.DB_PASSWORD === 'YOUR_GENERATED_PASSWORD_HERE') {
        console.error('❌ ERROR: You still have "YOUR_GENERATED_PASSWORD_HERE" in your .env file.');
        console.error('👉 Please open Backend/.env and paste the real password you generated in TiDB Cloud.');
        process.exit(1);
    }

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

        // Create Services Table
        console.log('Creating services table...');
        await connection.execute(`
            CREATE TABLE IF NOT EXISTS services (
                id INT AUTO_INCREMENT PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                description TEXT,
                icon VARCHAR(255) DEFAULT 'Zap',
                category VARCHAR(255) DEFAULT 'Residential',
                link VARCHAR(255) DEFAULT '#',
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);
        console.log('✅ Services table created.');

        // Create Projects Table
        console.log('Creating projects table...');
        await connection.execute(`
            CREATE TABLE IF NOT EXISTS projects (
                id INT AUTO_INCREMENT PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                location VARCHAR(255),
                category VARCHAR(255) DEFAULT 'Residential',
                capacity VARCHAR(255),
                completion_date DATE,
                image_url VARCHAR(500),
                description TEXT,
                co2_offset VARCHAR(255),
                homes_powered VARCHAR(255),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);
        console.log('✅ Projects table created.');

        await connection.end();
        console.log('🎉 Database initialization complete!');
        process.exit(0);

    } catch (error) {
        console.error('❌ Error initializing database:', error.message);
        process.exit(1);
    }
};

createTables();
