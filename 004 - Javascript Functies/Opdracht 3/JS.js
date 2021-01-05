var plaatjes = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var teller1 = 0;
var teller2 = 0;
var teller3 = 0;

var slideholder1 = document.getElementById("slideholder1");
var slideholder2 = document.getElementById("slideholder2");
var slideholder3 = document.getElementById("slideholder3");

slideholder1.style.backgroundImage = "url('../../003%20-%20Javascript%20Arrays/Opdracht%201/img/Kleur" + Random() + ".png')";
slideholder2.style.backgroundImage = "url('../../003%20-%20Javascript%20Arrays/Opdracht%201/img/Kleur" + Random() + ".png')";
slideholder3.style.backgroundImage = "url('../../003%20-%20Javascript%20Arrays/Opdracht%201/img/Kleur" + Random() + ".png')";

slideholder1.addEventListener("click", function () {
    getColor1();
    slideholder1.style.backgroundImage = "url('../../003%20-%20Javascript%20Arrays/Opdracht%201/img/Kleur" + teller1 + ".png')"
});
slideholder2.addEventListener("click", function () {
    getColor2();
    slideholder2.style.backgroundImage = "url('../../003%20-%20Javascript%20Arrays/Opdracht%201/img/Kleur" + teller2 + ".png')"
});
slideholder3.addEventListener("click", function () {
    getColor3();
    slideholder3.style.backgroundImage = "url('../../003%20-%20Javascript%20Arrays/Opdracht%201/img/Kleur" + teller3 + ".png')"
});

function getColor1() {
    if (teller1 >= plaatjes.length) {
        teller1 = 0;
    }
    teller1++;
    return teller1;
}
function getColor2() {
    if (teller2 >= plaatjes.length) {
        teller2 = 0;
    }
    teller2++;
    return teller2;
}
function getColor3() {
    if (teller3 >= plaatjes.length) {
        teller3 = 0;
    }
    teller3++;
    return teller3;
}
function Random() {
    return Math.floor(Math.random() * plaatjes.length + 1);
}