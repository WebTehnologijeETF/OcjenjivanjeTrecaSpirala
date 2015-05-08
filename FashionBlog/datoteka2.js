var na = function (element, event, callback) {
    if (window.addEventListener) {
        element.addEventListener(event, callback, false);
    } else {
        element.attachEvent('on' + event, callback);
    }
};

function otvoriMeni(e) {
    var meni = document.getElementById("dropdown");

	if (meni.className === "otvoreno") {
		meni.className = "";	
	} else {
		meni.className = "otvoreno";
	}

	e.stopPropagation();
}

function zatvoriMeni(e) {
	var meni = document.getElementById("dropdown");
	meni.className = "";
}

na(document.getElementById('dropdown'), 'click', otvoriMeni);
na(document.body, 'click', zatvoriMeni);