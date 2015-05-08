window.onload=  function() {
  var tekst=document.getElementById("unosteksta");	
  tekst.disabled=true;
}
//textarea je disabled, tek nakon imena i maila se moze poceti kucati poruka

function showmore(ref,bonus){	
var tekst=ref.innerHTML;
if(tekst=="Read more..."){
	document.getElementById(bonus).style.display="inline";
	ref.innerHTML="Read less.";
}
else {
	document.getElementById(bonus).style.display="none";
	ref.innerHTML="Read more...";
}
}


function showMenu(){
	var submeni=document.getElementById("submenu").children[0];
    var submeni1=document.getElementById("submenu").children[1];      
	submeni.style.display="block";
	submeni1.style.display="block";
   document.getElementById("submenu").style.display="block";
   document.getElementById("submenu").style.clear="both";
    
 }
 function hideMenu(){
   document.getElementById("submenu").style.display="none";
 }
 
 function validiraj(){
	 return(odobri() && odobriIme() && odobriMail() && odobriTekst() && drzavaValidirana);
}



function odobri(){
	var email = document.getElementById("mejl").value;
	var tekst=document.getElementById("unosteksta");
	var ime=document.getElementById("unosime").value;
	if(validirajEmail(email) && validirajIme(ime) && odobriIme() && odobriMail()){
		document.getElementById("errortekst").innerHTML="";
  tekst.disabled=false;
  return true;
	}

else{
	tekst.disabled=true;
	document.getElementById("errortekst").innerHTML="Name and/or mail missing!";
	return false;
}
}

function odobriIme(){
	var ime=document.getElementById("unosime").value;
	if(validirajIme(ime)){
	document.getElementById("errorime").innerHTML="";
	return true;
	}
	else {
	document.getElementById("errorime").innerHTML="Please enter a valid name.";
	return false;
	}
}

function odobriMail(){
	var email=document.getElementById("mejl").value;
	if(validirajEmail(email)){
	document.getElementById("errormail").innerHTML="";
	return true;
	}
	else {
		document.getElementById("errormail").innerHTML="Please enter a valid mail.";
		return false;
	}
}

function odobriTekst(){
	var tekst=document.getElementById("unosteksta").value;
	if(validirajTekst(tekst)){
	document.getElementById("errortekst").innerHTML="";
	return true;
	}
	else {
		document.getElementById("errortekst").innerHTML="Please include a message.";
		return false;
	}
}

function validirajEmail(email) {
 var re = /^[a-z\._0-9]+@[a-z]+\.[a-z]{2,4}$/;
 return re.test(email);
 }
 
 function validirajIme(ime)
{
	var re=/^[a-zšđčćž]+$/i;
	return re.test(ime);
    }

function validirajTekst(tekst)
{
	if(tekst=="" || tekst==null)
    return false;

    return true;
}



var drzavaValidirana = false;

function odobriDrzavu(){
	return(validirajDrzavu());
}

function validirajDrzavu(){
	var country=document.getElementById("country").value
	
	 
	var req=new XMLHttpRequest();

	req.onreadystatechange=function(){
		if(req.readyState==4 && req.status==200){
			var response=JSON.parse(req.responseText);
			document.getElementById("errordrzava").innerHTML="";
			document.getElementById("country").value=response[0].name;					
			drzavaValidirana=true;
			return true;
			
			
		}
		else if(req.status==404){
			document.getElementById("errordrzava").innerHTML="Please enter a valid name.";
			drzavaValidirana=false;
			return false;
		}
		
	}
	
	var url="https://restcountries.eu/rest/v1/name/"+country;
	req.open("GET",url,true);
	req.send();
}

function resetsve(){
	document.getElementById("errormail").innerHTML = "";
	document.getElementById("errorime").innerHTML = "";
	document.getElementById("errortekst").innerHTML="";
	document.getElementById("errordrzava").innerHTML="";
}





