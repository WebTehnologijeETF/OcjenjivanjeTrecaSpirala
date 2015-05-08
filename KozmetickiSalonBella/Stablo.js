function Lice_otvori()
{
    if(document.getElementById("podstablo1").style.display=="block")
    {
        document.getElementById("podstablo1").style.display = "none";
        document.getElementById("lice").innerHTML = "[+]" + document.getElementById("lice").innerHTML.substring(3);
    }
    else
    {
        document.getElementById("lice").innerHTML = "[-]" + document.getElementById("lice").innerHTML.substring(3);
        document.getElementById("podstablo1").style.display = "block";
        document.getElementById("podstablo2").style.display = "none";
        document.getElementById("podstablo3").style.display = "none";
    }
    document.getElementById("podpodstablo1").style.display = "none";
    document.getElementById("podpodstablo2").style.display = "none";
}

function Tretmani_otvori()
{
    if(document.getElementById("podpodstablo1").style.display=="block")
    {
        document.getElementById("podpodstablo1").style.display = "none";
        document.getElementById("tretmanilica").innerHTML = "[+]" + document.getElementById("tretmanilica").innerHTML.substring(3);
    }
    else
    {
        document.getElementById("tretmanilica").innerHTML = "[-]" + document.getElementById("tretmanilica").innerHTML.substring(3);
        document.getElementById("podpodstablo1").style.display = "block";
        document.getElementById("podpodstablo2").style.display = "none";
    }
}

function Makeup_otvori()
{
    if(document.getElementById("podpodstablo2").style.display=="block")
    {
        document.getElementById("podpodstablo2").style.display = "none";
        document.getElementById("makeup").innerHTML = "[+]" + document.getElementById("makeup").innerHTML.substring(3);
    }
    else
    {
        document.getElementById("makeup").innerHTML = "[-]" + document.getElementById("makeup").innerHTML.substring(3);
        document.getElementById("podpodstablo2").style.display = "block";
        document.getElementById("podpodstablo1").style.display = "none";
    }   
}

function Nokti_otvori()
{
    if(document.getElementById("podstablo2").style.display=="block")
    {
        document.getElementById("nokti").innerHTML = "[+]" + document.getElementById("nokti").innerHTML.substring(3);
        document.getElementById("podstablo2").style.display = "none";
    }
    else
    {
        document.getElementById("nokti").innerHTML = "[-]" + document.getElementById("nokti").innerHTML.substring(3);
        document.getElementById("podstablo2").style.display = "block";
        document.getElementById("podstablo1").style.display = "none";
        document.getElementById("podstablo3").style.display = "none";
    }  
}

function Tijelo_otvori()
{
    if(document.getElementById("podstablo3").style.display=="block")
    {
        document.getElementById("podstablo3").style.display = "none";
        document.getElementById("tijelo").innerHTML = "[+]" + document.getElementById("tijelo").innerHTML.substring(3);
    }
    else
    {
        document.getElementById("tijelo").innerHTML = "[-]" + document.getElementById("tijelo").innerHTML.substring(3);
        document.getElementById("podstablo3").style.display = "block";
        document.getElementById("podstablo1").style.display = "none";
        document.getElementById("podstablo2").style.display = "none";
    }  
}