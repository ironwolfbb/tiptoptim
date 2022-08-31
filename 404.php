<?
include_once($_SERVER['DOCUMENT_ROOT'].'/bitrix/modules/main/include/urlrewrite.php');

CHTTP::SetStatus("404 Not Found");
@define("ERROR_404","Y");

require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");

$APPLICATION->SetTitle("Страница не найдена");?>

<div class="not-found">
        <div class="not-found__inner">
            <div class="heading">
                <p class="heading__caption">ошибка 404</p>
                <h1 class="heading__title">Страница не найдена</h1>
                <p class="heading__text">Возможно, вы неправильно набрали адрес, или такой страницы на сайте больше не
                    существует.</p>
				<a href="/" class="button">
                    <span class="button__text">На главную</span>
                </a>
            </div>
        </div>
    </div>

<?php require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>
