// Instantiate database 

// Module dependencies;
const Sequelize = require('sequelize');
const {dbName, dbUser, dbPwd} = require('./utils/configDB');
require("dotenv").config();

// Confirmation message (limit these in production);
console.log('Opening database connection');

// This is our entry point, we instantiate the Sequelize instance accordingly;
const db = process.env.DATABASE_URL ? 
new Sequelize(process.env.DATABASE_URL, {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
)
 : new Sequelize(dbName, dbUser, dbPwd, {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432,
})  
// Export our instance of Sequelize, which will be modified with models;
module.exports = db;