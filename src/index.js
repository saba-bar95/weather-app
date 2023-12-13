import "/assets/index.css";

console.log("sss");

const h1 = document.createElement("h1");
h1.textContent = "header";
h1.classList.add("header");

document.querySelector("body").appendChild(h1);
