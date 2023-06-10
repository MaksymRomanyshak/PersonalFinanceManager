const express = require("express");
const router = express.Router();

const getData = require("../controllers/post");

router.post("/save", getData.newData);

router.delete("/delete/:id", getData.deleteData);

router.get("/api", getData.findData);

module.exports = router;
