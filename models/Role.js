var mongoose = require ('mongoose');

var Role = mongoose.Schema ({
  title: {
    type: String,
    require: true,
  },
  desc: {
    type: String,
    require: true,
  },
});

module.exports = Role = mongoose.model ('Role', Role);
