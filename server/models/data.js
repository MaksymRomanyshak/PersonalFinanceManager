const mongoose = require("mongoose");

const currentDate = new Date();
const day = String(currentDate.getDate()).padStart(2, "0");
const month = String(currentDate.getMonth() + 1).padStart(2, "0");
const year = currentDate.getFullYear();
const formattedDate = `${day}.${month}.${year}`;

const dataSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "New category",
  },
  body: String,
  value: {
    type: Number,
    default: 25,
  },
  date: {
    type: String,
    default: formattedDate,
  },
});

module.exports = mongoose.model("Data", dataSchema);
