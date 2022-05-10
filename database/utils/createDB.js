const pgtools = require('pgtools');
const {dbName, dbUser, dbPwd} = require('./configDB');


const config = {
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  port: 5432,
  password: process.env.PG_PASSWORD,
};
  
  
  //attempt to create DB
  //if it already exists, this does nothing and just connects to
  //the existing db of that name
  const createDB = async () => {
      try {
          await pgtools.createdb(config, dbName);
          console.log(`Successfully created the database: ${dbName}!`);
        } catch (err) {
          if (err.name === 'duplicate_database') {
              console.log(`Database ${dbName} already exists`);
              return;
            } else {
              console.error('createDB error:', err);
              process.exit(1);
            }
        }
  }

module.exports = createDB;