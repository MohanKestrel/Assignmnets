const sql = require("./db.js");

// constructor
const app = function (app) {
  this.array = app.array
  this.minDiff = app.minDiff
};

app.create = (newapp, result) => {
  sql.query("INSERT INTO result SET ?", newapp, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

   // console.log("created data: ", { id: res.insertId, ...newapp });
    result(null, { id: res.insertId, ...newapp });
  });
};

module.exports = app;
