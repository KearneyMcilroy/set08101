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

function toggleMusic() {

	var myAudio = document.getElementById("musicLoop");
	var isPlaying = false;

	function togglePlay() {
	  isPlaying ? myAudio.pause() : myAudio.play();
	};

	myAudio.onplaying = function() {
	  isPlaying = true;
	};
	myAudio.onpause = function() {
	  isPlaying = false;
	};
	}