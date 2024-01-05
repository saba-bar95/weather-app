import checkSearchValidity from "../../logic/checkSearchValidity";
import getData from "../../logic/getData";
import updateLocation from "../main/update";

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
    try {
      const data = await getData(searchInput.value);
      if (data.error && data.error.code === 1006) {
        alert(data.error.message);
        return;
      }
      document.querySelector(".container").remove();
      updateLocation(data);
    } catch (error) {
      console.log(error);
      return;
    }
  }

  return div;
}
