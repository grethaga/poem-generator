function showPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 30,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#input");

  let apiKey = "o0d0713230t29ff3bf6accc034c782b3";
  let prompt = `generate a poem about ${instructionsInput.value}`;
  let context =
    "You are a poem expert and write short poems. The poem should be 4 lines in basic HTML. Don't include a title.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(showPoem);
}

let formElement = document.querySelector("#poem-form");
formElement.addEventListener("submit", generatePoem);
