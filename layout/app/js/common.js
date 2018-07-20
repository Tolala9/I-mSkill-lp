$(function() {

	/*TOGGLE MENU*/

	$(".toggle-mnu, .menu_item").click(function() {
		$(".sandwich").toggleClass("active");
	});

	$(".toggle-mnu").click(function(){
		if ($(".top-mnu").is(":visible")) {
			$(".top-mnu").fadeOut(600);
			$(".top-mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".top-mnu").fadeIn(600);
			$(".top-mnu li a").addClass("fadeInUp animated");
		};
	}); 

	$(".top-mnu li a").click(function() {
		$(".top-mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
	}).append("<span>");
	/* END TOGGLE MENU */

	/*PAGE SCROLL*/
	$("a[href*='#']").mPageScroll2id(); 


	

	/*SCROLL-TOP BUTTON*/
	$(window).scroll(function() {
		if ($(this).scrollTop() > $(this).height()) {
			$('.top').addClass('active');
		} else {
			$('.top').removeClass('active');
		}
	});
	$('.top').click(function() {
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});
	/* END SCROLL-TOP BUTTON*/

	/* ANIMATION*/ 
	//set up old Jquery 2.1.3 becouse has problem with 
	//custom plugin animate where animation work on scroll
	$(".head-picture__text-content").addClass("animated bounceInLeft");
	$(".social-info").addClass("animated bounceInDown");

//custom function for animation.css plugin
$(".section-title").animated("fadeInDown", "fadeOutUp");
$(".img-responsive").animated("pulse", "fadeOutRight");
$(".section-advantages__block").animated("bounceIn", "bounceOut");
$(".submit-button").animated("pulse", "fadeOutRight");
$(".section__teacher").animated("bounceInLeft", "bounceOutLeft");
$(".section__program").animated("bounceInRight", "bounceOutRight");
$(".section__what-gain").animated("bounceInRight", "bounceOutRight");
$(".section-cost__block").animated("bounceIn", "bounceOut");
$(".section__main-gerister").animated("bounceInRight", "bounceOutRight");
/* END ANIMATION*/


});
