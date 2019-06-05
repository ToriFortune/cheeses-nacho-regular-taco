const express = require("express")
const connection = require("./connection");
// exporting ORM objects
module.exports = {
    // methods to retrieve and save data in the database
    selectAll: function (what2select, tableNames, cb) {
        connection.query("SELECT ?? FROM ??",[what2select,tableNames], function (err, data) {
            // console.log(data + "????")
            if (err) throw err;
            // result = data;
            // return data;
            cb(data);
        });
    },
    insertOne: function () {
        connection.connect(function (err) {
            if (err) throw err;
            connection.query(`INSERT ${item} FROM tacos`, function (err, res) {
                // console.log(item +"??????")
                console.log(res);
            })
        });
    },
    updateOne: function () {
        connection.connect(function (err) {
            if (err) throw err;
            connection.query(`UPDATE ${item} FROM tacos`, function (err, res) {
                console.log(res);
            })
        });
    }
};