const { mysqlPool } = require('./config/db');

const checkUsers = async () => {
    try {
        console.log("Fetching users from MySQL (TiDB Cloud)...");
        const [users] = await mysqlPool.execute('SELECT id, username, email, created_at FROM users');

        if (users.length === 0) {
            console.log("No users found in the database yet.");
        } else {
            console.log("✅ Found Users:");
            console.table(users);
        }
        process.exit(0);
    } catch (error) {
        console.error("❌ Error fetching users:", error);
        process.exit(1);
    }
};

checkUsers();
