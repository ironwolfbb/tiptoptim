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
?><div class="wrap">
    <div class="wrap__inner">
        <div class="wrap__heading heading">
            <p class="heading__caption">Портфолио</p>
            <h1 class="heading__title">Что мы делаем?</h1>
        </div>
        <div class="wrap__block">
            <? $APPLICATION->IncludeComponent("bitrix:catalog.section.list", "portfolio_structure", Array(
                "ADD_SECTIONS_CHAIN" => "N",    // Включать раздел в цепочку навигации
                "CACHE_GROUPS" => "Y",    // Учитывать права доступа
                "CACHE_TIME" => "36000000",    // Время кеширования (сек.)
                "CACHE_TYPE" => "A",    // Тип кеширования
                "COUNT_ELEMENTS" => "N",    // Показывать количество элементов в разделе
                "IBLOCK_ID" => "2",    // Инфоблок
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

                     <p class="portfolio__desc" data-category="campaigns"></p>
                    <p class="portfolio__desc portfolio__desc--active" data-category="staging"></p>
                    <p class="portfolio__desc" data-category="graphics"></p>
                    <p class="portfolio__desc" data-category="presentation"></p>
<!--
                     <p class="portfolio__desc portfolio__desc--active" data-category="all">Наши видео — это рассказ,
                        который доступно,
                        наглядно и развернуто
                        представляет компанию, товары или услуги. Незаменимо для размещения в интернете,
                        демонстрации в офисах компании, а также на деловых и корпоративных мероприятиях.</p>
                    <p class="portfolio__desc" data-category="staging">Жемчужина рекламного блока — видео 
                        с интересным сюжетом, декорациями и игрой актёров, которое ярко передаёт основные 
                        преимущества продукта. Один из самых
                        популярных и эффективных форматов продвижения.</p>
                    <p class="portfolio__desc" data-category="graphics">Краткое рекламное сообщение с элементами 2D-
                        или 3D-анимации на основе
                        графических макетов или видеосъемки. Оптимальное решение для небольших рекламных задач со средним бюджетом.</p>
                    <p class="portfolio__desc" data-category="presentation">Мини-фильм о компании, визитная карточка
                        в виде увлекательного
                        рассказа. Создаёт имидж, наглядно и доступно представляет компанию, товары или услуги в интернете, 
                        на форумах и других корпоративных мероприятиях. </p> -->
                </div>

                <div  class="portfolio__inner">
                    <? foreach ($arResult['ITEMS'] as $arItem): ?>
<?
$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" =>GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
?>
                    <? if($arItem['PROPERTIES']['LINK_PAGE']['VALUE']) : ?>
                        <a href="<?= $arItem['PROPERTIES']['LINK_PAGE']['VALUE']; ?>" class="portfolio__item <?= $arItem['SECTION_CODE_NAME'] ? 'portfolio__item--disable' : '' ?>" data-category="<?= $arItem['SECTION_CODE_NAME'] ? $arItem['SECTION_CODE_NAME']: 'staging' ?>">
                            <div <?=$this->getEditAreaId($arItem['ID']);?>  class="portfolio__content">
                                <div class="portfolio__image"
                                     style="background-image: url('<?= $arItem['PREVIEW_PICTURE']['SRC'] ?>');"></div>
                                <div class="portfolio__info">
                                    <p class="portfolio__title"><?= $arItem['NAME'] ?></p>
                                    <p class="portfolio__text"><?= $arItem['PROPERTIES']['CAPTURE']['VALUE'] ?></p>
                                </div>
                            </div>
                        </a>
                    <? else : ?>
                        <div itemscope itemtype="http://schema.org/VideoObject" class="portfolio__item <?= $arItem['SECTION_CODE_NAME'] ? 'portfolio__item--disable' : '' ?>" data-category="<?= $arItem['SECTION_CODE_NAME'] ? $arItem['SECTION_CODE_NAME']: 'staging' ?>">
<a itemprop="url" href="https://player.vimeo.com/video/<?= $arItem['PROPERTIES']['SRC']['VALUE'] ?>?color=ffffff&portrait=0"></a>
                            <div   class="portfolio__content" data-target="modalVimeo" data-modal-open data-src="https://player.vimeo.com/video/<?= $arItem['PROPERTIES']['SRC']['VALUE'] ?>?color=ffffff&portrait=0">
                               <!--Вывод разметки для schema-->
								<div class="webalt_schemaorg" style="display:none;"> 
                                 <meta itemprop="uploadDate" content="<?=date('Y-m-d H:i:s', strtotime($arItem['DATE_CREATE'] ))?>">
<meta itemprop="duration" content="PT6M58S">
								<span itemprop="name"><?= $arItem['NAME'] ?></span>
								<span itemprop="description" class="portfolio__text"><?= $arItem['PROPERTIES']['CAPTURE']['VALUE'] ?></span>
                                <meta itemprop="isFamilyFriendly" content="true">
							</div>





                            <span itemprop="thumbnail" itemscope itemtype="http://schema.org/ImageObject">
                                <div class="portfolio__image" style="background-image: url('<?= $arItem['PREVIEW_PICTURE']['SRC'] ?>');"></div>
<div class="webalt_schemaorg" style="display:none;"> 
<img itemprop="contentUrl" src="<?= $arItem['PREVIEW_PICTURE']['SRC'] ?>">
								</div>
                                <div class="portfolio__info">
                                    <p itemprop="name" class="portfolio__title"><?= $arItem['NAME'] ?></p>
                                    <p  itemprop="description" class="portfolio__text"><?= $arItem['PROPERTIES']['CAPTURE']['VALUE'] ?></p>
                                </div>
                            </span>
                        </div>
                    </div>
                    <? endif; ?> 
                    <? endforeach; ?>
                </div>
				<!--
                <div class="portfolio__all">
                    <a href="https://vimeo.com/tiptopteamru" target="_blank" class="button">
                        <span class="button__text">Все видео</span>
                    </a>
                </div>
				-->
            </div>
        </div>
    </div>
</div>