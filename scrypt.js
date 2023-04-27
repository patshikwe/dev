
const perso = document.querySelector(".perso")
const obstacles = document.querySelector(".obstacles")

/**Déclancher l'obstacle */
function letGoOfTheObstacle() {
    if (obstacles.classList != "trigger") {
        obstacles.classList.add("trigger")
    }
}

/**fonction pour faire sauter le personnage */
function jumping() {
    if (perso.classList != "animation") {
        perso.classList.add("animation")
    }
    setTimeout(function () {
        perso.classList.remove("animation")
    }, 400)
}

// Vérifier si l'obstacle touche le personnage
const verif = setInterval(function () {
    const persoTop = parseInt(window.getComputedStyle(perso).getPropertyValue("top"))
    const obstaclesLeft = parseInt(window.getComputedStyle(obstacles).getPropertyValue("left"))

    if (obstaclesLeft < 20 && obstaclesLeft > 0 && persoTop >= 130) {
        obstacles.classList.remove("trigger")
        alert("Vous avez perdu")
    }
}, 1)