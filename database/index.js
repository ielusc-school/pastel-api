const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('mongoose');
const DBCON = process.env.MATLAS

mongoose.connect(DBCON, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
     console.log(`MongoAtlas is Up`);
  })
  .catch((error) => {
      console.log(`MongoAtlas is Down because ${error}`);
  });

  mongoose.Promise = global.Promise;
  module.exports = mongoose;