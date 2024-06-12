let compteur = 0;

//Changer les images dynamiquement
function updateImage() {
  animatronicImg.src = data[compteur].animatronic_image;
  animatronicJumpscareImg.src = data[compteur].animatronic_jumpscare;
}

//Pour changer le texte dynamiquement
function text() {
  description.textContent = data[compteur].description;
  animatronicName.textContent = data[compteur].animatronic;
  jumpscareAnimatronicName.textContent = data[compteur].jumpscare;
  description.textContent = data[compteur].description;
  fnaf.textContent = data[compteur].fnaf;
  nights.textContent = data[compteur].night;
}
//Pour changer dynamiquement les animatroniques à droite
/* function keyRight() {
  if (compteur > 0) {
    compteur--;
  } else {
    compteur = data.length - 1;
  }
  text();
  updateImage();

}

//Pour changer dynamiquement les animatroniques à droite
function keyLeft() {
  if (compteur < data.length - 1) {
    compteur++;
  } else {
    compteur = 0;
  }
  text();
  updateImage();
}

// L'addEventListerner keydown pour les flèches directionnelles
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    keyLeft();
  } else {
    keyRight();
  }
});
*/