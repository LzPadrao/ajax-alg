nomeUsr 	= prompt("Informe seu nome:");
idadeUsr	= prompt("Informe sua idade");

document.getElementById("btn-busca").onclick = function()
{
	var xml_http = new XMLHttpRequest();
	xml_http.onreadystatechange = function()
	{
		if(xml_http.readyState==4&&xml_http.status==200)
		document.getElementById("retorno").innerHTML=xml_http.responseText;
	};
	// a variavel URL deve ser trocada de acordo com a estrutura de pasta do seu projeto
	var url="http://localhost/aulas/ajax/arq/aj-ex2.php?nome="+nomeUsr+"&idade="+idadeUsr;
	xml_http.open("GET",url,true);
	xml_http.send();
};