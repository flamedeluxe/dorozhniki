$(function() {



});


$(window).on('scroll', function() {
	if ($(window).scrollTop() > 500) {
		$('.top').addClass('active');
	}else {
		$('.top').removeClass('active');
	}
});