/* menu */

const nav = document.getElementById('navbar')
const close = document.getElementById('icon-close')
const menu = document.getElementById('icon-menu')

menu && menu.addEventListener('click', () => nav.classList.add('active'))
close && close.addEventListener('click', () => nav.classList.remove('active'))

const links = document.querySelectorAll(' ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('active')
  })
}

/* button back to top */
window.addEventListener('scroll', function () {
  backToTop()
})

function backToTop() {
  const buttonTop = document.getElementById('backTopButton')
  if (window.scrollY >= 1000) {
    buttonTop.classList.add('show')
  } else {
    buttonTop.classList.remove('show')
  }
}

const scrollTop = () => {
  window.scroll({
    top: 0,
    behavior: 'smooth'
  })
}

document.getElementById('backTopButton').onclick = scrollTop

/* typed */

$(document).ready(function () {
  var typed = new Typed('.typing', {
    strings: ['Mulher', 'Poderosa', 'Atraente', 'Charmosa', 'Sedutora'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  })
})

/* scrollrevew */
ScrollReveal().reveal('h2', {
  delay: 100,
  duration: 300,
  reset: true
})

ScrollReveal().reveal('.subtitle', {
  delay: 275,
  duration: 300,
  reset: true
})

ScrollReveal().reveal('.content', {
  delay: 200,
  duration: 320,
  reset: true
})
