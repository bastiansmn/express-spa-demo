const express = require('express');
require("dotenv").config();
const bodyParser = require('body-parser');

const dbConfig = require('./config/db.config');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set("view engine", "ejs");

// Connect to DB with config
const { Client } = require("pg");
const db = new Client(dbConfig);
db.connect();

app.get("/home", (_req, res) => {
   res.render("home");
});

app.get("/menus", async (_req, res) => {
   res.render("menu", {
      menus: await require("./controllers/menus").getMenus()
   });
})

app.listen(process.env.PORT || 3000, () => {
   console.log("Listening on port 3000");
});