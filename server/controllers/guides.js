const express = require("express");
const router = express.Router()
const pool = require("../db");

router.get("/", async (req, res) => {
    const guides = await pool.query("SELECT * FROM guides")
    res.json(guides.rows)
});

router.get("/:id", async (req, res) => {
    const { id } = req.params
    const guides = await pool.query("SELECT * FROM guides WHERE guides_id = $1", [
        id,
    ])
    const steps = await pool.query("SELECT * FROM steps WHERE guides_id = $1", [
        id,
    ])

    console.log("SEARCH FOR STEPS", steps.rows)
    console.log("SEARCH FOR GUIDE", guides.rows[0])
    res.json({
        stepData: steps.rows,
        guideData: guides.rows[0]
    })
});

module.exports = router;