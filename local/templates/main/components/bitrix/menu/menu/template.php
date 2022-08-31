<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die(); ?>
<div class="menu">
    <div class="menu__inner">
        <nav itemscope itemtype="http://schema.org/SiteNavigationElement">
        <ul class="menu__list">
            <? foreach ($arResult as $arItem): ?>
                <li class="menu__item">
					<a itemprop="url" href="<?= $arItem['LINK'] ?>" class="menu__link"><span itemprop="name"><?= $arItem['TEXT'] ?></span></a>
                </li>
            <? endforeach; ?>
        </ul>
	</nav>
        <!-- <a href="https://docs.google.com/forms/d/e/1FAIpQLScQ8sSy3VGLJ3J6MBH-rT7ZyX-R7YX-BpElKc_cmkSB3ycUPA/viewform"
           target="_blank" class="button menu__button">
            <span class="button__text">Заполнить бриф</span>
        </a> -->
        <a href="#" class="button menu__button modal-btn" id="briefBtnMobile">
            <span class="button__text">Заполнить бриф</span>
        </a>
    </div>
</div>
