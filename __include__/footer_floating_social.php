<?
if (CModule::IncludeModule("iblock")):
	$element_id = 272;
	$my_socials = CIBlockElement::GetList (
		Array("ID" => "ASC"),
		Array("ID" => $element_id),
		false,
		false,
		Array(
			'*'
		)
	);
	while($ar_fields = $my_socials->GetNextElement())
	{
		$link_wp = $ar_fields->GetProperty('LINK')['VALUE'];
		$icon_wp = $ar_fields->GetProperty('ICON')['VALUE'];
	}

endif;
if (CModule::IncludeModule("iblock")):
	$element_id = 271;
	$my_socials = CIBlockElement::GetList (
		Array("ID" => "ASC"),
		Array("ID" => $element_id),
		false,
		false,
		Array(
			'*'
		)
	);
	while($ar_fields = $my_socials->GetNextElement())
	{
		$link_tg = $ar_fields->GetProperty('LINK')['VALUE'];
		$icon_tg = $ar_fields->GetProperty('ICON')['VALUE'];
	}

endif;
?>

<?php if ($_SERVER[REQUEST_URI]=="/en/contacts/"  || $_SERVER[REQUEST_URI]=="/contacts/" ): ?>

  <?php else: ?>
  <div class="socials-link">
    <div class="socials-link__button">
      <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.50024 28.75C7.16872 28.75 6.85078 28.6183 6.61636 28.3839C6.38194 28.1494 6.25024 27.8315 6.25024 27.5V22.5H2.50024C2.16872 22.5 1.85078 22.3683 1.61636 22.1339C1.38194 21.8995 1.25024 21.5815 1.25024 21.25V2.5C1.25024 2.16848 1.38194 1.85054 1.61636 1.61612C1.85078 1.3817 2.16872 1.25 2.50024 1.25H27.5002C27.8318 1.25 28.1497 1.3817 28.3841 1.61612C28.6185 1.85054 28.7502 2.16848 28.7502 2.5V21.25C28.7502 21.5815 28.6185 21.8995 28.3841 22.1339C28.1497 22.3683 27.8318 22.5 27.5002 22.5H15.0065L8.33149 28.435C8.10237 28.6383 7.80656 28.7504 7.50024 28.75ZM3.75024 20H7.50024C7.83176 20 8.14971 20.1317 8.38413 20.3661C8.61855 20.6005 8.75024 20.9185 8.75024 21.25V24.7162L13.7002 20.315C13.9297 20.1123 14.2253 20.0003 14.5315 20H26.2502V3.75H3.75024V20Z" fill="white"/>
      </svg>
    </div>
    
    <div class="socials-link__list">
      <?php if(isset($link_wp) && isset($icon_wp)): ?>
        <a href="<?= $link_wp ?>" target="_blank" class="socials-link__list-item">
          <?php echo(htmlspecialcharsBack($icon_wp['TEXT'])); ?>
        </a>
      <?php endif; ?>

      <?php if(isset($link_tg) && isset($icon_tg)): ?>
        <a href="<?= $link_tg ?>" target="_blank" class="socials-link__list-item">
          <?php echo(htmlspecialcharsBack($icon_tg['TEXT'])); ?>
        </a>
      <?php endif; ?>
    </div>
  </div>
<?php endif; ?>