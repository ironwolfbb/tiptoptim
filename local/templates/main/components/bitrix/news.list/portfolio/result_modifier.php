<?php
foreach ($arResult['ITEMS'] as $key => $arItem) {
    switch ($arItem['IBLOCK_SECTION_ID']) {
        case 13:
            // Рекламные
            $arResult['ITEMS'][$key]['SECTION_CODE_NAME'] = 'campaigns';
            break;
        case 4:
            // Графические
            $arResult['ITEMS'][$key]['SECTION_CODE_NAME'] = 'graphics';
            break;
        case 5:
            // Презентационные
            $arResult['ITEMS'][$key]['SECTION_CODE_NAME'] = 'presentation';
            break;
    }
}
