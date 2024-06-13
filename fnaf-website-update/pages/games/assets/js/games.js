// Sélectionner sur les éléments qui sont présents sur la page
const gamesProfile = document.querySelector(".games-profile");
const arrowLeft = document.querySelector(".arrowLeft");
const arrowRight = document.querySelector(".arrowRight");

//Fetch
fetch("./assets/data/games.json")
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    console.log(data);

    let compteur = 0;

    // Changer les images dynamiquement
    const description = document.createElement("p");
    const gameName = document.createElement("h1");
    const imgGame = document.createElement("img");
    const releasedDate = document.createElement("p");

    // Afficher directement
    description.textContent = data[0].description;
    gameName.textContent = data[0].game;
    imgGame.src = data[0].img;
    releasedDate.textContent = data[0].realeased_date;

    // Pour changer l'image dynamiquement
    function updateImage() {
      imgGame.src = data[compteur].img;
    }

    //Pour changer le texte dynamiquement
    function text() {
      description.textContent = data[compteur].description;
      gameName.textContent = data[compteur].game;
      releasedDate.textContent = data[compteur].realeased_date;
    }

    // L'addEventListener click pour changer d'indice pour faire un caroussel
    arrowLeft.addEventListener("click", function (e) {
      e.preventDefault();
      if (compteur < data.length - 1) {
        compteur++;
      } else {
        compteur = 0;
      }
      text();
      updateImage();
    });

    arrowRight.addEventListener("click", function (e) {
      e.preventDefault();
      if (compteur > 0) {
        compteur--;
      } else {
        compteur = data.length - 1;
      }
      text();
      updateImage();
    });

    description.classList.add("description");
    gameName.classList.add("title-game");
    imgGame.classList.add("game-img");
    releasedDate.classList.add("date");

    // Mettre sur le document
    gamesProfile.appendChild(gameName);
    gamesProfile.appendChild(imgGame);
    gamesProfile.appendChild(description);
    gamesProfile.appendChild(releasedDate);
  });