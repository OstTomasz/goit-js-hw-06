const fontSizer = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

fontSizer.addEventListener("input", (event) => {
  text.style.fontSize = `${event.currentTarget.value}px`;
});
