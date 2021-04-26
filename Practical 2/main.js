function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function openNav() {
  document.getElementById("mySidenav").style.width = "170px";
}

function audioVol() {

	var audio = document.getElementById("musicLoop");
	audio.volume = 0.02

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


function bossText() {
	
	document.getElementById("storytext").innerHTML = ' I am making an undead army to destroy the world. However it doesnt matter for you. I am going to kill you myself." What do you want to do?';
	document.getElementById("hidden").classList.remove('invisible')
	document.getElementById("visbtn").innerHTML = "Swing your sword"
	document.getElementById("visbtn").onclick = changeHREF;
}

function changeHREF() {
	console.log("TEST")
	document.getElementById("visbtn").href = "https://kearneymcilroy.github.io/set08101/Practical%202/finalswordswing.html";
	document.getElementById("hidden").href = "https://kearneymcilroy.github.io/set08101/Practical%202/finalrunback.html";
	
}

var myContent = localStorage.getItem("userInput");
function name() {
	console.log("TEST" + myContent)
	document.getElementById("playername").innerHTML = " " + myContent + "?";
}

