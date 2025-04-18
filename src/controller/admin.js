const path = require('path')
const fs = require('fs/promises')
const bcrypt = require('bcrypt')  

const dataPath = path.join(__dirname, '../data/admin.json')

async function getStoredCredentials () {
  const raw = await fs.readFile(dataPath, 'utf-8')
  return  JSON.parse(raw)
}

exports.renderLogin = (req, res) => {
  if (req.session.isAuthenticated) return res.redirect('/admin/dashboard')
  res.sendFile(path.join(__dirname, '../../public/views/login.html'))
}

exports.handleLogin = async (req, res) => {
  const { username, password } = req.body
  const { username: u, passwordHash } = await getStoredCredentials()

  const ok = username === u && await bcrypt.compare(password, passwordHash)
  if (!ok) return res.status(401).sendFile(path.join(__dirname, '../../public/views/login.html'))
  req.session.isAuthenticated = true
  req.session.username = username
  res.redirect('/admin/dashboard')
}

exports.ensureAuth = (req, res, next) => 
  req.session.isAuthenticated ? next() : res.redirect('/admin/login')

exports.renderDashboard = (req, res) =>
  res.sendFile(viewPath('admin.html'))

exports.logout = (req, res) =>
  req.session.destroy(() => res.redirect('/admin/login'))

