var a="";
var sentences = [
  ". Review national laws regarding child labour.",
  ". Check the age of your employees.",
  ". Stop hiring children below the minimum age.",
  ". Remove children from hazardous work.",
  ". Apply a safety and a health management system.",
  ". Provide support to children found in child labour.",
  ". Support education.",
  ". Adapt your business to a child labour-free reality.",
  ". Establish one or more monitoring systems.",
  ". Support education.",
  ". Use the link between labour inspection and workplace Occupational Safety and Health Committee.",
  ". Ensure your new suppliers do not use child labour."
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