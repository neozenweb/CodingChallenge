// JavaScript Document


var slideIndex = 1;
//showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("episodes");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-red", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-red";
}


function clickMenu(dest)
{
	
	var page;
	if(dest.indexOf("home") >= 0)
	       page="MSHIndex.html";
    if(dest.indexOf("corevalues") >= 0)
	       page="MSHCoreValues.html";
	if(dest.indexOf("careers") >= 0)
	       page="MSHCareers.html";
    if(dest.indexOf("aboutus") >= 0)
	       page="MSHAboutUs.html";
     if(dest.indexOf("contactus") >= 0)
	       page="MSHContactUs.html";
     if(dest.indexOf("register") >= 0)
	       page="MSHBusinessRegistration.html";
     if(dest.indexOf("mission") >= 0)
	       page="MSHMission.html";
    if(dest.indexOf("vision") >= 0)
	       page="MSHVision.html";
    if(dest.indexOf("community") >= 0)
	       page="MSHCommunity.html";
     if(dest.indexOf("leadership") >= 0)
	       page="MSHLeadership.html";

     closeRightMenu();
   $("#divContent").load(page);	
  
		
}
function openRightMenu() {
    document.getElementById("rightMenu").style.display = "block";
}
function closeRightMenu() {
    document.getElementById("rightMenu").style.display = "none";
}

function empInfo(empcd)
{
	var moreInfo;
	if(empcd.indexOf("AE") >= 0)
		   moreInfo="MSHCareersAE.html";
		   
    if(empcd.indexOf("AA") >= 0)
	       moreInfo="MSHCareersAA.html";
    if(empcd.indexOf("SM") >= 0)
	       moreInfo="MSHCareersSM.html";

		$("#divContent").load(moreInfo);	
		window.scrollTo(0,0);
		
	
}

function checkName()

{
	
	var eName = document.forms["frmUp"]["empName"].value.trim();
	  
	
	if(eName.length <=3)
	  {
		alert("Please enter your full name.");
		document.getElementById('errors').innerHTML="Please enter your full name.";
		   document.getElementById('errors').focus();
	     return false;
	  }
	else
	  return true;
	
}

function checkEmail()
{
	
	var eEmail = document.forms["frmUp"]["empEmail"].value.trim();
	
	if(eEmail.length <=6 )
	 {
		 alert("Please Enter a Valid Email.");
		 	document.getElementById('errors').innerHTML="Please enter valid email id.";
	         document.getElementById('errors').focus();
		 return false;
	 }
	 else
	 {
			var atpos = eEmail.indexOf("@");
			var dotpos = eEmail.lastIndexOf(".");
			
	  
	
		if (atpos<1 || dotpos<atpos+2 || dotpos+2>=eEmail.length) {
			 	document.getElementById('errors').innerHTML="Please enter valid email id.";
				 document.getElementById('errors').focus();
	 			alert("Please Enter a Valid Email.");
			return false;
		}
	
	else
	  return true;
	 }
}



function checkFile()

{

	var fl = document.getElementById("fileToUpload");
	var frm =document.getElementById("frmUp");
	 
	
	    			if('files' in fl)
						{
									if (fl.files.length == 0)
									{
										alert("Please choose a valid PDF or DOC file to upload.");
										 	document.getElementById('errors').innerHTML="Please choose a valid PDF or DOC file to upload.";
											 document.getElementById('errors').focus();
	 										return false;
									}
									else
									{
											var flvar = fl.files[0];
											
											if (flvar.size > 0  && flvar.size < 90000000)
											{
												if(flvar.name.toUpperCase().includes('.PDF') || flvar.name.toUpperCase().includes('.DOC'))
												 {
													
													if(checkName() && checkEmail())
													 return true;
													else
													  return false;
													  
													  													
												 }
												else
												{
												  alert("Your file seems to be corrupted. Please choose a valid PDF or DOC file of size less than 80MB to upload.");
												  	document.getElementById('errors').innerHTML="Your file seems to be corrupted. Please choose a valid PDF or DOC file of size less than 80MB to upload.";
												   document.getElementById('errors').focus();
												  return false;
												}
											}  
											else
											{
											   alert("Please choose a valid PDF or DOC file of size less than 80MB to upload.");
											   document.getElementById('errors').innerHTML= "Please choose a valid PDF or DOC file of size less than 80MB to upload.";
											   document.getElementById('errors').focus();
											  return false;
											}
											  
											
									}
							}
							
							else
							   return false;
			 
			
}


function expandInfo(panid)
{
		var x = document.getElementById(panid);
			if (x.className.indexOf("w3-show") == -1) {
				x.className += " w3-show";
			} else { 
				x.className = x.className.replace(" w3-show", "");
			}
 
}

function applyPosition(posid)
{
	
	 $("#divContent").load("MSHEmpApplication.html");
	 
}

function uploadFile()
{
	
	 $("#divContent").load("MSHEmpApplication.html");
	 
	
}
function validateFormData()
{
	
	var candsign = document.forms['empform']['candsign'].value;
	var formdataok = 0;
	
		if (candsign.trim().length == 0)
	   {
		   alert("Please enter your full name as your signature.");
		   document.getElementById('errorsfourth').innerHTML ="Please enter your full name as your signature.";
		  
		   //document.getElementById('errorsfourth').focus();
		  document.forms['empform']['candsign'].focus();
		   formdataok = 1;
		}
		
		if(formdataok == 0)
		{
	      document.forms['empform'].submit();
		  return true;
		}
		else
		  return false;
		
		
	
	
}


function validateFirst()
{
	
	var position = document.forms['empform']['position'].value;
	var emptype = document.forms['empform']['emptype'].value;
	var ssn = document.forms['empform']['ssn'].value;
	var address = document.forms['empform']['address'].value;
	var city = document.forms['empform']['city'].value;
	var state = document.forms['empform']['state'].value;
	var zipcode = document.forms['empform']['zipcode'].value.trim();
	var dateav = document.forms['empform']['dateav'].value;
	var salary = document.forms['empform']['salary'].value.trim();
	var phone = document.forms['empform']['phone'].value.trim();
	var empage = document.forms['empform']['empage'].value;
	var empeligible = document.forms['empform']['empeligible'].value;
	var formdataok = 0;
	var today = new Date();
	if (position.startsWith('Select'))
	   {
		   alert("Please select the job position.");
		   document.getElementById('errorsfirst').innerHTML="Please select the job position.";
		   document.getElementById('errorsfirst').focus();
		   formdataok = 1;
		   window.scrollTo(0,0);
		   return false;
		}
	  
		if (address.trim().length == 0)
	   {
		   alert("Please enter your current address.");
		   document.getElementById('errorsfirst').innerHTML= "Please enter your current address.";
		   document.getElementById('errorsfirst').focus();
		   //document.forms['empform']['address'].focus();
		   formdataok = 1;
		   window.scrollTo(0,0);
		   return false;
		}
		if (city.trim().length == 0)
	   {
		   alert("Please enter your current city of residence.");
		   document.forms['empform']['city'].focus();
		   document.getElementById('errorsfirst').innerHTML="Please enter your current city of residence.";
		   document.getElementById('errorsfirst').focus();
		   window.scrollTo(0,0);
		   formdataok = 1;
		   return false;
		}
		if (state.startsWith('Select'))
	   {
		  alert("Please enter your current state of residence.");
		   document.forms['empform']['state'].focus();
		   
		    document.getElementById('errorsfirst').innerHTML="Please enter your current state of residence.";
		   document.getElementById('errorsfirst').focus();
		   window.scrollTo(0,0);
		   formdataok = 1;
		   return false;
		}
		if (isNaN(zipcode) || zipcode < 0 || zipcode > 99999)
	   {
		   alert("Please enter a valid zipcode.");
		   document.forms['empform']['zipcode'].focus();
		    document.getElementById('errorsfirst').innerHTML="Please enter a valid zipcode.";
		   document.getElementById('errorsfirst').focus();
		   formdataok = 1;
		   window.scrollTo(0,0);
		   return false;
		}
		if (dateav.startsWith("mm") && (dateav.getTime() < today.getTime()))
	   {
		   alert("Please enter valid joining date.");
		   document.forms['empform']['dateav'].focus();
		    document.getElementById('errorsfirst').innerHTML="Please enter valid joining date.";
		   document.getElementById('errorsfirst').focus();
		   window.scrollTo(0,0);
		   formdataok = 1;
		   return false;
		}
		if (isNaN(salary) || salary <= 0 || salary > 99999999)
	   {
		    document.getElementById('errorsfirst').innerHTML="Please enter valid salary requirement.";
		   document.getElementById('errorsfirst').focus();
		  alert("Please enter valid salary requirement.");
		   document.forms['empform']['salary'].focus();
		   window.scrollTo(0,0);
		   formdataok = 1;
		   return false;
		}
		if (isNaN(phone) || phone <= 0 || phone > 9999999999)
	   {
		   alert("Please enter valid phone number.");
		   document.forms['empform']['phone'].focus();
		    document.getElementById('errorsfirst').innerHTML="Please enter valid phone number.";
		   document.getElementById('errorsfirst').focus();
		   window.scrollTo(0,0);
		   formdataok = 1;
		   return false;
		}
		
	  
		
		if(formdataok == 0)
		{
			
	       //$("#formFirst").load("MSHApplFormSecond.html");
		    var pgnext = document.getElementById('formsecond');
			var pgprev = document.getElementById('formfirst');
			pgprev.style.display = 'none';
			pgnext.style.display = 'block';
			
		   window.scrollTo(0,0);
		   
		   return false;
		}
		
		 
	
	
}




function validateSecond()
{
	var formdataok = 0;
	var today = new Date();
	 var emphs = document.forms['empform']['emphs'].value;
var empdiploma = document.forms['empform']['empdiploma'].value;
var empged = document.forms['empform']['empged'].value;
var school = document.forms['empform']['school'].value.trim();
var schoolcity = document.forms['empform']['schoolcity'].value.trim();
var schoolstate = document.forms['empform']['schoolstate'].value.trim();

var empcoll = document.forms['empform']['empcoll'].value;
var empmajor = document.forms['empform']['empmajor'].value.trim();
var empdegree = document.forms['empform']['empdegree'].value.trim();
var college = document.forms['empform']['college'].value.trim();
var collcity = document.forms['empform']['collcity'].value.trim();
var collstate = document.forms['empform']['collstate'].value.trim();

var othtraining = document.forms['empform']['othtraining'].value.trim();
var othcollege = document.forms['empform']['othcoll'].value.trim();
var othcity = document.forms['empform']['othcity'].value.trim();
var othstate = document.forms['empform']['othstate'].value.trim();
	
	
		if(empdiploma == 'Yes')
		{
				if (school.trim().length == 0)
			   {
				   alert("Please enter your High School name.");
				   document.forms['empform']['school'].focus();
				    document.getElementById('errorssecond').innerHTML = "Please enter your High School Name.";
					//document.getElementById('errorssecond').focus();
					window.scrollTo(0,0);
				   formdataok = 1;
				   return false;
				}
				if (schoolcity.trim().length == 0)
			   {
				    alert("Please enter your High School city name.");
				   document.forms['empform']['schoolcity'].focus();
				    document.getElementById('errorssecond').innerHTML="Please enter your High School city name.";
		   			//document.getElementById('errorssecond').focus();
					window.scrollTo(0,0);
				   formdataok = 1;
				   return false;
				}
				if (schoolstate.startsWith('Select'))
			   {
				   alert("Please enter your High School state.");
				   document.forms['empform']['schoolstate'].focus();
				    document.getElementById('errorssecond').innerHTML="Please enter your High School State.";
		            //document.getElementById('errorssecond').focus();
					window.scrollTo(0,0);
				   formdataok = 1;
				   return false;
				}
		
		}
		
		
		
		
		if(empcoll >= 1)
		{
				if (empdegree.trim().length == 0)
			   {
				   alert("Please enter the degree.");
				   document.forms['empform']['empdegree'].focus();
				    document.getElementById('errorssecond').innerHTML="Please enter the degree earned.";
		            //document.getElementById('errorssecond').focus();
					window.scrollTo(0,0);
				   formdataok = 1;
				   return false;
				}
				
				if (empmajor.trim().length == 0)
			   {
				  alert("Please enter the major.");
				   document.forms['empform']['empmajor'].focus();
				    document.getElementById('errorssecond').innerHTML="Please enter the name of your major.";
		             //document.getElementById('errorssecond').focus();
					 window.scrollTo(0,0);
				   formdataok = 1;
				   return false;
				}
			
				if (college.trim().length == 0)
			   {
				   alert("Please enter the name of your College or Vocational School.");
				   document.forms['empform']['college'].focus();
				    document.getElementById('errorssecond').innerHTML="Please enter the name of your college or vocational school.";
		   			//document.getElementById('errorssecond').focus();
					window.scrollTo(0,0);
				   formdataok = 1;
				   return false;
				}
				if (collcity.trim().length == 0)
			   {
				  alert("Please enter in which city your college or vocational school is located.");
				   document.forms['empform']['collcity'].focus();
				    document.getElementById('errorssecond').innerHTML="Please enter in which city your college or vocational school is located.";
		           //document.getElementById('errorssecond').focus();
				   window.scrollTo(0,0);
				   formdataok = 1;
				   return false;
				}
				if (collstate.startsWith('Select'))
			   {
				   alert("Please enter in which state your college or vocational school is located.");
				   document.forms['empform']['collstate'].focus();
				    document.getElementById('errorssecond').innerHTML="Please enter in which state your college or vocational school is located.";
		            //document.getElementById('errorssecond').focus();
					window.scrollTo(0,0);
				   formdataok = 1;
				   return false;
				}
		
		}
		
		
		
		if(formdataok == 0)
		{
	      // $("#formContent").load("MSHApplFormThird.html");
		   var pgnext = document.getElementById('formthird');
			var pgprev = document.getElementById('formsecond');
				
			pgprev.style.display = 'none';
			pgnext.style.display = 'block';
			
		    window.scrollTo(0,0);
		  return false;
		}
		
		
	
	
}



function validateThird()
{
	
	var formdataok = 0;
	  
	 
		if(formdataok == 0)
		{
	      // $("#formContent").load("MSHApplFormFourth.html");
		   var pgnext = document.getElementById('formfourth');
			var pgprev = document.getElementById('formthird');
				
			pgprev.style.display = 'none';
			pgnext.style.display = 'block';
		    window.scrollTo(0,0);
		  return false;
		}
		
		
	
	
}



function registrationInfo()
{
	
	var busfname = document.forms['regbusform']['busfname'].value;
	var buslname = document.forms['regbusform']['buslname'].value;
	var busnametitle = document.forms['regbusform']['busnametitle'].value;
	var buscompany = document.forms['regbusform']['buscompany'].value;
	var busaddress = document.forms['regbusform']['busaddress'].value;
	var buscity = document.forms['regbusform']['buscity'].value;
	var busstate = document.forms['regbusform']['busstate'].value;
	var buszipcode = document.forms['regbusform']['buszipcode'].value.trim();
	var busphone = document.forms['regbusform']['busphone'].value.trim();
	var busemail = document.forms['regbusform']['busemail'].value;
	var bustype = document.forms['regbusform']['bustype'].value;
	var busprodserv = document.forms['regbusform']['busprodserv'].value;
	var busmsg = document.forms['regbusform']['busmsg'].value;
	var busdataok = 0;
	var today = new Date();
	
		
	if(busfname.length < 1)
	  {
		alert("Please enter your first name.");
		document.getElementById('errorslist').innerHTML="Please enter your first name.";
		   document.getElementById('errorslist').focus();
		 busdataok = 1;
		   window.scrollTo(0,0);
		   return false;
	  }
	
	  
	  if(buslname.length < 2)
	  {
		alert("Please enter your last name.");
		document.getElementById('errorslist').innerHTML="Please enter your last name.";
		   document.getElementById('errorslist').focus();
		  busdataok = 1;
		   window.scrollTo(0,0);
		   return false;
	  }
	
	
	
		if (buscompany.trim().length == 0)
	   {
		   alert("Please enter business name.");
		   document.getElementById('errorslist').innerHTML= "Please enter business name.";
		   document.getElementById('errorslist').focus();
		   //document.forms['empform']['address'].focus();
		   busdataok = 1;
		   window.scrollTo(0,0);
		   return false;
		}
	  
		if (busaddress.trim().length == 0)
	   {
		   alert("Please enter company's address.");
		   document.getElementById('errorslist').innerHTML= "Please enter company's address.";
		   document.getElementById('errorslist').focus();
		   //document.forms['empform']['address'].focus();
		   busdataok = 1;
		   window.scrollTo(0,0);
		   return false;
		}
		if (buscity.trim().length == 0)
	   {
		   alert("Please enter the city where the company is located.");
		   document.forms['regbusform']['buscity'].focus();
		   document.getElementById('errorslist').innerHTML="Please enter the city where the company is located.";
		   document.getElementById('errorslist').focus();
		   window.scrollTo(0,0);
		   busdataok = 1;
		   return false;
		}
		if (busstate.startsWith('Select'))
	   {
		  alert("Please select the state in which the company is located.");
		   document.forms['regbusform']['busstate'].focus();
		   
		    document.getElementById('errorslist').innerHTML="Please select the state in which the company is located.";
		   document.getElementById('errorslist').focus();
		   window.scrollTo(0,0);
		   busdataok = 1;
		   return false;
		}
		if (isNaN(buszipcode) || buszipcode < 10000 || buszipcode > 99999)
	   {
		   alert("Please enter a valid zipcode.");
		   document.forms['regbusform']['buszipcode'].focus();
		    document.getElementById('errorslist').innerHTML="Please enter a valid zipcode.";
		   document.getElementById('errorslist').focus();
		   busdataok = 1;
		   window.scrollTo(0,0);
		   return false;
		}
		
		if (isNaN(busphone) || busphone <= 1000000000 || busphone > 9999999999)
	   {
		   alert("Please enter valid phone number.");
		   document.forms['regbusform']['busphone'].focus();
		    document.getElementById('errorslist').innerHTML="Please enter valid phone number.";
		   document.getElementById('errorslist').focus();
		   window.scrollTo(0,0);
		   busdataok = 1;
		   return false;
		}
		
	  
		if(busemail.length <=6 )
	 {
		 alert("Please Enter a Valid Email.");
		 	document.getElementById('errorslist').innerHTML="Please enter valid email id.";
	         document.getElementById('errorslist').focus();
			 busdataok = 1;
		   return false;
		
	 }
	 else
	 {
			var atpos = busemail.indexOf("@");
			var dotpos = busemail.lastIndexOf(".");
			
	  
	
		if (atpos<1 || dotpos<atpos+2 || dotpos+2>=busemail.length) {
			 	document.getElementById('errorslist').innerHTML="Please enter valid email id.";
				 document.getElementById('errorslist').focus();
	 			alert("Please Enter a Valid Email.");
				busdataok = 1;
			return false;
		}
	
	
	 }
		if(busdataok == 0)
		{
	      document.forms['regbusform'].submit();
		  return true;
		}
		else
		  return false;
		
	
	
}



/* $(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
     event.preventDefault();

      // Store hash
     var hash = this.hash;
	//  alert("Message" + hash);

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        $("#divContent").load($hash);
        // Add hash (#) to URL when done scrolling (default click behavior)
       window.location.hash = hash;
      });
    } // End if
  });
});*/