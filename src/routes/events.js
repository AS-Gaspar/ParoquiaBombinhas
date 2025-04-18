const express = require('express')
const eventsController = require('../controller/events')
const router = express.Router()

router.get('/events', eventsController.getEventsPage)

module.exports = router