$(function(){
	$('#kids-party-portfolio').on('click', function (event) {
		event.preventDefault()
		blueimp.Gallery($('#kids-party-portfolio-links a'), $('#blueimp-gallery').data())
	})

	$('#a1qa-camping-portfolio').on('click', function (event) {
		event.preventDefault()
		blueimp.Gallery($('#a1qa-camping-portfolio-links a'), $('#blueimp-gallery').data())
	})
})