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
  if (window.scrollY >= 560) {
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

var typed = new Typed('#typed', {
  stringsElement: '#typed-strings'
})
