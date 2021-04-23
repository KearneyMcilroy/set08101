function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function openNav() {
  document.getElementById("mySidenav").style.width = "170px";
}

function audioVol() {

	var audio = document.getElementById("musicLoop");
	audio.volume = 0.2

}

function saveName() {
	
		var input = document.getElementById("userInput").value;
		localStorage.setItem('userInput', input);
		console.log("NAME SAVED: ", input);
	
		if(localStorage.getItem('userInput') != null) {
		
			document.getElementById('userInput').style.visibility = "hidden";
			document.getElementById('sub').style.visibility = "hidden";
			document.getElementById('playerName').innerHTML = input + "?";


	}
}