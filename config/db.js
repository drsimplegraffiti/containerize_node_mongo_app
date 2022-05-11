const mongoose = require('mongoose');

const connectDb = () => {
  mongoose
    .connect(process.env.MONGODB_URI, {
      dbName: process.env.DB_NAME,
      // user: process.env.DB_USER,
      // pass: process.env.DB_PASS,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Mongodb connected....');
    })
    .catch((err) => console.log(err.message));
};

module.exports = connectDb;
