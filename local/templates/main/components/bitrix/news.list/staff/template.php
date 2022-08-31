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
?>
<div class="wrap">
    <div class="wrap__inner">
        <div class="wrap__heading heading">
            <p class="heading__caption">Команда</p>
            <h1 class="heading__title">Кто мы?</h1>
        </div>
        <div class="wrap__block">
            <div class="team">
                <div class="team__block">
                    <div class="founders">
						<div class="" data-aos-custom data-aos="fade-up" data-aos-delay="25"
                             data-aos-duration="900" data-aos-easing="ease-out">
                            <p class="team__text">Сегодня TIP-TOP TEAM – это более двадцати талантливых, амбициозных, смелых ребят – настоящих профессионалов в своем деле. А начиналось все в 2014 году, когда трое друзей искали идеальный способ самовыражения. Итогом поиска стало создание нашей студии. </p>
                            <!-- <p class="team__text">Талантливые, амбициозные, смелые, энергичные и ещё много приятных прилагательных: в нашей студии собраны ценные кадры. Сегодня в TIP-TOP TEAM придумывает, снимает и творит команда отличных ребят за мастерство которых отвечают трое основателей студии. В 2014 году они создали TIP-TOP TEAM в поисках идеальной формы самовыражения. Так друзья по жизни стали ещё и партнерами по бизнесу.</p> -->
                        </div>
                    </div>
                    <div class="founder__group">
                        <?php foreach ($arResult['TEAM_MAIN'] as $arItem): ?>
                        <div class="founder__item">
                            <div class="founder__person" data-aos-custom data-aos="fade-up"
                                     data-aos-delay="<?= $arItem['ANIMATION'] ?>"
                                     data-aos-duration="900" data-aos-easing="ease-out">
                                <div class="team__row founders">
                                    <div class="team__col" data-aos-custom="" data-aos="fade-up" data-aos-delay="150" data-aos-duration="900" data-aos-easing="ease-out">
                                        <div class="founder__photo"
                                         style="background-image: url('<?= $arItem['PREVIEW_PICTURE']['SRC'] ?>');"></div>
                                    </div>
                                    <div class="team__col" data-aos-custom="" data-aos="fade-up" data-aos-delay="150" data-aos-duration="900" data-aos-easing="ease-out">
                                        <div class="founder__info">
                                            <p class="team__name"><?= $arItem['NAME'] ?></p>
                                            <p class="team__state bold"><?= $arItem['PROPERTIES']['CAPTURE']['VALUE'] ?></p>
                                            <div class="team__state text"><?= $arItem['DETAIL_TEXT'] ?></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <?php endforeach; ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
