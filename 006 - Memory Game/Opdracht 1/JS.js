let playfield = document.getElementById("playfield");
let kaartPlaatjes = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9];
let kaartPlaatjesGeheugen = [];
KaartPlaatjesGeheugenvuller(kaartPlaatjesGeheugen);
Shuffle(kaartPlaatjes);

createPictureFrames();
Pictures();
let counter = 0;
let beurt = 0;
let eerstePlaatje;
let tweedePlaatje;
function createPictureFrames() {
    for (let i = 0; i < kaartPlaatjes.length; i++) {
        let pictureHolder = document.createElement("div");
        pictureHolder.className = "picture-holder";
        pictureHolder.id = "picture-holder-" + i;
        playfield.appendChild(pictureHolder);
    }
}
function Pictures() {
    let pictureHolders = document.getElementsByClassName("picture-holder");
    for (let i = 0; i < kaartPlaatjes.length; i++) {
        let picture = document.createElement("img");
        picture.src = "img/Kleur" + kaartPlaatjes[i] + ".png";
        picture.id = kaartPlaatjes[i];
        picture.addEventListener("click", function () {
            Select(this.id);
            console.log(kaartPlaatjesGeheugen.length);
        });
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
    if (counter % 2 === 1) {
        eerstePlaatje = id;
        console.log("first");
    } else if (counter % 2 === 0) {
        tweedePlaatje = id;
        console.log("second");
        if (eerstePlaatje === tweedePlaatje) {
            console.log("correct");

            //je mag nog een keer
        } else {
            console.log("incorrect");
            //beurt is over
            beurt++;
        }
    } else {
        console.log("Math.error");
    }
}