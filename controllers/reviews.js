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

router.get("/info", async (req, res) => {
    const guidesNumber = await pool.query("SELECT * FROM guides")
    const stepsNumber = await pool.query("SELECT * FROM steps")
    const successNumber = await pool.query("SELECT success FROM reviews WHERE success = $1", [true])

    // console.log("gNum", guidesNumber?.rowCount);
    // console.log("stNum", stepsNumber?.rowCount);
    // console.log("suNum", successNumber?.rowCount);

    res.json({
        guidesNo: guidesNumber?.rowCount,
        stepsNo: stepsNumber?.rowCount,
        successNo: successNumber?.rowCount
    })

});

module.exports = router;