<?php
require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/modules/main/include/prolog_before.php");
CModule::IncludeModule("iblock");

// Создаем новый экземляр класса
$el = new CIBlockElement;

// Пока что без свойств, но потом можно будет добавить
$PROP = [];

$_POST = json_decode(file_get_contents('php://input'), true);
$formMainName = $_POST['formMainName'];
$formMainTel = $_POST['formMainTel'];
$formBriefEmail = $_POST['formBriefEmail'];
$formBriefCompanyName = $_POST['formBriefCompanyName'];
$formMainDescription = $_POST['formMainDescription'];
$formTheme = $_POST['formTheme'];
$formBody = $_POST['formBody'];

$arLoadProductArray = Array(
    "MODIFIED_BY" => 1, // кем изменен
    "IBLOCK_SECTION_ID" => false, // без раздела
    "IBLOCK_ID" => 4, // IBLOCK
    "PROPERTY_VALUES" => $PROP, // свойства
    "NAME" => $formMainName, // имя элемента
    "ACTIVE" => "Y", // активный или нет
	"PREVIEW_TEXT" => 'Телефон: '.$formMainTel, // телефон кладем в Превью текст
	"DETAIL_TEXT" => $formMainDescription .' ', // описание в детальный текст
);

$config['smtp_username'] = 'mail-tiptopteam@yandex.ru';  //Смените на адрес своего почтового ящика.
$config['smtp_port'] = '465'; // Порт работы.
$config['smtp_host'] =  'ssl://smtp.yandex.ru';  //сервер для отправки почты
$config['smtp_password'] = 'teamTiptop-102';  //Измените пароль
$config['smtp_debug'] = true;  //Если Вы хотите видеть сообщения ошибок, укажите true вместо false
$config['smtp_charset'] = 'utf-8';  //кодировка сообщений. (windows-1251 или utf-8, итд)
$config['smtp_from'] = 'TipTopTeam'; //Ваше имя - или имя Вашего сайта. Будет показывать при прочтении в поле "От кого"

function smtpmail($to='', $mail_to, $subject, $message, $headers='') {
    global $config;
    $SEND = "Date: ".date("D, d M Y H:i:s") . " UT\r\n";
    $SEND .= 'Subject: =?'.$config['smtp_charset'].'?B?'.base64_encode($subject)."=?=\r\n";
    if ($headers) $SEND .= $headers."\r\n\r\n";
    else
    {
            $SEND .= "Reply-To: ".$config['smtp_username']."\r\n";
            $SEND .= "To: \"=?".$config['smtp_charset']."?B?".base64_encode($to)."=?=\" <$mail_to>\r\n";
            $SEND .= "MIME-Version: 1.0\r\n";
            $SEND .= "Content-Type: text/html; charset=\"".$config['smtp_charset']."\"\r\n";
            $SEND .= "Content-Transfer-Encoding: 8bit\r\n";
            $SEND .= "From: \"=?".$config['smtp_charset']."?B?".base64_encode($config['smtp_from'])."=?=\" <".$config['smtp_username'].">\r\n";
            $SEND .= "X-Priority: 3\r\n\r\n";
    }
    $SEND .=  $message."\r\n";
     if( !$socket = fsockopen($config['smtp_host'], $config['smtp_port'], $errno, $errstr, 30) ) {
        if ($config['smtp_debug']) echo $errno."<br>".$errstr;
        return false;
     }
 
    if (!server_parse($socket, "220", __LINE__)) return false;
 
    fputs($socket, "HELO " . $config['smtp_host'] . "\r\n");
    if (!server_parse($socket, "250", __LINE__)) {
        if ($config['smtp_debug']) echo '<p>Не могу отправить HELO!</p>';
        fclose($socket);
        return false;
    }
    fputs($socket, "AUTH LOGIN\r\n");
    if (!server_parse($socket, "334", __LINE__)) {
        if ($config['smtp_debug']) echo '<p>Не могу найти ответ на запрос авторизаци.</p>';
        fclose($socket);
        return false;
    }
    fputs($socket, base64_encode($config['smtp_username']) . "\r\n");
    if (!server_parse($socket, "334", __LINE__)) {
        if ($config['smtp_debug']) echo '<p>Логин авторизации не был принят сервером!</p>';
        fclose($socket);
        return false;
    }
    fputs($socket, base64_encode($config['smtp_password']) . "\r\n");
    if (!server_parse($socket, "235", __LINE__)) {
        if ($config['smtp_debug']) echo '<p>Пароль не был принят сервером как верный! Ошибка авторизации!</p>';
        fclose($socket);
        return false;
    }
    fputs($socket, "MAIL FROM: <".$config['smtp_username'].">\r\n");
    if (!server_parse($socket, "250", __LINE__)) {
        if ($config['smtp_debug']) echo '<p>Не могу отправить комманду MAIL FROM: </p>';
        fclose($socket);
        return false;
    }
    fputs($socket, "RCPT TO: <" . $mail_to . ">\r\n");
 
    if (!server_parse($socket, "250", __LINE__)) {
        if ($config['smtp_debug']) echo '<p>Не могу отправить комманду RCPT TO: </p>';
        fclose($socket);
        return false;
    }
    fputs($socket, "DATA\r\n");
 
    if (!server_parse($socket, "354", __LINE__)) {
        if ($config['smtp_debug']) echo '<p>Не могу отправить комманду DATA</p>';
        fclose($socket);
        return false;
    }
    fputs($socket, $SEND."\r\n.\r\n");
 
    if (!server_parse($socket, "250", __LINE__)) {
        if ($config['smtp_debug']) echo '<p>Не смог отправить тело письма. Письмо не было отправленно!</p>';
        fclose($socket);
        return false;
    }
    fputs($socket, "QUIT\r\n");
    fclose($socket);
    return TRUE;
}
function server_parse($socket, $response, $line = __LINE__) {
    global $config;
    while (@substr($server_response, 3, 1) != ' ') {
        if (!($server_response = fgets($socket, 256))) {
            if ($config['smtp_debug']) echo "<p>Проблемы с отправкой почты!</p>$response<br>$line<br>";
            return false;
        }
    }
    if (!(substr($server_response, 0, 3) == $response)) {
        if ($config['smtp_debug']) echo "<p>Проблемы с отправкой почты!</p>$response<br>$line<br>";
        return false;
    }
    return true;
}


// Если имя и телефон не заполнены
if (!$formMainName || !$formMainTel || !$formBriefEmail || !$formBriefCompanyName) {
    $response['OK'] = false;
} else {
	// smtpmail('Модератору сайта https://tiptopteam.ru/', 'grachev.d@red-promo.ru', $formTheme, $formBody);
	if (smtpmail('Модератору сайта https://tiptopteam.ru/', 'info@tiptopteam.ru', $formTheme, $formBody)) {
		$PRODUCT_ID = $el->Add($arLoadProductArray);
		//json ответ
		$response['OK'] = true;
	} else {
		$response['OK'] = false;
	}
}
echo json_encode($response);