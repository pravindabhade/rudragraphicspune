const mongoose = require("mongoose");

const quoteSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    service: String,
    quantity: String,
    details: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Quote", quoteSchema);