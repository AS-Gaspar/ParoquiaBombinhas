document.getElementById('login-form')
.addEventListener('submit', async e => {
    e.preventDefault()
    const data= Object.fromEntries(new FormData(e.currentTarget))
    const res = await fetch('/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })

    if (res.ok) {
        window.location.href = '/admin/dashboard'
    } else {
        document.getElementById('error').classList.remove('d-none')
    }


})