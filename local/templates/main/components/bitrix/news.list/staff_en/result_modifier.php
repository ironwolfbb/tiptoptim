<?
// Прошлись по массиву и создали два разных для удобной работы
foreach ($arResult['ITEMS'] as $arItem) {
    if ($arItem['IBLOCK_SECTION_ID'] == 8) {
        $arResult['TEAM_MAIN'][] = $arItem;
    } elseif ($arItem['IBLOCK_SECTION_ID'] == 9) {
        $arResult['TEAM_GROUP'][] = $arItem;
    }
}

// Задаем анимацию
$animationValue = 50; // мин знач
foreach ($arResult['TEAM_MAIN'] as $key => $arItem) {
    $arResult['TEAM_MAIN'][$key]['ANIMATION'] = $animationValue;
    $animationValue++;
}

// Задаем анимацию
$animationValue = 150; // мин знач
foreach ($arResult['TEAM_GROUP'] as $key => $arItem) {
    $arResult['TEAM_GROUP'][$key]['ANIMATION'] = $animationValue;
    $animationValue++;
    $animationValue = $animationValue - 50;
    // Как дошли до 0, то занового задаем значение 100
    if ($animationValue == 0) {
        $animationValue = 150;
    }
}

