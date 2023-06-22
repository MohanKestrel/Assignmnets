module.exports = app => {
  const apps = require("../controllers/app.controller.js");

  var router = require("express").Router();

  // Create a new app
  router.post("/calculate", apps.create);

  app.use('/api', router);
};
