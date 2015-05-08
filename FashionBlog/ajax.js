function otvori(stranica) {
	var xhr = new XMLHttpRequest();
	xhr.open("get", stranica + ".html", true);
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4) {
			var html = this.responseText;
			var glavni = document.getElementById("glavni");
			glavni.innerHTML = html;

			if (stranica === "products") {
				pripremiProizvode();
			}
		}		
	}
	xhr.send();
}