var randomGenerator = Math.floor(Math.random() * (100 - 50) + 50);
var cem = 0;
var wins = 0
var losses = 0
document.querySelector('#xal').innerHTML = cem
document.querySelector('#wins').innerHTML = wins
document.querySelector('#losses').innerHTML = losses

function resetValues() {
    //$("#xal").html(0);
    cem = 0
}
$('#comp').text(randomGenerator);
$(".btn1").on("click", function () {
    var x = $(this).data("deyer");
    cem += parseInt(x);
    //console.log(cem);
    if (cem === parseInt(document.querySelector("span").innerHTML)) {
        wins++;
        $("#wins").html(wins);
        resetValues()
    } else if (cem > parseInt(document.querySelector("span").innerHTML)) {
        losses++;
        $("#losses").html(losses);
        resetValues();
    } else {
        //alert("Umumi cem " + " " + cem);
        document.querySelector('#xal').innerHTML = cem
    }
});