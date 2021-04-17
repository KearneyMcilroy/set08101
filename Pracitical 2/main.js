function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
function openNav() {
  document.getElementById("mySidenav").style.width = "170px";
}

function audioVol() {

	var audio = document.getElementById("musicLoop");
	audio.volume = 0.03

}	
setTimeout(fadeOut, 3000);
function fadeOut () {
	document.getElementById('mainimage').className = "fade";
	alert("test")
}