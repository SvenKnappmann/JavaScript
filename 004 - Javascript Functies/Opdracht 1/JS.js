var mijnauto = {
    kleur: "blauw",
    merk: "Ford",
    snelheid: 0,
    toeter: "toet",

    gasgeven: function () {
        this.snelheid += 5
        console.log(this.snelheid)
    },
    autotoeter: function () {
        console.log(this.toeter)
    }
}
mijnauto.autotoeter()
mijnauto.gasgeven()