//AJAX validacija 
function AjaxValidacija()
{
  var ispravnost=true;
  var mjesto = document.getElementById("Mjesto").value;
  var opcina=document.getElementById("Opcina").value;
  mjesto=encodeURIComponent(mjesto);
  opcina=encodeURIComponent(opcina);

var xmlhttp;
if (window.XMLHttpRequest)
  {
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    	var osoba=JSON.parse(xmlhttp.responseText);
    
        if(osoba.greska=="Nepostojeća općina")
        {
        
        	 ispravnost=false;
        	 alert("usao1");
             document.getElementById("GreskaOpcina").innerHTML=osoba.greska;
             document.getElementById("SlikaOpcina").style.display=block;
              document.getElementById("SlikaMjesto").style.display="none";
              document.getElementById("GreskaMjesto").innerHTML="";
            
        }
        if(osoba.greska=="Nepostojeće mjesto")
        {
        	
        	ispravnost=false;
        	alert("usao2");
            document.getElementById("GreskaMjesto").innerHTML=osoba.greska;
            document.getElementById("SlikaMjesto").style.display="block";
            document.getElementById("SlikaOpcina").style.display="none";
              document.getElementById("GreskaOpcina").innerHTML="";
        }
        if(osoba.greska=="Mjesto nije iz date općine")
        {
        	
        	 ispravnost=false;
        	 alert("usao3");
            document.getElementById("GreskaMjesto").innerHTML=osoba.greska;
             document.getElementById("SlikaMjesto").style.display=block;
            document.getElementById("GreskaOpcina").innerHTML="";
            document.getElementById("SlikaOpcina").style.display="none";
           
        }
        if(osoba.ok=="Mjesto je iz date općine")
        {
        	alert(ispravnost);
           document.getElementById("GreskaMjesto").innerHTML="";
            document.getElementById("GreskaOpcina").innerHTML="";
           document.getElementById("SlikaMjesto").style.display="none";
           document.getElementById("SlikaOpcina").style.display="none";

        }
    }
  }

  xmlhttp.open("GET","http://zamger.etf.unsa.ba/wt/mjesto_opcina.php?mjesto="+ mjesto +"&opcina=" +opcina,true);
  xmlhttp.send();
  return ispravnost;
}