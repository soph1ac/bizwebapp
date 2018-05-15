
Replace for b2b.html
	window.location.replace("sec-audit.html")

Ajax for b2b
	$("form").submit-b2b(function (e) {
		var formData = new FormData($(this)[0]);
		$.ajax({
			url: "ajaxprocess-b2b.php",
			type: "POST",
			data: formData,
			cache: false,
			contentType: false,
			processData: false,
			success: function(){
			console.log('got here');
}
		});
	window.location.replace("alt-languages.html")
	});
});

Ajax for sec-audit
	$("form").submit-sec-audit (e) {
		var formData = new FormData($(this)[0]);
		$.ajax({
			url: "ajaxprocess-sec-audit.php",
			type: "POST",
			data: formData,
			cache: false,
			contentType: false,
			processData: false,
			success: function(){
			console.log('got here');
}
		});
	window.location.replace("b2b.html")
	});
});

Ajax for alt-languages
	$("form").submit-alt-languages (e) {
		var formData = new FormData($(this)[0]);
		$.ajax({
			url: "ajaxprocess-alt-languages.php",
			type: "POST",
			data: formData,
			cache: false,
			contentType: false,
			processData: false,
			success: function(){
			console.log('got here');
}
		});
	window.location.replace("results.html")
	});
});

