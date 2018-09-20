var mongoose = require ('mongoose');

var Project = mongoose.Schema ({
  webUrl: {
    type: String,
    require: false,
  },
  githubUrl: {
    type: String,
    require: true,
  },
  imgUrl: {
    type: String,
    require: true,
  },
});

module.exports = Project = mongoose.model ('Project', Project);
