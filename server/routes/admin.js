const express = require("express");
const router = express.Router();
const Countries = require("../models/Country");
const Situation = require("../models/Situation");

router.post("/update_situation", async (req, res) => {
    console.log(req.body);
    const {countryName, countryCode, situationContents} = req.body; 

    const situation = JSON.stringify(situationContents);

    const country = await Countries.findOne({countryName});

    // console.log("exist?????", country);

    if (country) {
        try {
            
            await Countries.findOneAndUpdate(
                {countryName:countryName},
                {
                    $set: {
                        situation
                    }
                  }
            );
            res.status(200).send({"state":"okay"});
        } catch (error) {
            console.log("error updating:", error);
            res.status(500).send({"state":"faild"});
        }
    } else {

        console.log("in herer?????");
        const newCountry = new Countries({
            countryName,
            countryCode,
            situation
        })
        try {
            
            await newCountry.save();
            res.status(200).send({"state":"okay"});
        } catch (error) {
            console.log("error adding:", error);
            res.status(500).send({"state":"faild"});
            
        }
    }

});

router.post("/update_stance", async (req, res) => {
    const {countryName, countryCode, stanceName, stanceContents} = req.body;

    console.log(req.body);
    

    const country = await Countries.findOne({countryName});

    
    if (country) {
        const temp_stance = country.stance;
        if (temp_stance === undefined) {
            let temp = {};
            temp[stanceName] = stanceContents;
            const stance = JSON.stringify(temp);
    
            console.log("stance>>>>", stance);
            try {
            
                await Countries.findOneAndUpdate(
                    {countryName:countryName},
                    {
                        $set: {
                            stance
                        }
                      }
                );
                res.status(200).send({"state":"okay"});
            } catch (error) {
                console.log("error updating:", error);
                res.status(500).send({"state":"faild"});
            }
    
        } else {
            let temp_ = JSON.parse(temp_stance);

            console.log("stance>>>>",temp_);
            let temp = {};
            temp[stanceName] = stanceContents;
            const combined = {...temp_, ...temp};

            const stance = JSON.stringify(combined);


            try {
            
                await Countries.findOneAndUpdate(
                    {countryName:countryName},
                    {
                        $set: {
                            stance
                        }
                      }
                );
                res.status(200).send({"state":"okay"});
            } catch (error) {
                console.log("error updating:", error);
                res.status(500).send({"state":"faild"});
            }

        }

    } else {
        let temp = {};
        temp[stanceName] = stanceContents;
        const stance = JSON.stringify(temp);

        console.log("stance>>>>", stance);
        let country = new Countries({
            countryName,
            countryCode,
            stance
        });

        try {
            
            await country.save();
            res.status(200).send({"state":"okay"});
        } catch (error) {
            console.log("error adding:", error);
            res.status(500).send({"state":"faild"});
            
        }
    }

})

router.post("/get_situations", async (req, res) => {
    const situations = await Situation.find({});

    res.send({"state":"okay", situations});
})

router.post("/add_situation", async (req, res) => {
    const {situationName} = req.body;

    try {
        const situation = new Situation({
            situationName
        })

        situation.save();
        res.send({"state":"okay"});
        
    } catch (error) {
        console.log("error is occured:", error);
        res.send({"state":"faild"});
    }

})
module.exports = router;