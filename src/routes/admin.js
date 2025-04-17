const express = require('express')
const adminController = require('../controller/admin')
const router = express.Router()

router.post('/api/login', adminController.postAdminData)

module.exports = router