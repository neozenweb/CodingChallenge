// JavaScript Document

function dispmod(ctr)
{
		var lat=[33.7901,33.8081608,33.763382,33.699852,33.762742,33.758014];
	var long =[-84.3740,-84.170196,-84.39511,-84.567843,-84.392664,-84.395071];
	
	var ct = parseInt(ctr);
     var src = "images/attraction"+ct+".jpg";
	var modimg = document.getElementById("modimg");
	document.getElementById("modimg").setAttribute("src",src);
	placeMarker(lat[ct - 1],long[ct - 1]);
	document.getElementById("modopen").style.display='block';
		
}






function placeMarker(lat,long) {
	var latlng = new google.maps.LatLng(parseFloat(lat),parseFloat(long));
  var mapOptions = {
   // center: new google.maps.LatLng(parseFloat(lat),parseFloat(long)),
   center:latlng,
 
    zoom:19,
	 mapTypeId: google.maps.MapTypeId.HYBRID
      };
  
  
  var map = new google.maps.Map(document.getElementById("modref"),mapOptions);
  
}


function dispscr(ctr)
{
	var linkurls =["http://rawgit.com/neozenweb/CodingChallenge/master/PixelArt.html",
				   "http://rawgit.com/neozenweb/CodingChallenge/master/CSSAnimate.html",
				   "http://rawgit.com/neozenweb/CodingChallenge/master/MainPortfolio.html",
				   "http://rawgit.com/neozenweb/CodingChallenge/master/Invitation.html",
				   "http://rawgit.com/neozenweb/CodingChallenge/master/TouristAttractions.html"
				   ];
	var ct = parseInt(ctr) - 1;
	
	var newone = window.open(linkurls[ct],  "width=200, height=100");
	
}

function overfunc(ctr)
{
	var ct = parseInt(ctr) - 1;
	var im = document.getElementsByName("imgsh");
	var bt = document.getElementsByName("btninfo");
	im[ct].style.width="80%";
	im[ct].style.height="80%";
	im[ct].style.opacity="0.5";
	bt[ct].style.opacity="1";
	}
function outfunc(ctr)
{
	var ct = parseInt(ctr) - 1;
	var im = document.getElementsByName("imgsh");
	var bt = document.getElementsByName("btninfo");
	im[ct].style.width="100%";
	im[ct].style.height="100%";
	im[ct].style.opacity="1";
	bt[ct].style.opacity="0";
		
}

		


