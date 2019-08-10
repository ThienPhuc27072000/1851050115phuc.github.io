										// JavaScript Document

function openCity(cityName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(cityName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

var dem = 1;
function left() {
	dem++;
	if( dem > 5 )
	{
		dem = 1;
	}
	var x = document.getElementById("banner");
	x.src = "bannerA/banner" + dem + ".jpg" ;
	//x.style.width = "2048px";
	x.style.height = "449px";
}

function right() {
	dem--;
	if( dem < 1 )
	{
		dem = 5;
	}
	var x = document.getElementById("banner");
	x.src = "bannerA/banner" + dem + ".jpg" ;
	//x.style.width = "2048px";
	x.style.height = "449px";
}
setInterval(function(){right();}, 2000);
