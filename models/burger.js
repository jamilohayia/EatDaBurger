// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },

  insertOne: function (vals, cb) {
    orm.create("burgers", "name",[vals], function(res) {
      console.log(vals,"test burger")
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },

};

// Export the database functions for the controller (burgerController.js).
module.exports = burger;
