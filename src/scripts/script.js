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