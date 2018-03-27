// JavaScript Document


function dispscr(ctr)
{
	var linkurls =["http://rawgit.com/neozenweb/CodingChallenge/master/PixelArt.html",
				   "http://rawgit.com/neozenweb/CodingChallenge/master/CSSAnimate.html",
				   "http://rawgit.com/neozenweb/CodingChallenge/master/Portfolio.html",
				   "http://rawgit.com/neozenweb/CodingChallenge/master/Invitation.html",
				   "http://rawgit.com/neozenweb/CodingChallenge/master/TouristAttractions.html"
				   ];
	var ct = parseInt(ctr) - 1;
	var popup = document.getElementById('popup');
	popup.style.display='block';
	popup.location.href="";
	
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

		


