//DEPENDENCIES
const express = require("express");
const app = express();
const cors = require("cors")
const pool = require("./db")
const path = require("path")

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

app.post("/test",async (req,res) => {
    try {
        const { username, password, email, profile_img } = req.body
        const newUser = await pool.query("INSERT INTO users (username, password, email, profile_img) VALUES($1,$2,$3,$4)", [username, password, email, profile_img]
        );
        res.json(newUser)
    } catch(err) {
        console.log(err.message);
    }
})


//LISTEN
app.listen(5000, ()=>{
    console.log("Server is running on Port 5000")
})