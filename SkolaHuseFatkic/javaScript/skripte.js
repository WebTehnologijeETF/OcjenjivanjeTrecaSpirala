
function prikaziSakrij()
{	

	
	var a=document.getElementById("profiliMeni");
	var r=document.getElementById("Profili");
	
	if(a.classList.contains("hidden"))
	{
		a.style.visibility="visible";
		a.className="";
		
		r.innerHTML="▲ PROFILI";
		

	}
	else{
		a.className="hidden";
	r.innerHTML="▼ PROFILI";
	a.style.visibility="hidden";
	}
}

function validateLogin()
{
	
	var re = /^\w{3,30}@husefatkic\.ba$/;

	var mail=document.forms["loginForma"]["email"].value;
	var pass=document.forms["loginForma"]["lozinka"].value;
	
	if(mail=="" || pass=="")
	{
			alert("Unesite podatke za prijavu");
			return false;
	}
	if(!mail.match(re))
	{
		alert("Neispravan mail, format je: nesto@husefatkic.ba ");
		document.forms["loginForma"]["email"].style.border="thin solid #CC0000";
		return false;
	}


}

function validateRegistration(event)
{


	var ime=document.forms["regForma"]["ime"].value;
	var prezime=document.forms["regForma"]["prezime"].value;
	var email=document.forms["regForma"]["email"].value;
	var lozinka=document.forms["regForma"]["lozinka"].value;
	var mjesto=document.forms["regForma"]["mjesto"].value;
	var opcina=document.forms["regForma"]["opcina"].value;
	var i=0;
	if(ime=="")
	{
		document.forms["regForma"]["ime"].style.border="thin solid #CC0000";
		document.getElementById("greskaIme").style.display="block";
		document.getElementById("greskaIme").innerHTML="Unesite ime";
		i++;
	}
	else
	{
		document.getElementById("greskaIme").style.display="none";
		document.getElementById("greskaIme").innerHTML="";
	}
	if(prezime=="")
	{
		document.forms["regForma"]["prezime"].style.border="thin solid #CC0000";
		document.getElementById("greskaPrezime").style.display="block";
		document.getElementById("greskaPrezime").innerHTML="Unesite Prezime";
		i++;
	}
	else
	{
		document.getElementById("greskaPrezime").style.display="none";
		document.getElementById("greskaPrezime").innerHTML="";
	}
	if(email=="")
	{
		document.forms["regForma"]["email"].style.border="thin solid #CC0000";
		document.getElementById("greskaEmail").style.display="block";
		document.getElementById("greskaEmail").innerHTML="Unesite Email";
		i++;
	}
	else
	{
		document.getElementById("greskaEmail").style.display="none";
		document.getElementById("greskaEmail").innerHTML="";
	}
	if(lozinka=="")
	{
		document.forms["regForma"]["lozinka"].style.border="thin solid #CC0000";
		document.getElementById("greskaLozinka").style.display="block";
		document.getElementById("greskaLozinka").innerHTML="Unesite Lozinku";
		i++;
	}
	else
	{
		document.getElementById("greskaLozinka").style.display="none";
		document.getElementById("greskaLozinka").innerHTML="";
	}
	if(opcina=="")
	{
		document.forms["regForma"]["opcina"].style.border="thin solid #CC0000";
		document.getElementById("greskaOpcina").style.display="block";
		document.getElementById("greskaOpcina").innerHTML="Unesite općinu";
		i++;
	}
	else
	{
		document.getElementById("greskaOpcina").style.display="none";
		document.getElementById("greskaOpcina").innerHTML="";
	}
	if(mjesto=="")
	{
		document.forms["regForma"]["mjesto"].style.border="thin solid #CC0000";
		document.getElementById("greskaMjesto").style.display="block";
		document.getElementById("greskaMjesto").innerHTML="Unesite mjesto";
		i++;
	}
	else
	{
		document.getElementById("greskaMjesto").style.display="none";
		document.getElementById("greskaMjesto").innerHTML="";
	}
	
	
	//cross validacija-> lozinka ne moze sadrzavati ime  ili prezime

	if(lozinka!="" && (lozinka.indexOf(ime)!=-1 || lozinka.indexOf(prezime)!=-1))
	{
		document.forms["regForma"]["lozinka"].style.border="thin solid #CC0000";
		document.getElementById("greskaLozinka").style.display="block";
		document.getElementById("greskaLozinka").innerHTML="Lozinka ne može sadrzavati vaše ime ili prezime";
		i++;
	}
	

	var re = /^\w{3,30}@husefatkic\.ba$/;
	if(email!="" && !email.match(re))
	{
		document.forms["regForma"]["email"].style.border="thin solid #CC0000";
		document.getElementById("greskaEmail").style.display="block";
		document.getElementById("greskaEmail").innerHTML="Email mora biti u formatu nešto@husefatkic.ba";
		i++;
	}
	if(i>0) return false;

	//ajax validacija opcine i mjesta


	var ajax=new XMLHttpRequest();
	
	 ajax.onreadystatechange=function(){

		 if(ajax.readyState == 4 && ajax.status == 200)
		{
			
			 var pom=JSON.parse(ajax.responseText);
			if(pom.hasOwnProperty("greska"))
			{
				document.getElementById("greskaMjesto").style.display="block";
				document.getElementById("greskaMjesto").innerHTML=pom.greska;
				return false;
			}
			else if(pom.hasOwnProperty("ok"))
			{
				document.getElementById("greskaMjesto").innerHTML="";
				document.forms["regForma"].submit();
			}
			           
		}
	}
   
	var o=document.regForma.opcina.value;

	var	m=document.regForma.mjesto.value;
	
	var url = 'http://zamger.etf.unsa.ba/wt/mjesto_opcina.php?opcina='+o+'&mjesto='+m;
	ajax.open("GET",url,true);
	ajax.send();
}