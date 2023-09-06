
const url = "https://rickandmortyapi.com/api/character";
async function rickAndMortyCharacters() {
    try {
        const randomCharId = Math.floor(Math.random() * 826) + 1;
        const response = await fetch(`${url}/${randomCharId}`);
        if (!response.ok) {
            throw new Error("Fehler: Liste der Figuren kann nicht geladen werden.")
        }
        const data = await response.json();
        renderChar(data)
    } catch (err) {
        console.error(err);
        let errorMessage = document.createElement("div");
        errorMessage.style.maxwidth = "400px";
        errorMessage.style.textAlign = "center";
        errorMessage.style.maxheight = "300px";
        errorMessage.textContent = "Fehler: Liste der Figuren kann nicht geladen werden.";
        document.body.prepend(errorMessage)
  }
}
function renderChar(renderChar) {
    let newDiv = document.createElement("div");
    newDiv.style.boxShadow="8px 5px 8px 5px white";
    newDiv.style.textAlign="center";
    let charImg = document.createElement("img");
    let charText = document.createElement("p");
    charText.style.color="lightgreen";
    charText.style.fontSize="1.5rem";
    charImg.src = renderChar.image
    charText.textContent = renderChar.name
    document.body.appendChild(newDiv);
    newDiv.appendChild(charImg);
    newDiv.appendChild(charText);
}
rickAndMortyCharacters()
