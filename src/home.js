const homePage=()=>{
    const placeholder = document.createElement("div")
    const headerEl= document.createElement("header")
    const h1El = document.createElement("h1")
    h1El.innerHTML="borger palace"
    const subTitleEl = document.createElement("h2")
    subTitleEl.innerHTML="your number 1 stop for burgers & fries"

    const textBodyEl = document.createElement("p")
    textBodyEl.innerHTML="we serve up borgers most of the time. we don't have fixed opening hours, since we're usually frying up patties every day, but if you'd like to check if we're open before showing up, feel free to message our telegram bot at"
    headerEl.append(h1El,subTitleEl)
    placeholder.classList.add("card")
    placeholder.append(headerEl, textBodyEl)
    return placeholder
}

export default homePage