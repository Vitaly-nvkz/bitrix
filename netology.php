
<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Узнать город по ip адресу");
?>

<?php
\CJSCore::Init(['netology.demotext']);
 ?>



<div>
<div>
Введите ip адрес
</div>

<form id="form">
	 <input id="ip"type="text" name="ip">
	 <button type="submit">Узнать город</button>
</form>	
<location></location> 
</div>




<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?><?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>