    ```js
    goldenFreddyBtn.addEventListener("click", function (e) {
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

      jumpcareImg.classList.remove("jumpscare");
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





          function removeItsMe() {
      const itsMeElements = document.querySelectorAll(".its-me");
      itsMeElements.forEach(function (element) {
        element.remove();
      });
    }


    //Spamm It's Me
const spamItsMe = document.createElement("p");

let itsMeUpdate;