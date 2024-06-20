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

// Les sons des animatroniques avec leurs jumpscares
const animatronicsAudio = document.createElement("audio");
const animatronicsJumpscareAudio = document.createElement('audio')

//Fetch du data.json
fetch("./assets/data/data.json")
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    console.log(data);

    // Quand tu cliques sur l'image de l'animatronique ça lance un jumpscare
    animatronicImg.addEventListener('click', function(){
      animatronicImg.src = data[0].animatronic_jumpscare
      animatronicsJumpscareAudio.src = data[0].jumpscare_audio
      animatronicsJumpscareAudio.play()
    })

    // Afficher Freddy
    description.textContent = data[0].description;
    animatronicImg.src = data[0].animatronic_image;
    animatronicName.textContent = data[0].animatronic;
    nights.textContent = data[0].nights;
    bodyBackground.style.backgroundImage = `url(${data[0].background})`;
    animatronicsAudio.src = data[0].sounds;
    animatronicsAudio.play();

    // Compteur pour les indices du data
    let compteur = 0;

    //Une fonction pour changer l'audio et l'image dynamiquement
    function updateImageAndSound() {
      animatronicImg.src = data[compteur].animatronic_image;
      bodyBackground.style.backgroundImage = `url(${data[compteur].background})`;
      animatronicsAudio.src = data[compteur].sounds;
      animatronicsAudio.play();

      animatronicImg.addEventListener('click', function(){
        animatronicImg.src = data[compteur].animatronic_jumpscare
        animatronicsJumpscareAudio.src = data[compteur].jumpscare_audio
        animatronicsJumpscareAudio.play()
      })
      animatronicsJumpscareAudio.pause()
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
      console.log(camChangeAudio);

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

      console.log(camChangeAudio);

      updateImageAndSound();
      text();
    });

    // Ajout des classList des créations des éléments
    description.classList.add("description");
    fnaf.classList.add("fnaf");
    nights.classList.add("nights");
    animatronicName.classList.add("animatronic-name");

    // Ajouter au document
    animatronicProfile.appendChild(animatronicName);
    animatronicProfile.appendChild(nights);
    animatronicProfile.appendChild(description);
  });
