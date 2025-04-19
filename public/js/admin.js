import { parse, format } from "date-fns"
import flatpickr from "flatpickr"
import "flatpickr/dist/flatpickr.min.css"

let eventos = []

document
  .getElementById("adminEventList")
  .addEventListener("click", function (e) {
    const editIndex = e.target.getAttribute("data-edit")
    const removeIndex = e.target.getAttribute("data-remove")

    if (editIndex !== null) editarEvento(editIndex)
    if (removeIndex !== null) removerEvento(removeIndex)
  })

document.getElementById("eventForm").addEventListener("submit", function (e) {
  e.preventDefault()

  const local = document.getElementById("eventLocal").value
  const data = document.getElementById("eventDate").value
  const hora = document.getElementById("eventHour").value
  const nome = document.getElementById("eventName").value

  eventos.push( { local: local, data: data, hora: hora, nome: nome } )
  renderEventos()
  this.reset()
})

flatpickr("#eventDate", {
  dateFormat: "d/m/Y",
  minDate: "today",
  enableTime: false,
})

function renderEventos() {
  const adminEventList = document.getElementById("adminEventList")
  adminEventList.innerHTML = ""

  eventos.sort((a, b) => {
    const dateA = parse(a.data, "dd/MM/yyyy", new Date())
    const dateB = parse(a.data, "dd/MM/yyyy", new Date())
    return dateA - dateB
  })

  eventos.forEach((evento, index) => {
    const li = document.createElement("li")
    li.className =
      "list-group-item d-flex justify-content-between align-items-center gap-list"
    li.innerHTML = `<span>
    <strong>Local:</strong> ${evento.local},
    <strong>Data:</strong> ${evento.data},
    <strong>Hora:</strong> ${evento.hora},
    <strong>Nome:</strong> ${evento.nome}
    </span>
    <span>
      <button class="btn btn-sm btn-warning" data-edit="${index}">Editar</button>
      <button class="btn btn-sm btn-danger" data-remove="${index}">Remover</button>
    </span>`

    adminEventList.appendChild(li)
  })
  213, 0
}

function removerEvento(index) {

}

function editarEvento(index) {

}

renderEventos()
