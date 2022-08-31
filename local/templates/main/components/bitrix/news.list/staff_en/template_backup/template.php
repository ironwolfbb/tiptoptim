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
            <p class="heading__caption">Team</p>
            <h1 class="heading__title">Who are we?</h1>
        </div>
        <div class="wrap__block">
            <div class="team">
                <div class="team__block">
                    <div class="team__row founders">
                        <div class="team__col" data-aos-custom data-aos="fade-up" data-aos-delay="25" data-aos-duration="900" data-aos-easing="ease-out">
                            <h2 class="team__title h4">Founders of the Studio</h2>
                        </div>
                        <div class="team__col" data-aos-custom data-aos="fade-up" data-aos-delay="25"
                             data-aos-duration="900" data-aos-easing="ease-out">
                            <p class="team__text">Thorough. Bold. Seeking. In 2014, in search of the ideal form of self-expression, we created the Studio TIP-TOP TEAM. So friends in life have also become business partners. We are happy to share our rich experience with the team.</p>
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


                <div class="team__block" data-revers>
                    <div class="team__row founders">
                        <div class="team__col" data-aos-custom data-aos="fade-up" data-aos-delay="25"
                             data-aos-duration="900" data-aos-easing="ease-out">
                            <h2 class="team__title h4">Team</h2>
                        </div>
                        <div class="team__col" data-aos-custom data-aos="fade-up" data-aos-delay="25"
                             data-aos-duration="900" data-aos-easing="ease-out">
                            <p class="team__text">Talented, ambitious, energetic and still a lot of good adjectives: in our studio, we gathered best talent. Today in TIP-TOP TEAM  a team of great guys develops, shoots and creates.</p>
                        </div>
                    </div>
                    <div class="team__group">
                        <? foreach (array_slice($arResult['TEAM_GROUP'], 0, 3) as $arItem): ?>
                            <div class="team__item">
                                <div class="team__person" data-aos-custom data-aos="fade-up"
                                     data-aos-delay="<?= $animationValue ?>"
                                     data-aos-duration="900" data-aos-easing="ease-out">
                                    <div class="team__photo"
                                         style="background-image: url('<?= $arItem['PREVIEW_PICTURE']['SRC'] ?>');"></div>
                                    <div class="team__info">
                                        <p class="team__name"><?= $arItem['NAME'] ?></p>
                                        <p class="team__state"><?= $arItem['PROPERTIES']['CAPTURE']['VALUE'] ?></p>
                                    </div>
                                </div>
                            </div>
                        <? endforeach; ?>
                    </div>
                    <div class="team__group">
                        <? foreach (array_slice($arResult['TEAM_GROUP'], 3, 3) as $arItem): ?>
                            <div class="team__item">
                                <div class="team__person" data-aos-custom data-aos="fade-up"
                                     data-aos-delay="<?= $arItem['ANIMATION'] ?>"
                                     data-aos-duration="900" data-aos-easing="ease-out">
                                    <div class="team__photo"
                                         style="background-image: url('<?= $arItem['PREVIEW_PICTURE']['SRC'] ?>');"></div>
                                    <div class="team__info">
                                        <p class="team__name"><?= $arItem['NAME'] ?></p>
                                        <p class="team__state"><?= $arItem['PROPERTIES']['CAPTURE']['VALUE'] ?></p>
                                    </div>
                                </div>
                            </div>
                        <? endforeach; ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
