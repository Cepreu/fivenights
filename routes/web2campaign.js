const express = require('express');
router = express.Router();
const path = require('path');
const rootDir = require('../utils/path');
//const adminData = require("./admin");

router.get("/", (req, resp, next) => {
    resp.sendFile(path.join(rootDir, "views", "w2c.html"));
});
router.post("/AddToList", (req, resp, next) => {
    resp.sendFile(path.join(rootDir, "views", "w2c-resp.html"));
});


module.exports = router;