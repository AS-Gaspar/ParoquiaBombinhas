const express = require('express')
const path = require('path')
const PORT = 3000
const app = express()

// Error handler middleware
const errorHandler = (err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({
    error: 'Something went wrong!',
    message: err.message
  })
}

// Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public'))) 

const errorRoutes = require('./src/controller/404')

// Routes

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