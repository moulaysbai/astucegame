<?php
define('IS_AJAX', isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest');
if(!IS_AJAX) {die("<div style='width: 100%; height: 100%; position: fixed; background: #212833; left: 0; top: 0;'><div style='width: 70%; margin: 150px auto 0 auto; background: #fff; text-align:center; padding: 80px 100px; border-radius: 20px; font-family: Verdana; box-shadow: 0 0 0 3px rgba(255,255,255,0.2);'><h3 style='color: #000; text-transform: uppercase; margin: 0;'>Huh.. wait a second!</h3><h1 style='margin: 5px 0 0 0; color: #fc4349; text-transform: uppercase; letter-spacing: 1px;'>Nosey little mouse, aren't you?</h1><p style='font-size: 1em; color: #555;'>There is nothing interesting here, no point waisting your time.</p></div></div>");}
?>
<div class="m-g-b m-g-c-cp animate__animated animate__bounceIn">
	<div class="m-g-c">
		<h1>En traitement...</h1>
		<div class="mfut-g-d">
			<div class="malaft-p-loader">
				<span class="material-icons-two-tone fa-spin">réglages</span>
			</div>
			<div class="malaft-p-g-item malaft-p-g-item-p">
				<div class="malaft-p-g-item-inner">
					<img id="malaft-g-img-p" src="" class="k-icon img-fluid" />
					<span class="malaft-p-g-item-value malaft-p-g-item-value-p">0</span>
					<span class="malaft-p-g-item-label">FUT Points</span>
				</div>
			</div>
			<div class="malaft-p-g-item malaft-p-g-item-c">
				<div class="malaft-p-g-item-inner">
					<img id="malaft-g-img-c" src="" class="k-icon img-fluid" />
					<span class="malaft-p-g-item-value malaft-p-g-item-value-c">0</span>
					<span class="malaft-p-g-item-label">FUT Coins</span>
				</div>
			</div>
			<div class="malaft-p-msg-wrapper animated pulse infinite">
				<div class="malaft-p-msg"></div>
			</div>
			<div class="malaft-p-loadbar-wrapper">
				<div id="malaft-pBar" class="malaft-p-loadbar animated bounceIn"><div></div></div>
			</div>
		</div>
	</div>
</div>