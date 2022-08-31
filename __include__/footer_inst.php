<?
if (CModule::IncludeModule("iblock")):
	$element_id = 273;
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
		$link = $ar_fields->GetProperty('LINK')['VALUE'];
		$icon = $ar_fields->GetProperty('ICON')['VALUE'];
	}

endif;
?>

<?php if(isset($link) && isset($icon)): ?>
	<a href="<?= $link ?>" target="_blank" class="social__item">
		<?php echo(htmlspecialcharsBack($icon['TEXT'])); ?>
	</a>
<?php endif; ?>