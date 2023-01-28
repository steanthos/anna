const navToggle = document.getElementsByClassName('nav-toggle')[0]
const navLinks = document.getElementsByClassName('nav-links')[0]

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active')
})
navLinks.addEventListener('click', () =>{
  navLinks.classList.remove('active')
})