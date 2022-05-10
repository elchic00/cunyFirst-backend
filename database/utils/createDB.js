const pgtools = require('pgtools');
const { dbName, dbUser, dbPwd } = require('./configDB');

require("dotenv").config();
 
const config = {
    user: process.env.PG_DB,
    host: process.env.PG_HOST,
    port: 5432,
    password: process.env.PG_PASSWORD
};
  
          const { Pool } = require("pg");

  //attempt to create DB
  //if it already exists, this does nothing and just connects to
  //the existing db of that name
  const createDB = async () => {
    try {

      const pool = new Pool({
        connectionString:
          process.env.DATABASE_URL ||
          "postgresql://postgres:drew@localhost:5432/final-backend",
        ssl: process.env.DATABASE_URL ?  { rejectUnauthorized: false } : false,
      });
        pool.connect();
          // await pgtools.createdb(config, process.env.PG_DB);
          // console.log(`Successfully created the database: ${process.env.PG_DB}!`);
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