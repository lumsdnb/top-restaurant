const contactPage=()=>{
    const placeholder = document.createElement("div")
    const headerEl= document.createElement("header")
    const h1El = document.createElement("h1")
    h1El.innerHTML="borger palace"
    const subTitleEl = document.createElement("h2")
    subTitleEl.innerHTML="contact us!"

    const textBodyEl = document.createElement("p")
    textBodyEl.innerHTML="contact details here"
    headerEl.append(h1El,subTitleEl)
    placeholder.classList.add("card")
    placeholder.append(headerEl, textBodyEl)
    return placeholder
}

export default contactPage