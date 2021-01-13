let playfield = document.getElementById("playfield");

createPictureFrames();
getPictures();

function createPictureFrames() {
    for (let i = 0; i < 18; i++) {
        let pictureHolder = document.createElement("div");
        pictureHolder.className = "picture-holder";
        pictureHolder.id = "picture-holder-" + i;
        playfield.appendChild(pictureHolder);
    }
}
function getPictures() {
    for (let i = 1; i <= 18; i++) {
        let random = Math.floor(Math.random() * 9 + 1);
        random = randomid.id
        for (let j = 0; j < 18; j++) {
            if (random === random.id[j]) {

            }
        }
        Pictures(random, i);
    }
}
function Pictures(random, i) {
    let pictureHolders = document.getElementsByClassName("picture-holder");
    let picture = document.createElement("img");
    picture.src = "img/Kleur" + random + ".png";
    picture.id = (i);
    picture.addEventListener("click", function () {
        SelectImg(this.id);
    })
    pictureHolders[i].appendChild(picture);
}
function SelectImg(id) {
    console.log("." + id);
}