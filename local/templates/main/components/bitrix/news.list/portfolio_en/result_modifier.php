<?php
foreach ($arResult['ITEMS'] as $key => $arItem) {
    switch ($arItem['IBLOCK_SECTION_ID']) {
        case 12:
            // Постановочные
            $arResult['ITEMS'][$key]['SECTION_CODE_NAME'] = 'staging';
            break;
        case 11:
            // Графические
            $arResult['ITEMS'][$key]['SECTION_CODE_NAME'] = 'graphics';
            break;
        case 10:
            // Презентационные
            $arResult['ITEMS'][$key]['SECTION_CODE_NAME'] = 'presentation';
            break;
    }
}
