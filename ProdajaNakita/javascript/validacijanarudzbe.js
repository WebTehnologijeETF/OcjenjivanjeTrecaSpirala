
function validiraj(){
	var forma = document.getElementById("kontaktforma");
	var valid = true;

	if(valid)
	{
		validirajServis(forma.grad.value, forma.postanski.value);
	}
}

function validirajServis(grad, postanski){
	var xmlhttp = new XMLHttpRequest();



	xmlhttp.onreadystatechange = function () {
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var response = JSON.parse(xmlhttp.responseText);
			if(response.hasOwnProperty("ok"))
			{
				document.getElementById("kontaktforma").submit();
			}
			else
				document.getElementById("poruka_broj").style.visibility = "visible";
		
		}
	}

	xmlhttp.open("GET", "http://zamger.etf.unsa.ba/wt/postanskiBroj.php?mjesto=" + grad + "&postanskiBroj=" + postanski, true);
	xmlhttp.send();
}
