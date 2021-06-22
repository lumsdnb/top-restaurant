import footer from "./footer"
import header from "./header"
const contactPage=()=>{
    const placeholder = document.createElement("div")
    

    const textBodyEl = document.createElement("p")
    textBodyEl.classList.add("patty")
    textBodyEl.innerHTML="contact details here <br> 168160 6th st <br> fictional town <br> fictional country"
    placeholder.classList.add("card")
    placeholder.append(header("contact us!"), textBodyEl,footer())
    return placeholder
}

export default contactPage
