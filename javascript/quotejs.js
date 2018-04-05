


$(document).ready(function(){
						   
						 
						   
					$("button").click(function(){
													   alert("Button clicked");
							$.getJSON("https://github.com/neozenweb/CodingChallenge/blob/master/QuotesApi.API",function(result){
																			  
															
														$("#quotediv").html(result.filter(Math.floor(Math.random() * 10)));
																			  
																			  
																			  });  
													   
													   
													   });
						   
						   
						   });
						   
						   
				