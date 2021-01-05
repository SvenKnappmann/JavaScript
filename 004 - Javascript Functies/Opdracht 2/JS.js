var plaatjes = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var teller = 0;
var slideholder = document.getElementById("slideholder");
slideholder.style.backgroundImage = "url('../../003%20-%20Javascript%20Arrays/Opdracht%201/img/Kleur" + Math.floor(Math.random() * 9 + 1) + ".png')"
slideholder.addEventListener("click", function () {
    getColor();
    slideholder.style.backgroundImage = "url('../../003%20-%20Javascript%20Arrays/Opdracht%201/img/Kleur" + teller + ".png')"
});

function getColor() {
    if (teller >= plaatjes.length) {
        teller = 0;
    }
    teller++;
    return teller;
}