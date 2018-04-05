


$(document).ready(function(){
						   
						var randomquote; 
	                                         var randnum;
						   
					$("button").click(function(){
													
							$.getJSON("https://raw.githubusercontent.com/neozenweb/CodingChallenge/master/QuotesApi.API",function(result){
									randomquote = JSON.stringify(result);
								        
								      
								});
									
								 
								   randnum = Math.floor(Math.random() * 10) +1;
								    alert("Random number is " + randnum);
								
								     alert("Random quote is  " +randomquote[randnum]);
									ranqt =  randomquote[randnum];
								  
																			  
													
													   
											$("#quotediv").html(ranqt);
																		  
								   
													   });
						   
						   
						   });
						   
						   
				
