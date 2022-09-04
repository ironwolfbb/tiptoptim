<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die(); ?>

<div class="nav">
<nav>

    <?php foreach ($arResult as $arItem): ?>
    <?php if(empty($arItem['subitems'])): ?>
    <a href="<?= $arItem['LINK']?>" <?=$arItem["SELECTED"] ? 'class="selected"'  : ''  ?>>
        <?= $arItem['TEXT'] ?>
    </a>
    <?php else: ?>
    <div class="dropdown">
        <a href="<?= $arItem['LINK']?>" class="absoluteLink">

        </a>
        <p>
            <?= $arItem['TEXT']?> <img src="/local/templates//img/dropdownImg.png" alt="dropdownButton" title="dropdownButton">
        </p>
        <ul>
            <?php foreach ($arItem['subitems'] as $arSubitems): ?>
            <li>
                <a href="<?= $arSubitems['LINK']?>">
                    <?= $arSubitems['TEXT']?>
                </a>
            </li>
            <?php   endforeach; ?>
        </ul>
    </div>
        <?php endif;?>
            <?php   endforeach; ?>


</nav>
</div>


