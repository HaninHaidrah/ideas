"use strict";

const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  productName: String,
  specfications: [],
  quantity: Number,
  brand: [],
  unit: [],
});

const itemModel = mongoose.model("items", itemSchema);

module.exports = itemModel;
