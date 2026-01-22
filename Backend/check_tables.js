const { mysqlPool } = require('./config/db');

const checkTables = async () => {
    try {
        const [rows] = await mysqlPool.execute("SHOW TABLES");
        console.log("Tables in DB:", rows);
        process.exit(0);
    } catch (error) {
        console.error("Error checking tables:", error);
        process.exit(1);
    }
};

checkTables();
