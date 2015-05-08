function Zatvori () {
	document.getElementById("ListaMajiceMuskarci").style.display="none";
	document.getElementById("ListaKosulja").style.display="none";
	document.getElementById("ListaPoluveriMuskarci").style.display="none";
	document.getElementById("ListaHlacaMuskarci").style.display="none";
	document.getElementById("ListaDonjeRubljeMuskarci").style.display="none";
	document.getElementById("ListaGacaMuskarci").style.display="none";
	document.getElementById("ListaJakniKaputaMuskarci").style.display="none";
	document.getElementById("ListaJakniMuskarci").style.display="none";
	document.getElementById("ListaKaputaMuskarci").style.display="none";
	document.getElementById("ListaSorcevaMuskarci").style.display="none";
	document.getElementById("ListaKupacihMuskarci").style.display="none";
	document.getElementById("ListaMuskarci").style.display="block";

}
function KlikNaMuskarce()
{
	if(document.getElementById("ListaMuskarci").style.display=="none")
	{
		document.getElementById("ListaMuskarci").style.display="block";
		document.getElementById("SlikaNestaniM").src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-16.png";
	}
	else
	{
		document.getElementById("ListaMuskarci").style.display="none";
		document.getElementById("SlikaNestaniM").src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-down-01-16.png";
	}
}
function KlikNaSorceveM()
{
	if(document.getElementById("ListaSorcevaMuskarci").style.display=="none")
	{
		document.getElementById("ListaSorcevaMuskarci").style.display="block";
		document.getElementById("SlikaNestaniMSorcevi").src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-16.png";
	}
	else
	{
		document.getElementById("ListaSorcevaMuskarci").style.display="none";
		document.getElementById("SlikaNestaniMSorcevi").src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-down-01-16.png";
	}
}
function KlikNaJakneM()
{
	if(document.getElementById("ListaJakniMuskarci").style.display=="none")
	{
		document.getElementById("ListaJakniMuskarci").style.display="block";
		document.getElementById("SlikaNestaniMJakne").src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-16.png";
	}
	else
	{
		document.getElementById("ListaJakniMuskarci").style.display="none";
		document.getElementById("SlikaNestaniMJakne").src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-down-01-16.png";
	}
}
function KlikNaKaputeM()
{
	if(document.getElementById("ListaKaputaMuskarci").style.display=="none")
	{
		document.getElementById("ListaKaputaMuskarci").style.display="block";
		document.getElementById("SlikaNestaniMKaputi").src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-16.png";
	}
	else
	{
		document.getElementById("ListaKaputaMuskarci").style.display="none";
		document.getElementById("SlikaNestaniMKaputi").src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-down-01-16.png";
	}
}
function KlikNaJakneKaputeM()
{
	if(document.getElementById("ListaJakniKaputaMuskarci").style.display=="none")
	{
		document.getElementById("ListaJakniKaputaMuskarci").style.display="block";
		document.getElementById("SlikaNestaniMJakneKaputi").src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-16.png";
	}
	else
	{
		document.getElementById("ListaJakniKaputaMuskarci").style.display="none"
		document.getElementById("SlikaNestaniMJakneKaputi").src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-down-01-16.png";

	}
}
function KlikNaKupaceM()
{
	if(document.getElementById("ListaKupacihMuskarci").style.display=="none")
	{
		document.getElementById("ListaKupacihMuskarci").style.display="block";
		document.getElementById("SlikaNestaniMKupace").src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-16.png";
	}
	else
	{
		document.getElementById("ListaKupacihMuskarci").style.display="none";
		document.getElementById("SlikaNestaniMKupace").src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-down-01-16.png";
	}
}
function KlikNaMajiceM()
{
	if(document.getElementById("ListaMajiceMuskarci").style.display=="none")
	{
		document.getElementById("ListaMajiceMuskarci").style.display="block";
		document.getElementById("SlikaNestaniMMajice").src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-16.png";
	}
	else
	{
		document.getElementById("ListaMajiceMuskarci").style.display="none";
		document.getElementById("SlikaNestaniMMajice").src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-down-01-16.png";
	}
}
function KlikNaKosulje1()
{
	if(document.getElementById("ListaKosulja").style.display=="none")
	{
		document.getElementById("ListaKosulja").style.display="block";
		document.getElementById("SlikaNestaniMKosulje").src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-16.png";
	}
	else
	{
		document.getElementById("ListaKosulja").style.display="none";
		document.getElementById("SlikaNestaniMKosulje").src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-down-01-16.png";
	}
}
function KlikNaPoluvere1()
{
	if(document.getElementById("ListaPoluveriMuskarci").style.display=="none")
	{
		document.getElementById("ListaPoluveriMuskarci").style.display="block";
		document.getElementById("SlikaNestaniMPoluveri").src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-16.png";
	}
	else
	{
		document.getElementById("ListaPoluveriMuskarci").style.display="none";
		document.getElementById("SlikaNestaniMPoluveri").src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-down-01-16.png";
	}
}
function KlikNaHlaceM()
{
	if(document.getElementById("ListaHlacaMuskarci").style.display=="none")
	{
		document.getElementById("ListaHlacaMuskarci").style.display="block";
		document.getElementById("SlikaNestaniMHlace").src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-16.png";
	}
	else
	{
		document.getElementById("ListaHlacaMuskarci").style.display="none";
		document.getElementById("SlikaNestaniMHlace").src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-down-01-16.png";
	}

}
function KlikNaDonjeRubljeMuskarci()
{
	if(document.getElementById("ListaDonjeRubljeMuskarci").style.display=="none")
	{
		document.getElementById("ListaDonjeRubljeMuskarci").style.display="block";
		document.getElementById("SlikaNestaniMDonjeRublje").src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-16.png";
	}
	else
	{
		document.getElementById("ListaDonjeRubljeMuskarci").style.display="none";
		document.getElementById("SlikaNestaniMDonjeRublje").src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-down-01-16.png";
	}
}
function KlikNaGaceM()
{
	if(document.getElementById("ListaGacaMuskarci").style.display=="none")
	{
		document.getElementById("ListaGacaMuskarci").style.display="block";
		document.getElementById("SlikaNestaniMGace").src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-16.png";
	}
	else
	{
		document.getElementById("ListaGacaMuskarci").style.display="none";
		document.getElementById("SlikaNestaniMGace").src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-down-01-16.png";
	}

}