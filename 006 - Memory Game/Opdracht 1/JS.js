playField = document.getElementById("playfield");

createPictureFrames();
// getPictures();

function createPictureFrames() {
    for (let i = 0; i < 18; i++) {
        pictureHolder = document.createElement("div");
        pictureHolder.className = "picture-holder";
        pictureHolder.id = "picture-holder-" + 1;
        pics.appendChild(pictureHolder);


    }
}
// function getPictures() {
//     for (let i = 0; i < 9; i++) {
//         picture = document.createElement("img");
//         picture.src = "../../003%20-%20Javascript%20Arrays/Opdracht%201/img/Kleur"+(i+1)+".png";
//         picture.id = (i + 1);
//         playField[i].appendChild(picture);
//     }
// }