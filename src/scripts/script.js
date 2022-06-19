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
const linkContainers = document.querySelector('.js-short')

submitButton.addEventListener('click', sendLink)

function sendLink() {
    checkLink()
    shortening()
    event.preventDefault()
}


const errorMessage = document.querySelector('.js-empty-form')

function checkLink() {
    if (input.value === '') {
        input.classList.add('js-error-link')
        errorMessage.innerHTML='Please add a link'
        return
    }
    input.classList.remove('js-error-link')
    errorMessage.innerHTML=''
}


const apiUrl = 'https://api.shrtco.de/v2/shorten?url='
let newUrlList = []
let oldUrlList = []
let linkContainer = []

function shortening() {
    fetch(`${apiUrl}${input.value}`)
    .then(response => {
        return response.json()
    })
    .then(jsonBody => {
        let newUrl = jsonBody.result.full_short_link
        newUrlList.unshift(newUrl)
        oldUrlList.unshift(input.value)
        popLists()
        writeComponent()
        linkContainers.innerHTML = linkContainer.join('')
        copy()
    })
}

const copyContent = document.querySelector('.copy-content')

function copy() {
    const buttonCopy = document.querySelectorAll('.copy')
    for(let i = 0; i in buttonCopy; i++) {
        buttonCopy[i].addEventListener('click', () => {
            copyContent.innerHTML = newUrlList[i]
            console.log(newUrlList[i])
        })
    }
}


function writeComponent() {
    linkContainer.unshift(`<div class="short-links flex flex-col desk:flex-row items-center p-4 w-full h-52 desk:h-24 bg-white rounded-lg">
    <div class="old-link inline-block whitespace-nowrap text-ellipsis overflow-hidden w-11/12 h-14 pt-3.5 text-xl desk:ml-6">${oldUrlList[0]}</div>
    <div class="short-line w-full border border-solid desk:hidden"></div>
    <div class="new-link flex items-center desk:justify-end desk:mr-6 w-11/12 h-14 text-xl">${newUrlList[0]}</div>
    <button class="copy w-11/12 desk:w-72 h-14 text-white text-2xl font-bold rounded-lg">Copy</button>
    </div>`)
}

function popLists() {
    if(newUrlList.length > 2) {
        newUrlList.pop()
    }
    if(oldUrlList.length > 2) {
        oldUrlList.pop()
    }
    if(linkContainer.length > 2) {
        linkContainer.pop()
    }
}


