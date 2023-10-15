const express = require("express");
const router = express.Router();
const Countries = require("../models/Country");

router.post("/update_setting", async (req, res) => {
    console.log(req.body);
    const {countryName, setting} = req.body; 

    const country = await Countries.findOne({countryName});

    // console.log("exist?????", country);

    if (country) {
        try {
            
            await Countries.findOneAndUpdate(
                {countryName:countryName},
                {
                    $set: {
                      setting
                    }
                  }
            );
            res.status(200).send({"state":"okay"});
        } catch (error) {
            console.log("error updating!");
            res.status(500).send({"state":"faild"});
        }
    } else {

        console.log("in herer?????");
        const newCountry = new Countries({
            countryName,
            setting
        })
        try {
            
            await newCountry.save();
            res.status(200).send({"state":"okay"});
        } catch (error) {
            console.log("error adding!");
            res.status(500).send({"state":"faild"});
            
        }
    }

});

router.post("/update_situation", async (req, res) => {
    const {countryName, situationName, content} = req.body;

    const country = await Countries.findOne({countryName});

    if (country) {
        try {
            
            await Countries.findOneAndUpdate(
                {countryName:countryName},
                {
                    $set: {
                      fieldName:situationName, fieldValue:content
                    }
                  }
            );
            res.status(200).send({"state":"okay"});
        } catch (error) {
            console.log("error updating!");
            res.status(500).send({"state":"faild"});
        }
    } else {

        const newCountry = new Countries({
            countryName,
            situation: {
                situationName:content
            }
        })
        try {
            
            await newCountry.save();
            res.status(200).send({"state":"okay"});
        } catch (error) {
            console.log("error adding!");
            res.status(500).send({"state":"faild"});
            
        }
    }

})
module.exports = router;