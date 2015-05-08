function validation() {
var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;  
if (document.getElementById("name").value == null || document.getElementById("name").value =="" ||  document.getElementById("name").value.length<3) {
        
document.getElementById("label1").innerHTML="Unesite ispravno ime!";
}
else
{
document.getElementById("label1").innerHTML="";
}

if(document.getElementById("mail").value=="" || document.getElementById("mail").value==null || document.getElementById("mail").value.length<10 || !document.getElementById("mail").value.match(re))
{
document.getElementById("label2").innerHTML="Unesite ispravan mail!";
}
else
{
document.getElementById("label2").innerHTML="";
}

if(document.getElementById("message").value=="" || document.getElementById("message").value==null || document.getElementById("message").value.length<10)
{
document.getElementById("label3").innerHTML="Unesite ispravnu poruku!";
}
else
{
document.getElementById("label3").innerHTML="";
}


}

function toSubmit(){
if(document.getElementById("label1").innerText!=""  || document.getElementById("label2").innerText!="" || document.getElementById("label3").innerText!="")
{
return false;
}
}

function listaGradova()
{
alert("Promjena");
if(document.getElementById("list").value=="BiH")
{
document.getElementById("list2").remove(1);
document.getElementById("list2").remove(2);
document.getElementById("list2").remove(3);
	
var option = document.createElement("option");
option.text = "Sarajevo";
document.getElementById("list2").add(option);

var option2 = document.createElement("option");
option2.text = "Tuzla";
document.getElementById("list2").add(option2);

var option3 = document.createElement("option");
option3.text = "Mostar";
document.getElementById("list2").add(option3);

}
else if(document.getElementById("list").value=="Srbija")
{
document.getElementById("list2").remove(1);
document.getElementById("list2").remove(2);
document.getElementById("list2").remove(3);

var option = document.createElement("option");
option.text = "Beograd";
document.getElementById("list2").add(option);

var option2 = document.createElement("option");
option2.text = "Obrenovac";
document.getElementById("list2").add(option2);

var option3 = document.createElement("option");
option3.text = "Niš";
document.getElementById("list2").add(option3);

}

else if(document.getElementById("list").value=="Hrvatska")
{
document.getElementById("list2").remove(1);
document.getElementById("list2").remove(2);
document.getElementById("list2").remove(3);

var option = document.createElement("option");
option.text = "Zagreb";
document.getElementById("list2").add(option);

var option2 = document.createElement("option");
option2.text = "Rijeka";
document.getElementById("list2").add(option2);

var option3 = document.createElement("option");
option3.text = "Dubrovnik";
document.getElementById("list2").add(option3);

}

else
{

document.getElementById("list2").remove(1);
document.getElementById("list2").remove(2);
document.getElementById("list2").remove(3);

var option = document.createElement("option");
option.text = "Ljubljana";
document.getElementById("list2").add(option);

var option2 = document.createElement("option");
option2.text = "Celje";
document.getElementById("list2").add(option2);

}
}

function myfunction()
{
document.getElementById("podmeni").style.visibility="visible";
}

function myfunction2()
{
document.getElementById("podmeni").style.visibility="hidden";
}