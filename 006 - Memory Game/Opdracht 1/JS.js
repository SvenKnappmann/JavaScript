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
    let j = 1;
    pictureHolder = document.getElementsByClassName("picture-holder");
    for (let i = 0; i < 18; i++) {
        picture = document.createElement("img");
        picture.src = "img/Kleur" + (j) + ".png";
        picture.id = (i);
        picture.addEventListener("click", function () {
            SelectImg(this.id);
        })
        pictureHolder[i].appendChild(picture);
        j++;
        if (j === 10) {
            j = 1;
        }

    }
}
function SelectImg(id) {
    console.log("." + id)
}