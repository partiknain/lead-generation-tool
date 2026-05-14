const router = require("express").Router();

const Lead = require("../models/Lead");

router.post("/add", async (req, res) => {

  const lead = await Lead.create(req.body);

  res.json(lead);

});

router.get("/", async (req, res) => {

  const leads = await Lead.find();

  res.json(leads);

});

module.exports = router;