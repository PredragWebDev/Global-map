const express = require("express");
const router = express.Router();
const Countries = require("../models/Country");
const Situation = require("../models/Situation");
router.post("/get_initialColor", async (req, res) => {
    console.log("okay");
    try {
        const situationNames = await Situation.find({optionNames: {$ne: undefined}}, {situationName:1, optionNames:1});
        if (situationNames[0].situationName !== undefined) {
            console.log("option name>>>>", situationNames[0].optionNames);
            const optionName = Object.keys(JSON.parse(situationNames[0].optionNames))[0];
            const countries = await Countries.find({situationName:situationNames[0].situationName}, {_id:0, options:1, countryCode:1});
            const result = countries.map(country => {
                const options = JSON.parse(country.options);
                return (
                    {
                        countryCode:country.countryCode,
                        option:options[optionName]
                    }
                )
            })
    
            console.log("result>>>", result);
            res.send({"state":"okay", countryColor:result});
        }
    } catch (error) {
        console.log("Error is occured:", error);
        res.send({"state":"faild"});
    }


    // const situations = countryData.map((data) => {
    //     const {countryCode, situation} = data;
    //     const temp = JSON.parse(situation);

    //         return {
    //             countryCode,
    //             situation:temp
    //         }
    // });

    // console.log("temp_situation>>>", situations);

    // // const situations = JSON.parse(temp_situations);

    // const countryColor = situations.map((data) => {

    //     // const temp = JSON.parse(data.situation);


    //     console.log("color>>>", data.situation.Leans);

    //     if (data.situation.Leans !== undefined) {
    //         return {
    //             countryCode:data.countryCode,
    //             color:data.situation.Leans
    //         };
    //     }
    // })

    // const stance = countryData.map((data) => {
    //     const { countryCode, stance } = data;
    //     console.log("stance>>>", stance);

    //     if (stance !== undefined) {

    //         const temp_stance = JSON.parse(stance);
          
    //         return {
    //             countryCode:countryCode,    
    //             stance:temp_stance
    //         };
    //     }
    //   });

    // res.status(200).send({"state":"okay", "countryColor":countryColor, "situation":situations, "stance": stance});
})

router.post("/get_situationNames", async (req, res) => {

    try {
        const situationName = await Situation.find({}, {_id:0, situationName:1});

        const result = situationName.map(name => {
            return(
                {
                    label:name.situationName
                }
            )
        })
        
        res.send({"state":"okay", situationNames:result});
    } catch (error) {
        console.log("Error is occured:", error);
        res.send({"state":"failed"});
        
    }
})

router.post("/get_OptionNames", async (req, res) => {
    const {situationName} = req.body;
    try {
        const options = await Situation.find({situationName}, {_id:0, optionNames:1});
        if (options !== undefined) {
            console.log("optionnames>>>", options[0].optionNames);
            const optionNames = Object.keys(JSON.parse(options[0].optionNames));
            const result = optionNames.map(name => {
                return (
                    {
                        label:name
                    }
                )
            })


            console.log("options>>>>", result);
    
            res.send({"state":"okay", optionNames:result});
        } else {

            res.send({"state":"okay"});
        }
    } catch (error) {
        console.log("Error is occured:", error);
        res.send({"state":"faild"});
    }
})

router.post("/get_filterData", async (req, res) => {
    const {situationName, optionName} = req.body;
    try {
        
        const countries = await Countries.find({situationName}, {_id:0, countryCode:1, options:1});
        const result = countries.map(country => {
            const options = JSON.parse(country.options);
            return (
                {
                    countryCode:country.countryCode,
                    option:options[optionName]
                }
            )
        })

        res.send({"state":"okay", countryColor:result});
    } catch (error) {
        console.log("Error is occured:", error);
        res.send({"state":"faild"});
    }
})
module.exports = router;