<?php
$isXHR = isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtoupper($_SERVER['HTTP_X_REQUESTED_WITH']) === 'XMLHTTPREQUEST';

if (!$isXHR)
{
	$title = 'Contact - Firdaus Dwika';
	include dirname(__FILE__) . '/includes/header.php';
	?>
	<div class="h-25 row align-items-center main-content">
	<?php
	$active = "contact";
	include dirname(__FILE__) . '/includes/menubar.php';
}
?>
<div class="container">
  <div class="container-main">
	<div class="row">
		<div class="col">
			<p class="about-desc">If you would like to connect with me, email <a href="mailto:firdausdwika@gmail.com">firdausdwika@gmail.com</a> or add me on Twitter, Facebook, Instagram or LinkedIn. I am always open to discussing projects or some help.</p>
		</div>
	</div>
  </div>
</div>
<?php
if (!$isXHR)
{
	include dirname(__FILE__) . '/includes/footer.php';
}
?>