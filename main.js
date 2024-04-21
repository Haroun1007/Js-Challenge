// Create Header
let divHeader = document.createElement("header");
divHeader.className = "header";
divHeader.style.cssText =
  "display : flex ; justify-content : space-between ; align-items : center";
//Logo
let logo = document.createElement("img");
logo.className = "image";
logo.setAttribute(
  "src",
  "https://img.icons8.com/papercut/60/laptop-coding.png"
);
logo.style.maxWidt = "100px";
logo.style.maxHeight = "100px";

//Navbar
let navBar = document.createElement("nav");

let ul = document.createElement("ul");
ul.style.cssText =
  "list-style: none; display : flex ; justify-content : space-between ; align-items : center";

//Create Four Li And Write inside It
let navNames = ["Home", "About", "Service", "Contact"];
for (let i = 0; i < navNames.length; i++) {
  let li = document.createElement("li");
  li.className = `link-${i + 1}`;
  li.textContent = `${navNames[i]}`;
  ul.appendChild(li);
  li.style.cssText =
    "margin-right: 10px ; box-shadow: -3px 1px #888888 ; cursor:pointer ;padding:5px";
}
//Create Section

let section = document.createElement("section");
section.style.cssText =
  " display:grid ; gap:10px ;grid-template-columns: repeat(auto-fill,  minmax(300px, 1fr)); background-color:#ececec";
//Create Section Products

for (i = 1; i <= 15; i++) {
  let product = document.createElement("div");
  product.className = "product";
  product.style.cssText =
    "text-align:center ;background-color: white; box-shadow: 4px 7px #888888;border-radius:6px; margin:10px";

  let span = document.createElement("span");
  span.textContent = `${i}`;
  span.style.cssText = "font-size: 30px ; font-weight:bold";

  let myP = document.createElement("p");
  myP.textContent = "Product";

  section.appendChild(product);
  product.prepend(span);
  product.append(myP);
}

// Create Footer

let footer = document.createElement("footer");
footer.textContent = "CopyRight 2024 for Haroun Khenfri";
footer.style.cssText =
  "background-color: #23a96e; text-align:center ; color: white; padding:10px";

//Add To Page
document.body.append(divHeader);
divHeader.prepend(logo);
divHeader.append(navBar);
navBar.appendChild(ul);
document.body.append(section);
document.body.append(footer);
