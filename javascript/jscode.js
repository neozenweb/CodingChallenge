// JavaScript Document

function overfunc(ctr)
{
	var ct = parseInt(ctr) - 1;
	var im = document.getElementsByName("imgsh");
	var bt = document.getElementsByName("btninfo");
	im[ct].className="fin";
	bt[ct].visibility ="visible";
	
}
function outfunc(ctr)
{
	var ct = parseInt(ctr) - 1;
	var im = document.getElementsByName("imgsh");
	var bt = document.getElementsByName("btninfo");
	im[ct].className="init";
		bt[ct].visibility ="hidden";
}

		


