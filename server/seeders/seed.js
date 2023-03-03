const db = require('../config/connection');
const { User, Profile } = require('../models');
const userSeeds = require('./user-Seeds.json');


db.once('open', async () => {
  try {
    await Profile.deleteOne({});
    await User.deleteOne({});

    await User.create(userSeeds);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});


