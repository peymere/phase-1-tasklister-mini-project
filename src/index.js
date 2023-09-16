document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form")
  form.addEventListener('submit', e => {
    e.preventDefault()
    addTaskToList(e.target.newTaskDescription.value)
    form.reset()
  }
   )
  
   function addTaskToList(task){
    const li = document.createElement('li')
    const btn = document.createElement('button')
    btn.addEventListener('click', e => {
      e.target.parentNode.remove()
    })
    li.textContent = `${task}   `
    btn.textContent = 'X'
    li.append(btn)
    document.getElementById('tasks').append(li)
    console.log(li.textContent)
   }







  })
