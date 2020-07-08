const fetch = require("node-fetch");
var baseUrl = `https://swapi.co/api/starships/`;
var control = {};

control.home = async function(req, res) {
  let response = await fetch(baseUrl);
  let data = await response.json();
  // var star = ;
  res.render("home", {
    title: "Star Wars",
    stars: data.results
  });
};

module.exports = control;
