const eventos = [
    { local: 'Paróquia N. Sra. da Imaculada Conceição', data: '05/04/2025', hora: '8h00', nome: 'Missa Dominical', descricao: 'Todos os domingos' },
    { local: 'Paróquia N. Sra. da Imaculada Conceição', data: '10/04/2025', hora: '19h30', nome: 'Missa Ferial', descricao: 'Realizada em dias de semana e sábados'},
    { local: 'Capela', data: '01/04/2025', hora: '20h00', nome: 'Encontro de Jovens', descricao: 'Todas as terças-feiras'},
    { local: 'Salão de festas', data: '16/04/2025', hora: '14h00', nome: 'Bingo da Igreja', descricao: 'Acompanhado de almoço com costela'}
]

eventos.sort((a, b) => new Date(a.data) - new Date(b.data))

const eventList = document.getElementById('eventList')
eventos.forEach(evento => {
    const li = document.createElement('li')
    li.className = 'list-group-item'
    li.innerHTML = `<strong>Local: </strong>${evento.local}</br> <strong>Data e Hora:</strong> ${evento.data} - ${evento.hora}</br> <strong>Evento:</strong> ${evento.nome}</br> <strong>Descrição:</strong> ${evento.descricao}.`
    eventList.appendChild(li)
})
