


$(document).ready(function(){
						   
						 
						   
					$("button").click(function(){
													
							$.getJSON("https://raw.githubusercontent.com/neozenweb/CodingChallenge/master/QuotesApi.API",function(result){
								
								var ranqt = result.filter(function(){
									alert(Math.floor(Math.random() * 10));
									return Math.floor(Math.random() * 10);
								});
									
								var randomquote = JSON.stringify(ranqt);
								   alert(randomquote);
								$("#quotediv").html(ranqt);
																			  
																			  
																		  });  
													   
													   
													   });
						   
						   
						   });
						   
						   
				
