const express = require("express");
const router = express.Router();
const app = express();

// app.use(express.json());

// app.post("/api/admin/update_setting", (req, res) => {
//     console.log(req.data);
//     console.log(req.params);
//     console.log(req.query);
//     console.log(req.body);
//     res.status(200).send({"state":"okay"});
// });

router.post("/update_setting", (req, res) => {
    console.log(req.data);
    console.log(req.params);
    console.log(req.query);
    console.log(req.body);

    res.status(200).send({"state":"okay"});
});


module.exports = router;