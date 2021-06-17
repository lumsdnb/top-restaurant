//generate nav bar
//<nav><li>home</li><li>menu</li><li>contact us</li></nav>

const navBar=()=>{
    const nav = document.createElement("nav")
    const entries=["home","menu","contact us"]
    
    for (let i = 0; i < entries.length; i++) {
        const element = entries[i];
        let entry = document.createElement("li")
        let linkText = document.createTextNode(element);
        let a = document.createElement('a');
        a.append(linkText)
        a.title = element;
        entry.appendChild(a)
        nav.append(entry)
    }

    return nav
}

export default navBar