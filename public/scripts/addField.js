document.querySelector("#add-time")
  .addEventListener('click', cloneField)

function cloneField() {
  /* Duplicar */
  const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

  const fields = newFieldContainer.querySelectorAll('input')

  fields.forEach(function (field) {
    field.value = ""
  })

  /* Colocar Onde? */
  document.querySelector('#schedule-items').appendChild(newFieldContainer)
}