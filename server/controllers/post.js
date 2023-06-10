//Model
const Data = require("../models/data");

exports.deleteData = (req, res) => {
  const elementId = req.params.id;
  Data.findByIdAndDelete(elementId)
    .then((result) => {
      res.json({ result });
    })
    .catch((err) => console.log(err));
};

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
    .then((result) => {
      res.json(result.reverse());
    })
    .catch((err) => console.log(err));
};
