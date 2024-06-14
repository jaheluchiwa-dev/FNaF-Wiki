// Sélectionne les élément
const animatronicImg = document.querySelector(".animatronic");
const animatronicJumpscareImg = document.querySelector(".jumpscare");
const animatronicProfile = document.querySelector(".animatronic-profile");
const jumpscareProfile = document.querySelector(".jumpscare-profile");
const bodyBackground = document.querySelector("body");

// Bouton des caméras
const freddyBtn = document.getElementById("Freddy");
const bonnieBtn = document.getElementById("Bonnie");
const chicaBtn = document.getElementById("Chica");
const foxyBtn = document.getElementById("Foxy");
const goldenFreddyBtn = document.getElementById("Gfreddy");

// Création des élément
const description = document.createElement("p");
const animatronicName = document.createElement("h1");
const jumpscareAnimatronicName = document.createElement("h1");
const fnaf = document.createElement("p");
const nights = document.createElement("p");

// Sons / Vidéos
const cameraChange = document.createElement("video");
const goldenFreddySound = document.createElement("audio");
const freddySound = document.createElement("audio");
const kitchenNoice = document.createElement("audio");
const foxyDumDum = document.createElement("audio");
const bonnieMoans = document.createElement("audio");

//Spamm It's Me
const spamItsMe = document.createElement("p");

let itsMeUpdate;

//Fetch du data.json
fetch("./assets/data/data.json")
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    console.log(data);

    // Fonction pour enlever les "ItsMe" quand on clique sur d'autres caméras
    function removeItsMe() {
      const itsMeElements = document.querySelectorAll(".its-me");
      itsMeElements.forEach(function (element) {
        element.remove();
      });
    }

    // Affiche Freddy de base
    description.textContent = data[0].description;
    animatronicImg.src = data[0].animatronic_image;
    animatronicName.textContent = data[0].animatronic
    fnaf.textContent = data[0].fnaf;
    nights.textContent = data[0].nights;

    animatronicImg.classList.add("freddy");

    removeItsMe();

    //Bouton de Golden Freddy
    goldenFreddyBtn.addEventListener("click", function (e) {
      e.preventDefault();
      removeItsMe();

      // Jouer le son de la caméra qui change
      cameraChange.src = "./assets/video/camera-change.mp4";
      cameraChange.play();

      // Jouer le son de Golden Freddy
      goldenFreddySound.src = "./assets/sounds/golden-freddy-it's-me-sound.mp3";
      goldenFreddySound.play();

      // Arrêter le son de Freddy
      freddySound.pause();
      kitchenNoice.pause();
      foxyDumDum.pause();
      bonnieMoans.pause();

      function removeItsMe() {
        const itsMeElements = document.querySelectorAll(".its-me");
        itsMeElements.forEach(function (element) {
          element.remove();
        });
      }

      // SPAM ItsMe
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

      // Informations
      description.textContent = data[4].description;
      animatronicImg.src = data[4].animatronic_image;
      fnaf.textContent = data[4].fnaf;
      nights.textContent = data[4].nights;
      animatronicName.textContent = data[4].animatronic

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
    });

    //Bouton de Freddy
    freddyBtn.addEventListener("click", function (e) {
      e.preventDefault();
      removeItsMe();
      clearInterval(itsMeUpdate);

      // Jouer le son de la caméra qui change
      cameraChange.src = "./assets/video/camera-change.mp4";
      cameraChange.play();

      //Jouer le son de Freddy
      freddySound.src = "./assets/sounds/freddy-sound.mp3";
      freddySound.play();

      // Arrêter le son de Golden Freddy et Son De La Cuisine
      goldenFreddySound.pause();
      kitchenNoice.pause();
      foxyDumDum.pause();
      bonnieMoans.pause();

      // Informations
      description.textContent = data[0].description;
      animatronicImg.src = data[0].animatronic_image;
      fnaf.textContent = data[0].fnaf;
      nights.textContent = data[0].nights;
      animatronicName.textContent = data[0].animatronic

      // Ajout - Remove des class
      freddyBtn.classList.add("active");

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
      description.textContent = data[1].description;
      animatronicImg.src = data[1].animatronic_image;
      fnaf.textContent = data[1].fnaf;
      nights.textContent = data[1].nights;
      animatronicName.textContent = data[1].animatronic

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
      description.textContent = data[2].description;
      animatronicImg.src = data[2].animatronic_image;
      fnaf.textContent = data[2].fnaf;
      nights.textContent = data[2].nights;
      animatronicName.textContent = data[2].animatronic

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
      description.textContent = data[3].description;
      animatronicImg.src = data[3].animatronic_image;
      fnaf.textContent = data[3].fnaf;
      nights.textContent = data[3].nights;
      animatronicName.textContent = data[3].animatronic

      animatronicImg.classList.add("foxy");

      // Ajout - Remove des class
      foxyBtn.classList.add("active");

      bodyBackground.classList.add("foxy-background");

      bodyBackground.classList.remove("gf-background");
      bodyBackground.classList.remove("chica-background");
      bodyBackground.classList.remove("bonnie-background");
      bodyBackground.classList.remove("freddy-background");
      bodyBackground.classList.remove("background");

      chicaBtn.classList.remove("active");
      bonnieBtn.classList.remove("active");
      freddyBtn.classList.remove("active");
      goldenFreddyBtn.classList.remove("active");
    });

    // Ajout des classList des créations des éléments
    description.classList.add("description");
    fnaf.classList.add("fnaf");
    nights.classList.add("nights");
    animatronicName.classList.add("animatronic-name");
    jumpscareAnimatronicName.classList.add("jumpscare-animatronic-title");

    // Ajouter au document
    animatronicProfile.appendChild(animatronicName);
    animatronicProfile.appendChild(nights);
    animatronicProfile.appendChild(description);

    animatronicProfile.appendChild(jumpscareProfile);

    jumpscareProfile.appendChild(jumpscareAnimatronicName);
    jumpscareProfile.appendChild(animatronicJumpscareImg);
  });
