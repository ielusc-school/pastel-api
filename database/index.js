const mongoose = require('mongoose');

const DBCON = 'mongodb+srv://pasteluser:pastel123@cluster0-kqvvh.mongodb.net/test?retryWrites=true&w=majority';

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