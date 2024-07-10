const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

// database imports
const User = require("./models/user");

dotenv.config({ path: "./.env" });
const port = process.env.PORT;

app.use(
  cors({
    origin: "http://localhost:5173", // Allow only from this origin
  })
);

app.use(bodyParser.json());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

const dbURI = process.env.DB_URL;
mongoose
  .connect(dbURI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error: " + err));

app.post("/user", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const newUser = new User({
      name,
      email,
      password,
    });

    const response = await newUser.save();
    console.log(response);
    res.status(201).json({ message: "success" });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const result = await User.findOne({ email: email, password: password });
    if (result) {
      res.status(201).json({ message: "success" });
    } else {
      res.status(201).json({ message: "failure" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

const DBMS = require("./models/dbms");

app.post("/dbms", async (req, res) => {
  try {
    const { name, description, list } = req.body;
    const newDBMS = new DBMS({ name, description, list });
    await newDBMS.save();
    res.status(201).json(newDBMS);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const OS = require("./models/os");

app.post("/os", async (req, res) => {
  try {
    const { name, description, list } = req.body;
    const newDB = new OS({ name, description, list });
    await newDB.save();
    res.status(201).json(newDB);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const APPTITUDE = require("./models/apptitude");

app.post("/apptitude", async (req, res) => {
  try {
    const { name, description, list } = req.body;
    const newDB = new APPTITUDE({ name, description, list });
    await newDB.save();
    res.status(201).json(newDB);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const SE = require("./models/se");

app.post("/se", async (req, res) => {
  try {
    const { name, description, list } = req.body;
    const newDB = new SE({ name, description, list });
    await newDB.save();
    res.status(201).json(newDB);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const BEFA = require("./models/befa");

app.post("/befa", async (req, res) => {
  try {
    const { name, description, list } = req.body;
    const newDB = new BEFA({ name, description, list });
    await newDB.save();
    res.status(201).json(newDB);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/get/dbms", async (req, res) => {
  try {
    const dbEntries = await DBMS.find();
    res.status(200).json(dbEntries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/get/os", async (req, res) => {
  try {
    const dbEntries = await OS.find();
    res.status(200).json(dbEntries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/get/apptitude", async (req, res) => {
  try {
    const dbEntries = await APPTITUDE.find();
    res.status(200).json(dbEntries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/get/se", async (req, res) => {
  try {
    const dbEntries = await SE.find();
    res.status(200).json(dbEntries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/get/befa", async (req, res) => {
  try {
    const dbEntries = await BEFA.find();
    res.status(200).json(dbEntries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
