function showMenu(){
    let button = document.getElementById("menuBtn")
    let menu = document.querySelector(".menu-category")
    let menuInput = document.querySelector(".menu-input")

    button.addEventListener("click", event => {
        event.preventDefault()
        if(menu.classList.toggle("show")){
            button.innerText = "X"
        } else {
            button.innerText = "≡"
        }

        if(menuInput.classList.toggle("show")){
            button.innerText = "X"
        } else {
            button.innerText = "≡"
        }
    })
}
showMenu()