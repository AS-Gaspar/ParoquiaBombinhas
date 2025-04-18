const path = require("path")
const viewsPath = path.join(__dirname, "../../public/views") 

exports.getEventsPage = (req, res) => {  
  res.sendFile(path.join(viewsPath, 'events.html'));
}