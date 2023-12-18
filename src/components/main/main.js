export default function main(data) {
  const div = document.createElement("div");
  div.setAttribute("id", "main-div");

  if (data) {
    console.log(data);
  }
  return div;
}
