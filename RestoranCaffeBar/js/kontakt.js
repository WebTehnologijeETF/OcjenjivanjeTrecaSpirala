var valid = true;

function validacijaIme() {
    var ime = document.getElementById("ime");

    if (ime.value.length == 0) {
        ime.style.backgroundColor="red";
		document.getElementById("errorIme").style.display="block";
		document.getElementById("errorIme").innerHTML="Morate unijeti ime!";		
        valid = false;
    }
    else if (!ime.value.match(/^[a-zA-Z ČčĆćŽžŠšĐđ]+$/)) {
        ime.style.backgroundColor="red";
        document.getElementById("errorIme").style.display="block";
        document.getElementById("errorIme").innerHTML="Ispravno unesite ime!";
        valid = false;
    }
    else {
        ime.style.backgroundColor="#faf3ed";
        document.getElementById("errorIme").style.display="none";
    }
}

function validacijaMail() {
    var mail = document.getElementById("mail");

    if (mail.value.length == 0) {
        mail.style.backgroundColor="red";
        document.getElementById("errorMail").style.display="block";
        document.getElementById("errorMail").innerHTML="Morate unijeti mail!";
        valid = false;
    }
    else if (!mail.value.match(/^[a-z0-9_]+@[a-z.]+\.[a-z][a-z]+$/)) {
        mail.style.backgroundColor="red";
        document.getElementById("errorMail").style.display="block";
        document.getElementById("errorMail").innerHTML="Ispravno unesite mail!";
        valid = false;
    }
    else {
        mail.style.backgroundColor="#faf3ed";
        document.getElementById("errorMail").style.display="none";
    }
}

function validacijaTelefon() {
    var telefon = document.getElementById("telefon");

	if (mail.value.length == 0) {
        mail.style.backgroundColor="red";
        document.getElementById("errorTelefon").style.display="block";
        document.getElementById("errorTelefon").innerHTML="xxxxx-xx-xxx-xxx";
        valid = false;
    }
    else if (!mail.value.match(/^\d{5}\-?\d{2}\-?\d{3}\-?\d{3}$/)) {
        mail.style.backgroundColor="red";
        document.getElementById("errorTelefon").style.display="block";
        document.getElementById("errorTelefon").innerHTML="xxxxx-xx-xxx-xxx";
        valid = false;
    }
    else {
        mail.style.backgroundColor="#faf3ed";
        document.getElementById("errorTelefon").style.display="none";
    }
}

function validacijaPoruka() {
    var poruka = document.getElementById("poruka");
    if (poruka.value.length == 0) {
        poruka.style.backgroundColor="red";
        document.getElementById("errorPoruka").style.display="block";
		document.getElementById("errorPoruka").innerHTML="Unesite poruku!";
        valid = false;
    }
    else {
        poruka.style.backgroundColor="#faf3ed";
        document.getElementById("errorPoruka").style.display="none";
    }
}

$(document).ready(function(){
    $("#posalji").click(function(){
		
		validacijaIme();
        validacijaMail();
        validacijaPoruka();
		validacijaTelefon();
		validacijaOpcina();
		validacijaSkola();

        var posalji = document.getElementById("posalji");
        if (true == valid) {
            posalji.type = "submit";
        }		
    });
});

function validacijaOpcina() {
	var opcina = document.getElementById("opcina");

    if (opcina.value.length != 0 && !opcina.value.match(/^[a-zA-Z ČčĆćŽžŠšĐđ]+$/)) {
        opcina.style.backgroundColor="red";
        document.getElementById("errorOpcina").style.display="block";
        document.getElementById("errorOpcina").innerHTML="Ispravno unesite naziv općine!";
        valid = false;
    }
    else {
        mail.style.backgroundColor="#faf3ed";
        document.getElementById("errorTelefon").style.display="none";
    }
}

function validacijaSkola() {
    var skola = document.getElementById("skola");
    var opcina = document.getElementById("opcina");

    var ajax = new XMLHttpRequest;

    ajax.onreadystatechange = function() {
        if(ajax.status == 200 && ajax.readyState == 4) {
            var odgovor = JSON.parse(ajax.responseText);

            var pogodak = false;
            if (Object.keys(odgovor)[0] == "ok")
                pogodak = true;

            if (false == pogodak && opcina.value.length > 0 && skola.value.length > 0) {
                skola.style.backgroundColor="red";
                document.getElementById("errorSkola").style.display="block";
                document.getElementById("errorSkola").innerHTML=odgovor.greska;
                valid = false;
            }
            else {
                skola.style.backgroundColor="#faf3ed";
                document.getElementById("errorSkola").style.display="none";
            }
        }
    }

    ajax.open("GET", "http://zamger.etf.unsa.ba/wt/srednja_skola.php?opcina=" + opcina.value + "&skola=" + skola.value, true);
    ajax.send();

    if (skola.value.length != 0 && !skola.value.match(/^[a-zA-Z ČčĆćŽžŠšĐđ]+$/)) {
        skola.style.backgroundColor="red";
        document.getElementById("errorSkola").style.display="block";
        document.getElementById("errorSkola").innerHTML="Ispravno unesite školu!";
        valid = false;
    }
    else {
        skola.style.backgroundColor="#faf3ed";
        document.getElementById("errorSkola").style.display="none";
    }
}