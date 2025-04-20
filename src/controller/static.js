const path = require("path")
const viewsPath = path.join(__dirname, "../../public/views") 

exports.getIndexPage = (req, res) => {
  res.sendFile(path.join(viewsPath, 'index.html'));
}

exports.getMorePage = (req, res) => {
  res.sendFile(path.join(viewsPath, 'mais.html'));
}

exports.getEventsPage = (req, res) => {  
  res.sendFile(path.join(viewsPath, 'events.html'));
}
