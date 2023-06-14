const express = require("express");
const router = express.Router();

const getData = require("../controllers/dataController");

router.post("/save", getData.newData);

router.delete("/delete/:id", getData.deleteData);

router.put("/edit/:id", getData.editData);

router.get("/api", getData.findData);

module.exports = router;
