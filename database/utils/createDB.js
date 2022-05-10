require("dotenv").config();
 
const { Pool } = require("pg");

  const createDB = async () => {
    try {

      const pool = new Pool({
        connectionString:
          process.env.DATABASE_URL ||
          "postgresql://postgres:drew@localhost:5432/final-backend", //connection string to local DB
        ssl: process.env.DATABASE_URL ?  { rejectUnauthorized: false } : false,
      });
        pool.connect();
        } catch (err) {
          if (err.name === 'duplicate_database') {
              console.log(`Database ${process.env.PG_DB} already exists`);
              return;
            } else {
              console.error('createDB error:', err);
              process.exit(1);
            }
        }
  }

module.exports = createDB;