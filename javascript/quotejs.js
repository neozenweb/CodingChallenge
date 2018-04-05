


$(document).ready(function(){
						   
						var randomquote; 
	                                         var randnum, ranqt;
						   
					$("button").click(function(){
													
							$.getJSON("https://raw.githubusercontent.com/neozenweb/CodingChallenge/master/QuotesApi.API",function(result){
									
							          randomquote =JSON.parse(JSON.stringify(result));
								   randnum = Math.floor(Math.random() * 10);
								     
										 
								     			   
									$("#quotediv").text(randomquote[randnum]["quote"]);
									$("#fampers").text(randomquote[randnum]["author"]);
								  
								  
												        
								      
								});
									
																  
													
										
																		  
								   
													   });
						   
						   
						   });
						   
						   
				
