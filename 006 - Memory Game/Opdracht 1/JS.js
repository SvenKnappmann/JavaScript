playfield = document.getElementById("playfield");

createPictureFrames();
getPictures();

function createPictureFrames() {
    for (let i = 0; i < 18; i++) {
        pictureHolder = document.createElement("div");
        pictureHolder.className = "picture-holder";
        pictureHolder.id = "picture-holder-" + i;
        playfield.appendChild(pictureHolder);

    }
}
function getPictures() {
    pictureHolder = document.getElementsByClassName("picture-holder");
    for (let i = 0; i < pictureHolders.length; i++) {
        picture = document.createElement("img");
        picture.src = "../../003%20-%20Javascript%20Arrays/Opdracht%201/img/Kleur" + (i + 1) + ".png";
        picture.id = (i + 1);
        pictureHolder[i].appendChild(picture);
    }
}