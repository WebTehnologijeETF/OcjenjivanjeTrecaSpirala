function producePrompt(message, promptLocation, color) {
    document.getElementById(promptLocation).innerHTML=message;
    document.getElementById(promptLocation).style.color=color;
}

function validacijaImena() {
    var name=document.getElementById("ime").value;
    if(name.length==0) {
        producePrompt("Ime je obavezno","provjeriIme","red");
        return false;
    }
    if(!name.match(/^[A-Za-z\čćžđšČŠĆŽĐ]*$/)) {
        producePrompt("Greška u imenu","provjeriIme","red");
        return false;
    }
    producePrompt("OK","provjeriIme","green");
    return true;
}

function validacijaOpcine() {
    var op=document.getElementById("opcina").value;

    if(!op.match(/^[A-Za-z\čćžđšČŠĆŽĐ]*$/) && !op.match(/^[A-Za-z\čćžđšČŠĆŽĐ]*\s{1}[A-Za-z\čćžđšČŠĆŽĐ]*$/)) {
        producePrompt("Općina je pogrešno napisana","provjeriOpcinu","red");
        return false;
    }
    producePrompt("","provjeriOpcinu","red");

    return true;
}


function validacijaPrezimena() {
    var lname=document.getElementById("prezime").value;
    if(lname.length==0){
        producePrompt("Prezime je obavezno","provjeriPrezime","red");
        return false;
    }
    if(!lname.match(/^[A-Za-z\čćžđšČŠĆŽĐ]*$/)){
        producePrompt("Greška u prezimenu","provjeriPrezime","red");
        return false;
    }
    producePrompt("OK","provjeriPrezime","green");
    return true;
}

function validacijaMobitela() {
    var number=document.getElementById("mobitel").value;
    if(number.length==0) {
        producePrompt("Broj mobitela je obavezan","provjeriMobitel","red");
        return false;
    }
    if(!number.match(/^\(?(\d{3})\)?[-]?(\d{3})[-]?(\d{3})$/)) {
        producePrompt("Broj mobitela mora bit u formatu: (061)-123-345 ili 061-123-456 ili 061123456","provjeriMobitel","red");
        return false;
    }
    producePrompt("OK","provjeriMobitel","green");
    return true;
}

function validacijaMaila() {
    var email=document.getElementById("mail").value;

    if(email.length==0) {
        producePrompt("Email je obavezan", "provjeriMail", "red");
        return false;
    }

    if(!email.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm)) {
        producePrompt("Email je pogresno napisan","provjeriMail","red");
        return false;
    }
    producePrompt("OK","provjeriMail","green");
    return true;
}

function validacijaMaila2() {
    var email2=document.getElementById("mail2").value;
    var email=document.getElementById("mail").value;

    if(email2.length==0) {
        producePrompt("Email je obavezan", "provjeriMail2", "red");
        return false;
    }

    if(!email2.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm)) {
        producePrompt("Email je pogresno napisan","provjeriMail2","red");
        return false;
    }
    if(email!=email2) {
        producePrompt("Email se ne podudara","provjeriMail2","red");
        return false;
    }

    producePrompt("OK","provjeriMail2","green");
    return true;
}

function validacijaGrada() {
    var city=document.getElementById("grad").value;

    if(!city.match(/^[A-Za-z\čćžđšČŠĆŽĐ]*$/) && !city.match(/^[A-Za-z\čćžđšČŠĆŽĐ]*\s{1}[A-Za-z\čćžđšČŠĆŽĐ]*$/)){
        producePrompt("Grad je pogresno napisan","provjeriGrad","red");
        return false;
    }
    producePrompt("","provjeriGrad","red");

    return true;
}

function validacijaPoruke() {
    var poruka=document.getElementById("text").value;
    var minimum=30;
    var ostalo=minimum-poruka.length;

    if(ostalo>0){
        producePrompt(ostalo + " karaktera zahtjevano","provjeriPoruku","red");
        return false;
    }
    producePrompt("Poruka je validna","provjeriPoruku","green");
    return true;
}


function prikazi(id) {
    document.getElementById(id).style.display="block";
}

function sakrij(id) {
    document.getElementById(id).style.display="none";
}

function validacijaForme() {
    var zadnjiTest=1;
    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
            var objekat = JSON.parse(ajax.responseText);
            if (Object.keys(objekat)[0] == "ok") {
                producePrompt("OK","provjeriGrad","green");
                producePrompt("OK","provjeriOpcinu","green");
            }
            else{
                producePrompt("Greška(općina ne postoji, mjesto ne postoji ili mjesto nije iz date općine)","provjeriGrad","red");
                producePrompt("Greška(općina ne postoji, mjesto ne postoji ili mjesto nije iz date općine)","provjeriOpcinu","red");
                zadnjiTest=0;
            }
            }
        };
    var grad = document.getElementById("grad").value;
    var opcina = document.getElementById("opcina").value;
    ajax.open("GET", "http://zamger.etf.unsa.ba/wt/mjesto_opcina.php?opcina="+opcina+"&mjesto="+grad, true);
    ajax.send();

    if(!validacijaImena() || !validacijaOpcine() || !validacijaGrada() || !validacijaMaila() || !validacijaMaila2() || !validacijaMobitela() || !validacijaPoruke() || !validacijaPrezimena() || zadnjiTest!=1) {
        prikazi("zadnjaProvjera");
        producePrompt("Forma nije validna","zadnjaProvjera","red");
        setTimeout(function(){sakrij("zadnjaProvjera");},2000);
    }
    else
        document.forms.submit();
}