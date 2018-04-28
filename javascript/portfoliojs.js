// JavaScript Document

function opensite(imgnm){
	
	imgnm = imgnm.substring(imgnm.indexOf("images/")+7,imgnm.length -4);
	
	var linkurls =["http://rawgit.com/neozenweb/CodingChallenge/master/PixelArt.html",
				   "http://rawgit.com/neozenweb/CodingChallenge/master/CSSAnimate.html",
				   "http://rawgit.com/neozenweb/CodingChallenge/master/MainPortfolio.html",
				   "http://rawgit.com/neozenweb/CodingChallenge/master/Invitation.html",
				   "http://rawgit.com/neozenweb/CodingChallenge/master/TouristAttractions.html"
				   ];
	
	
	for(var ct=0;ct<linkurls.length;ct++)
	{
		
		if(linkurls[ct].toLowerCase().indexOf(imgnm.toLowerCase()) > 0)
		   break;
		
			
	}
	
	var newone = window.open(linkurls[ct],  "width=200, height=100");
}
function dispscr(imgsr,ctr)
{
	
	var ct = parseInt(ctr) - 1;
	
	
	
	document.getElementById("mainimg").setAttribute("src",imgsr);
	
}