function Prikazi_error(tekst)
{
	document.getElementById("error").innerHTML=tekst;
}
function AboutUs() {
	var ajax;
	if (window.XMLHttpRequest)
	  {//code for IE7+, Firefox, Chrome, Opera, Safari
	  ajax=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  ajax=new ActiveXObject("Microsoft.XMLHTTP");
	  }	
	ajax.onreadystatechange = function() {// Anonimna funkcija

		if (ajax.readyState == 4 && ajax.status == 200)
			document.getElementById("DinamickiDio").innerHTML = ajax.responseText;
		if (ajax.readyState == 4 && ajax.status == 404)
			document.getElementById("DinamickiDio").innerHTML = "Greska: nepoznat URL";
	};
	ajax.open("GET", "AboutUs.html", true);
	ajax.send();
}
function GetInvolved() {
	var ajax;
	if (window.XMLHttpRequest)
	  {//code for IE7+, Firefox, Chrome, Opera, Safari
	  ajax=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  ajax=new ActiveXObject("Microsoft.XMLHTTP");
	  }	
	ajax.onreadystatechange = function() {// Anonimna funkcija

		if (ajax.readyState == 4 && ajax.status == 200)
			document.getElementById("DinamickiDio").innerHTML = ajax.responseText;
		if (ajax.readyState == 4 && ajax.status == 404)
			document.getElementById("DinamickiDio").innerHTML = "Greska: nepoznat URL";
	};
	ajax.open("GET", "Get_involved.html", true);
	ajax.send();
}
function GetInvolved1() {
	var ajax;
	if (window.XMLHttpRequest)
	  {//code for IE7+, Firefox, Chrome, Opera, Safari
	  ajax=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  ajax=new ActiveXObject("Microsoft.XMLHTTP");
	  }	
	ajax.onreadystatechange = function() {// Anonimna funkcija

		if (ajax.readyState == 4 && ajax.status == 200)
			document.getElementById("DinamickiDio").innerHTML = ajax.responseText;
		if (ajax.readyState == 4 && ajax.status == 404)
			document.getElementById("DinamickiDio").innerHTML = "Greska: nepoznat URL";
	};
	ajax.open("GET", "Get_involved1.html", true);
	ajax.send();
}
function GetInvolved2() {
	var ajax;
	if (window.XMLHttpRequest)
	  {//code for IE7+, Firefox, Chrome, Opera, Safari
	  ajax=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  ajax=new ActiveXObject("Microsoft.XMLHTTP");
	  }	
	ajax.onreadystatechange = function() {// Anonimna funkcija

		if (ajax.readyState == 4 && ajax.status == 200)
			document.getElementById("DinamickiDio").innerHTML = ajax.responseText;
		if (ajax.readyState == 4 && ajax.status == 404)
			document.getElementById("DinamickiDio").innerHTML = "Greska: nepoznat URL";
	};
	ajax.open("GET", "Get_involved2.html", true);
	ajax.send();
}
function SuccessStories() {
	
	var ajax;
	if (window.XMLHttpRequest)
	  {//code for IE7+, Firefox, Chrome, Opera, Safari
	  ajax=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  ajax=new ActiveXObject("Microsoft.XMLHTTP");
	  }	
	ajax.onreadystatechange = function() {// Anonimna funkcija

		if (ajax.readyState == 4 && ajax.status == 200)
			document.getElementById("DinamickiDio").innerHTML = ajax.responseText;
		if (ajax.readyState == 4 && ajax.status == 404)
			document.getElementById("DinamickiDio").innerHTML = "Greska: nepoznat URL";
	};
	ajax.open("GET", "Success_stories.html", true);
	ajax.send();
	Ucitaj();
}
function Ucitaj() {
	var ajax;
	if (window.XMLHttpRequest)
	  {//code for IE7+, Firefox, Chrome, Opera, Safari
	  ajax=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  ajax=new ActiveXObject("Microsoft.XMLHTTP");
	  }	
	ajax.onreadystatechange = function() {// Anonimna funkcija

		if (ajax.readyState == 4 && ajax.status == 200)
			{//document.getElementById("Predmeti").innerHTML = ajax.responseText;
			var proizvod=JSON.parse(ajax.responseText);
			for(i=0;i<proizvod.length;i++){
				var naziv=proizvod[i].naziv;
				var url=proizvod[i].url;
				var opis=proizvod[i].opis;
			document.getElementById("Predmeti").innerHTML=document.getElementById("Predmeti").innerHTML + 
			

			"<li class="+"novosti_lista"+">"+naziv+"<a class="+"a_novosti"+" ><img class="+"predmeti_slika"+" src="+url+" alt="+"nesto"+"> </a> Opis:"+opis+" </li> ;"
		}
	}
		if (ajax.readyState == 4 && ajax.status == 404)
			document.getElementById("Predmeti").innerHTML = "Greska: nepoznat URL";
	};
	ajax.open("GET", "http://zamger.etf.unsa.ba/wt/proizvodi.php?brindexa="+"16270", true);
	ajax.send();
}
function ContactForm() {
	var ajax;
	if (window.XMLHttpRequest)
	  {//code for IE7+, Firefox, Chrome, Opera, Safari
	  ajax=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  ajax=new ActiveXObject("Microsoft.XMLHTTP");
	  }	
	ajax.onreadystatechange = function() {// Anonimna funkcija

		if (ajax.readyState == 4 && ajax.status == 200)
			document.getElementById("DinamickiDio").innerHTML = ajax.responseText;
		if (ajax.readyState == 4 && ajax.status == 404)
			document.getElementById("DinamickiDio").innerHTML = "Greska: nepoznat URL";
	};
	ajax.open("GET", "Contact_form.html", true);
	ajax.send();
}
function Animals() {
	var ajax;
	if (window.XMLHttpRequest)
	  {//code for IE7+, Firefox, Chrome, Opera, Safari
	  ajax=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  ajax=new ActiveXObject("Microsoft.XMLHTTP");
	  }	
	ajax.onreadystatechange = function() {// Anonimna funkcija

		if (ajax.readyState == 4 && ajax.status == 200)
			document.getElementById("Naslov").innerHTML = ajax.responseText;
		if (ajax.readyState == 4 && ajax.status == 404)
			document.getElementById("Naslov").innerHTML = "Greska: nepoznat URL";
	};
	ajax.open("GET", "Animals.html", true);
	ajax.send();
}
function Charity() {
	var ajax;
	if (window.XMLHttpRequest)
	  {//code for IE7+, Firefox, Chrome, Opera, Safari
	  ajax=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  ajax=new ActiveXObject("Microsoft.XMLHTTP");
	  }	
	ajax.onreadystatechange = function() {// Anonimna funkcija

		if (ajax.readyState == 4 && ajax.status == 200)
			document.getElementById("Naslov").innerHTML = ajax.responseText;
		if (ajax.readyState == 4 && ajax.status == 404)
			document.getElementById("Naslov").innerHTML = "Greska: nepoznat URL";
	};
	ajax.open("GET", "Charity.html", true);
	ajax.send();
}
function EducationCompetitions() {
	var ajax;
	if (window.XMLHttpRequest)
	  {//code for IE7+, Firefox, Chrome, Opera, Safari
	  ajax=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  ajax=new ActiveXObject("Microsoft.XMLHTTP");
	  }	
	ajax.onreadystatechange = function() {// Anonimna funkcija

		if (ajax.readyState == 4 && ajax.status == 200)
			document.getElementById("Naslov").innerHTML = ajax.responseText;
		if (ajax.readyState == 4 && ajax.status == 404)
			document.getElementById("Naslov").innerHTML = "Greska: nepoznat URL";
	};
	ajax.open("GET", "Education_competitions.html", true);
	ajax.send();
}
function EducationScolarship() {
	var ajax;
	if (window.XMLHttpRequest)
	  {//code for IE7+, Firefox, Chrome, Opera, Safari
	  ajax=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  ajax=new ActiveXObject("Microsoft.XMLHTTP");
	  }	
	ajax.onreadystatechange = function() {// Anonimna funkcija

		if (ajax.readyState == 4 && ajax.status == 200)
			document.getElementById("Naslov").innerHTML = ajax.responseText;
		if (ajax.readyState == 4 && ajax.status == 404)
			document.getElementById("Naslov").innerHTML = "Greska: nepoznat URL";
	};
	ajax.open("GET", "Education_scolarship.html", true);
	ajax.send();
}
function MedicalSurgery() {
	var ajax;
	if (window.XMLHttpRequest)
	  {//code for IE7+, Firefox, Chrome, Opera, Safari
	  ajax=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  ajax=new ActiveXObject("Microsoft.XMLHTTP");
	  }	
	ajax.onreadystatechange = function() {// Anonimna funkcija

		if (ajax.readyState == 4 && ajax.status == 200)
			document.getElementById("Naslov").innerHTML = ajax.responseText;
		if (ajax.readyState == 4 && ajax.status == 404)
			document.getElementById("Naslov").innerHTML = "Greska: nepoznat URL";
	};
	ajax.open("GET", "Medical_Surgery.html", true);
	ajax.send();
}
function MedicalTreatment() {
	var ajax;
	if (window.XMLHttpRequest)
	  {//code for IE7+, Firefox, Chrome, Opera, Safari
	  ajax=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  ajax=new ActiveXObject("Microsoft.XMLHTTP");
	  }	
	ajax.onreadystatechange = function() {// Anonimna funkcija

		if (ajax.readyState == 4 && ajax.status == 200)
			document.getElementById("Naslov").innerHTML = ajax.responseText;
		if (ajax.readyState == 4 && ajax.status == 404)
			document.getElementById("Naslov").innerHTML = "Greska: nepoznat URL";
	};
	ajax.open("GET", "Medical_Treatment.html", true);
	ajax.send();
}
function SportCompetitions() {
	var ajax;
	if (window.XMLHttpRequest)
	  {//code for IE7+, Firefox, Chrome, Opera, Safari
	  ajax=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  ajax=new ActiveXObject("Microsoft.XMLHTTP");
	  }	
	ajax.onreadystatechange = function() {// Anonimna funkcija

		if (ajax.readyState == 4 && ajax.status == 200)
			document.getElementById("Naslov").innerHTML = ajax.responseText;
		if (ajax.readyState == 4 && ajax.status == 404)
			document.getElementById("Naslov").innerHTML = "Greska: nepoznat URL";
	};
	ajax.open("GET", "Sport_Competitions.html", true);
	ajax.send();
}
function SportTournaments() {
	var ajax;
	if (window.XMLHttpRequest)
	  {//code for IE7+, Firefox, Chrome, Opera, Safari
	  ajax=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  ajax=new ActiveXObject("Microsoft.XMLHTTP");
	  }	
	ajax.onreadystatechange = function() {// Anonimna funkcija

		if (ajax.readyState == 4 && ajax.status == 200)
			document.getElementById("Naslov").innerHTML = ajax.responseText;
		if (ajax.readyState == 4 && ajax.status == 404)
			document.getElementById("Naslov").innerHTML = "Greska: nepoznat URL";
	};
	ajax.open("GET", "Sport_Toournaments.html", true);
	ajax.send();
}
function WishesTravel() {
	var ajax;
	if (window.XMLHttpRequest)
	  {//code for IE7+, Firefox, Chrome, Opera, Safari
	  ajax=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  ajax=new ActiveXObject("Microsoft.XMLHTTP");
	  }	
	ajax.onreadystatechange = function() {// Anonimna funkcija

		if (ajax.readyState == 4 && ajax.status == 200)
			document.getElementById("Naslov").innerHTML = ajax.responseText;
		if (ajax.readyState == 4 && ajax.status == 404)
			document.getElementById("Naslov").innerHTML = "Greska: nepoznat URL";
	};
	ajax.open("GET", "Wishes_Travel.html", true);
	ajax.send();
}
function WishesFamily() {
	var ajax;
	if (window.XMLHttpRequest)
	  {//code for IE7+, Firefox, Chrome, Opera, Safari
	  ajax=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  ajax=new ActiveXObject("Microsoft.XMLHTTP");
	  }	
	ajax.onreadystatechange = function() {// Anonimna funkcija

		if (ajax.readyState == 4 && ajax.status == 200)
			document.getElementById("Naslov").innerHTML = ajax.responseText;
		if (ajax.readyState == 4 && ajax.status == 404)
			document.getElementById("Naslov").innerHTML = "Greska: nepoznat URL";
	};
	ajax.open("GET", "Wishes_Family.html", true);
	ajax.send();
}
function WishesCreative() {
	var ajax;
	if (window.XMLHttpRequest)
	  {//code for IE7+, Firefox, Chrome, Opera, Safari
	  ajax=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  ajax=new ActiveXObject("Microsoft.XMLHTTP");
	  }	
	ajax.onreadystatechange = function() {// Anonimna funkcija

		if (ajax.readyState == 4 && ajax.status == 200)
			document.getElementById("Naslov").innerHTML = ajax.responseText;
		if (ajax.readyState == 4 && ajax.status == 404)
			document.getElementById("Naslov").innerHTML = "Greska: nepoznat URL";
	};
	ajax.open("GET", "Wishes_Creative.html", true);
	ajax.send();
}
function WishesEvents() {
	var ajax;
	if (window.XMLHttpRequest)
	  {//code for IE7+, Firefox, Chrome, Opera, Safari
	  ajax=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  ajax=new ActiveXObject("Microsoft.XMLHTTP");
	  }	
	ajax.onreadystatechange = function() {// Anonimna funkcija

		if (ajax.readyState == 4 && ajax.status == 200)
			document.getElementById("Naslov").innerHTML = ajax.responseText;
		if (ajax.readyState == 4 && ajax.status == 404)
			document.getElementById("Naslov").innerHTML = "Greska: nepoznat URL";
	};
	ajax.open("GET", "Wishes_Events.html", true);
	ajax.send();
}
function Other() {
	var ajax;
	if (window.XMLHttpRequest)
	  {//code for IE7+, Firefox, Chrome, Opera, Safari
	  ajax=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  ajax=new ActiveXObject("Microsoft.XMLHTTP");
	  }	
	ajax.onreadystatechange = function() {// Anonimna funkcija

		if (ajax.readyState == 4 && ajax.status == 200)
			document.getElementById("Naslov").innerHTML = ajax.responseText;
		if (ajax.readyState == 4 && ajax.status == 404)
			document.getElementById("Naslov").innerHTML = "Greska: nepoznat URL";
	};
	ajax.open("GET", "Other.html", true);
	ajax.send();
}
function MostRecent() {
	var ajax;
	if (window.XMLHttpRequest)
	  {//code for IE7+, Firefox, Chrome, Opera, Safari
	  ajax=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  ajax=new ActiveXObject("Microsoft.XMLHTTP");
	  }	
	ajax.onreadystatechange = function() {// Anonimna funkcija

		if (ajax.readyState == 4 && ajax.status == 200)
			document.getElementById("Naslov").innerHTML = ajax.responseText;
		if (ajax.readyState == 4 && ajax.status == 404)
			document.getElementById("Naslov").innerHTML = "Greska: nepoznat URL";
	};
	ajax.open("GET", "MostRecent.html", true);
	ajax.send();
}
function EducationCreative() {
	var ajax;
	if (window.XMLHttpRequest)
	  {//code for IE7+, Firefox, Chrome, Opera, Safari
	  ajax=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  ajax=new ActiveXObject("Microsoft.XMLHTTP");
	  }	
	ajax.onreadystatechange = function() {// Anonimna funkcija

		if (ajax.readyState == 4 && ajax.status == 200)
			document.getElementById("Naslov").innerHTML = ajax.responseText;
		if (ajax.readyState == 4 && ajax.status == 404)
			document.getElementById("Naslov").innerHTML = "Greska: nepoznat URL";
	};
	ajax.open("GET", "Education_creative.html", true);
	ajax.send();
}
function PozoviBrisanje(){
	var ajax;
	if (window.XMLHttpRequest)
	  {//code for IE7+, Firefox, Chrome, Opera, Safari
	  ajax=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  ajax=new ActiveXObject("Microsoft.XMLHTTP");
	  }	
	ajax.onreadystatechange = function() {// Anonimna funkcija

		if (ajax.readyState == 4 && ajax.status == 200)
			document.getElementById("Promjena").innerHTML = ajax.responseText;
		if (ajax.readyState == 4 && ajax.status == 404)
			document.getElementById("Promjena").innerHTML = "Greska: nepoznat URL";
	};
	ajax.open("GET", "Brisanje_proizvoda.html", true);
	ajax.send();
}
function PozoviModifikaciju(){
	var ajax;
	if (window.XMLHttpRequest)
	  {//code for IE7+, Firefox, Chrome, Opera, Safari
	  ajax=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  ajax=new ActiveXObject("Microsoft.XMLHTTP");
	  }	
	ajax.onreadystatechange = function() {// Anonimna funkcija

		if (ajax.readyState == 4 && ajax.status == 200)
			document.getElementById("Promjena").innerHTML = ajax.responseText;
		if (ajax.readyState == 4 && ajax.status == 404)
			document.getElementById("Promjena").innerHTML = "Greska: nepoznat URL";
	};
	ajax.open("GET", "ModifikacijaProizvoda..html", true);
	ajax.send();
}
function PozoviDodavanje(){
	var ajax;
	if (window.XMLHttpRequest)
	  {//code for IE7+, Firefox, Chrome, Opera, Safari
	  ajax=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  ajax=new ActiveXObject("Microsoft.XMLHTTP");
	  }	
	ajax.onreadystatechange = function() {// Anonimna funkcija

		if (ajax.readyState == 4 && ajax.status == 200)
			document.getElementById("Promjena").innerHTML = ajax.responseText;
		if (ajax.readyState == 4 && ajax.status == 404)
			document.getElementById("Promjena").innerHTML = "Greska: nepoznat URL";
	};
	ajax.open("GET", "Dodavanje_proizvoda.html", true);
	ajax.send();
}
function Validacija_forme_brisanje_proizvoda(){

		
		var idProizvoda=document.getElementById("id_proizvoda");
		var ajax;
	if (window.XMLHttpRequest)
	  {//code for IE7+, Firefox, Chrome, Opera, Safari
	  ajax=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  ajax=new ActiveXObject("Microsoft.XMLHTTP");
	  }	
		idProizvoda = encodeURIComponent(idProizvoda.value);
		var Proizvod={id:idProizvoda,student:"",naziv:"",opis:"",slika:"",url:"",kolicina:"",cijena:"",dostupnost:"",kategorija:"",ocjena:""};
		var Proizvodjson=JSON.stringify(Proizvod);
		

		ajax.onreadystatechange = function() {};
		ajax.open("POST","http://zamger.etf.unsa.ba/wt/proizvodi.php?brindexa=",true);
		ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		ajax.send("akcija="+"brisanje"+"&proizvod="+Proizvodjson+"&brindexa="+"16270");
 		document.forms.submit();
		return true;

}
function Validacija_forme_modificiranje_proizvoda(){
	var idProizvoda=document.getElementById("id_proizvoda");
	var naziv1=document.getElementById("naziv");
	var url1=document.getElementById("url_slike");
	var opis1=document.getElementById("opis");
	idProizvoda = encodeURIComponent(idProizvoda.value);
	var visnaziv=0
	var visurl=0
	var visopis=0;
	if(naziv1.value==""|| naziv1.value==null)
	{
		document.getElementById("naziv-slika").style.visibility="visible";
		document.getElementById("error_naziv").innerHTML="Unesite naziv proizovoda!";
		visnaziv=1;
	}
	else
	{
		document.getElementById("naziv-slika").style.visibility="hidden";
		document.getElementById("error_naziv").innerHTML="";
		visnaziv=0;
	}

	if(url1.value==""|| url1.value==null)
	{
		document.getElementById("url-slika").style.visibility="visible";
		document.getElementById("error_url").innerHTML="Unesite url proizvoda!";
		visurl=1;
	}
	else
	{
		document.getElementById("url-slika").style.visibility="hidden";
		document.getElementById("error_url").innerHTML="";
		visurl=0;
	}

	if(opis1.value==""|| opis1.value==null)
	{
		document.getElementById("opis-slika").style.visibility="visible";
		document.getElementById("error_opis").innerHTML="Unesite opis proizvoda!";
		visopis=1;
	}
	else
	{
		document.getElementById("opis-slika").style.visibility="hidden";
		document.getElementById("error_opis").innerHTML="";
		visopis=0;
	}

	
	
 	if(visnaziv==0 && visurl==0 && visopis==0)
 	{

 		var ajax;
	if (window.XMLHttpRequest)
	  {//code for IE7+, Firefox, Chrome, Opera, Safari
	  ajax=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  ajax=new ActiveXObject("Microsoft.XMLHTTP");
	  }	
		naziv1 = encodeURIComponent(naziv1.value);
		url1 = encodeURIComponent(url1.value);
		opis1 = encodeURIComponent(opis1.value);
		var Proizvod={id:idProizvoda,student:"",naziv:naziv1,opis:opis1,slika:"",url:url1,kolicina:"",cijena:"",dostupnost:"",kategorija:"",ocjena:""};
		var Proizvodjson=JSON.stringify(Proizvod);
		
		ajax.onreadystatechange = function() {};
		ajax.open("POST","http://zamger.etf.unsa.ba/wt/proizvodi.php?brindexa=",true);
		ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		ajax.send("akcija="+"promjenas"+"&proizvod="+Proizvodjson+ "&brindexa="+"16270");
		
		document.forms.submit();
		return true;
 	}


}
function Validacija_forme_dodavanje_proizvoda() {
	var naziv1=document.getElementById("naziv");
	var url1=document.getElementById("url_slike");
	var opis1=document.getElementById("opis");
	var visnaziv=0
	var visurl=0
	var visopis=0;
	if(naziv1.value==""|| naziv1.value==null)
	{
		document.getElementById("naziv-slika").style.visibility="visible";
		document.getElementById("error_naziv").innerHTML="Unesite naziv proizovoda!";
		visnaziv=1;
	}
	else
	{
		document.getElementById("naziv-slika").style.visibility="hidden";
		document.getElementById("error_naziv").innerHTML="";
		visnaziv=0;
	}

	if(url1.value==""|| url1.value==null)
	{
		document.getElementById("url-slika").style.visibility="visible";
		document.getElementById("error_url").innerHTML="Unesite url proizvoda!";
		visurl=1;
	}
	else
	{
		document.getElementById("url-slika").style.visibility="hidden";
		document.getElementById("error_url").innerHTML="";
		visurl=0;
	}

	if(opis1.value==""|| opis1.value==null)
	{
		document.getElementById("opis-slika").style.visibility="visible";
		document.getElementById("error_opis").innerHTML="Unesite opis proizvoda!";
		visopis=1;
	}
	else
	{
		document.getElementById("opis-slika").style.visibility="hidden";
		document.getElementById("error_opis").innerHTML="";
		visopis=0;
	}

	
	
 	if(visnaziv==0 && visurl==0 && visopis==0)
 	{

 		var ajax;
	if (window.XMLHttpRequest)
	  {//code for IE7+, Firefox, Chrome, Opera, Safari
	  ajax=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  ajax=new ActiveXObject("Microsoft.XMLHTTP");
	  }	
		naziv1 = encodeURIComponent(naziv1.value);
		url1 = encodeURIComponent(url1.value);
		opis1 = encodeURIComponent(opis1.value);
		var Proizvod={naziv:naziv1,opis:opis1,url:url1};
		var Proizvodjson=JSON.stringify(Proizvod);
		
		ajax.onreadystatechange = function() {};
		ajax.open("POST","http://zamger.etf.unsa.ba/wt/proizvodi.php?brindexa=",true);
		ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		ajax.send("akcija="+"dodavanje"+"&proizvod="+Proizvodjson+ "&brindexa="+"16270");
		
		document.forms.submit();
		return true;
 	}



}
function Validacija_forme()
{	
	
	var email=document.getElementById("email");
	var township=document.getElementById("township");
	var location=document.getElementById("location");
	var tekst=document.getElementById("text");
	var tel=document.getElementById("tel");
	var visemail=0;
	var vistel=0;
	var vistext=0;
	var visweb=0;
	var telRegex=/^\(?(\d{3})\)?[-]?(\d{3})[-]?(\d{4})$/;
	var visopcina=0;
	var ajax;
	if (window.XMLHttpRequest)
	  {//code for IE7+, Firefox, Chrome, Opera, Safari
	  ajax=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  ajax=new ActiveXObject("Microsoft.XMLHTTP");
	  }	
	var township=document.getElementById("township").value;
	township = encodeURIComponent(township);
	var location=document.getElementById("location").value;
	location = encodeURIComponent(location);
	ajax.onreadystatechange = function() {// Anonimna funkcija

		if (ajax.readyState == 4 && ajax.status == 200)
			{
				var parseAjax=JSON.parse(ajax.responseText);
				if(parseAjax.greska=="Mjesto nije iz date općine" || parseAjax.greska=="Nepostojeće mjesto" || parseAjax.greska=="Nepostojeća općina")
				{
					document.getElementById("location-slika").style.visibility="visible";
					document.getElementById("error_location").innerHTML = parseAjax.greska;
					visopcina=1
				}
				else
				{
					document.getElementById("location-slika").style.visibility="hidden";
					document.getElementById("error_location").innerHTML ="";
					visopcina=0;
				}
				
			}
		if (ajax.readyState == 4 && ajax.status == 404)
			document.getElementById("error_township").innerHTML = "Greska: nepoznat URL";
		
	};
	ajax.open("GET", "http://zamger.etf.unsa.ba/wt/mjesto_opcina.php?opcina="+township+"&mjesto="+location, true);
	ajax.send();

	if(email.value==""|| email.value==null)
	{
		document.getElementById("email-slika").style.visibility="visible";
		document.getElementById("error_email").innerHTML="Please enter e-mail address!";
		visemail=1;
	}
	else
	{
		document.getElementById("email-slika").style.visibility="hidden";
		document.getElementById("error_email").innerHTML="";
		visemail=0;
	}
	if(tel.value=="" || tel.value==null )
	{
		document.getElementById("tel-slika").style.visibility="visible";
		document.getElementById("error_tel").innerHTML="Please enter a 10 digit number!";
		vistel=1;
	}
	else if(!telRegex.test(document.getElementById('tel').value))
	{
		document.getElementById("tel-slika").style.visibility="visible";
		document.getElementById("error_tel").innerHTML="Please enter a 10 digit number in format '999-999-9999' or '9999999999'!";  
		vistel=1;
	}
	else
	{
		document.getElementById("tel-slika").style.visibility="hidden";
		document.getElementById("error_tel").innerHTML="";
		vistel=0;
	}
	if(web.value==""|| web.value==null)
	{
		document.getElementById("web-slika").style.visibility="visible";
		document.getElementById("error_tel").innerHTML="Please enter 10 digit number address or website!";
		visweb=1;
	}
	else
	{
		document.getElementById("web-slika").style.visibility="hidden";
		document.getElementById("error_tel").innerHTML="";
		visweb=0;
	}
	if(text.value=="" || text.value==null)
	{
		document.getElementById("text-slika").style.visibility="visible";
		document.getElementById("error_text").innerHTML="Please enter your message!";
		vistext=1;
	}
	else
	{
		document.getElementById("text-slika").style.visibility="hidden";
		document.getElementById("error_text").innerHTML="";
		vistext=0;
	}
	if (visweb==0 && vistel==1)
	{
		document.getElementById("tel-slika").style.visibility="hidden";
		document.getElementById("error_tel").innerHTML="";
		vistel=0;

	}
	else if(vistel==0 && visweb==1)
	{
		document.getElementById("web-slika").style.visibility="hidden";
		document.getElementById("error_tel").innerHTML="";
		visemail=0;
	}


	

 	if(vistext==0 && vistel==0 && visemail==0 && visopcina==0)
 	{
 		document.forms.submit();
		return true;
 	}
}