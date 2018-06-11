<?php
	if($_FILES):
		$uploaddir = 'http://localhost/aulas/ajax/img/';
		$arquivo = $_FILES['fotografia'];

		print_r($arquivo);
		
		if(move_uploaded_file($arquivo['tmp_name'],$uploaddir.$arquivo['name']))
		{
			echo "Imagem Enviada com sucesso";
		}
		else
		{
			echo "Erro ao enviar a imagem";	
		}
	endif

?>