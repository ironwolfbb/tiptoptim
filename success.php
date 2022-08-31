<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Сообщение успешно отправлено");
?><div class="feedback">
  <div class="feedback__inner">
    <div class="feedback__heading heading">
      <p class="heading__caption">Спасибо!</p>
      <h1 class="heading__title">Ваше сообщение успешно отправлено!</h1>
      <a href="/" class="button">
        <span class="button__text">На главную</span>
      </a>
    </div>
  </div>
</div><?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>