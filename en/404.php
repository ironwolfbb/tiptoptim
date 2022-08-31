<?
include_once($_SERVER['DOCUMENT_ROOT'].'/bitrix/modules/main/include/urlrewrite.php');

CHTTP::SetStatus("404 Not Found");
@define("ERROR_404","Y");

require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");

$APPLICATION->SetTitle("Страница не найдена");?>

<div class="not-found">
        <div class="not-found__inner">
            <div class="heading">
                <p class="heading__caption">Error 404</p>
                <h1 class="heading__title">Page is not exist</h1>
                <p class="heading__text">Perhaps you typed the url incorrectly, or page on the site is no longer
                     exist.</p>
				<a href="/" class="button">
                    <span class="button__text">Home page</span>
                </a>
            </div>
        </div>
    </div>

<?php require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>
