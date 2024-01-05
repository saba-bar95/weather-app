import "/src/index.scss";
import header from "./components/dom/header/create";
import main from "./components/dom/main/create";
import getData from "./components/logic/getData";
import updateLocation from "./components/dom/main/update";

const initLocation = "Tbilisi";

const body = document.querySelector("body");
body.appendChild(header());
body.appendChild(main());

getData(initLocation).then((data) => {
  updateLocation(data);
});
