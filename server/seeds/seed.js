const db = require('../config/connection');
const { User } = require('../models');
const bcrypt = require('bcrypt');
const userData = require('./userData.json');

db.once('open', async () => {
  await User.deleteMany({});

  const users = [];

  for (let i = 0; i < userData.length; i++) {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(userData[i].password, saltRounds);
    userData[i].password = hashedPassword;
    users.push(userData[i]);
  }

  await User.insertMany(users);

  console.log('Users seeded!');
  process.exit(0);
});