const pgtools = require("pgtools");
const { dbName, dbUser, dbPwd } = require("./configDB");

const config = {
  user: dbUser,
  host: 'localhost',
  port: 5432,
  password: dbPwd,
};
  
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