    let eventos = []

    function renderEventos(){
      const adminEventList = document.getElementById('adminEventList')
      adminEventList.innerHTML = ''
      eventos.sort((a, b) => new Date(a.data) - new Date(b.data))
      eventos.forEach((evento, index) => {
        const li = document.createElement('li')
        li.className = 'list-group-item d-flex justify-content-between align-items-center'
        li.innerHTML = `<span><strong>${evento.data}</strong>: ${evento.nome}</span>
                        <span>
                          <button class="btn btn-sm btn-warning" onclick="editarEvento(${index})">Editar</button>
                          <button class="btn btn-sm btn-danger" onclick="removerEvento(${index})">Remover</button>
                        </span>`
        adminEventList.appendChild(li)
      })
    }

    document.getElementById('eventForm').addEventListener('submit', function(e){
      e.preventDefault()
      const data = document.getElementById('eventDate').value
      const nome = document.getElementById('eventName').value
      eventos.push({data: data, nome: nome})
      renderEventos()
      this.reset()
    })

    function removerEvento(index) {
      eventos.splice(index, 1)
      renderEventos()
    }

    function editarEvento(index) {
      const novoData = prompt("Digite a nova data (YYYY-MM-DD):", eventos[index].data)
      const novoNome = prompt("Digite o novo nome do evento:", eventos[index].nome)
      if(novoData && novoNome) {
        eventos[index] = {data: novoData, nome: novoNome}
        renderEventos()
      }
    }