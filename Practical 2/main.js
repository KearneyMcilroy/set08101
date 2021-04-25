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
	
	document.getElementById("storytext").innerHTML = 'The sorcerer says "I am making an undead army to destroy the world. However it doesnt matter for you. I am going to kill you myself." What do you want to do?';
	document.getElementById("hidden").classList.remove('invisible')
	document.getElementsById("visbtn").innerHTML = "Swing your sword"
	document.getElementById("visbtn").setAttribute('onclick', 'changeHref()')
}

function changeHREF() {
	
	document.getElementById("hidden").href = "https://kearneymcilroy.github.io/set08101/Practical%202/finalswordswing.html"
	d
	document.getElementById("visbtn").href = "https://kearneymcilroy.github.io/set08101/Practical%202/finalrunback.html"
}
