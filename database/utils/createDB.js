const pgtools = require('pgtools');
const {dbName, dbUser, dbPwd} = require('./configDB');


const config = {
  user: zttvyqdqyosecx,//process.env.PG_USER,
  host: 'ec2-3-229-161-70.compute-1.amazonaws.com',
  port: 5432,
  password: f7ca7c2417682b5bd06ee550a3c432b29c9d225e0e922f8f030c25d9a2ecf5eb,
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