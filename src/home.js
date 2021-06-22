import footer from "./footer"
import header from "./header"
const homePage=()=>{
    const placeholder = document.createElement("div")
    const textBodyEl = document.createElement("p")
    textBodyEl.classList.add("patty")
    textBodyEl.innerHTML="we serve up borgers most of the time. we don't have fixed opening hours, since we're usually frying up patties every day, but if you'd like to check if we're open before showing up, feel free to message our telegram bot at"
    placeholder.classList.add("card")
    placeholder.append(header(), textBodyEl,footer())
    return placeholder
}

export default homePage