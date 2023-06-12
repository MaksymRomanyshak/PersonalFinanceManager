//Model
const Data = require("../models/data");

exports.deleteData = (req, res) => {
  const { id } = req.params;
  Data.findByIdAndDelete(id)
    .then((result) => {
      res.json({ delete: result });
    })
    .catch((err) => console.log(err));
};

exports.editData = (req, res) => {
  const { id } = req.params;
  Data.findByIdAndUpdate(id, req.body, { new: true })
    .then((result) => {
      res.json({ put: result });
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
