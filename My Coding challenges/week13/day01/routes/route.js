//importing express and setting up the router
const express = require("express");
var router = express.Router();

//importing all the functions from servercontroller file and matching them with the variables in the var object
var {
  home,
  addFish,
  postFish,
  showFish,
  searchFish,
  updateFishForm,
  updateFish,
  deleteFishForm,
  deleteFish
} = require("../controller/servercontroller");

//the home route to display home
router.get("/home", home);

//the get and post route to display and create an new fish document
router.get("/addFish", addFish);
router.post("/postFish", postFish);

//the get route to display the show fish page
router.get("/showFish", showFish);

// the get route to display the search fish reasult in a page
router.get("/searchFish", searchFish);

//the get and post route to display and update a  fish document
router.get("/updateFish", updateFishForm);
router.post("/updateFish", updateFish);

//the get and post route to display and delete a fish document
router.get("/deleteFish", deleteFishForm);
router.post("/deleteFish", deleteFish);

//exporting the router
module.exports = router;
