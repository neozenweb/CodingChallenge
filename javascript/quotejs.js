


$(document).ready(function(){
						   
						 
						   
					$("button").click(function(){
													
							$.getJSON("https://raw.githubusercontent.com/neozenweb/CodingChallenge/master/QuotesApi.API",function(result){
								
								var ranqt = result.filter(function(){
									alert("Random number is " +(Math.floor(Math.random() * 10) +1));
									return Math.floor(Math.random() * 10) + 1;
								});
									
								var randomquote = JSON.stringify(ranqt);
								   alert("Random quote is  " +randomquote);
								$("#quotediv").html(ranqt);
																			  
																			  
																		  });  
													   
													   
													   });
						   
						   
						   });
						   
						   
				
