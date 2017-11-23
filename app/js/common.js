$(function() {

	if ($(window).scrollTop() > 500) {
		$('.top').addClass('active');
	}

});

$('#hamburger').click(function(event) {
	$(this).toggleClass('is-active');
	$('#mobileMenu').toggleClass('active');
});

$('#mobileMenu ul li.has-child a').click(function(event) {
	$(this).parent().toggleClass('active')
	$(this).next().slideToggle();
	return false;
});

$(window).on('resize', function(){
	$('#mobileMenu').removeClass('active');
	$('#hamburger').removeClass('is-active');
});

$(window).on('scroll', function() {
	if ($(window).scrollTop() > 500) {
		$('.top').addClass('active');
	}else {
		$('.top').removeClass('active');
	}
});