

function loadChannels()
{
	
	  // var geturl = "https://id.twitch.tv/oauth2/authorize?client_id=5g1xxkzgahkcwqk5x0w7fhg7v2klao&redirect_uri=https://rawgit.com/neozenweb/CodingChallenge/master/twitchtv.html&response_type=token+id_token&scope=viewing_activity_read";
	  
var geturl ="https://id.twitch.tv/oauth2/authorize?client_id=5g1xxkzgahkcwqk5x0w7fhg7v2klao&redirect_uri=https://rawgit.com/neozenweb/CodingChallenge/master/twitchtv.html&response_type=code&scope=viewing_activity_read";
	
	
	   var divcont = document.getElementById("maincont");
	   var childnode,divnode,txtnode;
	 
			$.get(geturl,function(result){
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


function menuSelect(txt)
{
	
alert(txt);	
}

function channelSearch()
{
	
	
}



