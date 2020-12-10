var plaatjes = document.getElementsByTagName("img");
var random = 0;
var randomNumbers = [];

while (randomNumbers.length < plaatjes.length) {
    random = Math.floor(Math.random() * 9) + 1;
    if (randomNumbers.lastIndexOf(random) == -1) {
        randomNumbers.push(random);
        console.log(randomNumbers)
    }
}

random = 0;
for (var plaatje in plaatjes) {
    console.log(plaatjes[plaatje]);
    plaatjes[plaatje].src = "img/kleur" + randomNumbers[random] + ".png";
    random++;
}