
var token;
var userids=[];
var gdata=[];
var num;

	       var isstream;
  var divcont = document.getElementById("maincont");
var childnode,divnode,imgnode,txtnode,statusnode;

function loadChannels()
{
	var muserid,muserstatus;
	  // var geturl = "https://id.twitch.tv/oauth2/authorize?client_id=5g1xxkzgahkcwqk5x0w7fhg7v2klao&redirect_uri=https://rawgit.com/neozenweb/CodingChallenge/master/twitchtv.html&response_type=token+id_token&scope=viewing_activity_read";
	  
//var geturl ="https://id.twitch.tv/oauth2/authorize?client_id=5g1xxkzgahkcwqk5x0w7fhg7v2klao&redirect_uri=https://rawgit.com/neozenweb/CodingChallenge/master/twitchtv.html&response_type=code&scope=viewing_activity_read";

var gettoken = "https://id.twitch.tv/oauth2/token?client_id=5g1xxkzgahkcwqk5x0w7fhg7v2klao&client_secret=wvubstub5vrtitvoo0rds21h5tvao2&grant_type=client_credentials&scope=viewing_activity_read";


//var geturl = "https://api.twitch.tv/helix/streams?user_login=neozenweb&client_id=5g1xxkzgahkcwqk5x0w7fhg7v2klao";
	
	
	//Client code info for github   
	/**  $.post("https://id.twitch.tv/oauth2/token",
        {
          client_id: "5g1xxkzgahkcwqk5x0w7fhg7v2klao",
          client_secret: "wvubstub5vrtitvoo0rds21h5tvao2",
		  grant_type:"client_credentials",
		  scope:"viewing_activity_read",
		  redirect_uri:"https://github.com/neozenweb/CodingChallenge/blob/master/twitchtv.html"
        },
        function(data,status){
			token = data[0];
            //alert("Data: " + token+ "\nStatus: " + status);
			
        },"json");**/
	   
	   
	   
	   //$.post(gettoken,function(tokendata){	token = tokendata[0];	});
	   
	 
	     $.ajax({
          url:  "https://id.twitch.tv/oauth2/token",
          type: "POST",
          data: {
          client_id: "4l2sdr3e9d7anavsenft2f8aj78z4g",
          client_secret: "y4hd7scizicy4t2tjrkdytomk6qv1k",
		  grant_type:"client_credentials",
		  scope:"openid channel_feed_read user:read:email bits:read"
		  },
          async:false,
          success: function(data){
             token = data["access_token"];
          }
       }
    );
	  
	  
	  alert(token);
	  //'url':'https://api.twitch.tv/helix/users?id=19571641',
	// 'url' : 'https://api.twitch.tv/helix/streams',  
	  var test = $.ajax({
    headers: {'Authorization': 'Bearer ' + token},
   
	 'url' : 'https://api.twitch.tv/helix/streams',
    'type' : 'GET',
	'async': 'false',
    'success' : function(result){
		
		                //   alert("RESULT IS  " +JSON.stringify(result["data"]));
						   
									for(ctr=0;ctr<result["data"].length;ctr++)
									{
										muserid =result["data"][ctr]["user_id"];
										muserstatus = result["data"][ctr]["type"];
									    userids.push({muserid,muserstatus});
									}
									
							
							getDetails(userids,token);
							
								}
										
		});
	  
	  
	 
	 
	
	  
}


function getDetails(userids,token)
{
	
	    var userdata=[];
						
	
		  for(var num=0; num < userids.length;num++)
		  {
				var testnew = $.ajax({
			headers: {'Authorization': 'Bearer ' + token},
		   
			 'url' : 'https://api.twitch.tv/helix/users?id=' + userids[num]["muserid"],
			 //'url' : 'https://api.twitch.tv/helix/streams?user_id='+ userids[num],
			'type' : 'GET',
			'async': 'false',
			 'success' : gatherData
								   												
				});
	
		  }

}



function menuSelect(txt)
{

var paranode = document.getElementsByName("udataline");
var recon=0;
var recoff=0;
var msgnode;
//alert(txt);
for(var i=0;i<paranode.length;i++)
{
	 paranode[i].setAttribute("style","display:block;");
     if(txt == "online" && document.getElementsByName("statusimg")[i].className.indexOf("down") > 0)
	 {
      paranode[i].setAttribute("style","display:none;");
	  recon++;
	 }
	 if(txt == "offline" && document.getElementsByName("statusimg")[i].className.indexOf("up") > 0)
	 {
      paranode[i].setAttribute("style","display:none;");
	  recoff++;
	 }
	    

	  
}
if(recon== paranode.length)
{
   msgnode = document.createElement("p");
   msgnode.innerHTML = "No users online";
   document.getElementById("maincont").appendChild(msgnode);
	
}
if(recoff== paranode.length)
{
    msgnode = document.createElement("p");
   msgnode.innerHTML = "No users offline";
  document.getElementById("maincont").appendChild(msgnode);
}
										
}


function gatherData(ans)
{
	
	  var uid,udisp,uimg;


	 uid = ans["data"][0]["id"];
				   udisp =ans["data"][0]["display_name"];
				   uimg = ans["data"][0]["profile_image_url"];
					
					
					  // gatherData(uid,udisp,uimg,num);
					  
	gdata.push({uid,udisp,uimg});
		
	 displayData(gdata);
}




function displayData(udata)
{
	 
	  if(udata.length == userids.length)
	  {
		 
			//alert(JSON.stringify(udata));
	
		   var strhtml;
		      
		   
				
	       for(var ctr=0;ctr < udata.length;ctr++)
		     {
				  dnode = document.getElementById("maincont");
									   divnode = document.createElement("div");
								        divnode.className="w3-row w3-padding-top w3-padding-bottom w3-center secfont";
										 divnode.setAttribute("name","udataline");
										 divnode.setAttribute("id","udataline");
										  
										
											childnode = document.createElement("a");
											imgnode =document.createElement("img");
									
											statusnode = document.createElement("i");
											statusnode.setAttribute("name","statusimg");
										 statusnode.setAttribute("id","statusimg");
									
										  if(userids[ctr]["muserstatus"] == "live")
										        {
													 statusnode.className="fas fa-thumbs-up w3-quarter";;
													
													
												}
										 else
										   {
											    statusnode.className="fas fa-thumbs-down w3-quarter";
											   
										   } 
				 
				 
										 
										
										
										   childnode.href = "http://twitch.tv/" + udata[ctr]["udisp"];
											imgnode.src = udata[ctr]["uimg"];
											  imgnode.className="w3-quarter";
											  imgnode.setAttribute("style", "width:50px;height:50px;");
									
											childnode.className="w3-half";
																			
											
											childnode.innerHTML= udata[ctr]["udisp"];
                                          divnode.appendChild(imgnode);
										  divnode.appendChild(childnode);
												divnode.appendChild(statusnode);
										   
											dnode.appendChild(divnode);				 
				                         				
							
											
											
			 }
			 
			
	  }
	
	
	 
}




function channelSearch()
{
	
	
}



