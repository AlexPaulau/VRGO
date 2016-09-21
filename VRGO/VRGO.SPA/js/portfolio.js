$(function(){
	$('#kids-party-portfolio').on('click', function (event) {
		event.preventDefault()
		blueimp.Gallery($('#kids-party-portfolio-links a'), $('#blueimp-gallery').data())
	})

	$('#a1qa-camping-portfolio').on('click', function (event) {
		event.preventDefault()
		blueimp.Gallery($('#a1qa-camping-portfolio-links a'), $('#blueimp-gallery').data())
	})

	$('#grand-fiesta-company-portfolio').on('click', function (event) {
		event.preventDefault()
		blueimp.Gallery($('#grand-fiesta-company-portfolio-links a'), $('#blueimp-gallery').data())
	})

	$('#open-art-festival-portfolio').on('click', function (event) {
		event.preventDefault()
		blueimp.Gallery($('#open-art-festival-links a'), $('#blueimp-gallery').data())
	})
})