function showMenu(){
    let button = document.getElementById("menuBtn")
    let menu = document.querySelector(".menu-category")
    let menuInput = document.querySelector(".menu-input")

    button.addEventListener("click", event => {
        event.preventDefault()
        menu.classList.toggle("show")
        menuInput.classList.toggle("show")
        button.innerText = "X"
    })
}
showMenu()