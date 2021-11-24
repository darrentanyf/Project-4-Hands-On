const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const jwtGenerator = require("../utility/jwtGenerator");
const pool = require("../db");
const jwt = require("jsonwebtoken")
require("dotenv").config()

//USER LOGIN
router.post("/login", async (req, res) => {
    console.log("Login Body", req.body);
    const { username, password } = req.body;

    const user = await pool.query("SELECT * FROM users WHERE username = $1", [
        username,
    ]);

    console.log("THIS USER", user.rows[0]);

    // USERNAME NOT FOUND
    if (user.rows.length === 0) {
        return res.json({
            message: "Username or Password is invalid",
            authenticated: false,
        })
    }

    // SUCCESSFUL LOGIN
    if (bcrypt.compareSync(password, user.rows[0].users_password)) {
        const jwtToken = jwtGenerator(user.rows[0].users_id);
        console.log("TOKEN", jwtToken);
        return res.json({
            token: jwtToken,
            message: "Login Successful",
            authenticated: true,
        });
    }

    // WRONG PASSWORD
    else {
        return res.json({
            message: "Username or Password is invalid",
            authenticated: false,
        });
    }
});

//NEW USER SIGNUP
router.post("/signup", async (req, res) => {
    console.log("Register Body", req.body);
    const { username, email, password, profileimg } = req.body;

    let newPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

    //USERNAME ALREADY EXISTS
    let checkUser = await pool.query("SELECT * FROM users WHERE username = $1", [
        username,
    ]);
    if (checkUser.rows.length > 0) {
        return res.json({
            message: "Username has been taken",
            authenticated: false,
        });
    }

    //EMAIL ALREADY EXISTS
    let checkEmail = await pool.query("SELECT * FROM users WHERE email = $1", [
        email,
    ]);
    if (checkEmail.rows.length > 0) {
        return res.json({
            message: "Email has been taken",
            authenticated: false,
        });
    }

    //CREATE NEW USER

    //! Why does this not work?
    // const salt = bcrypt.genSalt(10);
    // const newPassword = bcrypt.hash(password, bcrypt.genSalt(10));

    let newUser = await pool.query(
        "INSERT INTO users (username, users_password, email, profile_img) VALUES ($1,$2,$3,$4) RETURNING *",
        [username, newPassword, email, profileimg]
    );

    const jwtToken = jwtGenerator(newUser.rows[0].users_id);
    return res.json({
        token: jwtToken,
        message: "Signup Successful",
        authenticated: true,
    });
});

router.post("/authenticate", (req,res)=>{
    console.log("AUTHENTICATE ROUTE",req.body)
    const { token } = req.body
    try {
        const payload = jwt.verify(token, process.env.jwtSecret)
        console.log("PAYLOAD",payload)
        res.json({
            authenticated: true,
            userInfo: payload.user
        })
    }
    catch(err) {
        console.log("ERROR")
        res.json({
            authenticated: false,
        })
    }

})
module.exports = router;
