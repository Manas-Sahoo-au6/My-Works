//setting up my server controller for page rendering
//importing the db connection and fish schema
require("../data/db");
const Fish = require("../data/models/fish");
//creating an empty object to store and export all the controller function
var servercontrol = {};

//to display the home page
servercontrol.home = (req, res) => {
  res.render("home", { title: "Fish Encyclopidea" });
};

//to display the create fish page
servercontrol.addFish = (req, res) => {
  res.render("createFish", { title: "Add Fish" });
};

//the function to add the fish to the databse
servercontrol.postFish = (req, res) => {
  //console.log(req.body)
  var newFish = new Fish({ ...req.body });
  newFish
    .save()
    .then(newFish => {
      console.log(newFish);
      res.redirect("/showFish");
    })
    .catch(err => {
      res.json(err);
    });
};

//to display the show fish page were all the fish documents are fetched from db and rendered
servercontrol.showFish = (req, res) => {
  Fish.find({}, (err, docs) => {
    if (err) res.json(err);
    else res.render("showFish", { fish: docs });
  });
};

//the function of the search bar to search one particular fish details and display on a page
servercontrol.searchFish = (req, res) => {
  console.log(req.query.sf);
  var searchQuery = req.query.sf;
  // res.redirect('/searchFish')
  Fish.find({ name: searchQuery }, (err, docs) => {
    if (err) res.json(err);
    else res.render("searchFish", { fish: docs });
  });
};

//to display the update fish form page
servercontrol.updateFishForm = (req, res) => {
  res.render("updateFish", { title: "Update Fish" });
};

//the update function which updates a prticular fish details in the data base
servercontrol.updateFish = (req, res) => {
  var fishName = req.body.name;
  Fish.updateOne({ name: fishName }, { ...req.body }, { new: true })
    .then(() => {
      res.redirect("/showfish");
    })
    .catch(err => {
      res.json(err);
    });
};

//to display the delete fish form page
servercontrol.deleteFishForm = (req, res) => {
  res.render("deleteFish", { title: "Delete Fish" });
};

// the function to delete a fish deatils document from the db
servercontrol.deleteFish = (req, res) => {
  let fishName = req.body.name;
  Fish.deleteOne({ name: fishName })
    .then(() => {
      res.redirect("/showfish");
    })
    .catch(err => {
      res.json(err);
    });
};

//exporting the controller
module.exports = servercontrol;
