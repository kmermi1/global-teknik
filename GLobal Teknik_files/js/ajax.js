$(document).ready(function(){
$("#contact-form").submit(function(){
	
var mail_exp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
//var string_exp =/^[A-Za-z0-9 .'-]+$/;

var name = $('#contact-form [name="name"]').val();
var email = $('#contact-form [name="email"]').val();
var message =  $('#contact-form [name="message"]').val();

//Name error
if(name == ""){
	$('#name').css('background','#FCBBB4');
	$('#name').css('box-shadow','none');
	//$('#name[placeholder]').placeholder({placeholderTextColor: "#222"});
}
else {
	$('#name').css('background','');
	$('#name').css('box-shadow','');
}

//E-mail error
if(email == ""){
	$('#email').css('background','#FCBBB4');
	$('#email').css('box-shadow','none');
}
else if(mail_exp.test(email) == false){
	$('#email').css('background','#FCBBB4');
	$('#email').css('box-shadow','none');
}
else {
	$('#email').css('background','');
	$('#email').css('box-shadow','');
}

//Message error
if(message == ""){
	$('#message').css('background','#FCBBB4');
	$('#message').css('box-shadow','none');
}
else {
	$('#message').css('background','');
	$('#message').css('box-shadow','');
}
	
var str = $(this).serialize();
	
$.ajax({
type: "POST",
url: "form/send.php",
data: str,
success: function(msg){
	if(msg == 'OK'){
		$('.form-message').html('Message sent!');
		$('#contact-form [name="name"]').val('');	 
		$('#contact-form [name="email"]').val('');
		$('#contact-form [name="message"]').val('');
		$('#contact-form [name="subject"]').val('');
	}
	else {
		$('.form-message').html('');
	}
	
$(this).html(result);

}
});

return false;

});
});
	   