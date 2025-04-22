document.addEventListener("DOMContentLoaded", async () => {
  const params = new URLSearchParams(window.location.search)
  const id = params.get("id")
  if (!id) {
    alert("Evento não encontrado!")
    window.location.href = "/admin/dashboard"
    return
  }

  let evento
  try {
    const res = await fetch(`/admin/events/${id}`)
    evento = await res.json()
    if (!evento) throw new Error("Evento não encontrado")
  } catch (err) {
    alert("Erro ao carregar evento")
    window.location.href = "/admin/dashboard"
    return
  }

  document.getElementById("editEventLocal").value = evento.local
  document.getElementById("editEventDate").value = evento.data
  document.getElementById("editEventHour").value = evento.hora
  document.getElementById("editEventName").value = evento.nome
  document.getElementById("editEventDescription").value = evento.description || ""

  document
    .getElementById("eventForm")
    .addEventListener("submit", async function (e) {
      e.preventDefault()
      const updatedEvent = {
        local: document.getElementById("editEventLocal").value,
        data: document.getElementById("editEventDate").value,
        hora: document.getElementById("editEventHour").value,
        nome: document.getElementById("editEventName").value,
        description:
          document.getElementById("editEventDescription").value || "",
      }
      try {
        const response = await fetch(`/admin/events/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedEvent),
        })
        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(
            errorData.message || "Erro ao editar evento"
          )
        }
        alert("Evento editado com sucesso!")
        window.location.href = "/admin/dashboard"
      } catch (error) {
        alert(error.message)
      }
    })
})
