const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define schema for Operating System (OS)
const befaSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  list: [{ type: String }], // Array of strings (assuming list of items)
  // Additional fields as needed
});

// Create model from schema
const BEFA = mongoose.model("BEFA", befaSchema);

module.exports = BEFA;
