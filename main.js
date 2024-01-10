const burger = document.getElementById('burger');
const close = document.getElementById('close')
const menu = document.getElementById('menu')
const directors = document.getElementsByClassName('director');
const cross = document.getElementsByClassName('cross')
const citation = document.getElementsByClassName('citation')
const blue = document.getElementsByClassName('blue')

burger.addEventListener("click", () => {
  if (menu.classList !== "active") {
    menu.classList.add("active")
  }
})

close.addEventListener("click", () => {
    menu.classList.remove("active")
})

for (let i = 0; i < cross.length; i++) {
  const element = cross[i];
  const b = blue[i];
  let h = citation[i];
  let p = directors[i];
  element.addEventListener("click", () => { 
    p.classList.remove('do')
    p.classList.add('dont')
    h.classList.remove('dont')
    h.classList.add('do')
    
  })

  b.addEventListener("click", () => { 
    p.classList.remove('dont')
    p.classList.add('do')
    h.classList.remove('do')
    h.classList.add('dont')
    
  })
  
}