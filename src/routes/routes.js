const express = require("express");
const router = express.Router();
const linkController = require("../controller/linksController");

router.get("/", linkController.index);

router.get("/username", linkController.profile);

module.exports = router;
