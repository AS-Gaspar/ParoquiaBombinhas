const path = require('path')
const fs = require('fs')

exports.postAdminData = (req, res) => {
  const { username, password } = req.body
  const credPath = path.join(__dirname, '..', 'data', 'admin.json')
  const { username: u, password: p } = JSON.parse(fs.readFileSync(credPath, 'utf8'))

  if (username === u && password === p) {
    return res.json({ success: true}) 
  }

  return res.status(401).json({
    success: false,
    message: 'Usuário ou senha inválidos'
  })
}