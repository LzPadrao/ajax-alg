document.getElementById("btn-busca").onclick = function()
{
	var xml_http = new XMLHttpRequest();
	xml_http.onreadystatechange = function()
	{
		if(xml_http.readyState==4 && xml_http.status==200)
		document.getElementById("retorno").innerHTML=xml_http.responseText;
	};

	xml_http.open("GET","./arq/aj-ex1.txt",true);
	xml_http.send();
};