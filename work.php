<?php
$isXHR = isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtoupper($_SERVER['HTTP_X_REQUESTED_WITH']) === 'XMLHTTPREQUEST';

if (!$isXHR)
{
	$title = 'Work - Firdaus Dwika';
	include dirname(__FILE__) . '/includes/header.php';
	?>
	<div class="h-25 row align-items-center main-content">
	<?php
  $active = "work";
	include dirname(__FILE__) . '/includes/menubar.php';
}
?>
<div class="container">
	<div class="detail-work"></div>
  <div class="container-main">
  	<center>
  	<div class="row work-main">
  		<div class="col">
  			<p class="pos-category" id="pos">Point Of Sales</p>
  			<div class="pos-list">
  				<p id="liberte">Liberte Store and Co.</p>
  				<p id="sbpos">Sepatu Bersih</p>
  				<p id="spotted">Spotted Project</p>
  				<p id="kspos">Klinik Sepatoe</p>
  				<!-- <p id="lterrace">Liberte Terrace</p> -->
  			</div>
  		</div>
  		<div class="col">
  			<p class="compro-category" id="compro">Company Profile</p>
  			<div class="compro-list">
  				<p id="sbweb">Sepatu Bersih</p>
  				<p id="maung">Macan Unggulan</p>
  				<p id="maris">Maris Store</p>
  				<p id="rayah">Rayah</p>
  				<p id="hhgarage">HH Garage</p>
  			</div>
  		</div>
  		<div class="col">
  			<p class="apps-category" id="apps">Mobile Apps</p>
  			<div class="apps-list">
  				<p id="display">Display News</p>
  				<p id="middle">Middle</p>
  			</div>
  		</div>
  	</div>
    <div class="row">
      <div class="col">
        <p id="pos-sm-menu" class="sm-menu-pos">Point Of Sales</p>
      </div>
      <div class="col">
        <p id="compro-sm-menu" class="sm-menu-compro">Company Profile</p>
      </div>
      <div class="col">
        <p id="apps-sm-menu" class="sm-menu-apps">Mobile Apps</p>
      </div>
    </div>
    <div id="pos-sm">
      <div class="row">
          <div class="col-xs-12"><p class="">Liberte Store and Co.</p><img src="assets/img/work/libertepos.png" class="img-sm"></div>
          <div class="col-xs-12"><p class="">Sepatu Bersih</p><img src="assets/img/work/sbpos.png" class="img-sm"></div>
          <div class="col-xs-12"><p class="">Spotted Project</p><img src="assets/img/work/spottedpos.png" class="img-sm"></div>
          <div class="col-xs-12"><p class="">Klinik Sepatoe</p><img src="assets/img/work/kspos.png" class="img-sm"></div>
      </div>
    </div>
    <div id="compro-sm">
      <div class="row">
          <div class="col-xs-12"><p>Sepatu Bersih</p><img src="assets/img/work/sbweb.png" class="img-sm"></div>
          <div class="col-xs-12"><p>Macan Unggulan</p><img src="assets/img/work/maung.png" class="img-sm"></div>
          <div class="col-xs-12"><p>Maris Store</p><img src="assets/img/work/maris.png" class="img-sm"></div>
          <div class="col-xs-12"><p>Rayah</p><img src="assets/img/work/rayah.png" class="img-sm"></div>
          <div class="col-xs-12"><p>HH Garage</p><img src="assets/img/work/hhgarage.png" class="img-sm"></div>
      </div>
    </div>
    <div id="apps-sm">
      <div class="row">
          <div class="col-xs-12"><p>Display News</p><img src="assets/img/work/display.png" class="img-sm"></div>
          <div class="col-xs-12"><p>Middle</p><img src="assets/img/work/Middle.png" class="img-sm"></div>
      </div>
    </div>
  	</center>
  </div>
</div>
<?php
if (!$isXHR)
{
	include dirname(__FILE__) . '/includes/footer.php';
}
?>