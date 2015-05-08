function Radi(){

   document.getElementById("ImeGreska").style.display="none";
   document.getElementById("PrezimeGreska").style.display="none";
   document.getElementById("GreskaEmail").style.display="none";
   document.getElementById("PrimjedbaGreska").style.display="none";
}
function ValidacijaForme()
{
	var regex=/^([^0-9]*)$/;
	var mail=document.Forma.email.value;
	var ludoa=mail.indexOf("@");
	var tacka=mail.lastIndexOf(".");
	var ispravnost1=true;
	var ispravnost=0;
	var usao=0;
	var pomocnaime=document.Forma.Ime.value.search(regex);
	var pomocnaprezime=document.Forma.Prezime.value.search(regex);

	//AJAX validacija 

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
    	
    	usao=1;
    	var osoba=JSON.parse(xmlhttp.responseText);
    
        if(osoba.greska=="Nepostojeća općina")
        {
        
        	 ispravnost=1;
        	 
             document.getElementById("GreskaOpcina").innerHTML=osoba.greska;
             document.getElementById("SlikaOpcina").style.display=block;
              document.getElementById("SlikaMjesto").style.display="none";
              document.getElementById("GreskaMjesto").innerHTML="";
            
        }
        if(osoba.greska=="Nepostojeće mjesto")
        {
        	
        	ispravnost=1;
        	
            document.getElementById("GreskaMjesto").innerHTML=osoba.greska;
            document.getElementById("SlikaMjesto").style.display="block";
            document.getElementById("SlikaOpcina").style.display="none";
              document.getElementById("GreskaOpcina").innerHTML="";
        }
        if(osoba.greska=="Mjesto nije iz date općine")
        {
        	
        	 ispravnost=1;
        	
            document.getElementById("GreskaMjesto").innerHTML=osoba.greska;
             document.getElementById("SlikaMjesto").style.display=block;
            document.getElementById("GreskaOpcina").innerHTML="";
            document.getElementById("SlikaOpcina").style.display="none";
           
        }
        if(osoba.ok=="Mjesto je iz date općine")
        {
        	ispravnost=0;
           document.getElementById("GreskaMjesto").innerHTML="";
            document.getElementById("GreskaOpcina").innerHTML="";
           document.getElementById("SlikaMjesto").style.display="none";
           document.getElementById("SlikaOpcina").style.display="none";
           

        }

    }
  };
  
  xmlhttp.open("GET","http://zamger.etf.unsa.ba/wt/mjesto_opcina.php?mjesto="+ mjesto +"&opcina=" +opcina,true);
  xmlhttp.send();
  
  if(document.Forma.Ime.value!="")
	{
        
        	document.getElementById("ImeGreska").style.display="none";
		if(pomocnaime!="")
		{
			ispravnost1=false;
		    document.getElementById("ImeGreska").style.display="block";
		}
    }
	if(document.Forma.Ime.value=="")
	{
		ispravnost1=false;
		
		document.getElementById("ImeGreska").style.display="block";
	}
	if(document.Forma.Prezime.value!="")
	{
		document.getElementById("PrezimeGreska").style.display="none";
       if(pomocnaprezime!="")
       {
       	document.getElementById("PrezimeGreska").style.display="block";
		ispravnost1=false;
		}
	}
	if(document.Forma.Prezime.value=="")
	{
		ispravnost1=false;
		document.getElementById("PrezimeGreska").style.display="block";
	}
	if(mail.length==0)
	{
		document.getElementById("GreskaEmail").style.display="block";
		ispravnost1=false;
	}
	if(document.Forma.email.value!="")
	{
		document.getElementById("GreskaEmail").style.display="none";
	if(ludoa<1 || tacka<ludoa+2 || tacka+2>=mail.length)
	{
		ispravnost1=false;
		document.getElementById("GreskaEmail").style.display="block";
	}
	if(document.Forma.Primjedbe.value!=0)
	{
		document.getElementById("PrimjedbaGreska").style.display="none";
	}
}
	if(document.getElementsByName("Track")[0].value<50 && document.Forma.Primjedbe.value=="")
	{
		ispravnost1=false;
		document.getElementById("PrimjedbaGreska").style.display="block";
		
	}
	if(document.getElementsByName("Track")[0].value>50)
	{
		document.getElementById("PrimjedbaGreska").style.display="none";
	}

        

		if(ispravnost==0 && ispravnost1==true)
		{
			document.forms.submit();
			return true;
		}
		else
		{
			return false;
		}

	
	
}