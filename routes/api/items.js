var express = require ('express');
var router = express.Router ();

const Home = require ('../../models/Home');
const AboutMe = require ('../../models/AboutMe');
const Role = require ('../../models/Role');

// Home page routes
//get route for fetching home page content
router.get ('/', (req, res) => {
  res.header ('Access-Control-Allow-Origin', '*');
  res.header (
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  Home.find ().then (item => res.json (item));
});

//post route to add home page content
router.post ('/', (req, res) => {
  const newContent = new Home ({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    desc: req.body.desc,
  });

  newContent.save ().then (item => res.json (item));
});

//delete route to delete home page content
router.delete ('/:id', (req, res) => {
  Home.findById (req.params.id).then (item => {
    item
      .remove ()
      .then (() => res.json ({result: success}))
      .catch (err => res.status (404).json ({result: fail}));
  });
});

//End home page routes

//Start AboutMe page routes

//get request to fetch AboutMe page content
router.get ('/about', (req, res) => {
  res.header ('Access-Control-Allow-Origin', '*');
  res.header (
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  AboutMe.find ().then (item => res.json (item));
});

router.post ('/about', (req, res) => {
  var newRoles = [];
  req.body.role.forEach (el => {
    var rol = new Role ({
      title: el.title,
      desc: el.desc,
    });
    //console.log (rol);
    newRoles.push (rol);
  });
  //console.log (newRoles);
  const newData = new AboutMe ({
    bio: req.body.bio,
    role: newRoles,
  });

  //console.log (newData);
  newData.save ().then (newData => res.json (newData));
});

module.exports = router;
