const path = require("path")
const fs = require("fs/promises")
const dataPath = path.join(__dirname, "../data/admin.json") 
const eventsDataPath = path.join(__dirname, "../data/events.json") 

async function getStoredCredentials() {
  try {
    const raw = await fs.readFile(dataPath, "utf-8")
    return JSON.parse(raw)
  } catch (error) {
    console.error("Erro ao ler credenciais:", error)
    return null 
  }
}

async function getStoredEvents() {
  console.log(`Attempting to read events from: ${eventsDataPath}`)
  try {
    const rawFileContent = await fs.readFile(eventsDataPath, { encoding: "utf-8" })
    console.log("Raw file content read:", rawFileContent)

    if (!rawFileContent.trim()) {
      console.log("File is empty or whitespace, returning empty array.")
      return []
    }

    const parsedEvents = JSON.parse(rawFileContent)
    console.log("Sussesfully parsed events", parsedEvents)
    return parsedEvents

  } catch (error) {
    console.error("Error reading events file:", error)

    if (error.code === "ENOENT") {
      await fs.writeFile(eventsDataPath, JSON.stringify([], null, 2))
      return []
    }

    console.log("Returning empty array due to error")
    return []
  }
}

async function storeEvents(events) {
  try {
    await fs.writeFile(eventsDataPath, JSON.stringify(events, null, 2))
  } catch (error) {
    console.error("Error writing events file:", error)
    throw new Error("Failed to save events.")
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

exports.addEvent = async (req, res) => {
  const newEvent = req.body
  console.log("Received new event data:", newEvent)
  if (!newEvent || !newEvent.local || !newEvent.data || !newEvent.hora || !newEvent.nome) {
    console.log("Event data incomplete")
    return res.status(400).json({ message: "Dados do evento incompletos" })
  }

  try {
    console.log("Calling getStoredEvents...")
    const storedEvents = await getStoredEvents()
    console.log("Events returned by getStoredEvents", storedEvents)
    storedEvents.push(newEvent)
    console.log("Events array after push:", storedEvents)
    await storeEvents(storedEvents)
    console.log("storeEvents complete")

    res.status(201).json({ message: "Evento adicionado com sucesso!", event: newEvent})
  } catch (error) {
    console.error("Error in addEvent handler:", error)
    res.status(500).json({ message: error.message || "Erro o salvar o evento"})
  }
}

exports.getEvents = async (req, res) => {
  try {
    console.log("GET /admin/events called")
    const storedEvents = await getStoredEvents()
    console.log("Returning events:", storedEvents)
    res.status(200).json(storedEvents)
  } catch (error) {
    console.error("Error in getEvents handler:", error)
    res.status(500).json({ message: "Erro ao buscar eventos." })
  }
}
