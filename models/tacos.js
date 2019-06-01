var orm = require("../config/orm");

var taco = {
  all: function(cb) {
    orm.selectAll("*","tacos",cb)
  }
}

module.exports = taco;