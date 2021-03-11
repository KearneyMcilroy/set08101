// JavaScript Document
function angleGetter(){
	var x = document.getElementById("myText").value
	if (x <= 89 && x > 0) {
		document.getElementById("Paragraph").innerHTML = "Acute"
}
  
else if	(x == 90) {
	document.getElementById("Paragraph").innerHTML = "Right Angle"
}
else if (x < 180) {
	document.getElementById("Paragraph").innerHTML = "Obtuse"

}
else if (x <= 180) {
	document.getElementById("Paragraph").innerHTML = "Straight"
}
}