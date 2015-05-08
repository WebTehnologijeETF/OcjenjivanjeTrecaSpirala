function Validiraj()
{
    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
            var a = JSON.parse(ajax.response);
            
            if (a.ok == "Poštanski broj odgovara mjestu") {
                alert("Uspješno slanje!"); 
            }

            else if (a.greska == "Nepostojeći poštanski broj") {
                alert("Niste unijeli validan poštanski broj!"); 
            }
            else if (a.greska == "Nepostojeće mjesto") {
                alert("Niste unijeli validno mjesto"); 
            }


        }
        if (ajax.readyState == 4 && ajax.status == 404)
            alert("Neispravan url.")
    }
    
    var mjesto = document.getElementById("mjesto").value;
    mjesto = encodeURIComponent(mjesto);

    var pbroj = document.getElementById("pbroj").value;
    pbroj = encodeURIComponent(pbroj);


    ajax.open("GET", "http://zamger.etf.unsa.ba/wt/postanskiBroj.php?mjesto="+mjesto+"&postanskiBroj="+ pbroj, true);
    ajax.send();
    return false;

}


function Vrati(adresa)
{
var ajax = new XMLHttpRequest();
ajax.onreadystatechange = function () {
    if (ajax.readyState == 4 && ajax.status == 200) {
        document.getElementById("sredina").innerHTML = ajax.responseText;
        console.log(ajax.responseText);
    }
    if (ajax.readyState == 4 && ajax.status == 404)
        document.getElementById("sredina").innerHTML = "Greska: nepoznat URL";
}
    ajax.open("GET", adresa, true);
    ajax.send();
    return false; 

}