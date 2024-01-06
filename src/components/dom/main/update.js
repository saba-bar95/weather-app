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

  const condition = document.createElement("div");
  condition.classList.add("condition");
  container.appendChild(condition);

  const upper = document.createElement("div");
  upper.classList.add("upper");
  condition.appendChild(upper);

  const image = new Image();
  image.src = data.current.condition.icon;
  upper.appendChild(image);

  const temp = document.createElement("p");
  temp.classList.add("temp-c");
  temp.textContent = data.current.temp_c + "°C";
  upper.appendChild(temp);

  const lower = document.createElement("div");
  lower.classList.add("lower");
  condition.appendChild(lower);

  const text = document.createElement("p");
  text.textContent = data.current.condition.text;
  lower.appendChild(text);

  const feel = document.createElement("p");
  feel.classList.add("feel");
  feel.textContent = `Feels like ${data.current.feelslike_c}°C`;
  lower.appendChild(feel);

  const wind = document.createElement("p");
  wind.classList.add("wind");
  wind.textContent = `Wind ${data.current.wind_kph} kph`;
  lower.appendChild(wind);

  const changer = document.createElement("button");
  changer.textContent = "°C to °F";
  changer.classList.add("changer");
  container.appendChild(changer);

  changer.addEventListener("click", function () {
    if (temp.classList.contains("temp-c")) {
      temp.textContent = data.current.temp_f + "°F";
      temp.classList.remove("temp-c");
      temp.classList.add("temp-f");
      changer.textContent = "°F to °C";
      feel.textContent = `Feels like ${data.current.feelslike_f}°F`;

      return;
    }
    if (temp.classList.contains("temp-f")) {
      temp.textContent = data.current.temp_c + "°C";
      temp.classList.add("temp-c");
      temp.classList.remove("temp-f");
      changer.textContent = "°C to °F";
      feel.textContent = `Feels like ${data.current.feelslike_c}°C`;
      return;
    }
  });

  // To update time for every minute
  setInterval(function () {
    getData(data.location.name).then((data) => {
      time.textContent = updateTime(data);
    });
  }, 60000);
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
  const getHour = date.getHours();
  const getMinutes = date.getMinutes();

  let hour, minute;
  if (getHour < 12) {
    hour = "0" + getHour;
  } else hour = getHour;
  if (getMinutes < 10) {
    minute = "0" + getMinutes;
  } else minute = getMinutes;

  return `${weekday}, ${day} ${month} ${year} | ${hour}:${minute}`;
}
