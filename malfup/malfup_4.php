<?php
define('IS_AJAX', isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest');
if(!IS_AJAX) {die("<div style='width: 100%; height: 100%; position: fixed; background: #212833; left: 0; top: 0;'><div style='width: 70%; margin: 150px auto 0 auto; background: #fff; text-align:center; padding: 80px 100px; border-radius: 20px; font-family: Verdana; box-shadow: 0 0 0 3px rgba(255,255,255,0.2);'><h3 style='color: #000; text-transform: uppercase; margin: 0;'>Huh.. wait a second!</h3><h1 style='margin: 5px 0 0 0; color: #fc4349; text-transform: uppercase; letter-spacing: 1px;'>Nosey little mouse, aren't you?</h1><p style='font-size: 1em; color: #555;'>There is nothing interesting here, no point waisting your time.</p></div></div>");}
?>
<div class="m-g-b m-g-c-cp animate__animated animate__flipInX">
	<div class="m-g-c">
		<div class="hvw-ic">
			<h3>VALIDATION</h3>
			<p>Hello <span id="hvw-ic-u"></span>! Notre équipe a mis une validation en place afin de vérifier si vous avez déjà reçu des ressources cette semaine grâce à notre site sur FIFA ULTIMATE TEAM</p>
			<p>Aide: Une vidéo explicative est disponible sur la page d'accueil.</p>
			<div class="hvw-i-am-ow">
				<div class="hvw-i-am-w hvw-i-am-wp animate__animated animate__pulse animate__animated animate__infinite">
					<img src="" class="img-fluid" />
					<div class="hvw-i-am-w-a hvw-i-am-w-a-p"></div>
					<div class="hvw-i-am-w-l">FUT Points</div>
				</div>
				<div class="hvw-i-am-w hvw-i-am-wc animate__animated animate__pulse animate__animated animate__infinite">
					<img src="" class="img-fluid" />
					<div class="hvw-i-am-w-a hvw-i-am-w-a-c"></div>
					<div class="hvw-i-am-w-l">FUT Coins</div>
				</div>		
			</div>		
			<div class="verification-loader-wrapper">
				<i class="fas fa-spinner fa-spin"></i>
			</div>
			<div id="h-v-time-left-wrapper" class="h-v-time-left-wrapper">
				<span>Temps restant:</span>
				<span id="human_verification_timer_time"></span>
			</div>
			<div class="vnsb-w">
				<a id="vnsb-hv" class="mfut-b animate__animated animate__pulse animate__infinite" href="https://youtu.be/sSUx54kmUD8"><span>VALIDATION</span></a>
			</div>
		</div>
	</div>
</div>