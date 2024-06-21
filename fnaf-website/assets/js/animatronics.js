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

<<<<<<< HEAD
    // Affiche Freddy de base
    description.textContent = data.fnaf[0].description;
    animatronicImg.src = data.fnaf[0].animatronic_image;
    animatronicName.textContent = data.fnaf[0].animatronic
    nights.textContent = data.fnaf[0].nights;

    jumpcareImg.classList.remove("jumpscare")
    animatronicImg.classList.add("freddy");

    removeItsMe();

    //Bouton de Golden Freddy
    goldenFreddyBtn.addEventListener("click", function (e) {
      e.preventDefault();
=======
    function createIM() {
>>>>>>> d4e7460f2f8b1af76810c0841cde07ce72e2c1f9
      removeItsMe();

      for (let i = 0; i < 50; i++) {
        const animatronicProfile = document.querySelector(
          ".animatronic-profile"
        );

        if (animatronicProfile) {
          const spamItsMe = document.createElement("p");

<<<<<<< HEAD
      animatronicImg.addEventListener('click', function(e){
        e.preventDefault()
  
        jumpcareImg.src = data.fnaf[4].animatronic_jumpscare
      })
=======
          let randomItsMe = 0;
          randomItsMe = Math.random() * 100;
>>>>>>> d4e7460f2f8b1af76810c0841cde07ce72e2c1f9

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

<<<<<<< HEAD
      // Informations
      description.textContent = data.fnaf[4].description;
      animatronicImg.src = data.fnaf[4].animatronic_image;
      nights.textContent = data.fnaf[4].nights;
      animatronicName.textContent = data.fnaf[4].animatronic

      jumpcareImg.classList.remove("jumpscare")
      animatronicImg.classList.add("golden-freddy");

      // Ajout - Remove des class
      goldenFreddyBtn.classList.add("active");

      bodyBackground.classList.add("gf-background");

      bodyBackground.classList.remove("foxy-background");
      bodyBackground.classList.remove("freddy-background");
      bodyBackground.classList.remove("bonnie-background");
      bodyBackground.classList.remove("chica-background");
      bodyBackground.classList.remove("background");

      chicaBtn.classList.remove("active");
      bonnieBtn.classList.remove("active");
      freddyBtn.classList.remove("active");
      foxyBtn.classList.remove("active");
=======
    // Quand tu cliques sur l'image de l'animatronique ça lance un jumpscare
    animatronicImg.addEventListener("click", function () {
      animatronicImg.src = data[0].animatronic_jumpscare;
      animatronicsJumpscareAudio.src = data[0].jumpscare_audio;
      animatronicsJumpscareAudio.play();
>>>>>>> d4e7460f2f8b1af76810c0841cde07ce72e2c1f9
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

<<<<<<< HEAD
      // Informations
      description.textContent = data.fnaf[0].description;
      animatronicImg.src = data.fnaf[0].animatronic_image;
      nights.textContent = data.fnaf[0].nights;
      animatronicName.textContent = data.fnaf[0].animatronic

      animatronicImg.addEventListener('click', function(e){
        e.preventDefault()
  
        jumpcareImg.src = data.fnaf[0].animatronic_jumpscare
      })

      // Ajout - Remove des class
      freddyBtn.classList.add("active");
      jumpcareImg.classList.remove("jumpscare")

      bodyBackground.classList.add("freddy-background");

      bodyBackground.classList.remove("gf-background");
      bodyBackground.classList.remove("chica-background");
      bodyBackground.classList.remove("foxy-background");
      bodyBackground.classList.remove("bonnie-background");
      bodyBackground.classList.remove("background");

      bonnieBtn.classList.remove("active");
      chicaBtn.classList.remove("active");
      foxyBtn.classList.remove("active");
      goldenFreddyBtn.classList.remove("active");
    });

    //Bouton de Bonnie
    bonnieBtn.addEventListener("click", function (e) {
      e.preventDefault();
      removeItsMe();
      clearInterval(itsMeUpdate);

      // Jouer le son de la caméra qui change
      cameraChange.src = "./assets/video/camera-change.mp4";
      cameraChange.play();

      // Jouer le son de Bonnie Moans
      bonnieMoans.src = "./assets/sounds/Bonnie-moans.mp3";
      bonnieMoans.play();

      // Arrêter le son de Golden Freddy, Freddy et Son De La Cuisine
      freddySound.pause();
      goldenFreddySound.pause();
      kitchenNoice.pause();
      foxyDumDum.pause();

      // Informations
      description.textContent = data.fnaf[1].description;
      animatronicImg.src = data.fnaf[1].animatronic_image;
      nights.textContent = data.fnaf[1].nights;
      animatronicName.textContent = data.fnaf[1].animatronic

      animatronicImg.addEventListener('click', function(e){
        e.preventDefault()
  
        jumpcareImg.src = data.fnaf[1].animatronic_jumpscare

      })

      animatronicImg.classList.add("bonnie");

      // Ajout - Remove des class

      bonnieBtn.classList.add("active");

      bodyBackground.classList.add("bonnie-background");

      bodyBackground.classList.remove("gf-background");
      bodyBackground.classList.remove("foxy-background");
      bodyBackground.classList.remove("chica-background");
      bodyBackground.classList.remove("background");

      freddyBtn.classList.remove("active");
      chicaBtn.classList.remove("active");
      foxyBtn.classList.remove("active");
      goldenFreddyBtn.classList.remove("active");
    });

    //Bouton de Chica
    chicaBtn.addEventListener("click", function (e) {
      e.preventDefault();
      removeItsMe();
      clearInterval(itsMeUpdate);

      // Jouer le son de la caméra qui change
      cameraChange.src = "./assets/video/camera-change.mp4";
      cameraChange.play();

      // Arrêter le son de Golden Freddy et Freddy
      freddySound.pause();
      goldenFreddySound.pause();
      foxyDumDum.pause();
      bonnieMoans.pause();

      //Son de la cuisine
      kitchenNoice.src = "./assets/sounds/Chica-kitchen-noice.mp3";
      kitchenNoice.play();

      // Informations
      description.textContent = data.fnaf[2].description;
      animatronicImg.src = data.fnaf[2].animatronic_image;
      nights.textContent = data.fnaf[2].nights;
      animatronicName.textContent = data.fnaf[2].animatronic

      animatronicImg.addEventListener('click', function(e){
        e.preventDefault()
  
        jumpcareImg.src = data.fnaf[2].animatronic_jumpscare
      })

      // Ajout - Remove des class
      chicaBtn.classList.add("active");

      bodyBackground.classList.add("chica-background");

      bodyBackground.classList.remove("gf-background");
      bodyBackground.classList.remove("foxy-background");
      bodyBackground.classList.remove("bonnie-background");
      bodyBackground.classList.remove("freddy-background");
      bodyBackground.classList.remove("background");

      freddyBtn.classList.remove("active");
      bonnieBtn.classList.remove("active");
      foxyBtn.classList.remove("active");
      goldenFreddyBtn.classList.remove("active");
    });

    //Bouton de Foxy
    foxyBtn.addEventListener("click", function (e) {
      e.preventDefault();
      removeItsMe();
      clearInterval(itsMeUpdate);

      // Jouer le son de la caméra qui change
      cameraChange.src = "./assets/video/camera-change.mp4";
      cameraChange.play();

      //Jouer le son de Foxy Dumdum
      foxyDumDum.src = "./assets/sounds/Foxy-dumdum.mp3";
      foxyDumDum.play();

      // Arrêter le son de Golden Freddy, Golden Freddy et son de la cuisine
      freddySound.pause();
      goldenFreddySound.pause();
      kitchenNoice.pause();
      bonnieMoans.pause();

      // Informations
      description.textContent = data.fnaf[3].description;
      animatronicImg.src = data.fnaf[3].animatronic_image;
      nights.textContent = data.fnaf[3].nights;
      animatronicName.textContent = data.fnaf[3].animatronic
      
      animatronicImg.addEventListener('click', function(e){
        e.preventDefault()
  
        jumpcareImg.src = data.fnaf[3].animatronic_jumpscare
      })
=======
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
>>>>>>> d4e7460f2f8b1af76810c0841cde07ce72e2c1f9

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
