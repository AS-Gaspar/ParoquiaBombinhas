const express = require("express")
const router = express.Router()
const staticController = require("../controller/static")

router.get('/', staticController.getIndexPage)
router.get('/mais', staticController.getMorePage)

module.exports = router