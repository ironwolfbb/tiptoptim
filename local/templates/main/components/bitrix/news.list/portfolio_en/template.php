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
            <p class="heading__caption">Portfolio</p>
            <h1 class="heading__title">What are we doing?</h1>
        </div>
        <div class="wrap__block">
            <? $APPLICATION->IncludeComponent("bitrix:catalog.section.list", "portfolio_structure_en", Array(
                "ADD_SECTIONS_CHAIN" => "N",    // Включать раздел в цепочку навигации
                "CACHE_GROUPS" => "Y",    // Учитывать права доступа
                "CACHE_TIME" => "36000000",    // Время кеширования (сек.)
                "CACHE_TYPE" => "A",    // Тип кеширования
                "COUNT_ELEMENTS" => "N",    // Показывать количество элементов в разделе
                "IBLOCK_ID" => "6",    // Инфоблок
                "IBLOCK_TYPE" => "Content",    // Тип инфоблока
                "SECTION_CODE" => "",    // Код раздела
                "SECTION_FIELDS" => array(    // Поля разделов
                    0 => "",
                    1 => "",
                ),
                "SECTION_ID" => $_REQUEST["SECTION_ID"],    // ID раздела
                "SECTION_URL" => "",    // URL, ведущий на страницу с содержимым раздела
                "SECTION_USER_FIELDS" => array(    // Свойства разделов
                    0 => "",
                    1 => "",
                ),
                "SHOW_PARENT_NAME" => "N",    // Показывать название раздела
                "TOP_DEPTH" => "2",    // Максимальная отображаемая глубина разделов
                "VIEW_MODE" => "LINE",    // Вид списка подразделов
            ),
                false
            ); ?>
            <div class="portfolio">
                <div class="portfolio__top">
                    <p class="portfolio__desc portfolio__desc--active" data-category="campaigns"></p>
                    <p class="portfolio__desc" data-category="staging"></p>
                    <p class="portfolio__desc" data-category="graphics"></p>
                    <p class="portfolio__desc" data-category="presentation"></p>
					<!--
                    <p class="portfolio__desc portfolio__desc--active" data-category="all">Our videos are a story that presents a company, goods or services in an accessible, visual and detailed way. Indispensable for placing in the Internet, demonstrations in the offices of the company, as well as business and corporate events.</p>
                    <p class="portfolio__desc" data-category="staging">The pearl of the advertising block is a video with an interesting plot, scenery and acting, which vividly conveys the main advantages of the product. One of the most popular and effective promotion formats.</p>
                    <p class="portfolio__desc" data-category="graphics">Short advertising message with elements of 2D or 3D animation based on graphic layouts or video. The optimal solution for small advertising tasks with an average budget.</p>
                    <p class="portfolio__desc" data-category="presentation">A mini-film about the company, a business card in the form of an exciting story. Creates an image, visually and affordably represents a company, goods or services on the Internet, on forums and other corporate events.</p>
					-->
                </div>
                <div class="portfolio__inner">
                    <? foreach ($arResult['ITEMS'] as $arItem): ?>
					<? if($arItem['PROPERTIES']['LINK_PAGE']['VALUE']) : ?>
                        <a href="<?= $arItem['PROPERTIES']['LINK_PAGE']['VALUE']; ?>" class="portfolio__item <?= $arItem['SECTION_CODE_NAME'] ? 'portfolio__item--disable' : '' ?>" data-category="<?= $arItem['SECTION_CODE_NAME'] ? $arItem['SECTION_CODE_NAME']: 'campaigns' ?>">
                            <div class="portfolio__content">
                                <div class="portfolio__image"
                                     style="background-image: url('<?= $arItem['PREVIEW_PICTURE']['SRC'] ?>');"></div>
                                <div class="portfolio__info">
                                    <p class="portfolio__title"><?= $arItem['NAME'] ?></p>
                                    <p class="portfolio__text"><?= $arItem['PROPERTIES']['CAPTURE']['VALUE'] ?></p>
                                </div>
                            </div>
                        </a>
                    <? else : ?>
                        <div class="portfolio__item <?= $arItem['SECTION_CODE_NAME'] ? 'portfolio__item--disable' : '' ?>" data-category="<?= $arItem['SECTION_CODE_NAME'] ? $arItem['SECTION_CODE_NAME']: 'campaigns' ?>">
                            <div class="portfolio__content" data-target="modalVimeo" data-modal-open
                                 data-src="https://player.vimeo.com/video/<?= $arItem['PROPERTIES']['SRC']['VALUE'] ?>?color=ffffff&portrait=0">
                                <div class="portfolio__image"
                                     style="background-image: url('<?= $arItem['PREVIEW_PICTURE']['SRC'] ?>');"></div>
                                <div class="portfolio__info">
                                    <p class="portfolio__title"><?= $arItem['NAME'] ?></p>
                                    <p class="portfolio__text"><?= $arItem['PROPERTIES']['CAPTURE']['VALUE'] ?></p>
                                </div>
                            </div>
                        </div>
                    <? endif; ?> 
                    <? endforeach; ?>
                </div>
				<!--
                <div class="portfolio__all">
                    <a href="https://vimeo.com/tiptopteamru" target="_blank" class="button">
                        <span class="button__text">All videos</span>
                    </a>
                </div>
				-->
            </div>
        </div>
    </div>
</div>
