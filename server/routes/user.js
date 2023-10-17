const express = require("express");
const router = express.Router();
const Countries = require("../models/Country");

router.post("/get_countrydata", async (req, res) => {
    console.log("okay");
    const countryData = await Countries.find({situation:{ $ne: undefined}});

    const situations = countryData.map((data) => {
        const {countryCode, situation} = data;
        const temp = JSON.parse(situation);

            return {
                countryCode,
                situation:temp
            }
    });

    console.log("temp_situation>>>", situations);

    // const situations = JSON.parse(temp_situations);

    const countryColor = situations.map((data) => {

        // const temp = JSON.parse(data.situation);


        console.log("color>>>", data.situation.Leans);

        if (data.situation.Leans !== undefined) {
            return {
                countryCode:data.countryCode,
                color:data.situation.Leans
            };
        }
    })

    const stance = countryData.map((data) => {
        const { countryCode, stance } = data;
        console.log("stance>>>", stance);

        if (stance !== undefined) {

            const temp_stance = JSON.parse(stance);
          
            return {
                countryCode:countryCode,    
                stance:temp_stance
            };
        }
      });

    res.status(200).send({"state":"okay", "countryColor":countryColor, "situation":situations, "stance": stance});
})

module.exports = router;