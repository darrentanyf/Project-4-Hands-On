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
    const reviews = await pool.query("SELECT * FROM reviews WHERE guides_id = $1", [
        id,
    ])
    console.log("SEARCH FOR STEPS", steps.rows)
    console.log("SEARCH FOR GUIDE", guides.rows[0])
    console.log("SEARCH FOR REVIEWS", reviews.rows)
    res.json({
        stepData: steps.rows,
        guideData: guides.rows[0],
        reviewData: reviews.rows
    })
});

router.post("/new", async (req, res) => {
    console.log("NEW GUIDE WORKING?")
    console.log("NEW GUIDE BODY", req.body)
    if (req.body.newSteps.length === 0) {
        console.log("NOOOOOOOOOO DATA COMING IN")
    }
    else {
        console.log("THERE IS DATA COMING IN")
        const { newGuide, newSteps } = req.body
        console.log("GUIDE NAME", newGuide?.users_id)
        console.log("STEPS111", newSteps)


        let guide = await pool.query(
            "INSERT INTO guides (name, description, tools_required, parts_required, difficulty, time_taken, users_id, guides_img) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *",
            [newGuide?.name, newGuide?.description ,newGuide?.tools_required ,newGuide?.parts_required ,newGuide?.difficulty ,newGuide?.time_taken, newGuide?.users_id,newGuide?.guides_img,]
        )
    
        const newGuideId = guide.rows[0].guides_id;
        console.log("NEW GUIDE ID",newGuideId)

        for (let i = 0; i<req.body.newSteps.length; i++){
            let steps = await pool.query(
                "INSERT INTO steps (step, title, description, steps_img, guides_id) VALUES ($1,$2,$3,$4,$5) RETURNING *",
                [newSteps[i]?.step, newSteps[i]?.title ,newSteps[i]?.description ,newSteps[i]?.steps_img, newGuideId]
            )
        }

    }


});

module.exports = router;