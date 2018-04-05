


$(document).ready(function(){
						   
						var randomquote; 
	                                         var randnum, ranqt;
						   
					$("button").click(function(){
													
							$.getJSON("https://raw.githubusercontent.com/neozenweb/CodingChallenge/master/QuotesApi.API",function(result){
									
							          randomquote =JSON.parse(JSON.stringify(result));
								   randnum = Math.floor(Math.random() * 10) +1;
								    alert("Random number is " + randnum);
								    
								alert("Random quote is  " +randomquote[randnum]["quote"]);
									ranqt = randomquote[randnum]["quote"];
       										 
								     
								  
												        
								      
								});
									
																  
													
													   
											$("#quotediv").innerHTML(ranqt);
																		  
								   
													   });
						   
						   
						   });
						   
						   
				
