function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
function openNav() {
  document.getElementById("mySidenav").style.width = "170px";
}
function playPauseBtnToggle(hypeDocument. element, event) {
	$("#Pause_Btn").toggle();
	$("#Play_Btn").toggle();	
	(isPlaying.paused) ? isPlaying.play() : isPlaying.pause();
}

