


$(document).ready(function(){
						   
						 
						   
					$("button").click(function(){
													   alert("Button clicked");
							$.getJSON("https://raw.githubusercontent.com/neozenweb/CodingChallenge/master/QuotesApi.API",function(result){
																			  
															
								$("#quotediv").html(result.filter(Math.floor(Math.random() * 10)));
																			  
																			  
																		  });  
													   
													   
													   });
						   
						   
						   });
						   
						   
				
