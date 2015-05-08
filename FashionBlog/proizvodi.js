
var Interfejs = {
  // postavi se u pripremiProizvode()
}

function pripremiProizvode() {
	ucitajProizvode();
	Interfejs = {
	  naziv: document.getElementById("naziv"),
	  slika: document.getElementById("slika"),
	  cijena: document.getElementById("cijena"),
	  id: document.getElementById("proizvodId")
	}
}


function ocistiSve() {
  Interfejs.naziv.value = "";
  Interfejs.slika.value = "";
  Interfejs.cijena.value = "";
  Interfejs.id.value = "";
}

function napraviOperacije (proizvod) {
    var operacije = document.createElement("div");
    var obrisi = document.createElement("button");
    var izmijeni = document.createElement("button");

    obrisi.type = "button";
    obrisi.innerHTML = "Obrisi";
    na(obrisi, "click", function () {
      var xhr = new XMLHttpRequest();
      xhr.open("POST", "http://zamger.etf.unsa.ba/wt/proizvodi.php?brindexa=16188");
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.send("akcija=brisanje&proizvod=" + JSON.stringify({id: proizvod.id}));
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          ucitajProizvode();
        }
      };
    });

    izmijeni.type = "button";
    izmijeni.innerHTML = "Izmijeni";
    na(izmijeni, "click", function () {
      Interfejs.naziv.value = proizvod.naziv;
      Interfejs.slika.value = proizvod.slika;
      Interfejs.cijena.value = proizvod.cijena;
      Interfejs.id.value = proizvod.id;
    });

    operacije.appendChild(obrisi);
    operacije.appendChild(izmijeni);
    return operacije;
}

function ucitajProizvode() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://zamger.etf.unsa.ba/wt/proizvodi.php?brindexa=16188");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      var proizvodi = JSON.parse(xhr.responseText);
      var lista = document.getElementById("listaProizvoda");
      var i = 0;
      var red;
      var celija;
      var proizvod;

      lista.innerHTML = "";

      for (i = 0; i < proizvodi.length; i++) {
        proizvod = proizvodi[i];
        red = document.createElement("tr");

        
        celija = document.createElement("td");
        celija.innerHTML = proizvod.id
        red.appendChild(celija);
        
        celija = document.createElement("td");
        celija.innerHTML = '<img class="proizvod-slika" src="' + proizvod.slika + '">';
        red.appendChild(celija);
        
        celija = document.createElement("td");
        celija.innerHTML = proizvod.naziv;
        red.appendChild(celija);
       
        celija = document.createElement("td");
        celija.innerHTML = proizvod.cijena;
        red.appendChild(celija);

        celija = document.createElement("td");
        celija.appendChild(napraviOperacije(proizvod));
        red.appendChild(celija);

        lista.appendChild(red);
      }
    }
  }
  xhr.send()
}

function spremiProizvod() {
  var xhr = new XMLHttpRequest();
  var akcija = "dodavanje";
  var podaci = {
    naziv: Interfejs.naziv.value,
    slika: Interfejs.slika.value,
    cijena: Interfejs.cijena.value
  };

  if (Interfejs.id.value) {
    podaci.id = Interfejs.id.value;
    akcija = "promjena";
  }

  xhr.open("POST", "http://zamger.etf.unsa.ba/wt/proizvodi.php?brindexa=16188");
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.send("akcija=" + akcija + "&proizvod="+JSON.stringify(podaci));
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      ocistiSve();
      ucitajProizvode();
    }
  }
}