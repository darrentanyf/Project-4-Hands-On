const express = require("express")
const router = express.Router()

router.get("/:id", async (req, res) => {
    const { id } = req.params
    console.log("STEPS FOR SPECIFIC GUIDE", id)
    // const guides = await pool.query("SELECT * FROM guides WHERE guides_id = $1", [
    //     id,
    // ])
    // console.log("SEARCH FOR GUIDE", guides.rows[0])
    // res.json(guides.rows[0])
});


module.exports = router;