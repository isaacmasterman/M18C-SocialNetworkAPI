// utils/seed.js
const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { users, thoughts } = require('./data');

connection.on('error', (err) => console.error(err));
connection.once('open', async () => {
  console.log('connected to database');

  // Delete existing data
  await User.deleteMany({});
  await Thought.deleteMany({});

  // Add new data
  await User.insertMany(users);
  await Thought.insertMany(thoughts);

  console.log('Database seeded!');
  process.exit(0);
});
