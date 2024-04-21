function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "hijhdshjfhsjdhduhdfj fjshfjhdfsdfgudh",
    autoStart: true,
    delay: 50,
    cursor: "",
  });
}

let formElement = document.querySelector("#poem-form");
formElement.addEventListener("submit", generatePoem);
