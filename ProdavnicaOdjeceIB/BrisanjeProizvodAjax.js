function BrisanjeProizvoda()
{
	var id1=document.getElementById("IdProizvoda").value;
	id1 = encodeURIComponent(id1);

	var Proizvod={id:id1,naziv:"",opis:"",slika:"",kolicina:"",cijena:"",dostupnost:""};
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
  xmlhttp.send("akcija="+"brisanje"+"&proizvod="+Proizvodjson+ "&brindexa="+"16266");
}