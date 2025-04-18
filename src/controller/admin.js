const path = require("path")
const fs = require("fs/promises")
const dataPath = path.join(__dirname, "../data/admin.json") 

async function getStoredCredentials() {
  try {
    const raw = await fs.readFile(dataPath, "utf-8")
    return JSON.parse(raw)
  } catch (error) {
    console.error("Erro ao ler credenciais:", error)
    return null 
  }
}

exports.renderLogin = (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/views/login.html"))
}

exports.handleLogin = async (req, res) => {
  const { username, password } = req.body
  const storedCredentials = await getStoredCredentials()

  if (!storedCredentials) {
    return res
      .status(500)
      .json({ message: "Erro interno ao verificar credenciais." })
  }

  const { username: storedUsername, password: storedPassword } =
    storedCredentials

  const ok = username === storedUsername && password === storedPassword

  if (!ok) {
    return res.status(401).json({ message: "Credenciais inválidas" })
  }

  res
    .status(200)
    .json({ message: "Login bem-sucedido", redirectUrl: "/admin/dashboard" })
}

exports.renderDashboard = (req, res) =>
  res.sendFile(path.join(__dirname, "../../public/views/admin.html"))

