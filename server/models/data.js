const mongoose = require("mongoose");

const currentDate = new Date();
const day = String(currentDate.getDate()).padStart(2, "0");
const month = String(currentDate.getMonth() + 1).padStart(2, "0");
const year = currentDate.getFullYear();
const formattedDate = `${day}.${month}.${year}`;

const dataSchema = new mongoose.Schema({
  name: String,
  body: String,
  value: String,
  date: {
    type: String,
    default: formattedDate,
  },
});

module.exports = mongoose.model("Data", dataSchema);
