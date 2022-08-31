</main>

<?php if ($_SERVER[REQUEST_URI]=="/" || $_SERVER[REQUEST_URI]=="/en/") { ?>

<footer class="footer" role="contentinfo">
    <div class="footer__inner">
        <!-- <div class="footer__contacts contacts">
            <? $APPLICATION->IncludeComponent(
            "bitrix:main.include",
            "",
            array(
                "AREA_FILE_SHOW" => "file",
                "EDIT_TEMPLATE" => "",
                "PATH" => "/__include__/footer_num1.php"
            )
        ); ?>
    <? $APPLICATION->IncludeComponent(
                    "bitrix:main.include",
                    "",
                    array(
                        "AREA_FILE_SHOW" => "file",
                        "EDIT_TEMPLATE" => "",
                        "PATH" => "/__include__/icon_telephone.php"
                    )
                );  ?>
    </a>
    <? $APPLICATION->IncludeComponent(
            "bitrix:main.include",
            "",
            array(
                "AREA_FILE_SHOW" => "file",
                "EDIT_TEMPLATE" => "",
                "PATH" => "/__include__/footer_num2.php"
            )
        ); ?>
    <? $APPLICATION->IncludeComponent(
                    "bitrix:main.include",
                    "",
                    array(
                        "AREA_FILE_SHOW" => "file",
                        "EDIT_TEMPLATE" => "",
                        "PATH" => "/__include__/icon_telephone.php"
                    )
                );  ?>
    </a>



            <? $APPLICATION->IncludeComponent(
                "bitrix:main.include",
                "",
                array(
                    "AREA_FILE_SHOW" => "file",
                    "EDIT_TEMPLATE" => "",
                    "PATH" => "/__include__/footer_email.php"
                )
            ); ?>
            <svg viewBox="0 0 15 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.1688 0H1.83426C0.82247 0 0 0.8646 0 1.92822V10.0718C0 11.1354 0.82247 12 1.83426 12H13.1657C14.1775 12 15 11.1354 15 10.0718V1.93148C15.0031 0.867863 14.1806 0 13.1688 0ZM14.1651 10.0718C14.1651 10.6493 13.7182 11.1191 13.1688 11.1191H1.83426C1.28492 11.1191 0.837988 10.6493 0.837988 10.0718V1.93148C0.837988 1.354 1.28492 0.884176 1.83426 0.884176H13.1657C13.7151 0.884176 14.162 1.354 14.162 1.93148V10.0718H14.1651Z" />
                <path d="M9.45957 5.89791L13.1281 2.43951C13.2988 2.27637 13.3143 1.99905 13.1591 1.81634C13.004 1.6369 12.7401 1.62058 12.5663 1.78371L7.50737 6.55696L6.52041 5.63037C6.5173 5.62711 6.5142 5.62385 6.5142 5.62058C6.49247 5.59774 6.47075 5.57817 6.44592 5.55859L2.42978 1.78045C2.25598 1.61732 1.99217 1.63363 1.83698 1.81634C1.6818 1.99905 1.69732 2.27637 1.87112 2.43951L5.5831 5.92727L1.88664 9.56512C1.71904 9.73151 1.70973 10.0088 1.86802 10.1883C1.95182 10.2796 2.06355 10.3286 2.17528 10.3286C2.2777 10.3286 2.38012 10.2894 2.46082 10.2111L6.21314 6.52107L7.23114 7.47703C7.31184 7.55207 7.41116 7.58796 7.51047 7.58796C7.60979 7.58796 7.71221 7.54881 7.7898 7.47376L8.83574 6.48845L12.5663 10.2144C12.647 10.296 12.7526 10.3351 12.855 10.3351C12.9667 10.3351 13.0753 10.2894 13.1591 10.1981C13.3174 10.0219 13.3112 9.7413 13.1436 9.57491L9.45957 5.89791Z" />
            </svg>
            </a>
        </div>
        <div class="footer__social social">
            <? $APPLICATION->IncludeComponent(
                "bitrix:main.include",
                "",
                array(
                    "AREA_FILE_SHOW" => "file",
                    "EDIT_TEMPLATE" => "",
                    "PATH" => "/__include__/footer_inst.php"
                )
            ); ?>
            <? $APPLICATION->IncludeComponent(
                "bitrix:main.include",
                "",
                array(
                    "AREA_FILE_SHOW" => "file",
                    "EDIT_TEMPLATE" => "",
                    "PATH" => "/__include__/footer_vk.php"
                )
            ); ?>
            <? $APPLICATION->IncludeComponent(
                "bitrix:main.include",
                "",
                array(
                    "AREA_FILE_SHOW" => "file",
                    "EDIT_TEMPLATE" => "",
                    "PATH" => "/__include__/footer_fb.php"
                )
            ); ?>
        </div> -->

        <div class="footer__reward reward">
            <div class="reward__item">
              <div class="reward__item-img"></div>
              <div class="reward__item-text">
                <div>MarSpo Awards</div>
                <div>Москва, 2020</div>
                <div class="bold">Золото</div>
              </div>
            </div>
            <div class="reward__item">
              <div class="reward__item-img"></div>
              <div class="reward__item-text">
                <div>filmat</div>
                <div>будапешт, 2019</div>
                <div class="bold">специальная награда</div>
              </div>
            </div>
            <div class="reward__item">
              <div class="reward__item-img"></div>
              <div class="reward__item-text">
                <div>wow awards</div>
                <div>Москва, 2019</div>
                <div class="bold">победа</div>
              </div>
            </div>
            <div class="reward__item">
              <div class="reward__item-img"></div>
              <div class="reward__item-text">
                <div>g8 awards</div>
                <div>москва, 2018</div>
                <div class="bold">победа</div>
              </div>
            </div>
        </div>

    </div>
</footer>

<?php  } ?>

<!-- The Modal -->
<div id="briefModal" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
    <span class="close">&times;</span>
    <?php if (isset($en) && $en) {
        $formTitle = 'Brief for advertising';
        $labelName = 'Your name';
        $labelPhone = 'Your phone';
        $notePhone = 'Without +7 or 8';
        $labelEmail = 'Your E-mail';
        $formCollapse = 'Fill in the Brief. Details';
        $labelCompanyName = 'Company name and brand name';
        $labelCompanyContacts = 'Contact person/phone/e-mail';
        $labelAdType = 'Ad media types';
        $labelAdTypeOutside = 'Outdoor advertising';
        $labelAdTypeTV = 'TV';
        $labelAdTypeInternet = 'Internet';
        $labelProduct = 'Product and its description';
        $noteProduct = 'Product name. Short description, characteristics, positive attributes, strengths and weaknesses of the product, other relevant notes.';
        $labelCompanyCompetitors = 'Main competitors';
        $labelCompanyTarget = 'Target audience';
        $noteCompanyTarget = 'Who should receive the message (age, social status, lifestyle, marital status, children)?';
        $labelCompanyKeyIdea = 'Key message';
        $noteCompanyKeyIdea = 'The most important message you need to convey to your target audience';
        $labelCompanyStyle = 'Tone and style';
        $noteCompanyStyle = 'Formal / informal; authoritative; humorous, etc.';
        $labelCompanyRequirements = 'General suggestions';
        $noteCompanyRequirements = 'Any information that may help in the development';
        $labelCompanyRestricts = 'Restrictions';
        $noteCompanyRestricts = 'Practical, legal, budgetary';
        $labelCompanyLength = 'Timing (seconds)';
        $noteCompanyLength = 'The presence of a short or special version';
        $labelCompanyGoals = 'Advertising campaign goals';
        $noteCompanyGoals = 'Goal achievement criterias';
        $labelCompanyExamples = 'Examples you like';
        $btnSend = 'Send';
        $formAgreement = 'By clicking the "Send" button, I give my consent to the processing of';
        $formAgreement2 = 'personal data.';
    } else {
        $formTitle = 'Бриф на креатив';
        $labelName = 'Ваше имя';
        $labelPhone = 'Телефон';
        $notePhone = 'Введите без +7 или 8';
        $labelEmail = 'Ваш E-mail';
        $formCollapse = 'Заполнить бриф на креатив. Подробнее';
        $labelCompanyName = 'Название компании и бренда';
        $labelCompanyContacts = 'Контактное лицо/телефон/почта';
        $labelAdType = 'Планируемые носители рекламной кампании';
        $labelAdTypeOutside = 'Наружная реклама';
        $labelAdTypeTV = 'ТВ';
        $labelAdTypeInternet = 'Интернет';
        $labelProduct = 'Продукт и его описание';
        $noteProduct = 'Потребительское название товара. Краткое описание, характеристики, положительные атрибуты, сильные и слабые стороны продукта, другие актуальные замечания.';
        $labelCompanyCompetitors = 'Основные конкуренты';
        $labelCompanyTarget = 'Целевая аудитория';
        $noteCompanyTarget = 'Кто должен получить сообщение (возраст, социальный статус, стиль жизни, семейное положение, наличие детей)?';
        $labelCompanyKeyIdea = 'Ключевое сообщение';
        $noteCompanyKeyIdea = 'Самое важное сообщение, которое необходимо передать целевой аудитории';
        $labelCompanyStyle = 'Тон/стиль креатива';
        $noteCompanyStyle = 'Официальный/неформальный; авторитетный; юмористический и т.п.';
        $labelCompanyRequirements = 'Общие пожелания';
        $noteCompanyRequirements = 'Любая информация, которая может помочь в разработке';
        $labelCompanyRestricts = 'Ограничения';
        $noteCompanyRestricts = 'Практические, юридические, бюджетные';
        $labelCompanyLength = 'Хронометраж(секунд)';
        $noteCompanyLength = 'Наличие короткой или специальной версии';
        $labelCompanyGoals = 'Цели рекламной кампании';
        $noteCompanyGoals = 'По каким критериям вы поймете, что цель достигнута?';
        $labelCompanyExamples = 'Примеры, которые вам нравятся';
        $btnSend = 'Отправить';
        $formAgreement = 'Нажимая на кнопку «Отправить», я даю согласие на обработку';
        $formAgreement2 = 'персональных данных.';
    } ?>
    <div class="modal-title"><?= $formTitle; ?></div>
    <form class="form" id="briefForm" autocomplete="off">
        <input name="briefFormControl" id="briefFormControl" type="hidden">
        <div class="form__item">
            <input required="" name="formBriefName" id="formBriefName" type="text" class="input form__field">
            <span class="form__label"><?= $labelName; ?></span>
        </div>
        <div class="form__item">
            <input required="" name="formBriefPhone" id="formBriefPhone" type="text" class="input form__field phone-mask">
            <span class="form__label"><?= $labelPhone; ?></span>

        </div>
        <div class="form__item">
            <input required="" name="formBriefEmail" id="formBriefEmail" type="text" class="input form__field">
            <span class="form__label"><?= $labelEmail;  ?></span>
        </div>
        <div class="form__item">
            <input required="" id="formBriefCompanyName" type="text" class="input form__field">
            <span class="form__label"><?= $labelCompanyName; ?></span>
        </div>
        <a class="collapse-button" href="#collapseContent"><?= $formCollapse;  ?><span class="caret"></span></a>
        <div class="collapse-content" id="collapseContent" style="display: none">
            <div class="collapse-block">
                <div class="form__item">
                    <input id="formBriefCompanyContacts" type="text" class="input form__field">
                    <span class="form__label"><?= $labelCompanyContacts;  ?></span>
                </div>
                <div class="form__item--checkbox custom-checkbox-group">
                    <span class="form__label"><?= $labelAdType; ?></span>
                    <div class="custom-checkbox">
                        <input type="checkbox" id="formBriefAdType-outside" class="input">
                        <label for="formBriefAdType-outside" class="checkbox__label"><?= $labelAdTypeOutside; ?></label>
                    </div>
                    <div class="custom-checkbox">
                        <input type="checkbox" id="formBriefAdType-tv" class="input">
                        <label for="formBriefAdType-tv" class="checkbox__label"><?= $labelAdTypeTV;  ?></label>
                    </div>
                    <div class="custom-checkbox">
                        <input type="checkbox" id="formBriefAdType-internet" class="input">
                        <label for="formBriefAdType-internet" class="checkbox__label"><?= $labelAdTypeInternet;  ?></label>
                    </div>
                </div>
                <div class="form__item">
                    <span class="form__caption"><?= $labelProduct; ?></span>
                    <textarea id="formBriefProduct" class="textarea"></textarea>
                    <span class="form__note"><?= $noteProduct; ?></span>
                </div>
                <div class="form__item">
                    <input id="formBriefCompanyCompetitors" type="text" class="input form__field">
                    <span class="form__label"><?= $labelCompanyCompetitors; ?></span>
                </div>
                <div class="form__item">
                    <input id="formBriefCompanyTarget" type="text" class="input form__field">
                    <span class="form__label"><?= $labelCompanyTarget; ?></span>
                    <span class="form__note"><?= $noteCompanyTarget; ?></span>
                </div>
                <div class="form__item">
                    <input id="formBriefCompanyKeyIdea" type="text" class="input form__field">
                    <span class="form__label"><?= $labelCompanyKeyIdea; ?></span>
                    <span class="form__note"><?= $noteCompanyKeyIdea; ?></span>
                </div>
                <div class="form__item">
                    <input id="formBriefCompanyStyle" type="text" class="input form__field">
                    <span class="form__label"><?= $labelCompanyStyle; ?></span>
                    <span class="form__note"><?= $noteCompanyStyle; ?></span>
                </div>
                <div class="form__item">
                    <input id="formBriefCompanyRequirements" type="text" class="input form__field">
                    <span class="form__label"><?= $labelCompanyRequirements; ?></span>
                    <span class="form__note"><?= $noteCompanyRequirements; ?></span>
                </div>
                <div class="form__item">
                    <input id="formBriefCompanyRestricts" type="text" class="input form__field">
                    <span class="form__label"><?= $labelCompanyRestricts; ?></span>
                    <span class="form__note"><?= $noteCompanyRestricts; ?></span>
                </div>
                <div class="form__item">
                    <input id="formBriefCompanyLength" type="text" class="input form__field">
                    <span class="form__label"><?= $labelCompanyLength; ?></span>
                    <span class="form__note"><?= $noteCompanyLength; ?></span>
                </div>
                <div class="form__item">
                    <input id="formBriefCompanyGoals" type="text" class="input form__field">
                    <span class="form__label"><?= $labelCompanyGoals; ?></span>
                    <span class="form__note"><?= $noteCompanyGoals; ?></span>
                </div>
                <div class="form__item">
                    <input id="formBriefCompanyExamples" type="text" class="input form__field">
                    <span class="form__label"><?= $labelCompanyExamples; ?></span>
                </div>
            </div>
        </div>

        <div class="form__submit">
            <button id="formBriefButton" type="submit" class="button">
                <span class="button__text"><?= $btnSend; ?></span>
            </button>
        </div>
        <p class="form__agreement"><?= $formAgreement; ?> <a href="/local/templates/main/agreement.pdf" target="_blank" class="form__link"><?= $formAgreement2; ?></a></p>
    </form>
  </div>

</div>

<!-- Floating social buttons -->
<? $APPLICATION->IncludeComponent(
    "bitrix:main.include",
    "",
    array(
        "AREA_FILE_SHOW" => "file",
        "EDIT_TEMPLATE" => "",
        "PATH" => "/__include__/footer_floating_social.php"
    )
); ?>

</body>

<!-- Добавляем модалку только на странице портфолио -->
<? if (strpos($APPLICATION->GetCurPage(), '/portfolio/') !== false) : ?>
    <div id="modalVimeo" class="modal-video" tabindex="-1" role="dialog">
        <div class="modal-video__dialog">
            <div class="modal-video__inner">
                <button type="button" class="modal-video__close" data-modal-close>
                    <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.18849 5.00002L9.75385 1.43465C10.082 1.10646 10.082 0.574344 9.75385 0.246195C9.42566 -0.0820022 8.89359 -0.0820022 8.5654 0.246195L4.99998 3.81161L1.43457 0.246148C1.10637 -0.0820492 0.574308 -0.0820492 0.246112 0.246148C-0.0820374 0.574344 -0.0820374 1.10646 0.246112 1.4346L3.81153 4.99998L0.246112 8.5654C-0.0820374 8.89359 -0.0820374 9.4257 0.246112 9.75385C0.574308 10.082 1.10637 10.082 1.43457 9.75385L4.99998 6.18843L8.5654 9.75385C8.89355 10.082 9.42566 10.082 9.75385 9.75385C10.082 9.42566 10.082 8.89359 9.75385 8.5654L6.18849 5.00002Z" />
                    </svg>
                </button>
                <div class="modal-video__content">
                    <iframe class="modal-video__frame" src="" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                </div>
            </div>
        </div>
        <div class="modal-video__overlay" data-modal-close></div>
    </div>
<? endif; ?>

<? if ($APPLICATION->GetCurPage() == '/clients/' || $APPLICATION->GetCurPage() == '/en/clients/') : ?>
    <!-- Root element of PhotoSwipe. Must have class pswp. -->
    <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">

        <!-- Background of PhotoSwipe.
             It's a separate element as animating opacity is faster than rgba(). -->
        <div class="pswp__bg"></div>

        <!-- Slides wrapper with overflow:hidden. -->
        <div class="pswp__scroll-wrap">

            <!-- Container that holds slides.
                PhotoSwipe keeps only 3 of them in the DOM to save memory.
                Don't modify these 3 pswp__item elements, data is added later on. -->
            <div class="pswp__container">
                <div class="pswp__item"></div>
                <div class="pswp__item"></div>
                <div class="pswp__item"></div>
            </div>

            <!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->
            <div class="pswp__ui pswp__ui--hidden">

                <div class="pswp__top-bar">

                    <!--  Controls are self-explanatory. Order can be changed. -->

                    <div class="pswp__counter"></div>

                    <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>

                    <button class="pswp__button pswp__button--share" title="Share"></button>

                    <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>

                    <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>

                    <!-- Preloader demo http://codepen.io/dimsemenov/pen/yyBWoR -->
                    <!-- element will get class pswp__preloader--active when preloader is running -->
                    <div class="pswp__preloader">
                        <div class="pswp__preloader__icn">
                            <div class="pswp__preloader__cut">
                                <div class="pswp__preloader__donut"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                    <div class="pswp__share-tooltip"></div>
                </div>

                <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
                </button>

                <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
                </button>

                <div class="pswp__caption">
                    <div class="pswp__caption__center"></div>
                </div>
            </div>
        </div>
    </div>
<? endif; ?>

<? if ($APPLICATION->GetCurPage() == '/contacts/') : ?>
    <div id="modal-success" class="modal-success" tabindex="-1" role="dialog">
        <div class="modal-success__dialog">
            <div class="modal-success__inner">
                <button type="button" class="modal-success__close" data-close>
                    <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.18849 5.00002L9.75385 1.43465C10.082 1.10646 10.082 0.574344 9.75385 0.246195C9.42566 -0.0820022 8.89359 -0.0820022 8.5654 0.246195L4.99998 3.81161L1.43457 0.246148C1.10637 -0.0820492 0.574308 -0.0820492 0.246112 0.246148C-0.0820374 0.574344 -0.0820374 1.10646 0.246112 1.4346L3.81153 4.99998L0.246112 8.5654C-0.0820374 8.89359 -0.0820374 9.4257 0.246112 9.75385C0.574308 10.082 1.10637 10.082 1.43457 9.75385L4.99998 6.18843L8.5654 9.75385C8.89355 10.082 9.42566 10.082 9.75385 9.75385C10.082 9.42566 10.082 8.89359 9.75385 8.5654L6.18849 5.00002Z" />
                    </svg>
                </button>
                <div class="modal-success__content">
                    <p class="modal-success__title">Спасибо</p>
                    <p class="modal-success__text">Заявка отправлена</p>
                    <button type="button" class="button modal-success__accept" data-close>
                        <span class="button__text">Ок</span>
                    </button>
                </div>
            </div>
        </div>
        <div class="modal-success__overlay" data-close></div>
    </div>

<? endif; ?>
<script src="<?= $assetManager->getEntry('main.js') ?>"></script>
<script src="/local/assets/scripts/jquery/jquery-3.3.1.min.js"></script>
<script src="/local/assets/scripts/jquery-validation/jquery.validate.min.js"></script>
<script src="/local/assets/scripts/mask/jquery.mask.min.js"></script>
<script src="/local/assets/scripts/modal.js"></script>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-TMRR98LSRM"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-TMRR98LSRM');
</script>
<? if(isset($_GET['utm_campaign'])) :?>
    <script>
    let replaced = false;
    <? if ($_GET['utm_campaign'] == "poisk_moskva" || $_GET['utm_campaign'] == "poiskbanner_moskva" || $_GET['utm_campaign'] == "rsya_moskva" || $_GET['utm_campaign'] == "kms_moskva") : ?>
        let number = "74991130417";
        let numberFormat = "+7 (499) 11-30-417";
        replaced = true;
    <? elseif ($_GET['utm_campaign'] == "poisk_ufa" || $_GET['utm_campaign'] == "poiskbanner_ufa" || $_GET['utm_campaign'] == "rsya_ufa" || $_GET['utm_campaign'] == "kms_ufa") : ?>
        let number = "73472588302";
        let numberFormat = "+7 (347) 25-88-302";
        replaced = true;
    <? endif; ?>

    replaced = false; // Убрать, чтобы снова заработало, принудильно выствавил в false
    if (replaced) {
        document.addEventListener("DOMContentLoaded", function() {
            let telephons = document.querySelectorAll('.contacts__link[href^="tel:"]');
            let parentsDOM = [];
            let uniqueParentsDOM = [];
            telephons.forEach(function(item) {
                if (item.getAttribute('href').replace(/[^-0-9]/gim, '') != number) {
                    parentsDOM.push(item.parentElement);
                    item.remove();
                }
            });

            for (let str of parentsDOM) {
                if (!uniqueParentsDOM.includes(str)) {
                    uniqueParentsDOM.push(str);
                }
            }
            
            uniqueParentsDOM.forEach(function(item) {
                let a = document.createElement('a');
                a.className = "contacts__link";
                a.innerHTML = numberFormat;
                a.innerHTML += '<? $APPLICATION->IncludeComponent(
                            "bitrix:main.include",
                            "",
                            array(
                                "AREA_FILE_SHOW" => "file",
                                "EDIT_TEMPLATE" => "",
                                "PATH" => "/__include__/icon_telephone.php"
                            )
                        );  ?>';
                a.setAttribute('href', 'tel:+'+number);
                item.prepend(a);
            });
        });
    }
    </script>
<? elseif (isset($GLOBALS['cookieTelephone'])) : ?>
    <script>
    let replaced = false;
    <? if ($GLOBALS['cookieTelephone'] == "poisk_moskva" || $GLOBALS['cookieTelephone'] == "poiskbanner_moskva" || $GLOBALS['cookieTelephone'] == "rsya_moskva" || $GLOBALS['cookieTelephone'] == "kms_moskva") : ?>
        let number = "74991130417";
        let numberFormat = "+7 (499) 11-30-417";
        replaced = true;
    <? elseif ($GLOBALS['cookieTelephone'] == "poisk_ufa" || $GLOBALS['cookieTelephone'] == "poiskbanner_ufa" || $GLOBALS['cookieTelephone'] == "rsya_ufa" || $GLOBALS['cookieTelephone'] == "kms_ufa") : ?>
        let number = "73472588302";
        let numberFormat = "+7 (347) 25-88-302";
        replaced = true;
    <? endif; ?>
    replaced = false; // Убрать, чтобы снова заработало, принудильно выствавил в false
    if (replaced) {
        document.addEventListener("DOMContentLoaded", function() {
            let telephons = document.querySelectorAll('.contacts__link[href^="tel:"]');
            let parentsDOM = [];
            let uniqueParentsDOM = [];
            telephons.forEach(function(item) {
                if (item.getAttribute('href').replace(/[^-0-9]/gim, '') != number) {
                    parentsDOM.push(item.parentElement);
                    item.remove();
                }
            });

            for (let str of parentsDOM) {
                if (!uniqueParentsDOM.includes(str)) {
                    uniqueParentsDOM.push(str);
                }
            }

            uniqueParentsDOM.forEach(function(item) {
                let a = document.createElement('a');
                a.className = "contacts__link";
                a.innerHTML = numberFormat;
                a.innerHTML += '<? $APPLICATION->IncludeComponent(
                            "bitrix:main.include",
                            "",
                            array(
                                "AREA_FILE_SHOW" => "file",
                                "EDIT_TEMPLATE" => "",
                                "PATH" => "/__include__/icon_telephone.php"
                            )
                        );  ?>';
                a.setAttribute('href', 'tel:+'+number);
                item.prepend(a);
            });
        });
    }
    </script>
<? endif; ?>

<script>
    document.getElementById('briefFormControl').value = 'Ddwwq1';
    let briefFormControl = document.getElementById('briefFormControl').value;

    let formBrief = document.getElementById('briefForm'); // Форма на главной странице

    formBrief.onsubmit = function(event) {
        event.preventDefault();
        if ($("#briefForm").valid() && briefFormControl == 'Ddwwq1') {
            let formBriefName = document.getElementById('formBriefName').value,
                formBriefPhone = document.getElementById('formBriefPhone').value,
                formBriefEmail = document.getElementById('formBriefEmail').value,
                formBriefCompanyName = document.getElementById('formBriefCompanyName').value,

                formBriefCompanyContacts = document.getElementById('formBriefCompanyContacts').value,
                formBriefAdTypeOutside = document.getElementById('formBriefAdType-outside').checked,
                formBriefAdTypeTv = document.getElementById('formBriefAdType-tv').checked,
                formBriefAdTypeInternet = document.getElementById('formBriefAdType-internet').checked,
                formBriefProduct = document.getElementById('formBriefProduct').value,
                formBriefCompanyCompetitors = document.getElementById('formBriefCompanyCompetitors').value,
                formBriefCompanyTarget = document.getElementById('formBriefCompanyTarget').value,
                formBriefCompanyKeyIdea = document.getElementById('formBriefCompanyKeyIdea').value,
                formBriefCompanyStyle = document.getElementById('formBriefCompanyStyle').value,
                formBriefCompanyRequirements = document.getElementById('formBriefCompanyRequirements').value,
                formBriefCompanyRestricts = document.getElementById('formBriefCompanyRestricts').value,
                formBriefCompanyLength = document.getElementById('formBriefCompanyLength').value,
                formBriefCompanyGoals = document.getElementById('formBriefCompanyGoals').value,
                formBriefCompanyExamples = document.getElementById('formBriefCompanyExamples').value;


            if(formBriefCompanyContacts == null || formBriefCompanyContacts=="") {
                formBriefCompanyContacts = "-";
            };
            if(formBriefAdTypeOutside) {
                formBriefAdTypeOutside = "да";
            } else {
                formBriefAdTypeOutside = "нет";
            };
            if(formBriefAdTypeTv) {
                formBriefAdTypeTv = "да";
            } else {
                formBriefAdTypeTv = "нет";
            };
            if(formBriefAdTypeInternet) {
                formBriefAdTypeInternet = "да";
            } else {
                formBriefAdTypeInternet = "нет";
            };
            if(formBriefProduct == null || formBriefProduct=="") {
                formBriefProduct = "-";
            };
            if(formBriefCompanyCompetitors == null || formBriefCompanyCompetitors=="") {
                formBriefCompanyCompetitors = "-";
            };
            if(formBriefCompanyTarget == null || formBriefCompanyTarget=="") {
                formBriefCompanyTarget = "-";
            };
            if(formBriefCompanyKeyIdea == null || formBriefCompanyKeyIdea=="") {
                formBriefCompanyKeyIdea = "-";
            };
            if(formBriefCompanyStyle == null || formBriefCompanyStyle=="") {
                formBriefCompanyStyle = "-";
            };
            if(formBriefCompanyRequirements == null || formBriefCompanyRequirements=="") {
                formBriefCompanyRequirements = "-";
            };
            if(formBriefCompanyRestricts == null || formBriefCompanyRestricts=="") {
                formBriefCompanyRestricts = "-";
            };
            if(formBriefCompanyLength == null || formBriefCompanyLength=="") {
                formBriefCompanyLength = "-";
            };
            if(formBriefCompanyGoals == null || formBriefCompanyGoals=="") {
                formBriefCompanyGoals = "-";
            };
            if(formBriefCompanyExamples == null || formBriefCompanyExamples=="") {
                formBriefCompanyExamples = "-";
            };

            let formBody = 'Имя: ' + formBriefName + '<br><br>' + 'Телефон: ' + formBriefPhone + '<br><br>' + 'E-mail: ' + formBriefEmail + '<br><br>' + 'Название компании и бренда: ' + formBriefCompanyName + '<br><br>' + 'Контактное лицо/телефон/почта: ' + formBriefCompanyContacts + '<br><br>' + 'Наружная реклама: ' + formBriefAdTypeOutside + '<br><br>' + 'ТВ реклама: ' + formBriefAdTypeTv + '<br><br>' + 'Интернет реклама: ' + formBriefAdTypeInternet + '<br><br>' + 'Продукт и его описание: ' + formBriefProduct + '<br><br>' + 'Основные конкуренты: ' + formBriefCompanyCompetitors + '<br><br>' + 'Целевая аудитория: ' + formBriefCompanyTarget + '<br><br>' + 'Ключевое сообщение: ' + formBriefCompanyKeyIdea + '<br><br>' + 'Тон/стиль креатива: ' + formBriefCompanyStyle + '<br><br>' + 'Общие пожелания: ' + formBriefCompanyRequirements + '<br><br>' + 'Ограничения: ' + formBriefCompanyRestricts + '<br><br>' + 'Хронометраж(секунд): ' + formBriefCompanyLength + '<br><br>' + 'Цели рекламной кампании: ' + formBriefCompanyGoals + '<br><br>' + 'Примеры, которые вам нравятся: ' + formBriefCompanyExamples;

            let formContent = 'Имя: ' + formBriefName + '; ' + 'Телефон: ' + formBriefPhone + '; ' + 'E-mail: ' + formBriefEmail + '; ' + 'Название компании и бренда: ' + formBriefCompanyName + '; ' + 'Контактное лицо/телефон/почта: ' + formBriefCompanyContacts + '; ' + 'Наружная реклама: ' + formBriefAdTypeOutside + '; ' + 'ТВ реклама: ' + formBriefAdTypeTv + '; ' + 'Интернет реклама: ' + formBriefAdTypeInternet + '; ' + 'Продукт и его описание: ' + formBriefProduct + '; ' + 'Основные конкуренты: ' + formBriefCompanyCompetitors + '; ' + 'Целевая аудитория: ' + formBriefCompanyTarget + '; ' + 'Ключевое сообщение: ' + formBriefCompanyKeyIdea + '; ' + 'Тон/стиль креатива: ' + formBriefCompanyStyle + '; ' + 'Общие пожелания: ' + formBriefCompanyRequirements + '; ' + 'Ограничения: ' + formBriefCompanyRestricts + '; ' + 'Хронометраж(секунд): ' + formBriefCompanyLength + '; ' + 'Цели рекламной кампании: ' + formBriefCompanyGoals + '; ' + 'Примеры, которые вам нравятся: ' + formBriefCompanyExamples;

            axios.defaults.timeout = 180000;
            // axios.post('/API/callBackElem.php', {}, {
            //     params: {
            //         formMainName: formBriefName,
            //         formMainTel: formBriefPhone,
            //         formMainDescription: formContent,
            //         formTheme: 'Бриф на креатив',
            //         formBody: formBody,
            //     }
            // })
            axios.post('/API/callBackElem.php', {
                formMainName: formBriefName,
                formMainTel: formBriefPhone,
                formBriefEmail: formBriefEmail,
                formBriefCompanyName: formBriefCompanyName,
                formMainDescription: formContent,
                formTheme: 'Бриф на креатив',
                formBody: formBody,
            })
            .then(function (response) {
                let responseStatus = response.data.OK;
				if (responseStatus) {
                    let url = window.location.hostname;
                    successHandler(url);
				} else {
                    errorHandler();
                }
            })
            .catch(function (error) {
                errorHandler();   
            });
        } else {
            return false;
        }
    };

    function successHandler(url) {
        if (document.documentElement.lang == 'en') {
            window.location.href = 'https://'+ url + "/en/success";
        } else {
            window.location.href = 'https://'+ url + "/success";
        }
    }
    
    function errorHandler() {
        if (document.documentElement.lang == 'en') {
            document.getElementById('formBriefButton').innerHTML = '<span class="button__text">Ошбика при отправке</span>';
        } else {
            document.getElementById('formBriefButton').innerHTML = '<span class="button__text">Error</span>';
        }
    }


</script>

</html>