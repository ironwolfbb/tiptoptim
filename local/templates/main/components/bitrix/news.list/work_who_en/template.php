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
$this->setFrameMode(true);

function enSort($a, $b)
{
    if ($a['SORT'] == $b['SORT']) {
        return 0;
    }
    return ($a['SORT'] < $b['SORT']) ? -1 : 1;
}
usort($arResult['ITEMS'], "enSort");


?>
<div class="wrap__heading heading">
    <h1 class="heading__title">Who we work with?</h1>
</div>
<div class="wrap__block">
    <div class="partners">
        <div class="partners__inner">
            <? foreach ($arResult['ITEMS'] as $arItem): ?>
                <div class="partners__item" data-photoswipe>
                    <div class="partners__plank" data-aos-custom data-aos="fade-right" data-aos-delay="50"
                         data-aos-duration="900" data-aos-easing="ease-out">
                        <div class="partners__logo"><? print_r($arItem['PROPERTIES']['LOGO']['~VALUE']['TEXT']) ?></div>
                        <p class="partners__thanks">Letter of thanks</p>
                        <button type="button" class="partners__show"
                                data-image="<?= CFile::GetPath($arItem['PROPERTIES']['IMAGES']['VALUE']) ?>"
                                data-size="<?= $arItem['PROPERTIES']['SIZE']['VALUE'] ?>">Look
                        </button>
                    </div>
                    <div class="partners__info" data-aos-custom data-aos="fade-left" data-aos-delay="50"
                         data-aos-duration="900" data-aos-easing="ease-out">
                        <p class="partners__text"><?= $arItem['PREVIEW_TEXT'] ?></p>
                        <p class="partners__caption"><?= $arItem['PROPERTIES']['CAPTURE']['VALUE'] ?></p>
                    </div>
                </div>
            <? endforeach; ?>
        </div>
    </div>
</div>
