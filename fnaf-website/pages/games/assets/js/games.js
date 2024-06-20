// Sélectionner sur les éléments qui sont présents sur la page
const gamesProfile = document.querySelector(".games-profile");
const arrowLeft = document.querySelector(".left");
const arrowRight = document.querySelector(".right");
const gameName = document.querySelector("h1");
const realeasedDate = document.querySelector(".realeased-date");
const description = document.querySelector(".description");
const gameBackground = document.querySelector(".background");
const imageGame = document.querySelector(".game-image");
const officalGame = document.querySelector('.og')

// Update Du Sons
const changeMusicGames = document.querySelector('audio')
const clickEffectArrow = document.createElement("audio");


//Fetch
fetch("./assets/data/games.json")
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    console.log(data);

    // Afficher le jeu
    description.textContent = data[0].description;
    gameName.textContent = data[0].game;
    realeasedDate.textContent = data[0].realeased_date;
    changeMusicGames.src = data[0].sounds

    let compteur = 0;

    //Pour changer le texte dynamiquement
    function text() {
      description.textContent = data[compteur].description;
      gameName.textContent = data[compteur].game;
      realeasedDate.textContent = data[compteur].realeased_date;
    }

    function updateImage() {
      imageGame.src = data[compteur].img;

      console.log(data[compteur].gameBackground);

      gameBackground.style.backgroundImage =
        "url(" + data[compteur].background + ")";
    }

    function changeMusicSrc() {
      changeMusicGames.src = data[compteur].sounds
      console.log(data[compteur].sounds)  
    }

    // L'addEventListener click pour changer d'indice pour faire un caroussel
    arrowLeft.addEventListener("click", function (e) {
      e.preventDefault();
      if (compteur > 0) {
        compteur--;
      } else {
        compteur = data.length - 1;
      }

      clickEffectArrow.src = "../../assets/sounds/fnaf-open-camera-sound.mp3";
      clickEffectArrow.play()

      changeMusicSrc()
      updateImage();
      text();
    });

    arrowRight.addEventListener("click", function (e) {
      e.preventDefault();
      if (compteur < data.length - 1) {
        compteur++;
      } else {
        compteur = 0;
      }

      clickEffectArrow.src = "../../assets/sounds/fnaf-open-camera-sound.mp3";
      clickEffectArrow.play()

      changeMusicSrc()
      updateImage();
      text();
    });
  });
