const express = require('express')
const path = require('path')
const PORT = 3000
const app = express()

app.set('view engine', 'ejs')
app.set('views', './views')

const adminRoutes = require('./routes/admin')
const eventsRoutes = require('./routes/events')

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public', 'views'))) 

const adminRoutes = require('../controller/admin')
const eventsRoutes = require('../controller/events')
const errorRoutes = require('../controller/404')

app.use(adminRoutes)
app.use(eventsRoutes)
app.use(errorRoutes.errorPage)

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