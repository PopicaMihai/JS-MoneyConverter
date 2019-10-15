document.getElementById("output").style.visibility = "hidden";

var euro = document.getElementById("euroOutput");
var pounds = document.getElementById("poundsOutput");
var dollars = document.getElementById("dollarsOutput");
var yeni = document.getElementById("yeniOutput");
var gold = document.getElementById("goldOutput");

document.getElementById("lbsInput").addEventListener("input", function(e) {
  document.getElementById("output").style.visibility = "visible";
  let amount = e.target.value;
  
  euro.innerHTML = (amount / 4.7472).toFixed(3);
  pounds.innerHTML = (amount / 5.3220).toFixed(3);
  dollars.innerHTML = (amount / 4.3268).toFixed(3);
  yeni.innerHTML = (amount / 4.0500 * 100).toFixed(3);
  gold.innerHTML = (amount / 209.0175).toFixed(3) + " grams";
});
