import header from "./header"
import footer from "./footer"

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
  
    let menuItems = [
        { name: "cool beans burger", weight: "850g", description: "with bean shaped ice cubes" },
        { name: "hungry hippo burger", weight: "1320g", description: "made with real hippo (jk its just beef)" },
        { name: "tasty truffle burger", weight: "420g", description: "really good" }
    ];

    let table = document.createElement("table")
    table.classList.add("menu-table")
    let data= ["name", "description","weight"]
    for(let key in menuItems){
}


    generateTableHead(table, data);
    generateTable(table, menuItems);

    const textBodyEl = document.createElement("p")
    
    placeholder.classList.add("card")
    console.log(table);
    let mainContent = document.createElement("div")
    mainContent.classList.add("patty")
    mainContent.append(textBodyEl,table)
    placeholder.append(header("our menu"), mainContent, footer())
    return placeholder
}


export default menuPage