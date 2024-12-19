const express = require('express');
const Restaurant = require('../schemas/restaurantSchema');

const router = express.Router(); 

router.get("/", async (req, res) => {
    try {
        const result = await Restaurant.find({}); 
        res.status(200).send(result);
    } catch (err) {
        res.status(404).send("No restaurants yet");
        console.log(err);
    }
})

router.get("/:id", async (req, res) => {
    try {
        const result = await Restaurant.findById(req.params.id); 
        if (!result) res.status(404).send("Not found");
        res.status(200).send(result);
    } catch (err) {
        console.log(err);
    }
})

module.exports = router;