import checkSearchValidity from "./checkSearchValidity.js";
import getData from "./getData.js";
import main from "../main/main.js";

export default function header() {
  const div = document.createElement("div");
  div.setAttribute("id", "header-div");

  const header = document.createElement("h1");
  header.textContent = "weather";
  div.appendChild(header);

  const searchContainer = document.createElement("div");
  searchContainer.classList.add("search-container");
  div.appendChild(searchContainer);

  const searchInput = document.createElement("input");
  searchInput.classList.add("search-input");
  searchInput.setAttribute("placeholder", "Search Location");
  searchInput.setAttribute("type", "search");
  searchInput.setAttribute("minlength", 2);
  searchContainer.appendChild(searchInput);

  const searchBtn = document.createElement("button");
  searchBtn.textContent = "search";
  searchBtn.classList.add("search-btn");
  searchContainer.appendChild(searchBtn);

  searchInput.addEventListener("keydown", function (e) {
    if (e.key == "Enter" && checkSearchValidity(this)) {
      setData();
      this.value = "";
    }
  });

  searchBtn.addEventListener("click", function () {
    if (checkSearchValidity(searchInput)) {
      setData();
      searchInput.value = "";
      searchInput.focus();
    }
  });

  async function setData() {
    const data = await getData(searchInput.value);
    main(data);
  }

  return div;
}
