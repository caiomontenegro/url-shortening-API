const burguer = document.querySelector('.hamburguer')
const navMobile = document.querySelector('.nav__content')

burguer.addEventListener('click', navAccess)

function navAccess() {
    if(navMobile.classList.contains('visible')) {
        navMobile.classList.remove('visible')
        navMobile.classList.add('hidden')
    } else {
        navMobile.classList.remove('hidden')
        navMobile.classList.add('visible')
    }
}


const input = document.querySelector('.form-input')
const submitButton = document.querySelector('.form-button')

submitButton.addEventListener('click', sendLink)

function sendLink() {
    checkLink()
    shortening()
    event.preventDefault()
}

const errorMessage = document.querySelector('.js-empty-form')

function checkLink() {
    if (input.value === '') {
        console.log('Sem link')
        input.classList.add('js-error-link')
        errorMessage.innerHTML='Please add a link'
        return
    }
    input.classList.remove('js-error-link')
    errorMessage.innerHTML=''
    console.log(input.value)
}

const apiUrl = 'https://api.shrtco.de/v2/shorten?url='


function shortening() {
    fetch(`${apiUrl}${input.value}`)
    .then(response => {
        return response.json()
    })
    .then(jsonBody => {
        console.log(jsonBody)
    })
}
