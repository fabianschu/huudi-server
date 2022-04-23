var express = require("express");
var router = express.Router();

const hubs = {};

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("hubs");
});

/* GET users listing. */
router.post("/", function (req, res, next) {
  const { spaces, hubName } = req.body;
  hubs[hubName] = spaces;
  res.send("hubs");
});

module.exports = router;
