const mongoose = require("mongoose");
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

//DB conection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected!"));

mongoose.connection.on("error", (err) => {
  console.log(`DB connection error: ${err.message}`);
});

//bringing routes
const dataRoutes = require("./routes/apiRoutes");

// midleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use("/", dataRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`listen on port ${port}`);
});
