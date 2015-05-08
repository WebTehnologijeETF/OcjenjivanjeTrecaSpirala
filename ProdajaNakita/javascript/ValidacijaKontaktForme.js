
function prikazi(txt)
{
	if(txt.id==="greska_ime"){
		document.getElementById("poruka_ime").style.visibility="visible";
	}
	if(txt.id==="greska_prezime"){
		document.getElementById("poruka_prezime").style.visibility="visible";
	}
	if(txt.id==="greska_email"){
		document.getElementById("poruka_email").style.visibility="visible";
	}
	if(txt.id==="greska_komentar"){
		document.getElementById("poruka_komentar").style.visibility="visible";
	}
}

function sakrij(txt)
{

if(txt.id==="greska_ime" || txt.id==="greska_prezime" || txt.id==="greska_email" || txt.id==="greska_komentar"){

		document.getElementById("poruka_ime").style.visibility="hidden";
		document.getElementById("poruka_prezime").style.visibility="hidden";
		document.getElementById("poruka_email").style.visibility="hidden";
		document.getElementById("poruka_komentar").style.visibility="hidden";
		
	}

}
	


function validateName() {

  var name = document.getElementById('ime').value;

  if(name.length == 0) {
document.getElementById("greska_ime").className="greska";
	    return false;
  }

  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
  document.getElementById("greska_ime").className="greska";		
    return false;
  }
document.getElementById("greska_ime").className="greska_invisible";	
  return true;
}


function validateEmail () {

  var email = document.getElementById('email').value;

  if(email.length == 0) {
document.getElementById("greska_email").className="greska";
    return false;

  }

  if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {

 document.getElementById("greska_email").className="greska";
    return false;

  }

document.getElementById("greska_email").className="greska_invisible";	
  return true;

}

function validateMessage() {
  var message = document.getElementById('komentar').value;
  var required = 10;
  var left = required - message.length;

  if (left > 0) {
 document.getElementById("greska_komentar").className="greska";
    return false;
  }
if(message.length==0)
{
	document.getElementById("greska_komentar").className="greska";
    return false;
	
}
document.getElementById("greska_komentar").className="greska_invisible";	
  return true;

}

function validateForm() {
    if ((!validateName() && !validateLastname() && !validateEmail() && !validateMessage())||(!validateName() || !validateLastname() || !validateEmail() || !validateMessage())) {
       
        producePrompt('Ispravite greške.', 'poruka_button', 'red');
        setTimeout(function(){jsHide('poruka_button');}, 2000);
        return false;
    }
	alert("Ispunili ste formu ispravno!");
	return true;
}


function validateLastname() {

  var lastname = document.getElementById('prezime').value;

  if(lastname.length == 0) {
	  

	document.getElementById("greska_prezime").className="greska";
		

    return false;

  }

  if (!lastname.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {

    	document.getElementById("greska_prezime").className="greska";

	return false;

  }
  document.getElementById("greska_prezime").className="greska_invisible";


  return true;

}

function jsShow(id) {
  document.getElementById(id).style.display = 'block';
}

function jsHide(id) {
  document.getElementById(id).style.display = 'none';
}




function producePrompt(message, promptLocation, color) {

  document.getElementById(promptLocation).innerHTML = message;
  document.getElementById(promptLocation).style.color = color;


}



