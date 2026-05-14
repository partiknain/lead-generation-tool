const mongoose = require("mongoose");

const LeadSchema = new mongoose.Schema({

  name: String,

  company: String,

  email: String,

  linkedin: String,

  position: String

});

module.exports = mongoose.model(
  "Lead",
  LeadSchema
);