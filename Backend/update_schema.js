const { mysqlPool } = require('./config/db');

const updateDatabase = async () => {
    try {
        console.log("Updating User Schema...");

        // Add new columns to users table
        await mysqlPool.execute(`
            ALTER TABLE users
            ADD COLUMN mobile VARCHAR(20),
            ADD COLUMN enterprise VARCHAR(255),
            ADD COLUMN address TEXT,
            ADD COLUMN city VARCHAR(100),
            ADD COLUMN zip VARCHAR(20)
        `);
        console.log("✅ Users table updated with new fields.");

        // Create Orders table
        console.log("Creating Orders table...");
        await mysqlPool.execute(`
            CREATE TABLE IF NOT EXISTS orders (
                id INT AUTO_INCREMENT PRIMARY KEY,
                user_id INT NOT NULL,
                package_name VARCHAR(255) NOT NULL,
                amount DECIMAL(10, 2) NOT NULL,
                status VARCHAR(50) DEFAULT 'Pending',
                date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (user_id) REFERENCES users(id)
            )
        `);
        console.log("✅ Orders table created.");

        process.exit(0);
    } catch (error) {
        // Ignore "Duplicate column name" error if run multiple times
        if (error.code === 'ER_DUP_FIELDNAME') {
            console.log("⚠️ Columns already exist, skipping ALTER.");
        } else {
            console.error("❌ Error updating database:", error);
        }
        process.exit(1);
    }
};

updateDatabase();
