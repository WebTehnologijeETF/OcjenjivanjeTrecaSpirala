function PrikaziTabelu()
{
var xmlhttp;
var tabela;
if (window.XMLHttpRequest)
  {
  xmlhttp=new XMLHttpRequest();
  }
else
  {
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }

    xmlhttp.onreadystatechange=function()
  {
     var tabela;
     var slika;
    var zak=JSON.parse(xmlhttp.responseText);
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
        tabela="<table border='1'>";
                       tabela=tabela+"<tr>";
                        tabela=tabela+"<td>"; tabela=tabela+"Id proizvoda";
                        tabela=tabela+"</td>";
                       tabela=tabela+"<td>"; tabela=tabela+"Opis proizvoda";
                        tabela=tabela+"</td><td>";
                        tabela=tabela+"Slika proizvoda";
                        tabela=tabela+"</td></tr>"
      for(i=0;i<zak.length;i++)
      {
                       slika=zak[i].slika;
                      tabela=tabela+"<tr>";
                      tabela=tabela+"<td>"; tabela=tabela+zak[i].id;
                        tabela=tabela+"</td>";
                       tabela=tabela+"<td>"; tabela=tabela+zak[i].opis;
                        tabela=tabela+"</td><td>";
                        tabela=tabela+"<img class="+"SlikaPrikaz"+" src="+slika+">";
                        tabela=tabela+"</td></tr>"
      }
        tabela+="</table>";
}
    document.getElementById("Tabelica").innerHTML=tabela;
  }  
xmlhttp.open("GET","http://zamger.etf.unsa.ba/wt/proizvodi.php?brindexa="+"16266",true);
  xmlhttp.send();

}

