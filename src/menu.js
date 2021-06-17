const menuPage=()=>{
    const placeholder = document.createElement("div")
    const headerEl= document.createElement("header")
    const h1El = document.createElement("h1")
    h1El.innerHTML="borger palace"
    const subTitleEl = document.createElement("h2")
    subTitleEl.innerHTML="our menu"

    let menuItems = [
        { name: "cool beans burger", weight: "850g", description: "for the cool kids" },
        { name: "hungry hippo burger", height: "1320g", description: "for all you hungry bois" },
        { name: "tasty truffle burger", height: "420g", description: "tastieee" }
    ];

    let table = document.createElement("table")
    table.classList.add("menu-table")
    table.createTHead()
    let row = table.insertRow();
    for (let i = 0; i < menuItems.length; i++) {
        const item = menuItems[i];
        let th = document.createElement("th")
        let text = document.createTextNode(item.name)
        th.appendChild(text)
        row.appendChild(th)
    }

    const textBodyEl = document.createElement("p")
    textBodyEl.innerHTML="menu page menu page"
    headerEl.append(h1El,subTitleEl)
    placeholder.classList.add("card")
    console.log(table);
    placeholder.append(headerEl, textBodyEl,table)
    return placeholder
}


export default menuPage