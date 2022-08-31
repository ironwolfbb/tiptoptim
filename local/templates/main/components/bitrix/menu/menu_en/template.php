<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die(); ?>
<div class="menu">
    <div class="menu__inner">
        <ul class="menu__list">
            <? foreach ($arResult as $arItem): ?>
                <li class="menu__item">
                    <a href="<?= $arItem['LINK'] ?>" class="menu__link"><?= $arItem['TEXT'] ?></a>
                </li>
            <? endforeach; ?>
        </ul>
        <!-- <a href="https://docs.google.com/forms/d/e/1FAIpQLScQ8sSy3VGLJ3J6MBH-rT7ZyX-R7YX-BpElKc_cmkSB3ycUPA/viewform"
           target="_blank" class="button menu__button">
            <span class="button__text">Заполнить бриф</span>
        </a> -->
        <a href="#" class="button menu__button modal-btn" id="briefBtnMobile">
            <span class="button__text">Fill in the brief</span>
        </a>
    </div>
</div>
