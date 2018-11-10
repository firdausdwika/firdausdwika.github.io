<?php
$isXHR = isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtoupper($_SERVER['HTTP_X_REQUESTED_WITH']) === 'XMLHTTPREQUEST';

if (!$isXHR)
{
	$title = 'About - Firdaus Dwika';
	include dirname(__FILE__) . '/includes/header.php';
	?>
	<div class="h-25 row align-items-center main-content">
	<?php
	$active = "about";
	include dirname(__FILE__) . '/includes/menubar.php';
}
?>
<div class="container">
  <div class="container-main">
	<div class="row">
		<div class="col">
			<p class="about-desc">I am an Full Stack Web and Mobile Apps Developer based in Malang, Indonesia. Have interested in all kinds of programming language. Make great sites and apps is main priority. If you have a some question, problem or build something together, <a href="mailto:firdausdwika@gmail.com">get in touch</a>.</p>	
			<center><img src="assets/img/img-sm.jpg" width="80%"></center>
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