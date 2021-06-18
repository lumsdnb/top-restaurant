function generateTableHead(table, data) {
  let tableHead = table.createTHead();
  let row = tableHead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

function generateTable(table, data) {
  let tableBody = table.createTBody()
  for (let element of data) {
    let row = table.insertRow();
      const el = element;
      console.log(element.name);

      let cell = row.insertCell();
      let text = document.createTextNode(element.name);
      cell.appendChild(text);
    row.appendChild(cell)
      cell = row.insertCell();
       text = document.createTextNode(element.description);
      cell.appendChild(text);
    row.appendChild(cell)
      cell = row.insertCell();
       text = document.createTextNode(element.weight);
      cell.appendChild(text);
    row.appendChild(cell)
    tableBody.appendChild(row)
  }
}

const menuPage=()=>{
    const placeholder = document.createElement("div")
    const headerEl= document.createElement("header")
    const h1El = document.createElement("h1")
    h1El.innerHTML="borger palace"
    const subTitleEl = document.createElement("h2")
    subTitleEl.innerHTML="our menu"

    let menuItems = [
        { name: "cool beans burger", weight: "850g", description: "for the cool kids" },
        { name: "hungry hippo burger", weight: "1320g", description: "for all you hungry bois" },
        { name: "tasty truffle burger", weight: "420g", description: "tastieee" }
    ];

    let table = document.createElement("table")
    table.classList.add("menu-table")
    let data= ["name", "description","weight"]
    for(let key in menuItems){
}


    generateTableHead(table, data);
    generateTable(table, menuItems);

    const textBodyEl = document.createElement("p")
    textBodyEl.innerHTML="menu page menu page"
    headerEl.append(h1El,subTitleEl)
    placeholder.classList.add("card")
    console.log(table);
    placeholder.append(headerEl, textBodyEl,table)
    return placeholder
}


export default menuPage