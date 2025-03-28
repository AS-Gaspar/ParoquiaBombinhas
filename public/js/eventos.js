const eventos = [
    { data: '05/04/2025', hora: "8h00", nome: 'Missa Dominical' },
    { data: '10/04/2025', hora: "19h30", nome: 'Encontro de Jovens' },
    { data: '2025-05-01', hora: "20h00", nome: 'Palestra sobre fé' }
];

eventos.sort((a, b) => new Date(a.data) - new Date(b.data));

const eventList = document.getElementById('eventList');
eventos.forEach(evento => {
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.innerHTML = `<strong>${evento.data}, ${evento.hora}</strong>: ${evento.nome}`;
    eventList.appendChild(li);
});