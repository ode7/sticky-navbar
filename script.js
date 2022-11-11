const navbarEl = document.querySelector('.navbar')
const bottomcontEl = document.querySelector('.bottom-container')
window.addEventListener('scroll',()=>{
  if(window.scrollY>bottomcontEl.offsetTop-navbarEl.offsetHeight -50){
    navbarEl.classList.add("active")
  }else{
    navbarEl.classList.remove('active')
  }
})
