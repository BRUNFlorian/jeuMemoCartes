import monsterArray from "./data.js";

let linkContainer = document.createElement("div");
linkContainer.classList.add("link-container");
document.body.appendChild(linkContainer);

let linkImage = document.createElement("a");
linkImage.classList.add("link-image");
document.body.appendChild(linkImage);
linkImage.innerHTML = "C'est l'heure du Duel !";
linkContainer.href = "https://www.konami.com/yugioh/duel_links/en/";
linkContainer.appendChild(linkImage);

let cardContainer = document.createElement("div");
cardContainer.classList.add("card-container");
document.body.appendChild(cardContainer);

let showCards = (monsterArray) => {
  monsterArray.forEach((monster) => {
    let cardObject = document.createElement("div");
    cardObject.classList.add("card");
    document.body.appendChild(cardObject);

    let monsterImage = document.createElement("img");
    cardObject.appendChild(monsterImage);

    cardContainer.appendChild(cardObject);

    monsterImage.src = monster.verso;

    cardObject.addEventListener("click", () => {
      cardObject.classList.add("reveal-card");
      monsterImage.src = monster.recto;
    });
  });
};
showCards(monsterArray);

let monsterArrayCopy = monsterArray.map((monsterCopy) => ({ ...monsterCopy }));
showCards(monsterArrayCopy);

let randomPlacementCard = () => {
  return Math.floor(Math.random() * 21);
};

const ring = () => {
  const audio = new Audio();
  audio.src = "audio/heureDuDuel.mp3";
  audio.play();
};
linkImage.addEventListener("click", () => {
  console.log("Je clique");
  ring();
});
