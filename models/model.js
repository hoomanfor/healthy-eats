const orm = require("../config/orm.js");

const model = {
    all: function(callback) {
        orm.all("eats", function(data) {
            callback(data);
        })
    },
    add: function(column, value, callback) {
        orm.add("eats", column, value, function(data) {
            callback(data);
        })
    },
    update: function(callback) {
        console.log(orm.update());
    }
}

module.exports = model;