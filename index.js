//DEPENDENCIES
const express = require("express");
const app = express();
const cors = require("cors")
const pool = require("./db")
const path = require("path")
require("dotenv").config()

const usersController = require("./controllers/users")
const guidesController = require("./controllers/guides")
const reviewsController = require("./controllers/reviews")
const stepsController = require("./controllers/steps")

//MIDDLEWARE
app.use(express.static(path.join(__dirname, "./client/build")));
app.use(cors());
app.use(express.json())
app.use("/api/users", usersController)
app.use("/api/guides", guidesController)
app.use("/api/reviews", reviewsController)
app.use("/api/steps", stepsController)

//ROUTES
app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build", "index.html"));
  });



//LISTEN
app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on Port ${process.env.PORT}`)
})