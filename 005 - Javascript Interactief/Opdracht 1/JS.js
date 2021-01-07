pics = document.getElementById("pics");
createPicsHolders();
createColorImages()

function createPicsHolders() {
    for (let i = 0; i < 9; i++) {
        pictureHolder = document.createElement("div");
        pictureHolder.className = "picture-holder";
        pictureHolder.id = "picture-holder-" + i;
        pics.appendChild(pictureHolder);
    }
}

function createColorImages() {
    pictureHolders = document.getElementsByClassName("picture-holder");
    for (let i = 0; i < pictureHolders.length; i++) {
        favorite = document.createElement("div");
        favorite.className = "favorite";
        favorite.id = "favorite_" + (i + 1);
        colorPicture = document.createElement("img");
        colorPicture.src = "../../003%20-%20Javascript%20Arrays/Opdracht%201/img/Kleur" + (i + 1) + ".png";
        colorPicture.id = (i + 1);
        colorPicture.addEventListener("click", function () {
            makeFav(this.id);
        });
        pictureHolders[i].appendChild(favorite);
        pictureHolders[i].appendChild(colorPicture);
    }
}

function makeFav(id) {
    console.log("." + id);
    unfavorite = document.getElementsByClassName("favorite");

    for (let i = 0; i < unfavorite.length; i++) {
        unfavorite[i].style.backgroundImage = "none";
    }

    favorite = document.getElementById("favorite_" + id);
    favorite.style.backgroundImage = "url('Img/New%20Piskel.png')";
}