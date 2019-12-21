const connection = require("./connection.js");

const orm = {
    all: function(table, callback) {
        const query = "SELECT * FROM " + table + ";";
        connection.query(query, function(error, data) {
            if (error) throw error;
            callback(data);
        })
    },
    add: function() {
        return "orm.add()";

    },
    update: function() {
        return "orm.update()";
    }
};

module.exports = orm;