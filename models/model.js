const orm = require("../config/orm.js");

const model = {
    all: function(callback) {
        orm.all("eats", function(data) {
            callback(data);
        })
    },
    add: function(callback) {
        console.log(orm.add());
    },
    update: function(callback) {
        console.log(orm.update());
    }
}

module.exports = model;