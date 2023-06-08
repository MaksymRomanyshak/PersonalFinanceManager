//Model
const Data = require("../models/data");

exports.newData = (req, res) => {
  const data = new Data(req.body);
  data
    .save()
    .then((result) => {
      res.json({
        post: result,
      });
    })
    .catch((err) => console.log(err));
};

exports.findData = (req, res) => {
  Data.find()
    .select("_id name body value date")
    .then((data) => {
      res.json(data.reverse());
    })
    .catch((err) => console.log(err));
};
