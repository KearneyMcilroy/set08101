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

function Tavern() {
	document.getElementById("storytext").innerHTML = "On entering the tavern every soul inside turns and stares at you what do you wish to do?";
	document.getElementById("mainimage").src = "Images/tavernstaring.jpg";
	var button = document.getElementById('button1')
	button.textContent = 'Sp';
	document.getElementById("link1").href = "https://www.google.com/";
	}
