import getData from "../../logic/getData";

export default function updateLocation(data) {
  console.log(data);
  const main = document.querySelector("#main-div");

  const container = document.createElement("div");
  container.classList.add("container");
  main.appendChild(container);

  const texts = document.createElement("div");
  texts.classList.add("texts");
  container.appendChild(texts);

  const header = document.createElement("h1");
  header.textContent = data.location.name + ", ";
  header.textContent += data.location.country;
  texts.appendChild(header);

  const time = document.createElement("h2");
  texts.appendChild(time);
  time.textContent = updateTime(data);

  // To update time for every minute
  setInterval(function () {
    getData(data.location.name).then((data) => {
      time.textContent = updateTime(data);
    });
  }, 5000);
}

function updateTime(data) {
  const date = new Date(data.location.localtime);
  const weekday = date.toLocaleString("en-US", {
    weekday: "long",
  });
  const month = date.toLocaleString("en-US", {
    month: "long",
  });
  const day = date.toLocaleString("en-US", {
    day: "numeric",
  });
  const year = date.toLocaleString("en-US", {
    year: "numeric",
  });
  const hour = date.getHours();
  const getMinutes = date.getMinutes();

  let minute;
  if (getMinutes < 10) {
    minute = "0" + getMinutes;
  } else minute = getMinutes;

  return `${weekday}, ${day} ${month} ${year} | ${hour}:${minute}`;
}
