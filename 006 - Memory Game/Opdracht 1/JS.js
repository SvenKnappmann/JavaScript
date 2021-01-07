playField = document.getElementById("playfield")

getPictures();

function getPictures() {
    for (let i = 0; i < 9; i++) {
        picture = document.createElement("img");
        picture.src = "../../003%20-%20Javascript%20Arrays/Opdracht%201/img/Kleur"+(i+1)+".png";
        picture.id = (i + 1);
        playField[i].appendChild(picture);
    }
}