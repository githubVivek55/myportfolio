const mongoose = require ('mongoose');
//const schema = mongoose.schema;

var Home = mongoose.Schema ({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  desc: {
    type: String,
    require: true,
  },
});

module.exports = Home = mongoose.model ('home', Home);
