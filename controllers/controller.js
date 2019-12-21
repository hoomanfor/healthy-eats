const express = require("express");
const router = express.Router();
const model = require("../models/model.js");

router.get("/", function(request, response) {
    model.all(function(data) {
        const eats = {
            "eats": data
        }
        response.render("index", eats);
    })
})

module.exports = router;

