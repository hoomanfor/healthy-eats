const connection = require("./connection.js");

const orm = {
    all: function() {
        return "orm.all()";
    },
    add: function() {
        return "orm.add()";

    },
    update: function() {
        return "orm.update()";
    }
};

module.exports = orm;