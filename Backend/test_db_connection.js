const { mysqlPool } = require('./config/db');

const testDb = async () => {
    try {
        console.log("Testing connection...");
        const [rows] = await mysqlPool.execute('SELECT 1 + 1 AS solution');
        console.log('Solution:', rows[0].solution);

        console.log("Testing Insert User query syntax...");
        // We won't actually run it to avoid pollution/errors, just EXPLAIN or dry run? 
        // Or just run a select on users.
        const [users] = await mysqlPool.execute('SELECT * FROM users LIMIT 1');
        console.log("Users fetched:", users);

        console.log("✅ DB connection and query are working.");
        process.exit(0);
    } catch (error) {
        console.error("❌ DB Check Failed:", error);
        process.exit(1);
    }
};

testDb();
