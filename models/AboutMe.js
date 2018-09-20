var mongoose = require ('mongoose');
var Schema = mongoose.Schema;
var Role = require ('./Role');

var AboutMe = mongoose.Schema ({
  bio: {
    type: String,
    require: true,
  },
  role: [{type: Schema.Types.Object, ref: Role}],
});

module.exports = AboutMe = mongoose.model ('AboutMe', AboutMe);
