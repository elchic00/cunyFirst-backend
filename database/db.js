// Instantiate database 

// Module dependencies;
const Sequelize = require('sequelize');
const {dbName, dbUser, dbPwd} = require('./utils/configDB');
const Pool = require("pg").Pool;
require("dotenv").config()
  
  // Confirmation message (limit these in production);
  console.log("Opening database connection");

// This is our entry point, we instantiate the Sequelize instance accordingly;
const db = new Sequelize(
  process.env.PG_DB,
  process.env.PG_USER,
  process.env.PG_PASSWORD,
  {
    host: process.env.PG_HOST,
    dialect: "postgres",
    port: 5432,
  }
);
// Export our instance of Sequelize, which will be modified with models;
module.exports = db;