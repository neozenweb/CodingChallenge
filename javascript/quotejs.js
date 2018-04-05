


$(document).ready(function(){
						   
						 
						   
					$("button").click(function(){
													   alert("Button clicked");
							$.getJSON("https://raw.githubusercontent.com/neozenweb/CodingChallenge/master/QuotesApi.API",function(result){
								
								var ranqt = result.filter(function(){
									
									return Math.floor(Math.random() * 10))
								});
															
								$("#quotediv").html(ranqt);
																			  
																			  
																		  });  
													   
													   
													   });
						   
						   
						   });
						   
						   
				
