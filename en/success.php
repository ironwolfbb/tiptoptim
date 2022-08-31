<?
$en = true;
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Your message has been sent successfully");
?><div class="feedback">
  <div class="feedback__inner">
    <div class="feedback__heading heading">
      <p class="heading__caption">Thank you!</p>
      <h1 class="heading__title">Your message has been sent successfully!</h1>
      <a href="/" class="button">
        <span class="button__text">Home page</span>
      </a>
    </div>
  </div>
</div><?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>