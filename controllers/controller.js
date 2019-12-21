const express = require("express");
const router = express.Router();
const model = require("../models/model.js");

router.get("/", function(request, response) {
    response.render("index");
})

module.exports = router;

