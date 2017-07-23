$(document).ready(function() {

// Плавная прокрутка при скроле =================

$(function(){

	$('a[data-target^="anchor"]').bind('click.smoothscroll', function(){
		var target = $(this).attr('href'),
			bl_top = $(target).offset().top +1;
		$('body, html').animate({scrollTop: bl_top}, 1000);
		return false;
	});
});

// Wow - анимация =====================

 wow = new WOW({
	boxClass: 'wow',          // default
	animateClass: 'animated', // default
	offset:       0,          // default
	mobile:       true,       // default
	live:         true        // default
});

new WOW().init();

$('.gallery-main__item, .gallery-1__item').addClass('wow fadeIn'); 

// Галерея Fancybox =====================

$('[data-fancybox]').fancybox({
	slideShow  : false,
	fullScreen : false,
	thumbs     : false,
	closeBtn   : true,
	animationEffect : "zoom-in-out",
	transitionEffect : "zoom-in-out",
});

// ZooMove для фото =====================

$('.zoo-item').ZooMove();

// Parallax Scrolling for header =====================

$(".header").paroller();
$(window).paroller({
	factor: 0.7,            // multiplier for scrolling speed and offset
	type: 'background',     // background, foreground
	direction: 'vertical' // vertical, horizontal, TODO: diagonal
});

// Parallax Scrolling for quotes =====================

$('.jarallax').jarallax({
	speed: 0.2
});

// Parallax Scrolling for logo =====================

$(window).scroll(function() {

	var st = $(this).scrollTop() /3;

	$(".menu__logo").css({
		"transform" : "translate3d(0px, " + st  + "%, .01px)",
		"-webkit-transform" : "translate3d(0px, " + st  + "%, .01px)"
	});
	$(".menu__items--left").css({
		"transform" : "translateX(" + st  + "px)"
	});
	$(".menu__items--right").css({
		"transform" : "translateX(" + -st  + "px)"
	});

});

// Изменение прозрачности logo =====================

$(window).on('scroll', function() {
	var scrollCoef = 0.0035;

	$('.menu__logo').css({
		opacity: 1 - $(window).scrollTop() * scrollCoef
	});
});

// Изменение прозрачности пунктов меню (mobile) =====================

$(window).on('scroll', function() {
	var scrollCoef = 0.002;

	$('.menu__items--right, .menu__items--left').css({
		opacity: 1 - $(window).scrollTop() * scrollCoef
	});
});

// Disable scroll zooming and bind back the click event =====================

  var onMapMouseleaveHandler = function (event) {
    var that = $(this);

    that.on('click', onMapClickHandler);
    that.off('mouseleave', onMapMouseleaveHandler);
    that.find('#map').css("pointer-events", "none");
  };

  var onMapClickHandler = function (event) {
    var that = $(this);

    that.off('click', onMapClickHandler);

    that.find('#map').css("pointer-events", "auto");

    that.on('mouseleave', onMapMouseleaveHandler);
  };

  $('.maps.embed-container').on('click', onMapClickHandler);

});

// google map =====================

var map;

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 33.779706, lng: -118.195321},
		zoom: 12,
		disableDefaultUI: true,
		zoomControl: true,
		zoomControlOptions: {
			position: google.maps.ControlPosition.LEFT_CENTER
		},
		styles: [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#fcfcfc"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#fcfcfc"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#dddddd"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#dddddd"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#eeeeee"}]},{"featureType":"water","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#dddddd"}]}]
	});
	var marker = new google.maps.Marker({
		position: {lat: 33.779706, lng: -118.195321},
		map: map,
		title: 'Tattoo studio Ink Tattoo',
		animation: google.maps.Animation.BOUNCE,
		icon: 'img/marker.png'
	});
	var contentString = '<div id="content">'+
	'<div id="siteNotice">'+
	'</div>'+
	'<h1 id="firstHeading" class="firstHeading">Tattoo studio "Ink Tatto"</h1>'+
	'<div id="bodyContent">'+
	'<p>Ink Tattoo Studio was established in 1970. Tattoos and Piercings are all offered in a clean, sterile, friendly environment. Feel free to come in with your own ideas and inspire our artists. We will also be happy to look over any reference materials you have to design the custom piece you desire.' +
	'We offer a variety of body piercings in a sterile environment. In addition to aftercare, we are available for jewelry changes and questions regarding existing body piercings.</p>'+
	'<p><b>Phone:</b> + 123-456-789-456'+
	'</p>'+
	'<p><b>Email:</b> info@inktattoo.net'+
	'</p>'+
	'</div>'+
	'</div>';
	var infowindow = new google.maps.InfoWindow({
		content: contentString,
		maxWidth: 400
	});
	marker.addListener('click', function() {
		infowindow.open(map, marker);
	});
	// Keep the center centered on window resize
	google.maps.event.addDomListener(window, "resize", function() {
		var center = map.getCenter();
		google.maps.event.trigger(map, "resize");
		map.setCenter(center);
		});
}

// Прелоадер =======================

	$(window).on('load', function () {
		$preloader = $('.loaderArea');
		$loader = $preloader.find('.loader');
		$loader.fadeOut();
		$preloader.delay(0).fadeOut('slow');
		// Анимация лого после загрузки сайта
		$("#logo").addClass("wow");
		$("#logo").addClass("flipInY");
		$("#logo").addClass("animated");
	});