const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define schema for DBMS
const dbmsSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  list: [{ type: String }],
  // Additional fields as needed
});

// Create model from schema
const DBMS = mongoose.model("DBMS", dbmsSchema);

module.exports = DBMS;
