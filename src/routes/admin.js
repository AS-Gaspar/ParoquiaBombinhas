const express = require("express")
const router = express.Router()
const adminController = require("../controller/admin")

router.get("/login", adminController.renderLogin)
router.post("/login", adminController.handleLogin)
router.get("/dashboard", adminController.renderDashboard)

module.exports = router
