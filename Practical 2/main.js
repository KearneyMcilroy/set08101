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

function saveName() {
	var input = document.getElementById("userInput").value;
	localStorage.setItem('userInput', input);
	document.body.innerHTML = document.body.innerHTML.replace
}
=======
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

>>>>>>> origin/master
