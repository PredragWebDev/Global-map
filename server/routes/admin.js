const express = require("express");
const router = express.Router();
const Countries = require("../models/Country");

router.post("/update_setting", async (req, res) => {
    console.log(req.body);
    const {countryName, countryCode, setting} = req.body; 

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
            console.log("error updating:", error);
            res.status(500).send({"state":"faild"});
        }
    } else {

        console.log("in herer?????");
        const newCountry = new Countries({
            countryName,
            countryCode,
            setting
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

router.post("/update_situation", async (req, res) => {
    const {countryName, countryCode, situationName, situationContent} = req.body;

    console.log(req.body);

    const country = await Countries.findOne({countryName});

    if (country) {
        try {
            switch (situationName) {
                case 'Leans':
                    await Countries.findOneAndUpdate(
                        {countryName:countryName},
                        {
                            $set: {
                                    Leans:situationContent
                            }
                        }
                    );
                    break;
                case 'Solution':
                    await Countries.findOneAndUpdate(
                        {countryName:countryName},
                        {
                            $set: {
                                    Solution:situationContent
                            }
                        },
                        {multi: true}
                    );
                    break;
                case 'Ceasefire':
                    await Countries.findOneAndUpdate(
                        {countryName:countryName},
                        {
                            $set: {
                                    Ceasefire:situationContent
                            }
                        },
                        {multi: true}
                    );
                    break;
                case 'Right to defend':
                    await Countries.findOneAndUpdate(
                        {countryName:countryName},
                        {
                            $set: {
                                    Right_to_defend:situationContent
                            }
                        },
                        {multi: true}
                    );
                    break;
                case 'Military Aid':
                    await Countries.findOneAndUpdate(
                        {countryName:countryName},
                        {
                            $set: {
                                    Military_Aid:situationContent
                            }
                        },
                        {multi: true}
                    );
                    break;
                case 'Humanitarian Aid':
                    await Countries.findOneAndUpdate(
                        {countryName:countryName},
                        {
                            $set: {
                                    Humanitarian_Aid:situationContent
                            }
                        },
                        {multi: true}
                    );
                    break; 
                case 'Condemns Israel':
                    await Countries.findOneAndUpdate(
                        {countryName:countryName},
                        {
                            $set: {
                                    Condemns_Israel:situationContent
                            }
                        },
                        {multi: true}
                    );
                    break;
                default:
                    break;
            }
            res.status(200).send({"state":"okay"});
        } catch (error) {
            console.log("error updating:", error);
            res.status(500).send({"state":"faild"});
        }
    } else {

        let country = new Countries();

        switch (situationName) {
            case 'Leans':
                country = new Countries({
                    countryName,
                    countryCode,
                        Leans:situationContent
                });
                break;
            case 'Solution':
                country = new Countries({
                    countryName,
                    countryCode,
                        Solution:situationContent
                });
                break;
            case 'Ceasefire':
                country = new Countries({
                    countryName,
                    countryCode,
                        Ceasefire:situationContent
                });
                break;
            case 'Right to defend':
                country = new Countries({
                    countryName,
                    countryCode,
                        Right_to_defend:situationContent
                });
                break;
            case 'Military Aid':
                country = new Countries({
                    countryName,
                    countryCode,
                        Military_Aid:situationContent
                });
                break;
            case 'Humanitarian Aid':
                country = new Countries({
                    countryName,
                    countryCode,
                        Humanitarian_Aid:situationContent
                });
                break; 
            case 'Condemns Israel':
                country = new Countries({
                    countryName,
                    countryCode,
                        Condemns_Israel:situationContent
                });
                break;
            default:
                break;
        }

        // const newCountry = new Countries({
        //     countryName,
        //     situation: {
        //         Leans:situationContent
        //     },
        // });
        try {
            
            await country.save();
            res.status(200).send({"state":"okay"});
        } catch (error) {
            console.log("error adding:", error);
            res.status(500).send({"state":"faild"});
            
        }
    }

})
module.exports = router;