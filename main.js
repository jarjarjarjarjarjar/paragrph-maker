function getParagraph1() {
    var inputs = [];
    for (var i = 1; i <= 6; i++) { inputs.push(document.getElementById("paral_box" + i).value); }
    document.getElementById("showparagraph").innerHTML = inputs.join(". ");
}
function getParagraph2() {
    var input = []
    for (var j = 1; j <= 6; j++) { input.push(document.getElementById("paral_boxer" + j).value); }
    document.getElementById("showparagraph1").innerHTML = input.join(". ")
}