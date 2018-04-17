/*	
var invocation = new XMLHttpRequest();
var url = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" + searchstr;
   
function callOtherDomain() {
  if(invocation) {    
    invocation.open('GET', url, true);
    invocation.onreadystatechange = handler;
    invocation.send(); 
  }
}

*/


function wikiSearch()
{
	
	   var searchstr = document.getElementById("searchbox").value;
	   var divcont = document.getElementById("maincont");
	   var childnode,divnode,txtnode;
			$.get("https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&format=json&search=" + searchstr,function(result){
										for(var ctr=0;ctr < result[1].length;ctr++)
										{
											divnode = document.createElement("div");
											divnode.setAttribute("class","w3-panel w3-padding-12 w3-blue mainfont w3-border w3-round-small");
											childnode = document.createElement("a");
											childnode.href = result[3][ctr];
											childnode.innerHTML = result[1][ctr];
											txtnode=document.createElement("p");
											txtnode.setAttribute("class","secfont");
											txtnode.innerHTML= result[2][ctr];
											divcont.appendChild(divnode);
											divnode.appendChild(childnode);
											divnode.appendChild(txtnode);
										}
									
									});
	
	
}