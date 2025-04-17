const express = require('express')
const adminController = require('../controller/admin')
const router = express.Router()

router.post('/events', adminController.post)

module.exports = router