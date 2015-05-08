(function() {

    'use strict';

    var button = document.forms["myForm"]["submit"];
    button.disabled = true;

    addNewEvent(
        document.forms["myForm"]["ime"],
        'blur',
        validateContactName
    );

    addNewEvent(
        document.forms["myForm"]["email"],
        'blur',
        validateContactEmail
    );

    addNewEvent(
        document.forms["myForm"]["poruka"],
        'blur',
        validateContactMsg
    );

})();


function validateContactName() {

    if (!this.value) {
        addError(this, 'Unesite ime', true);
        return;
    }

    addError(this, '');
};

function validateContactEmail() {

    var patern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

    if (!this.value.match(patern)) {
        addError(this, 'Ispravan format e-mail-a: primjer@primjer.primjer', true);
        return;
    }

    addError(this, '');

};

function validateContactMsg() {

    if (!this.value) {
        addError(this, 'Unesite poruku', true);
        return;
    }

    addError(this, '');
};


function addError(node, msg, isError) {
    var parentContainer = node.parentElement,
        errorLabel = parentContainer.getElementsByClassName('errorLabel')[0];

    if (!errorLabel) {
        errorLabel = document.createElement("span");
        errorLabel.className = ' errorLabel';

        parentContainer.appendChild(errorLabel);
    }

    errorLabel.textContent = msg;

    node.className = node.className.replace(' error', '');
    node.className = node.className.replace(' passed', '');

    isError && (node.className += ' error');
    !isError && (node.className += ' passed');

    toggleButton();
};

function toggleButton() {
    var form = document.forms["myForm"],
        requirdFields = form.getElementsByClassName('required'),
        passedFields = form.getElementsByClassName('passed'),
        button = document.forms["myForm"]["submit"];

    if( requirdFields.length !== passedFields.length ) {
        button.disabled = true;
        return;
    }    

    button.disabled = false;
};


function addNewEvent(element, evnt, funct) {
    
    if (element.attachEvent) {
        return element.attachEvent('on' + evnt, funct);
    } else {
        return element.addEventListener(evnt, funct, false);
    }
}


function otvoriStranicu(stranica)
{
    
    var ajax = new XMLHttpRequest();

    ajax.onreadystatechange=function(){
        if(ajax.readyState == 4 && ajax.status == 200) {
            document.open();
            document.write(ajax.responseText);
            document.close();
        }
    }
    ajax.open("GET", stranica, true);
    ajax.send();
}

unction validirajAjax(){
    var opcina = document.getElementById("ajaxOpcina").value;
    console.log(opcina);
    
    var mjesto = document.getElementById("ajaxMjesto").value;
    console.log(mjesto);
     if (opcina=="" || mjesto=="") return false;
     
    var ajax = new XMLHttpRequest();
            ajax.onreadystatechange = function() {
                var odgovor = ajax.responseText;
                var odgovori = new Array();
                
                odgovori=odgovor.split(":");
                odgovori[0]=odgovori[0].replace('{"greska"', 'greska');
                if (odgovori[1]=='"Nepostojeća općina"}') odgovori[1]=odgovori[1].replace('"Nepostojeća općina"}', 'Nepostojeća općina');
                if (odgovori[1]=='"Nepostojeće mjesto"}') odgovori[1]=odgovori[1].replace('"Nepostojeće mjesto"}', 'Nepostojeće mjesto');
                
                if (ajax.readyState == 4 && ajax.status == 200)
                {
                    if (odgovori[0]=="greska"){
                    
                        if (odgovori[1] == "Nepostojeća općina") {
                                document.getElementById("ajaxOpcina").value="Ne postoji unesena opcina";
                            
                                document.getElementById("ajaxOpcina").style.backgroundColor="#FF4D4D";
                                document.getElementById("ajaxMjesto").style.backgroundColor="#FF4D4D";
                                return false;
                        }  
                        
                        if (odgovori[1] == "Nepostojeće mjesto") {
                                document.getElementById("ajaxMjesto").style.backgroundColor="#FF4D4D";
                                document.getElementById("ajaxMjesto").value="Ne postoji uneseno mjesto";
                                return false;
                        }  
                    }
                    else{
                        document.getElementById("ajaxOpcina").style.backgroundColor="white";
                                document.getElementById("ajaxMjesto").style.backgroundColor="white";
                    }
                }
                
                if (ajax.readyState == 4 && ajax.status == 404){
                    return false;
                }
                    
                       
            }
            
            ajax.open("GET", "http://zamger.etf.unsa.ba/wt/mjesto_opcina.php?opcina=" + opcina + "&mjesto=" + mjesto, true);
            ajax.send();
 
};
