const orm = require("../config/orm.js");

const model = {
    all: function(callback) {
        console.log(orm.all());
    },
    add: function(callback) {
        console.log(orm.add());
    },
    update: function(callback) {
        console.log(orm.update());
    }
}

model.all();
model.add();
model.update();

module.exports = model;