const express = require('express')
const path = require('path')
const PORT = 3000
const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const adminRoutes = require('./src/routes/admin')
// const eventsRoutes = require('./routes/events')

app.use(adminRoutes)
app.use(express.static(path.join(__dirname, 'public'))) 

// const eventsRoutes = require('../routes/events')
const errorRoutes = require('./src/controller/404')

// app.use(eventsRoutes)
app.use(errorRoutes.errorPage)

const startServer = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`)
    });
  } catch (err) {
    console.error('Failed to start server:', err)
    process.exit(1)
  }
}

startServer()