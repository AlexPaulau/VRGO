$(function(){
    PNotify.prototype.options.styling = "bootstrap3";
    PNotify.prototype.options.delay = 1000;

    var showNotification = function (deffered) {
    	deffered
	    	.done(function(data){
			    new PNotify({
			        title: "Email отправлен",
			        text: "Скоро с вами свяжутся наши специалисты",
			        type: "success"
			    });
	    	})
	    	.fail(function(data){
	    		new PNotify({
			        title: "Email не отправлен",
			        text: "Попробуйте связаться с нами по телефону",
			        type: "error"
			    });
	    	})
	    	.always(function(data){
	    		$("#name").val("");
	    		$("#phone").val("");
	    		$("#email").val("");
	    		$("#message").val("");
    		});
    }

    var sendEmail = function() {
    	var emailViewModel = {
    		Name: $("#name").val(),
			PhoneNumber:$("#phone").val(),
			EmailAddress:$("#email").val(),
			Message:$("#message").val()
    	};
    	var postDeffered = $.ajax({
            type: "POST",
            url: "http://vrgo-api.azurewebsites.net/api/email",
            crossDomain: true,
            data: JSON.stringify(emailViewModel),
            dataType: "json",
            contentType: "application/json"
        });
        showNotification(postDeffered);
    }

    $("#email-button").click(function(){
    	var emailForm = $('#contactForm')
		if (!emailForm[0].checkValidity()) {
		  // If the form is invalid, submit it. The form won't actually submit;
		  // this will just cause the browser to display the native HTML5 error messages.
		  $('<input type="submit">').hide().appendTo(emailForm).click().remove();
		}
		else {
			sendEmail();
		}
    });
});