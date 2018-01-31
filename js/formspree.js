$(function() {
	var $contactForm = $('#contact-form');
  var $contactDiv = $('#contact-me');
	$contactForm.on('submit', function(e) {
		var msgLoad = '<div class="alert alert--loading">Sending message…</div>';
		var msgError = '<div class="alert alert--error">Ops, there was an error.</div>';
    var msgSuccess = '<div class="alert alert--success"></i>&nbsp;<i class="fa fa-share fa-4x" aria-hidden="true"></i>&nbsp;<i class="fa fa-envelope-o fa-4x" aria-hidden="true"></i><br><br><h3 style="color: #c8ece9;">Thanks for your message. <br><br>I will get in touch with you shortly.</h3></div>';

		e.preventDefault();
		$.ajax({
			url: '//formspree.io/xpander@adam.com.au',
			method: 'POST',
			data: $(this).serialize(),
			dataType: 'json',
			beforeSend: function() {
				$contactForm.append(msgLoad);
			}
		}).done(function(data) {
			$contactDiv.append(msgSuccess);
      $contactForm.hide(1000);
		}).fail(function() {
			$contactDiv.append(msgError);
		}).always(function() {
			$contactDiv.find('.alert--loading').hide();
		});
	});
});
