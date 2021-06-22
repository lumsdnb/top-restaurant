const header=(text)=>{

const headerEl= document.createElement("header")
    const h1El = document.createElement("h1")
    h1El.innerHTML="borger palace"
    const subTitleEl = document.createElement("sup")
    subTitleEl.classList.add("lettuce")
    subTitleEl.innerHTML=text?text:"your number 1 stop for burgers & fries"
    headerEl.append(h1El,subTitleEl)

   

    return headerEl
}

export default header