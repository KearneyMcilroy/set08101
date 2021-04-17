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

function clickFunction() {
        var input = document.getElementById('userInput').value;
        input = input.toLowerCase();

        if (input.length <= 1) {
            alert('hello');
        } else {
           // won't do anything
            return false;
        }
    }    
