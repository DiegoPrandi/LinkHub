const express = require("express")
const router = express.Router()

const linkController = require("../controllers/linkController")

router.post("/", linkController.createLink);
router.get('/user/:userId', linkController.getLinksByUser)

module.exports = router