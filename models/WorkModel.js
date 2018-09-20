var mongoose = require ('mongoose');
var project = require ('./ProjectModel');

var MyWork = mongoose.Schema ({
  heading: {
    type: String,
    require: true,
  },
  subHeading: {
    type: String,
    require: true,
  },
  projects: [{type: mongoose.Schema.Types.Object, ref: project}],
});

module.exports = MyWork = mongoose.model ('MyWrok', MyWork);
