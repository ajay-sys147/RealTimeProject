const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define schema for Operating System (OS)
const appSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  list: [{ type: String }], // Array of strings (assuming list of items)
  // Additional fields as needed
});

// Create model from schema
const APPTITUDE = mongoose.model("apptitude", appSchema);

module.exports = APPTITUDE;
