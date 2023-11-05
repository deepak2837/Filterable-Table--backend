const db = require('./db');
const User = require('./models/UserModel');
const users = require('./sample data.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await User.insertMany(users);
    console.log('Database seeded successfully');
  } catch (err) {
    console.error(err);
  }
});
