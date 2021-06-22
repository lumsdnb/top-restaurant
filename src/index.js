import homePage from "./home"
import menuPage from "./menu"
import contactPage from "./contact"
import navBar from "./nav"

const container = document.getElementById("content")

container.append(navBar(),homePage())

const navLinks = document.querySelectorAll("li")

function updateContent(e){
    const card = document.querySelector(".card")
    switch (this.textContent) {
        case "home":
            card.remove()
            container.append(homePage())
            break;
        case "menu":
            card.remove()
            container.append(menuPage())
            break;
        case "contact us":
            card.remove()
            container.append(contactPage())
            break;
        default:
            break;
    }
}

navLinks.forEach(link=>{
    link.addEventListener("click",updateContent)
})