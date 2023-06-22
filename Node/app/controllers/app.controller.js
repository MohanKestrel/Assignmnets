const app = require("../models/app.model.js");

// Create and Save a new app
exports.create = (req, res) => {
  // Validate request

  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  const tempnum = req.body.nums
  const nums = tempnum.split(",").map(Number);

   // Initialize variables.
   const n = nums.length / 2;
   let sumLeft = 0;
   let sumRight = 0;
   let minDiff = Infinity;
// Iterate over the array 
   for (let i = 0; i < n; i++) {
     sumLeft += nums[i];
     sumRight += nums[i + n];
     
     const diff = Math.abs(sumLeft - sumRight);
 
     if (diff < minDiff) {
       minDiff = diff;
     }
   }
   console.log(sumLeft,sumRight)

   const string = `[${nums.join(",")}]`;
   const apps = new app({
    array: string,
    minDiff : minDiff
  });
  console.log(apps)
  // Save app in the database
  app.create(apps, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the app."
      });
    else {
      res.send(data);
    }
  });
};


