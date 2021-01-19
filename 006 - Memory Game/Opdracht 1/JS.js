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
let vorigeRondeEersteKaartHouder;
let vorigeRondeTweedeKaartHouder;
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
    counter++;
    beurt++;
    let pictureHolders = document.getElementsByClassName("picture-holder");
    if (booleanEersteKaartHouder === true || booleanTweedeKaartHouder === true) {
        pictureHolders[vorigeRondeEersteKaartHouder].removeChild(src);
        pictureHolders[vorigeRondeTweedeKaartHouder].removeChild(src);
        booleanEersteKaartHouder = false;
        booleanTweedeKaartHouder = false;
    }
    if (counter % 2 === 1) {
        eersteKaartHouder = id;
        vorigeRondeEersteKaartHouder = id;
        pictureHolders[id].firstChild.src = "img/Kleur" + kaartPlaatjes[id] + ".png";
        console.log("first");
    } else if (counter % 2 === 0) {
        tweedeKaartHouder = id;
        pictureHolders[id].firstChild.src = "img/Kleur" + kaartPlaatjes[id] + ".png";
        vorigeRondeTweedeKaartHouder = id;
        console.log("second");
        if (kaartPlaatjes[eersteKaartHouder] === kaartPlaatjes[tweedeKaartHouder]) {
            //je mag nog een keer
            console.log("correct");
            kaartPlaatjesGeheugen[eersteKaartHouder] = 1;
            booleanEersteKaartHouder = false;
            kaartPlaatjesGeheugen[tweedeKaartHouder] = 1;
            booleanTweedeKaartHouder = false;
            //Player score update
            if (beurt % 2 === 1) {
                player1Score++;
            } else if (beurt % 2 === 0) {
                player2Score++;
            }
        } else {
            console.log("incorrect");
            //beurt is over
            booleanEersteKaartHouder = true;
            booleanTweedeKaartHouder = true;
            beurt++;
        }
    } else {
        console.log("Math.error");
    }
}