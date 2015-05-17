function funkcija1()
{
var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {// Anonimna funkcija
        if (ajax.readyState == 4 && ajax.status == 200)
            document.getElementById("polje").innerHTML = ajax.responseText;
        if (ajax.readyState == 4 && ajax.status == 404)
            document.getElementById("polje").innerHTML = "Greska: nepoznat URL";
    }
    ajax.open("GET", "https://www.dropbox.com/s/nhf1dbfhn18zxze/onama-3.html?dl=0", true);
    ajax.send();
}

function funkcija2()
{
var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {// Anonimna funkcija
        if (ajax.readyState == 4 && ajax.status == 200)
            document.getElementById("polje").innerHTML = ajax.responseText;
        if (ajax.readyState == 4 && ajax.status == 404)
            document.getElementById("polje").innerHTML = "Greska: nepoznat URL";
    }
    ajax.open("GET", "index.html", true);
    ajax.send();
}

function funkcija3()
{
var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {// Anonimna funkcija
        if (ajax.readyState == 4 && ajax.status == 200)
            document.getElementById("polje").innerHTML = ajax.responseText;
        if (ajax.readyState == 4 && ajax.status == 404)
            document.getElementById("polje").innerHTML = "Greska: nepoznat URL";
    }
    ajax.open("GET", "contact.html", true);
    ajax.send();
}
