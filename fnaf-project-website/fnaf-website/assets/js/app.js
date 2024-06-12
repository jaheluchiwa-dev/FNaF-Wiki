// Sélectionne les élément
const animatronicImg = document.querySelector(".animatronic");
const animatronicJumpscareImg = document.querySelector(".jumpscare");
const animatronicProfile = document.querySelector(".animatronic-profile");
const jumpscareProfile = document.querySelector(".jumpscare-profile");
const bodyBackground = document.querySelector('body')

// Bouton des caméras
const freddyBtn = document.getElementById("Freddy");
const bonnieBtn = document.getElementById("Bonnie");
const chicaBtn = document.getElementById("Chica");
const foxyBtn = document.getElementById("Foxy");
const goldenFreddyBtn = document.getElementById("Gfreddy");
// Création des éléments
const description = document.createElement("p");
const animatronicName = document.createElement("h1");
const jumpscareAnimatronicName = document.createElement("h1");
const fnaf = document.createElement("p");
const nights = document.createElement("p");

// Sons / Vidéos
const cameraChange = document.createElement("video");
const goldenFreddySound = document.createElement("audio");
const freddySound = document.createElement("audio");

//Fetch du data.json
fetch("./assets/data/data.json")
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    console.log(data);

    // Affiche Freddy de base
    description.textContent = data[0].description;
    animatronicImg.src = data[0].animatronic_image;
    fnaf.textContent = data[0].fnaf;
    nights.textContent = data[0].nights;

    //Bouton de Freddy
    freddyBtn.addEventListener("click", function (e) {
      e.preventDefault();

      // Jouer le son de la caméra qui change
      cameraChange.src = "./assets/video/camera-change.mp4";
      cameraChange.play();

      //Jouer le son de Freddy
      freddySound.src = "./assets/sounds/freddy-sound.mp3";
      freddySound.play();

      // Arrêter le son de Golden Freddy
      goldenFreddySound.pause();

      // Informations
      description.textContent = data[0].description;
      animatronicImg.src = data[0].animatronic_image;
      fnaf.textContent = data[0].fnaf;
      nights.textContent = data[0].nights;

      // Ajout - Remove des class
      freddyBtn.classList.add("active");
      bodyBackground.classList.add('background')

      bonnieBtn.classList.remove("active");
      chicaBtn.classList.remove("active");
      foxyBtn.classList.remove("active");
      goldenFreddyBtn.classList.remove("active");
    });

    //Bouton de Bonnie
    bonnieBtn.addEventListener("click", function (e) {
      e.preventDefault();

      // Jouer le son de la caméra qui change
      cameraChange.src = "./assets/video/camera-change.mp4";
      cameraChange.play();

      // Arrêter le son de Golden Freddy et Freddy
      freddySound.pause();
      goldenFreddySound.pause();

      // Informations
      description.textContent = data[1].description;
      animatronicImg.src = data[1].animatronic_image;
      fnaf.textContent = data[1].fnaf;
      nights.textContent = data[1].nights;

      // Ajout - Remove des class
      bonnieBtn.classList.add("active");

      freddyBtn.classList.remove("active");
      chicaBtn.classList.remove("active");
      foxyBtn.classList.remove("active");
      goldenFreddyBtn.classList.remove("active");
    });

    //Bouton de Chica
    chicaBtn.addEventListener("click", function (e) {
      e.preventDefault();

      // Jouer le son de la caméra qui change
      cameraChange.src = "./assets/video/camera-change.mp4";
      cameraChange.play();

      

      // Arrêter le son de Golden Freddy et Freddy
      freddySound.pause();
      goldenFreddySound.pause();

      // Informations
      description.textContent = data[2].description;
      animatronicImg.src = data[2].animatronic_image;
      fnaf.textContent = data[2].fnaf;
      nights.textContent = data[2].nights;

      // Ajout - Remove des class
      chicaBtn.classList.add("active");

      freddyBtn.classList.remove("active");
      bonnieBtn.classList.remove("active");
      foxyBtn.classList.remove("active");
      goldenFreddyBtn.classList.remove("active");
    });

    //Bouton de Foxy
    foxyBtn.addEventListener("click", function (e) {
      e.preventDefault();

      // Jouer le son de la caméra qui change
      cameraChange.src = "./assets/video/camera-change.mp4";
      cameraChange.play();

      // Arrêter le son de Golden Freddy et Freddy
      freddySound.pause();
      goldenFreddySound.pause();

      // Informations
      description.textContent = data[3].description;
      animatronicImg.src = data[3].animatronic_image;
      fnaf.textContent = data[3].fnaf;
      nights.textContent = data[3].nights;

      // Ajout - Remove des class
      foxyBtn.classList.add("active");

      chicaBtn.classList.remove("active");
      bonnieBtn.classList.remove("active");
      freddyBtn.classList.remove("active");
      goldenFreddyBtn.classList.remove("active");
    });

    //Bouton de Golden Freddy
    goldenFreddyBtn.addEventListener("click", function (e) {
      e.preventDefault();

      // Jouer le son de la caméra qui change
      cameraChange.src = "./assets/video/camera-change.mp4";
      cameraChange.play();

      // Jouer le son de Golden Freddy
      goldenFreddySound.src = "./assets/sounds/golden-freddy-it's-me-sound.mp3";
      goldenFreddySound.play();

      // Arrêter le son de Freddy
      freddySound.pause();

      // Informations
      description.textContent = data[4].description;
      animatronicImg.src = data[4].animatronic_image;
      fnaf.textContent = data[4].fnaf;
      nights.textContent = data[4].nights;

      // Ajout - Remove des class
      goldenFreddyBtn.classList.add("active");

      chicaBtn.classList.remove("active");
      bonnieBtn.classList.remove("active");
      freddyBtn.classList.remove("active");
      foxyBtn.classList.remove("active");
    });

    // Ajout des classList des créations des éléments
    description.classList.add("description");
    fnaf.classList.add("fnaf");
    nights.classList.add("nights");
    animatronicName.classList.add("animatronic-name");
    jumpscareAnimatronicName.classList.add("jumpscare-animatronic-title");

    // Ajouter au document
    animatronicProfile.appendChild(animatronicImg);
    animatronicProfile.appendChild(animatronicName);
    animatronicProfile.appendChild(nights);
    animatronicProfile.appendChild(description);
    animatronicProfile.appendChild(fnaf);

    animatronicProfile.appendChild(jumpscareProfile);

    jumpscareProfile.appendChild(jumpscareAnimatronicName);
    jumpscareProfile.appendChild(animatronicJumpscareImg);
  });