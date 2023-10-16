const express = require("express");
const router = express.Router();
const Countries = require("../models/Country");

router.post("/get_countrydata", async (req, res) => {
    const countryData = await Countries.find({});

    const setting = countryData.map((data) => {
        const {countryCode, setting} = data;

        return {
            countryCode,
            setting
        }
    })

    const countryColor = countryData.map((data) => {
        const { countryCode, setting: { Leans } } = data;

        return {
            countryCode,
            color:Leans
        };
    })

    const situation = countryData.map((data) => {
        const { countryCode, Leans, Solution, Ceasefire, Right_to_defend, Military_Aid, Humanitarian_Aid, Condemns_Israel } = data;
      
        return {
            countryCode:countryCode,    
            leans: Leans,
            solution: Solution,
            ceasefire: Ceasefire,
            right_to_defend: Right_to_defend,
            military_aid: Military_Aid,
            humanitarian_aid: Humanitarian_Aid,
            condemns_israel: Condemns_Israel
        };
      });

    res.status(200).send({"state":"okay", "countryColor":countryColor, "setting":setting, "situation": situation});
})

module.exports = router;