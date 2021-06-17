const menuPage=()=>{
    const placeholder = document.createElement("div")
    const headerEl= document.createElement("header")
    const h1El = document.createElement("h1")
    h1El.innerHTML="borger palace"
    const subTitleEl = document.createElement("h2")
    subTitleEl.innerHTML="our menu"

    const textBodyEl = document.createElement("p")
    textBodyEl.innerHTML="menu page menu page"
    headerEl.append(h1El,subTitleEl)
    placeholder.classList.add("card")
    placeholder.append(headerEl, textBodyEl)
    return placeholder
}

export default menuPage