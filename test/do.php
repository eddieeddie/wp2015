<?php
chmod("/file.txt",0777);
$text = $_POST["text"];
if($text)
{
	if(strcasecmp((string)$text, "\$clear") == 0)
	{
		file_put_contents("chat_record.txt", "");/*�M��txt*/
		file_put_contents("like_record.txt", 0);/*�M��txt*/
	    echo file_get_contents("chat_record.txt");/*��Xtxt���e*/
	}
	else
	{
	    $text = htmlspecialchars($text);/*��J�r��*/
	    $text .= "<br>";/*��J�r��[�W�Ŧ�*/
	    file_put_contents("chat_record.txt", $text, FILE_APPEND);/*�[��txt��*/
	    echo file_get_contents("chat_record.txt");/*��Xtxt���e*/
	}
}
else
{
    echo file_get_contents("chat_record.txt");/*��Xtxt���e*/
}
?>