//importing all the packages
const express = require("express");
const morgan = require("morgan");
const hbs = require("hbs");
const path = require("path");
const router = require("./routes/route");

//initillizing the express
const app = express();
const portnumber = 8080;

//setting up all the required middlewares
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "static")));

//setting up the hbs engine and the layout page and the partial files
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views", "pages"));
app.set("view options", { layout: "main" });
hbs.registerPartials(path.join(__dirname, "views", "partials"));

//setting up the router
app.use(router);

//setting up the port
app.listen(8080, () => {
  console.log(`Express Server listining `);
});
//the api https://swapi.co/api/starships/
