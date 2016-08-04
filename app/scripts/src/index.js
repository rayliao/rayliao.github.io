(function() {
	const decoLetter = new Letters(document.querySelector('.deco'), {	
		size: 1000,
		weight: 5,
		color: '#2B2B2B',
		duration: 2,
		fade: 0,
		easing: d3_ease.easeExpOut
	});
	decoLetter.hideInstantly();
	setTimeout(function() {
		decoLetter.show();
	}, 200);
})();