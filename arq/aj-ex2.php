<?php
	if($_GET):
		$NomeUsr = $_GET['nome'];
		$Idade	 = $_GET['idade'];

		if($Idade >= 18)
		{
			echo "Usuario ".$NomeUsr." maior de idade";
		}
		else
		{
			echo "Usuario ".$NomeUsr." menor de idade";	
		}
	endif

?>