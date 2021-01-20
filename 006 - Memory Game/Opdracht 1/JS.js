let playfield = document.getElementById("playfield");
let kaartPlaatjes = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9];
let kaartPlaatjesGeheugen = [];
KaartPlaatjesGeheugenvuller(kaartPlaatjesGeheugen);
Shuffle(kaartPlaatjes);

createPictureFrames();
Pictures();
let counter = 0;
let beurt = 0;
let player1Score = 0;
let player2Score = 0;
let eersteKaartHouder;
let tweedeKaartHouder;
let booleanEersteKaartHouder = false;
let booleanTweedeKaartHouder = false;

function createPictureFrames() {
    for (let i = 0; i < kaartPlaatjes.length; i++) {
        let pictureHolder = document.createElement("div");
        pictureHolder.className = "picture-holder";
        pictureHolder.id = i;
        pictureHolder.addEventListener("click", function () {
            Select(this.id);
        });
        playfield.appendChild(pictureHolder);
    }
}

function Pictures() {
    let pictureHolders = document.getElementsByClassName("picture-holder");
    for (let i = 0; i < kaartPlaatjes.length; i++) {
        let picture = document.createElement("img");
        picture.id = kaartPlaatjes[i];

        pictureHolders[i].appendChild(picture);
    }
}

function KaartPlaatjesGeheugenvuller(kaartPlaatjesGeheugen) {
    for (let i = 0; i < kaartPlaatjes.length; i++) {
        kaartPlaatjesGeheugen[i] = 0;
    }
}

function Shuffle(kaartPlaatjes) {
    kaartPlaatjes.sort(() => Math.random() - 0.5);
}

function Select(id) {
    let pictureHolders = document.getElementsByClassName("picture-holder");
    let playerBeurt = document.getElementById("player-beurt");
    let winNotification = document.getElementById("win-notification");
    if (player1Score >= 5) {
        winNotification.textContent = "Player 1 has won";
    } else if (player2Score >= 5) {
        winNotification.textContent = "Player 2 has won";
    }
    if (beurt % 2 === 0) {
        playerBeurt.textContent = "Player 1";
    } else if (beurt % 2 === 1) {
        playerBeurt.textContent = "Player 2"
    }
    if (booleanEersteKaartHouder === true && booleanTweedeKaartHouder === true) {
        pictureHolders[eersteKaartHouder].firstChild.src = "";
        pictureHolders[tweedeKaartHouder].firstChild.src = "";
        booleanEersteKaartHouder = false;
        booleanTweedeKaartHouder = false;
    }
    if (counter % 2 === 0) {
        if (kaartPlaatjesGeheugen[id] === 0) {
            eersteKaartHouder = id;
            pictureHolders[id].firstChild.src = "img/Kleur" + kaartPlaatjes[id] + ".png";
            console.log("first");
            booleanEersteKaartHouder = true;
            counter++;
        }
    } else if (counter % 2 === 1) {
        if (kaartPlaatjesGeheugen[id] === 0) {
            tweedeKaartHouder = id;
            pictureHolders[id].firstChild.src = "img/Kleur" + kaartPlaatjes[id] + ".png";
            console.log("second");
            booleanTweedeKaartHouder = true;
            counter++;
        }
        if (booleanEersteKaartHouder && booleanTweedeKaartHouder) {
            if (kaartPlaatjes[eersteKaartHouder] === kaartPlaatjes[tweedeKaartHouder]) {
                //je mag nog een keer
                console.log("correct");
                kaartPlaatjesGeheugen[eersteKaartHouder] = 1;
                booleanEersteKaartHouder = false;
                kaartPlaatjesGeheugen[tweedeKaartHouder] = 1;
                booleanTweedeKaartHouder = false;
                //Player score update
                let player1 = document.getElementById("player1");
                let player2 = document.getElementById("player2")
                if (beurt % 2 === 0) {
                    player1Score++;
                    player1.textContent = "Player 1 score: " + player1Score;
                } else if (beurt % 2 === 1) {
                    player2Score++;
                    player2.textContent = "Player 1 score: " + player2Score;
                }
            } else {
                console.log("incorrect");
                //beurt is over
                if (beurt % 2 === 0) {

                }
                beurt++;
            }
        }
    } else {
        console.log("Math.error");
    }
}