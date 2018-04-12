	
$(document).ready(function(){
						   
					
			
    if (navigator.geolocation) {
                 navigator.geolocation.getCurrentPosition(showPosition,showError);
		         alert("geolocation");
		
    } else {
		
        alert("Geolocation is not supported by this browser.");
    }

		
						   
						   });


function showPosition(position)
{
	
		
	var frow, srow,bgimg,wimg; 
	var lati,longi;
						
			frow = document.getElementById("fstrow");
			srow =document.getElementById("secrow");
			smallimg =  document.getElementById("icimg");
	lati = position.coords.latitude;
	longi = position.coords.longitude;
    			$.get("https://fcc-weather-api.glitch.me/api/current?lat=" +lati + "&lon=" +longi,function(result){
								
								
							      
									wimg = result.weather[0].icon;
									alert(result.weather[0].main.toLowerCase());
									switch(result.weather[0].main.toLowerCase())
									{
										case 'clouds':
										    bgimg = "images/rainyweather.jpg"
										    break;
										case 'clear':
										    bgimg = "images/sunnyweather.jpg"
											break;
										case 'cold':
										      bgimg = "images/coldweather.jpg"
											  break;
										case 'hot':
										   bgimg = "images/hotweather.jpg"
										   break;
										default:
										   bgimg = "images/defaultweather.jpg"
										   break;
										
										
										
										
									}
									alert(bgimg);
									
									frow.append(result.name + "   " + result.sys.country);
								smallimg.setAttribute("src",wimg);
			document.getElementById("secrow").innerHTML = result.main.temp + "&#8457; Wind Speed " + result.wind.speed;
				document.body.style.backgroundImage ="url('" + bgimg +"')";		  								     
				document.body.style.backgroundRepeat =false;		  								     
							   
													   });
	
}

						   
						   
						   
						   
function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
           alert( "User denied the request for Geolocation.")
            break;
        case error.POSITION_UNAVAILABLE:
         alert("Location information is unavailable.")
            break;
        case error.TIMEOUT:
            alert( "The request to get user location timed out.")
            break;
        case error.UNKNOWN_ERROR:
           alert( "An unknown error occurred.")
            break;
    }
}