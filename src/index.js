import homePage from "./home"
import navBar from "./nav"

const container = document.getElementById("content")

container.append(navBar(),homePage())