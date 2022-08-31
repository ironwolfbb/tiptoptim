<!doctype html>
<?
define("SITE_SERVER_PROTOCOL", (CMain::IsHTTPS()) ? "https://" : "http://"); // Переменная определяет протокол, по которому работает ваш сайт
$curPage = $APPLICATION->GetCurPage(); // Получаем текущий адрес страницы
?>
<html lang="<?= LANGUAGE_ID ?>">
<head itemscope itemtype="http://schema.org/WPHeader">
    <title itemprop="name"><?php $APPLICATION->ShowTitle() ?> - TIP-TOP TEAM</title>
<meta itemprop="description" name="description"  content="<?=$APPLICATION->ShowProperty("description")?>">
<meta itemprop="keywords" name="keywords" content="<?=$APPLICATION->ShowProperty("keywords")?>"> 
<meta content="https://<?=$_SERVER['SERVER_NAME'].$APPLICATION->GetCurPage();?>" property="og:url">
<meta property="og:type" content="website">
<meta property="og:title" content="<?$APPLICATION->ShowProperty("title")?>">
<meta property="og:description" content="<?=$APPLICATION->ShowProperty("description")?>">
<meta property="og:image" content="<?=$APPLICATION->ShowProperty("og:image")?>">
<link rel="canonical" href="https://<?=$_SERVER['SERVER_NAME'].$APPLICATION->GetCurPage();?>" />



    <?php $APPLICATION->ShowHead() ?>

    <?php
    $assetManager = new Local\Util\Assets();
    ?>

    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
	<meta name="cmsmagazine" content="189f7bf1ce74ebf1535cc7e1d6cd03eb" />
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&amp;subset=cyrillic-ext"
          rel="stylesheet">
	<!--<link rel="stylesheet" href="<?= $assetManager->getEntry('global.css') ?>">-->
	<link rel="stylesheet" href="/local/build/main.css">
    <link data-n-head="true" rel="shortcut icon" href="<?=SITE_TEMPLATE_PATH?>/favicons/favicon.ico">
    <link data-n-head="true" rel="icon" type="image/png" size="16x16" href="<?=SITE_TEMPLATE_PATH?>/favicons/favicon-16x16.png">
    <link data-n-head="true" rel="icon" type="image/png" size="32x32" href="<?=SITE_TEMPLATE_PATH?>/favicons/favicon-32x32.png">

    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<!-- Yandex.Metrika counter -->

<script type="text/javascript">
var yaParams = {ip_adress: "<?php echo $_SERVER['REMOTE_ADDR'];?>"}    //объявляем параметр ip_adress и записываем в него IP посетителя 
</script>

<script type="text/javascript" >
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(50774233, "init", {
        id:50774233,
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true,
		params:window.yaParams,
   });
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/50774233" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-126962562-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-126962562-1');
</script>

<?$APPLICATION->IncludeComponent(
	"bitrix:breadcrumb", 
	"universal", 
	array(
		"START_FROM" => "0",
		"PATH" => "",
		"SITE_ID" => "s1",
		"COMPONENT_TEMPLATE" => "universal"
	),
	false
);?>
</head>

<body class="<? $APPLICATION->ShowProperty("page_type") ?>">

<?php $APPLICATION->ShowPanel() ?>

<? $APPLICATION->IncludeComponent("bitrix:menu", isset($en) ? "menu_en" : "menu", Array(
    "ALLOW_MULTI_SELECT" => "N",    // Разрешить несколько активных пунктов одновременно
    "CHILD_MENU_TYPE" => "left",    // Тип меню для остальных уровней
    "DELAY" => "N",    // Откладывать выполнение шаблона меню
    "MAX_LEVEL" => "1",    // Уровень вложенности меню
    "MENU_CACHE_GET_VARS" => array(    // Значимые переменные запроса
        0 => "",
    ),
    "MENU_CACHE_TIME" => "3600",    // Время кеширования (сек.)
    "MENU_CACHE_TYPE" => "N",    // Тип кеширования
    "MENU_CACHE_USE_GROUPS" => "Y",    // Учитывать права доступа
    "ROOT_MENU_TYPE" => "left",    // Тип меню для первого уровня
    "USE_EXT" => "N",    // Подключать файлы с именами вида .тип_меню.menu_ext.php
),
    false
);


?>

<?

if (isset($en)) {
    ?>

    <header class="header" role="banner">
        <div class="header__inner">
            <a href="/en/" class="header__logo"></a>
            <div class="header__items">
                <ul style="font-size: 12px">
                    <li><a style="color: #fff;" href="/">RU</a></li>
                    <li style="color: #4d4d4d;">EN</li>
                </ul>
                <!-- <a href="https://goo.gl/forms/OL0Vly25o5OfWMng2" onclick="ym(50774233, 'reachGoal', 'ON_CLICK_BRIF'); return true;" target="_blank" class="header__button button">
                    <span class="button__text">Fill in the brif</span>
                </a> -->
                <a href="https://goo.gl/forms/OL0Vly25o5OfWMng2" class="header__button button modal-btn" id="briefBtn">
                    <span class="button__text">Fill in the brief</span>
                </a>
                <button type="button" class="hamburger" data-menu-mobile>
                    <span class="hamburger__line"></span>
                    <span class="hamburger__line"></span>
                    <span class="hamburger__line"></span>
                </button>
            </div>

        </div>
    </header>

    <?
} else {
    ?>

    <header class="header" role="banner">
        <div class="header__inner">
            <a href="/" class="header__logo"></a>
            <div class="header__items">
                <ul style="font-size: 12px">
                    <li style="color: #4d4d4d;">RU</li>
                    <li><a style="color: #fff;" href="/en">EN</a></li>
                </ul>
                <!-- <a href="https://goo.gl/forms/OL0Vly25o5OfWMng2" onclick="ym(50774233, 'reachGoal', 'ON_CLICK_BRIF'); return true;" target="_blank" class="header__button button">
                    <span class="button__text">Заполнить бриф</span>
                </a> -->
                <a href="https://goo.gl/forms/OL0Vly25o5OfWMng2" class="header__button button modal-btn" id="briefBtn">
                    <span class="button__text">Заполнить бриф</span>
                </a>
                <button type="button" class="hamburger" data-menu-mobile>
                    <span class="hamburger__line"></span>
                    <span class="hamburger__line"></span>
                    <span class="hamburger__line"></span>
                </button>
            </div>
        </div>
    </header>

    <?
}

?>



<main class="main" role="main">
