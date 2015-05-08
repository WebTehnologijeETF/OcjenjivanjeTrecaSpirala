function IzmjenaProizvoda()
{
	var id1=document.getElementById("IdProizvoda").value;
	id1=encodeURIComponent(id1);

	var ispravnost=true;
	var naziv1=document.getElementById("NazivProizvoda").value;
	naziv1 = encodeURIComponent(naziv1);

	if(naziv1=="")
	{
		ispravnost=false;
		document.getElementById("GreskaNaziv1").innerHTML="Morate unijeti naziv komada odjeće.";
		document.getElementById("GreskaNaziv1").style.display="block";
	}
	if(naziv1!="")
	{
		document.getElementById("GreskaNaziv1").style.display="none";
	}

	var opis1=document.getElementById("OpisProizvoda").value;
	opis1 = encodeURIComponent(opis1);

	var slika1=document.getElementById("SlikaProizvoda").value;
	slika1 = encodeURIComponent(slika1);

	var kolicina1=document.getElementById("KolicinaProizvoda").value;
	kolicina1 = encodeURIComponent(kolicina1);
     
     if(Number(kolicina1)!=kolicina1 || kolicina1%1!=0 || kolicina1==0)
     {
   
     	ispravnost=false;
     	document.getElementById("GreskaKolicina1").innerHTML="Kolicina mora biti cijeli broj!";
     	document.getElementById("GreskaKolicina1").style.display="block";
     }
	if( Number(kolicina1)==kolicina1 && kolicina1%1==0 && kolicina1!=0)
	{
	
       document.getElementById("GreskaKolicina1").style.display="none";
	}

	var cijena1=document.getElementById("CijenaProizvoda").value;
	cijena1 = encodeURIComponent(cijena1);

	if(Number(cijena1)==cijena1 && cijena1%1!=0 && cijena1!=0.0)
	{
		
	    document.getElementById("GreskaCijena1").style.display="none";
	}
	if(Number(cijena1)!=cijena1 || cijena1%1==0 || cijena1==0.0)
	{
		
		ispravnost=false;
     	document.getElementById("GreskaCijena1").innerHTML="Cijena mora biti realan broj!";
     	document.getElementById("GreskaCijena1").style.display="block";
	}

	   var dostupnost1=document.getElementById("DostupnostProizvoda").value;
	   dostupnost1 = encodeURIComponent(dostupnost1);

     var stringic=dostupnost1.toString();
	  
    if(stringic.length==0)
    { 

    	ispravnost=false;
		document.getElementById("GreskaDostupnost1").innerHTML="Možete unijeti samo vrijednost 1 ili 0!";
		document.getElementById("GreskaDostupnost1").style.display="block";
    }
   
	if((dostupnost1!=1 && dostupnost1!=0))
	{
		ispravnost=false;
		document.getElementById("GreskaDostupnost1").innerHTML="Možete unijeti samo vrijednost 1 ili 0!";
		document.getElementById("GreskaDostupnost1").style.display="block";
	}

	if(dostupnost1==1 || dostupnost1==0 && stringic.length!=0)
	{
		document.getElementById("GreskaDostupnost1").style.display="none";
	}


	var Proizvod={id:id1,naziv:naziv1,opis:opis1,slika:slika1,kolicina:kolicina1,cijena:cijena1,dostupnost:dostupnost1};
	var Proizvodjson=JSON.stringify(Proizvod);
	var xmlhttp;

if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
      if(xmlhttp.status==404)
      {
      	document.getElementById("GreskaId").innerHTML="Nepostojeći id";
      	document.getElementById("GreskaId").style.display="block";
      }
      else
      {
      	document.getElementById("GreskaId").innerHTML="";
      }
  }

  xmlhttp.open("POST","http://zamger.etf.unsa.ba/wt/proizvodi.php?brindexa=",true);
  xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xmlhttp.send("akcija="+"promjena"+"&proizvod="+Proizvodjson+ "&brindexa="+"16266");
  return ispravnost;
}