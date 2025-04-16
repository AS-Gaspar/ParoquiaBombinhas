const express = require('express')
const path = require('path')
const PORT = 3000
const app = express()

app.set('view engine', 'ejs')
app.set('views', './views')

const adminRoutes = require('./routes/admin')
const eventsRoutes = require('./routes/events')

// Error handler middleware
const errorHandler = (err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({
    error: 'Something went wrong!',
    message: err.message
  })
}

// Middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public', 'views'))) 

const errorRoutes = require('./src/controller/404')
const usersFile = path.join(__dirname, 'data', 'users.json')

// Routes

app.use('/admin', adminRoutes)
app.use('/events', eventsRoutes)
app.use(errorRoutes.errorPage)

// Error handling
app.use(errorHandler)

// Start server
const startServer = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
};

startServer();