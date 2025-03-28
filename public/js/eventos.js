const eventos = [
    { data: '2025-04-15', nome: 'Missa Dominical' },
    { data: '2025-04-20', nome: 'Encontro de Jovens' },
    { data: '2025-05-01', nome: 'Palestra sobre fé' }
];

eventos.sort((a, b) => new Date(a.data) - new Date(b.data));

const eventList = document.getElementById('eventList');
eventos.forEach(evento => {
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.innerHTML = `<strong>${evento.data}</strong>: ${evento.nome}`;
    eventList.appendChild(li);
});