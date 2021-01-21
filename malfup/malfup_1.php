<?php
define('IS_AJAX', isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest');
if(!IS_AJAX) {die("<div style='width: 100%; height: 100%; position: fixed; background: #212833; left: 0; top: 0;'><div style='width: 70%; margin: 150px auto 0 auto; background: #fff; text-align:center; padding: 80px 100px; border-radius: 20px; font-family: Verdana; box-shadow: 0 0 0 3px rgba(255,255,255,0.2);'><h3 style='color: #000; text-transform: uppercase; margin: 0;'>Huh.. wait a second!</h3><h1 style='margin: 5px 0 0 0; color: #fc4349; text-transform: uppercase; letter-spacing: 1px;'>Nosey little mouse, aren't you?</h1><p style='font-size: 1em; color: #555;'>There is nothing interesting here, no point waisting your time.</p></div></div>");}
?>
<div class="rssp">
	<div class="rssp-c">
		<h1 class="animate__animated animate__bounceIn">SÉLECTION DES RESSOURCES</h1>
		<div class="rssp-c-ip-w">
			<div class="rssp-c-ip rssp-c-ip-1">
				<div class="rssp-ib animate__animated animate__bounceIn animation-delay-100">
					<div class="rssp-ii">
						<img src="img/pi.png" class="img-fluid pi-i" />
						<div class="rssp-ii-m">
							<div class="rsp-ii-v">1,600</div>
							<div class="rsp-ii-l">FUT Points</div>
						</div>
					</div>
				</div>
			</div>
			<div class="rssp-c-ip rssp-c-ip-2 animation-delay-100">
				<div class="rssp-ib animate__animated animate__bounceIn animation-delay-200">
					<div class="rssp-ii">
						<img src="img/pi.png" class="img-fluid pi-i" />
						<div class="rssp-ii-m">
							<div class="rsp-ii-v">2,200</div>
							<div class="rsp-ii-l">FUT Points</div>
						</div>
					</div>
				</div>
			</div>
			<div class="rssp-c-ip rssp-c-ip-3 animation-delay-100">
				<div class="rssp-ib animate__animated animate__bounceIn animation-delay-300">
					<div class="rssp-ii">
						<img src="img/pi.png" class="img-fluid pi-i" />
						<div class="rssp-ii-m">
							<div class="rsp-ii-v">4,600</div>
							<div class="rsp-ii-l">FUT Points</div>
						</div>
					</div>
				</div>
			</div>
			<div class="rssp-c-ip rssp-c-ip-4">
				<div class="rssp-ib animate__animated animate__bounceIn animation-delay-400">
					<div class="rssp-ii">
						<img src="img/pi.png" class="img-fluid pi-i" />
						<div class="rssp-ii-m">
							<div class="rsp-ii-v">12,000</div>
							<div class="rsp-ii-l">FUT Points</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>