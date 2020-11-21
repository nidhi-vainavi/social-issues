var a="";
var sentences = [
  ". Speak up!",
  ". Power your home with renewable energy.",
  ". Weatherize, weatherize, weatherize.",
  ". Invest in energy-efficient appliances.",
  ". Reduce water waste.",
  ". Actually eat the food you buy—and make less of it meat.",
  ". Buy better bulbs.",
  ". Pull the plug(s).",
  ". Drive a fuel-efficient vehicle.",
  ". Maintain your ride.",
  ". Rethink planes, trains, and automobiles.",
  ". Shrink your carbon profile."
];
for (var i=1;i<sentences.length;i++){
a+=i+sentences[i]+ "<br>";
}
document.getElementById("h2").innerHTML=a;
function MenuNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}