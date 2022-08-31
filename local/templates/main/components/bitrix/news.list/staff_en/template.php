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
                   <div class="" data-aos-custom data-aos="fade-up" data-aos-delay="25"
                             data-aos-duration="900" data-aos-easing="ease-out">
                       <p class="team__text">Today TIP-TOP TEAM is more than twenty talented, ambitious, courageous guys - real professionals in their field. It all started in 2014, when three friends were looking for the perfect way to express themselves. The result of the search was the creation of our studio.</p>
<!-- <p class="team__text">Talented, ambitious, courageous, energetic and many more pleasant adjectives: our studio has gathered valuable personnel. Today, at TIP-TOP TEAM, a team of excellent guys comes up, removes and creates for the mastery of which the three founders of the studio are responsible. In 2014, they created TIP-TOP TEAM in search of the perfect form of expression. So friends in life also became business partners.</p>
-->
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
