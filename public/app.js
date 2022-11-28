document.addEventListener('click', event => {
  if (event.target.dataset.type === 'remove') {
    const id = event.target.dataset.id
    remove(id).then(() => {
      event.target.closest('li').remove()
    })
  }
})

async function remove(id) {
  await fetch(`/${id}`, {method: 'DELETE'})
}


document.addEventListener('click', event => {
  if (event.target.dataset.type === 'edit') {
    const id = event.target.dataset.id
    const rename = prompt("Внести изменения", "Test")
    edit(id, rename)
  }
})

async function edit(id, title) {
  await fetch(`/${id}`, {method: 'PUT', headers: {
    "Content-Type": "application/json"
    },
  body: JSON.stringify({id: id, title: title}),
  })
}