const express = require("express");
const router = express.Router()
const pool = require("../db");

router.get("/", async (req, res) => {
    const guides = await pool.query("SELECT * FROM guides")
    console.log("ALL GUIDES ROW SPECIFIC NOWWWWWW", guides.rows)
    res.json(guides.rows)
});


module.exports = router;