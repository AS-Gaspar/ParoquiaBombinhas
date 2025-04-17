document.getElementById('loginForm').addEventListener('submit', async e => {
    e.preventDefault()

    const username = document.getElementById('username').value.trim()
    const password = document.getElementById('password').value.trim()
    const errorBox = document.getElementById('errorMsg')

    errorBox.innerHTML = ''

    try {
        const resp = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        })

        if (resp.ok) {
            window.location.href = '/admin.html'
            return
        }

        const { message } = await resp.json()
        errorBox.innerHTML = `<div class="alert alert-danger mt-3">${message}</div>`
    } catch (err) {
        errorBox.innerHTML = `<div class="alert alert-danger mt-3">Erro ao conectar. Tente Novamente.</div>`
    }

})