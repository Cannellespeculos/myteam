const burger = document.getElementById('burger');
const close = document.getElementById('close')
const menu = document.getElementById('menu')

burger.addEventListener("click", () => {
  if (menu.classList !== "active") {
    menu.classList.add("active")
  }
})

close.addEventListener("click", () => {
    menu.classList.remove("active")
})
