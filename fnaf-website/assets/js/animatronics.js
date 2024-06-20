// Sélectionner les éléments
const animatronicImg = document.querySelector(".animatronic");
const jumpcareImg = document.querySelector(".jumpscare");
const animatronicProfile = document.querySelector(".animatronic-profile");
const bodyBackground = document.querySelector(".background");

// Audio quand tu cliques sur la caméra
const camChangeAudio = document.createElement("audio");

// Arrows
const arrowRight = document.querySelector(".right");
const arrowLeft = document.querySelector(".left");

// Création des éléments pour les informations
const description = document.createElement("p");
const animatronicName = document.createElement("h1");
const fnaf = document.createElement("p");
const nights = document.createElement("p");
const spamItsMe = document.createElement("p");

// Les sons des animatroniques avec leurs jumpscares
const animatronicsAudio = document.createElement("audio");
const animatronicsJumpscareAudio = document.createElement("audio");

//Fetch du data.json
fetch("./assets/data/data.json")
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    console.log(data);

    let itsMeUpdate;

    // Fonction pour enlever les Its-me
    function removeItsMe() {
      const itsMeElements = document.querySelectorAll(".its-me");
      itsMeElements.forEach(function (element) {
        element.remove();
      });
    }

    function createIM() {
      removeItsMe();

      for (let i = 0; i < 50; i++) {
        const animatronicProfile = document.querySelector(
          ".animatronic-profile"
        );

        if (animatronicProfile) {
          const spamItsMe = document.createElement("p");

          let randomItsMe = 0;
          randomItsMe = Math.random() * 100;

          spamItsMe.style.top = Math.random() * 90 + "%";
          spamItsMe.style.left = Math.random() * 90 + "%";
          spamItsMe.style.fontSize = Math.random() * 3 + "em";
          spamItsMe.style.opacity = Math.random() * 0.5;

          if (Math.floor(Math.random() * 2) === 0) {
            spamItsMe.style.display = "none";
          }

          spamItsMe.textContent = "It's Me".toUpperCase();

          spamItsMe.classList.add("its-me");
          bodyBackground.appendChild(spamItsMe);
        }
      }
    }

    createIM();
    // Un interval tout les 100 miliseconds 50 "ItsMe" apparaissent
    itsMeUpdate = setInterval(createIM, 100);

    // Quand tu cliques sur l'image de l'animatronique ça lance un jumpscare
    animatronicImg.addEventListener("click", function () {
      animatronicImg.src = data[0].animatronic_jumpscare;
      animatronicsJumpscareAudio.src = data[0].jumpscare_audio;
      animatronicsJumpscareAudio.play();
    });

    // Afficher Freddy
    description.textContent = data[0].description;
    animatronicImg.src = data[0].animatronic_image;
    animatronicName.textContent = data[0].animatronic;
    nights.textContent = data[0].nights;
    bodyBackground.style.backgroundImage = `url(${data[0].background})`;
    animatronicsAudio.src = data[0].sounds;
    animatronicsAudio.play();
    removeItsMe()

    // Compteur pour les indices du data
    let compteur = 0;

    //Une fonction pour changer l'audio et l'image dynamiquement
    function updateImageAndSound() {
      animatronicImg.src = data[compteur].animatronic_image;
      bodyBackground.style.backgroundImage = `url(${data[compteur].background})`;
      animatronicsAudio.src = data[compteur].sounds;
      animatronicsAudio.play();

      animatronicImg.addEventListener("click", function () {
        animatronicImg.src = data[compteur].animatronic_jumpscare;
        animatronicsJumpscareAudio.src = data[compteur].jumpscare_audio;
        animatronicsJumpscareAudio.play();
      });
      animatronicsJumpscareAudio.pause();
    }

    //Une fonction pour changer le texte dynamiquement
    function text() {
      animatronicName.textContent = data[compteur].animatronic;
      description.textContent = data[compteur].description;
      nights.textContent = data[compteur].nights;
    }

    // Caroussel pour les flèches
    arrowLeft.addEventListener("click", function () {
      if (compteur > 0) {
        compteur--;
      } else {
        compteur = data.length - 1;
      }
      camChangeAudio.src = "./assets/sounds/change-camera-sound.mp3";
      camChangeAudio.play();

      updateImageAndSound();
      text();
      
    });

    arrowRight.addEventListener("click", function () {
      if (compteur < data.length - 1) {
        compteur++;
      } else {
        compteur = 0;
      }

      camChangeAudio.src = "./assets/sounds/change-camera-sound.mp3";
      camChangeAudio.play();

      updateImageAndSound();
      text();
    });

    // Ajout des classList des créations des éléments
    description.classList.add("description");
    fnaf.classList.add("fnaf");
    nights.classList.add("nights");
    animatronicName.classList.add("animatronic-name");
    jumpcareImg.classList.add("jumpscare-image");

    // Ajouter au document
    animatronicProfile.appendChild(animatronicName);
    animatronicProfile.appendChild(nights);
    animatronicProfile.appendChild(description);
  });
