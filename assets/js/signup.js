const form = document.querySelector('#cadastro-user')

const username = document.querySelector('#username')
const labelUserName = document.querySelector('#labelUserName')

const email = document.querySelector('#email')
const labelEmail = document.querySelector('#labelEmail')

const password = document.querySelector('#pass')
const labelPassword = document.querySelector('#labelPassword')

username.addEventListener('keyup', function (e) {
  if (username.value.length <= 3) {
    labelUserName.setAttribute('style', 'color: red')
    labelUserName.innerHTML = `Username *please enter at least 4 characters`
    username.setAttribute('style', 'border-color: red')
  } else {
    labelUserName.setAttribute('style', 'color: green')
    labelUserName.innerHTML = `Username`
    username.setAttribute('style', 'border-color: green')
  }
})

email.addEventListener('keyup', function (e) {
  if (email.value.length <= 10) {
    labelEmail.setAttribute('style', 'color: red')
    labelEmail.innerHTML = `Email *please enter at least 4 characters`
    email.setAttribute('style', 'border-color: red')
  } else {
    labelEmail.setAttribute('style', 'color: green')
    labelEmail.innerHTML = `Email`
    email.setAttribute('style', 'border-color: green')
  }
})

password.addEventListener('keyup', function (e) {
  if (password.value.length <= 5) {
    labelPassword.setAttribute('style', 'color: red')
    labelPassword.innerHTML = `Password *please enter at least 4 characters`
    password.setAttribute('style', 'border-color: red')
  } else {
    labelPassword.setAttribute('style', 'color: green')
    labelPassword.innerHTML = `Password`
    password.setAttribute('style', 'border-color: green')
  }
})

form.addEventListener('submit', e => {
  e.preventDefault()
  if (!username && !email && !password) {
    alert('Os dados estão incorretos, por favor insira os dados corretos')
  }
})
