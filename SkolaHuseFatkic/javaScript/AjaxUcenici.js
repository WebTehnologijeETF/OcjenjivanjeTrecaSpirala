function dodaj()
{

		var _naziv=document.getElementById("nazivUcenika").value;
		var _slika=document.getElementById("slikaUcenika").value;

		var ucenik={
			naziv:_naziv,
			slika:_slika
		}


		var ajax = new XMLHttpRequest();

    ajax.onreadystatechange = function() {
        if (ajax.status == 200 && ajax.readyState == 4) {
            console.log("uspjesno dodano");
           
        }
        else if (ajax.status == 400 && ajax.readyState == 4) {
            alert("Neispravni podaci");
        }
        else if (ajax.status == 404 && ajax.readyState == 4) {
            alert("Nepostojeći student");
        }
    }
    ajax.open("POST", "http://zamger.etf.unsa.ba/wt/proizvodi.php", true);
    ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    ajax.send ("brindexa=15804&akcija=dodavanje&proizvod=" + JSON.stringify(ucenik));


}