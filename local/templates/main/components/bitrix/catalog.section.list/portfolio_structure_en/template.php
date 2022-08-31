<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */
$this->setFrameMode(true); ?>
<div class="wrap__tabs">
    <div class="tabs">
        <div class="swiper-wrapper">
            <!-- <div class="swiper-slide tabs__slide">
                <button type="button" class="tabs__button tabs__button--active" data-category="all">
                    All
                </button>
            </div> -->
            <?php $i = 0; ?>

            <? foreach ($arResult['SECTIONS'] as $arItem): ?>
                <div class="swiper-slide tabs__slide">
                    <button type="button" class="tabs__button <?= $i == 0 ? 'tabs__button--active': ''?>" <?php $i++ ?>
                            data-category="<?= $arItem['CODE'] ?>"><?= $arItem['NAME'] ?>
                    </button>
                </div>
            <? endforeach; ?>
        </div>
    </div>
</div>
