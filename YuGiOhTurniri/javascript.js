function iscitajTabelu(){

	var link="http://zamger.etf.unsa.ba/wt/proizvodi.php?brindexa=16451";
	var ajax = new XMLHttpRequest();
		ajax.onreadystatechange=function(){
		if(ajax.readyState ==  4 && ajax.status == 200){
			var cards = JSON.parse(ajax.responseText);
			napraviTabelu(cards);
		}
	}

	ajax.open("GET","http://zamger.etf.unsa.ba/wt/proizvodi.php?brindexa=16451",true);
	ajax.send();
}

function napraviTabelu(cards) {

	var tabela = document.getElementById("karte");
	tabela.innerHTML = "";
	for(i = 0 ; i < cards.length ; i++){
		if(i === 0){
			tabela.innerHTML+="<tr><th>Type </th><th>Card Name</th><th>Limmitation</th><th>Image</th><th>Link</th></tr>";
		}
		tabela.innerHTML+= "<tr><th>"+ cards[i].opis + "</th><th>" + cards[i].naziv +"</th><th>" + cards[i].kolicina +"</th><th><img src='" + cards[i].slika +"'></th><th>" + cards[i].url + "</th><th> <button type='button' onclick='obrisiElement('"+i+"')'> Obrisi</button></th></tr>";

	}
}

function unesiElement(){

	var pom ={
		opis:document.getElementById("tip_karte").value,
		naziv:document.getElementById("naziv_karte").value,
		kolicina:parseInt(document.getElementById("broj_karata").value),
		slika:document.getElementById("link_slike").value,
		url:document.getElementById("link_karte").value

	};

	var ajax = new XMLHttpRequest();

	ajax.onreadystatechange=function(){
		if(ajax.status === 200 && ajax.readyState === 4){
			
			iscitajTabelu();
		}
	}
	ajax.open("POST", "http://zamger.etf.unsa.ba/wt/proizvodi.php?brindexa=16451",true);
	ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	ajax.send("akcija=dodavanje"+"&brindexa=16451&proizvod="+JSON.stringify(pom));


}

function obrisiElement(id){
	alert("obrisi");
	var link="http://zamger.etf.unsa.ba/wt/proizvodi.php?brindexa=16451";
	var ajax = new XMLHttpRequest();
		ajax.onreadystatechange=function(){
		if(ajax.readyState ==  4 && ajax.status == 200){
			var cards = JSON.parse(ajax.responseText);
				var json_el  = cards[i];
			obrisiSaServera(json_el);
		}
	}


	ajax.open("GET","http://zamger.etf.unsa.ba/wt/proizvodi.php?brindexa=16451",true);
	ajax.send();

}
function obrisiSaServera(el){

alert("obrisi_server")
	var ajax=new XMLHttpRequest();
	req.onreadystatechange=function(){
		if(ajax.readyState===4 && ajax.status===200){
				iscitajTabelu();	
		}
	}

	ajax.open("POST", "http://zamger.etf.unsa.ba/wt/proizvodi.php?brindexa=16451", true);
	ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	ajax.send("akcija=brisanje"+"&brindexa=16451"+"&proizvod="+JSON.stringify(el));


}




function otvori(stranica){

var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {// Anonimna funkcija
        if (ajax.readyState == 4 && ajax.status == 200){
            document.getElementById("htmlpromjena").innerHTML = ajax.responseText;
            if(stranica === 'BanListPageW.html'){
            	iscitajTabelu();
            }

        }

        if (ajax.readyState == 4 && ajax.status == 404){
            document.getElementById("htmlpromjena").innerHTML = "Greska: nepoznat URL";
                   
        }
    }
    ajax.open("GET", stranica, true);
    ajax.send();
}

function spusti(broj,e){

		e = e || window.event;
		e.stopPropagation();
			if(document.getElementById(broj).style.display === "initial")
		document.getElementById(broj).style.display="none";
			else 
		document.getElementById(broj).style.display ="initial";

}

function email(){
	var e = document.getElementById("email_adresa");
	var regex= /.*[@][a-zA-Z]*[.][a-zA-Z]*/;
	if(e.value !="ex:yugi@etf.unsa.ba" && !regex.test(e.value)){
		e.style.backgroundColor = "pink";
	}
	else 
		e.style.backgroundColor = "white";
}


function telefon(){
	var tel = document.getElementById("broj_telefona");
	var t = tel.value;
	var pom = true;
	for(i = 0 ; i < 12 ; i++){
		if(i === 0 || i === 1)
			if(t[i] != "0"){
				tel.style.backgroundColor = "pink"; 
				pom = false;
				break;
				alert("df");
			}
			else if(i === 2){
				if(t[i] != "3"){
				tel.style.backgroundColor = "pink"; 
				pom = false;
				break;
				}
			}
			else if(i === 3){
				if(t[i] != "8"){
				tel.style.backgroundColor = "pink"; 
				pom = false;
				break;
				}
			}
			else if(i === 4){
				if(t[i] != "7"){
				tel.style.backgroundColor = "pink"; 
				pom = false;
				break;
				}
			}
			else{
				if(t[i] != "0" && t[i] != "1" &&t[i] != "2" &&t[i] != "3" &&t[i] != "4" &&t[i] != "5" &&t[i] != "6" &&t[i] != "7" &&t[i] != "8" &&t[i] != "9" ){
				tel.style.backgroundColor = "pink"; 
				pom = false;
				break;
				}
			}				

	}
			if(pom === true){
			tel.style.backgroundColor = "white"; 
			}
}

function tekst(id_el){

	var sub = document.getElementById(id_el);
	if(sub.value.length === 0){
		sub.style.backgroundColor = "pink"; 
	}
	else sub.style.backgroundColor = "white"; 

}

function slova(id_el){
		var sub = document.getElementById(id_el);
			var regex= /^[a-zšđčćž]+$/i;;
	if(!regex.test(sub.value) || sub.value.length === 0){
		sub.style.backgroundColor = "pink"; 
	}
	else sub.style.backgroundColor = "white"; 

}


function provjeri(){
	var e = document.getElementById("email_adresa");
	var tel = document.getElementById("broj_telefona");
	var sub = document.getElementById("subject_p");
	var mes = document.getElementById("message");

	if(e.style.backgroundColor === "pink" || tel.style.backgroundColor === "pink" || sub.style.backgroundColor === "pink" || mes.style.backgroundColor === "pink")
	{
		alert("Niste unjeli ispravne podatke !");
	}
}

function password(){
	var p1 = document.getElementById("pass1");
	var p2 = document.getElementById("pass2");
	if(pass1.value != pass2.value || pass1.value === ""){
		pass2.style.backgroundColor = "red"; 

	}
	else 
				pass2.style.backgroundColor = "white"; 
}

/*function mjesto_test(){
	var mj = document.getElementById("mjesto");
	var op  =document.getElementById("opstina");
				var ajax =new XMLHttpRequest();
				ajax.onreadystatechange=function(){
					if(ajax.status===200 & ajax.readyState===4)
					{

						var odgovor=JSON.parse(ajax.responseText);
						var pom =ajax.responseText;
								if(odgovor.hasOwnPropety('greska')){
																alert("sdsd");
					mj.style.backgroundColor = "red"; 
					op.style.backgroundColor = "red"; 

		}
					}
				}
				//ajax.open("GET","http://zamger.etf.unsa.ba/wt/mjesto_opcina.php?opcina=Ilid%C5%BEa&mjesto=Ilid%C5%BEa",true);
		ajax.open("GET","http://zamger.etf.unsa.ba/wt/mjesto_opcina.php?mjesto="+mj.value+"&opcina="+op.value,true);
		ajax.send();


}*/
function mjesto_test(){
	var mj = document.getElementById("mjesto");
	var op  =document.getElementById("opstina");
				var ajax =new XMLHttpRequest();
				ajax.onreadystatechange=function(){
					if(ajax.status===200 & ajax.readyState===4)
					{
							alert("sdsd");
						var odgovor=JSON.parse(ajax.responseText);
						var pom =ajax.responseText;
								if(odgovor.greska!=null){
					mj.style.backgroundColor = "pink"; 
					op.style.backgroundColor = "pink"; 

		}
					}else {
											mj.style.backgroundColor = "white"; 
					op.style.backgroundColor = "white"; 
					}
				}
				//ajax.open("GET","http://zamger.etf.unsa.ba/wt/mjesto_opcina.php?opcina=Ilid%C5%BEa&mjesto=Ilid%C5%BEa",true);
		ajax.open("GET","http://zamger.etf.unsa.ba/wt/mjesto_opcina.php?mjesto="+mj.value+"&opcina="+op.value,true);
		ajax.send();


}

/*function home_page(){
	window.location="HomePage.html";

}*/