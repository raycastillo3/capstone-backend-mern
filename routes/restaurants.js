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


module.exports = router;