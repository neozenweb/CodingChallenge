


$(document).ready(function(){
						   
						 
						   
					$("button").click(function(){
													
							$.getJSON("https://raw.githubusercontent.com/neozenweb/CodingChallenge/master/QuotesApi.API",function(result){
									var randomquote = JSON.stringify(result);
								      var ranqt = result.filter(function(){
									      var randnum = Math.floor(Math.random() * 10) +1;
									       alert("Random number is " + randnum);
								
									       alert("Random quote is  " +randomquote[randnum]);
									      return randomquote[randnum];
								});
									
								
								  
								$("#quotediv").html(ranqt);
																			  
																			  
																		  });  
													   
													   
													   });
						   
						   
						   });
						   
						   
				
