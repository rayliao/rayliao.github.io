$(function(){
	$('.btn0').on('click', function(){
		$('.loading').removeClass("active").delay(10).queue(function(next){
			$(this).addClass("active");
			next();
		});
	});
	$('.btn1').on('click', function(){
		$('.progress1').removeClass("active").delay(10).queue(function(next){
			$(this).addClass("active");
			next();
		});
	});
	$('.btn2').on('click', function(){
		$('.progress2').removeClass("active").delay(10).queue(function(next){
			$(this).addClass("active");
			next();
		});
	});
	$('.btn3').on('click', function(){
		$('.progress3-text').text("0");
		$('.progress3-text').numerator({
			duration: 5000,
			toValue: 100
		});
		$('.progress3').removeClass("active").delay(10).queue(function(next){
			$(this).addClass("active");
			next();
		});
	});
});