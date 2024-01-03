// config/connection.js
const { connect, connection } = require('mongoose');

// You can use environment variables to manage your connection string
const connectionString = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialNetworkDB';

// Adding options to handle MongoDB driver deprecation warnings
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

connect(connectionString, options);

module.exports = connection;
