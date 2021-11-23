const express = require("express")
const router = express.Router()
const pool = require("../db");

router.post("/", async (req, res) => {
    console.log("Reviews Body", req.body);
    const { users_id, guides_id, rating, clarity, success, comment, difficulties } = req.body

    let review = await pool.query(
        "INSERT INTO reviews (users_id, guides_id, rating, clarity, success, comment, difficulties) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *",
        [users_id, guides_id, rating, clarity, success, comment, difficulties]
    )
});

router.get("/", async (req, res) => {
    
});
module.exports = router;