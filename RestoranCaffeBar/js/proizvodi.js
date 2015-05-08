var svi = [];
var proizvodi = [];

function osvjezi() {
    var tabela = document.getElementById("tabelaProizvoda");
    var ajax = new XMLHttpRequest();
	
	document.getElementById("dodavanje").style.display = "none";
    document.getElementById("izmjena").style.display = "none";
    document.getElementById("brisanje").style.display = "none";

    ajax.onreadystatechange = function() {
        if(ajax.readyState == 4 && ajax.status == 200) {
            var tekst = ajax.responseText;
            proizvodi = JSON.parse(tekst);
			
            svi = [];
            var tabelaIn = "<tr><th>Id</th><th>Naziv</th><th>Opis</th><th>Slika</th><th>URL</th><th>Cijena</th></tr>";
            var i;
			
            for (i = 0; i < proizvodi.length; i++) {
                tabelaIn +=
                    "<tr> <td style='border: 1px solid black; border-radius: 5px; padding: 5px'>" + proizvodi[i]["id"] +
                    "</td><td style='border: 1px solid black; border-radius: 5px; padding: 5px'>" + proizvodi[i]["naziv"] +
                    "</td><td style='border: 1px solid black; border-radius: 5px; padding: 5px'><div style='max-width: 100px; max-height: 200px; overflow: hidden;'>" + proizvodi[i]["opis"] + "</div>" +
                    "</td><td style='border: 1px solid black; border-radius: 5px; padding: 5px'><img width=200 src='" + proizvodi[i]["slika"] + "'>" +
                    "</td><td style='border: 1px solid black; border-radius: 5px; padding: 5px'><a target='_blank' href='" + proizvodi[i]["url"] + "'>Link</a>" +
                    "</td><td style='border: 1px solid black; border-radius: 5px; padding: 5px'>" + proizvodi[i]["cijena"];
                svi.push(proizvodi[i]["id"]);
            }
            tabela.innerHTML = tabelaIn;

            var _idBrisanje = document.getElementById("idBrisanje");
            var _idIzmjena = document.getElementById("idIzmjena");

            for(i = _idBrisanje.options.length-1; i >= 0;i--)
            {
                _idBrisanje.remove(i);
                _idIzmjena.remove(i);
            }

            for (i = 0; i < svi.length; i++) {
                var opcija1 = document.createElement("option");
                opcija1.text = svi[i].toString();
                _idBrisanje.add(opcija1);
                var opcija2 = document.createElement("option");
                opcija2.text = svi[i].toString();
                _idIzmjena.add(opcija2);
            }
        }
    }
    ajax.open("POST", "http://zamger.etf.unsa.ba/wt/proizvodi.php?brindexa=16130", true);
    ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    ajax.send();
}

onload = function() {
    osvjezi();
    var pozicija = document.getElementById("galerija").getBoundingClientRect();
    document.getElementById("submeni").style.left = pozicija.left - 33 + "px";
}

function proizvodiEnter() {
    document.getElementById("submeni").style.display = "block";
}

function proizvodiLeave() {
    document.getElementById("submeni").style.display = "none";
}

function izmjenaOdabir() {
    var odabir = document.getElementById("odabir").value;
		
    if(odabir == "Dodavanje") {
        document.getElementById("dodavanje").style.display = "block";
        document.getElementById("izmjena").style.display = "none";
        document.getElementById("brisanje").style.display = "none";
    }
    else if (odabir == "Izmjena") {
        document.getElementById("dodavanje").style.display = "none";
        document.getElementById("izmjena").style.display = "block";
        document.getElementById("brisanje").style.display = "none";
    }
    else if (odabir == "Brisanje") {
        document.getElementById("dodavanje").style.display = "none";
        document.getElementById("izmjena").style.display = "none";
        document.getElementById("brisanje").style.display = "block";
    }
    else {
        alert("Greska!")
    }
}

function izmjenaIzmjene() {
    var _naziv = document.getElementById("nazivIzmjena");
    var _opis = document.getElementById("opisIzmjena");
    var _slika = document.getElementById("slikaIzmjena");
    var _url = document.getElementById("urlIzmjena");
    var _cijena = document.getElementById("cijenaIzmjena");

    var _id = document.getElementById("idIzmjena").options[document.getElementById("idIzmjena").selectedIndex].text;

    var i;
    for(i=0; i<proizvodi.length; i++) {
        if ( _id == proizvodi[i]["id"]) {
            _naziv.value = proizvodi[i]["naziv"];
            _opis.value = proizvodi[i]["opis"];
            _slika.value = proizvodi[i]["slika"];
            _url.value = proizvodi[i]["url"];
            _cijena.value = proizvodi[i]["cijena"];
            break;
        }
    }
}

function dodaj() {
    var _naziv = document.getElementById("nazivDodavanje");
    var _opis = document.getElementById("opisDodavanje");
    var _slika = document.getElementById("slikaDodavanje");
    var _url = document.getElementById("urlDodavanje");
    var _cijena = document.getElementById("cijenaDodavanje");

    if (parseFloat(_cijena.value) < 0) {
        document.getElementById("errorDodaj").innerHTML = "Cijena ne može biti manja od nule.";
        return;
    }

    var proizvod = {
        naziv: _naziv.value,
        opis: _opis.value,
        slika: _slika.value,
        url: _url.value,
        cijena: _cijena.value
    }

    var ajax = new XMLHttpRequest();

    ajax.onreadystatechange = function() {
        if (ajax.status == 200 && ajax.readyState == 4) {
            document.getElementById("errorDodaj").innerHTML = "Proizvod uspješno unesen.";
            osvjezi();
            document.getElementById("nazivIzmjena").value = "";
            document.getElementById("opisIzmjena").value = "";
            document.getElementById("slikaIzmjena").value = "";
            document.getElementById("urlIzmjena").value = "";
            document.getElementById("cijenaIzmjena").value = "";
        }
        else if (ajax.status == 400 && ajax.readyState == 4) {
            alert("Neispravni podaci.");
        }
        else if (ajax.status == 404 && ajax.readyState == 4) {
            alert("Proizvod ne postoji.");
        }
    }
    ajax.open("POST", "http://zamger.etf.unsa.ba/wt/proizvodi.php?brindexa=16130", true);
    ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    ajax.send("akcija=dodavanje&proizvod=" + JSON.stringify(proizvod));
}

function obrisi() {

    var proizvod = {
        id: parseInt(document.getElementById("idBrisanje").options[document.getElementById("idBrisanje").selectedIndex].text),
        naziv: "",
        opis: "",
        slika: "",
        url: "",
        cijena: ""
    }

    var ajax = new XMLHttpRequest();

    ajax.onreadystatechange = function() {
        if (ajax.status == 200 && ajax.readyState == 4) {
            document.getElementById("errorObrisi").innerHTML = "Proizvod je uspjesno obrisan.";
            osvjezi();
        }
        else if (ajax.status == 400 && ajax.readyState == 4) {
            alert("Neispravni podaci.");
        }
        else if (ajax.status == 404 && ajax.readyState == 4) {
            alert("Proizvod ne postoji.");
        }
    }
    ajax.open("POST", "http://zamger.etf.unsa.ba/wt/proizvodi.php?brindexa=16130", true);
    ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    ajax.send("akcija=brisanje&proizvod=" + JSON.stringify(proizvod));
}

function izmijeni() {
	osvjezi();
    var _naziv = document.getElementById("nazivIzmjena").value;
    var _opis = document.getElementById("opisIzmjena").value;
    var _slika = document.getElementById("slikaIzmjena").value;
    var _url = document.getElementById("urlIzmjena").value;
    var _cijena = parseFloat(document.getElementById("cijenaIzmjena").value);

    if (parseFloat(_cijena.value) < 0) {
        document.getElementById("errorIzmijeni").innerHTML = "Cijena ne može biti manja od nule.";
        return;
    }

    var proizvod = {
        id: parseInt(document.getElementById("idIzmjena").options[document.getElementById("idIzmjena").selectedIndex].text),
        naziv: _naziv,
        opis: _opis,
        slika: _slika,
        url: _url,
        cijena: _cijena
    }

    var ajax = new XMLHttpRequest();

    ajax.onreadystatechange = function() {
        if (ajax.status == 200 && ajax.readyState == 4) {
            document.getElementById("errorIzmijeni").innerHTML = "Proizvod je uspješno izmjenjen.";
            osvjezi();
            document.getElementById("nazivIzmjena").value = "";
            document.getElementById("opisIzmjena").value = "";
            document.getElementById("slikaIzmjena").value = "";
            document.getElementById("urlIzmjena").value = "";
            document.getElementById("cijenaIzmjena").value = "";
        }
        else if (ajax.status == 400 && ajax.readyState == 4) {
            alert("Neispravni podaci.");
        }
        else if (ajax.status == 404 && ajax.readyState == 4) {
            alert("Proizvod ne postoji.");
        }
    }
    ajax.open("POST", "http://zamger.etf.unsa.ba/wt/proizvodi.php?brindexa=16130", true);
    ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    ajax.send("akcija=izmjena&proizvod=" + JSON.stringify(proizvod));
}