import { parse, format } from 'date-fns'
import flatpickr from "flatpickr"
import "flatpickr/dist/flatpickr.min.css"

let eventos = []

function renderEventos() {
  const adminEventList = document.getElementById('adminEventList')
  adminEventList.innerHTML = ''

  eventos.sort((a, b) => {
    const dateA = parse(a.data, 'dd/MM/yyyy', new Date())
    const dateB = parse(a.data, 'dd/MM/yyyy', new Date())
    return dateA - dateB
  })

  eventos.forEach((evento, index) => {
    const li = document.createElement('li')
    li.className = 'list-group-item d-flex justify-content-between align-items-center gap-list'
    li.innerHTML = `<span><strong>${evento.data}</strong>: ${evento.nome}</span>
                        <span>
                          <button class="btn btn-sm btn-warning" data-edit="${index}">Editar</button>
                          <button class="btn btn-sm btn-danger" data-remove="${index}">Remover</button>
                        </span>`

    adminEventList.appendChild(li)
  })
}

document.getElementById('adminEventList').addEventListener('click', function (e) {
  const editIndex = e.target.getAttribute('data-edit')
  const removeIndex = e.target.getAttribute('data-remove')

  if (editIndex !== null) editarEvento(editIndex)
  if (removeIndex !== null) removerEvento(removeIndex)
})

document.getElementById('eventForm').addEventListener('submit', function (e) {
  e.preventDefault()

  const data = document.getElementById('eventDate').value
  const nome = document.getElementById('eventName').value

  eventos.push({ data: data, nome: nome })
  renderEventos()
  this.reset()
})

function removerEvento(index) {
  eventos.splice(index, 1)
  renderEventos()
}

function editarEvento(index) {
  const novoData = prompt("Digite a nova data (DD-MM-YYYY):", eventos[index].data)
  const novoNome = prompt("Digite o novo nome do evento:", eventos[index].nome)

  if (novoData && novoNome) {
    const parsedNovaData = parse(novoData, 'dd/MM/yyyy', new Date())
    if (!isNaN(parsedNovaData)) {
      eventos[index] = {
        data: format(parsedNovaData, "dd/MM/yyyy"),
        nome: novoNome
      }
      renderEventos()
    } else {
      alert('Data inválida! Tente novamente com o formato DD/MM/YYYY.')
    }
  }
}

flatpickr("#eventDate", {
  dateFormat: "d/m/Y",
  minDate: "today",
  enableTime: false
})

renderEventos()