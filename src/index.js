import "/src/index.scss";
import header from "./components/header/header";
import main from "./components/main/main";

const body = document.querySelector("body");
body.appendChild(header());
body.appendChild(main());
