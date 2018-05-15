$('document').ready(function () {
	// Credit function to dynamically generated the cards on the index page
	function cardloading() {
		// is Ajax method to retrieve the Json file
		$.ajax({
			url: 'ppl.json',
			type: 'get',
			dataType: 'JSON',
			cache: false,
			error: function (data) {
				console.log(data);
			},
			success: function (data) {
				// upon successfully retrieving the json file loop through the data dynamically generate cards on the index page
				$.each(data, function (index, value) {
					console.log(Object.keys(value));
					console.log(index);
					console.log(value);
					console.log(value.id);
					console.log(value.webtype);

					var id = value.id;
					var webtype = value.webtype;
//					var gender = value.gender;

					$('#profile').append('<div class="person" id="p' + id + '"></div>');
					$('#p' + id).append(`
						<h3> ${id} </h3>
						<h4>Webtype: ${webtype}</h4>
					`);
				});
			}
		});
	}

// execute the function I just created on page load
	cardloading();

// upon form submission remove all the cards on the  index page
// Post the data from the form to my PHP which will update for Json file
// upon success rerun the function to dynamically generated the cards on the next page
	$("form").submit(function (e) {
		$('.person').remove();
		var formData = new FormData($(this)[0]);
		$.ajax({
			url: "ajaxprocess.php",
			type: "POST",
			data: formData,
			cache: false,
			contentType: false,
			processData: false,
			success: function(){
				console.log('got here');
//				cardloading();
			}
		});
//        function bizcheck(w){
//		//do the same with snack, but also check if snack is cupcake
//		if ( w == 'personal' ){
//			window.location.replace("personal.html")
//		} else if ( w == 'b2b'){
//			window.location.replace("sec-audit.html")
//		} else {
//			window.location.replace("b2c.html")
//        }
//    }
//        webtype = document.querySelector('input[name=webtype]:checked').value;
//	   bizcheck(webtype);
		e.preventDefault();
	});
});

//Ajax for b2b
//	$("form").submit-b2b(function (e) {
//		var formData = new FormData($(this)[0]);
//		$.ajax({
//			url: "ajaxprocess-b2b.php",
//			type: "POST",
//			data: formData,
//			cache: false,
//			contentType: false,
//			processData: false,
//			success: function(){
//			console.log('got here');
//}
//		});
//	window.location.replace("alt-languages.html")
//	});
//});

//Ajax for sec-audit
//	$("#sec-audit").submit (function(e) {
//		var formData = new FormData($(this)[0]);
//		$.ajax({
//			url: "ajaxprocess-sec-audit.php",
//			type: "POST",
//			data: formData,
//			cache: false,
//			contentType: false,
//			processData: false,
//			success: function(){
//			console.log('got here');
//}
//		});
//        function seccheck(sa){
//		//do the same with snack, but also check if snack is cupcake
//		if ( sa == 'y' ){
//			window.location.replace("other.html")
//		} else {
//			window.location.replace("b2b.html")
//		}
//    }
//        sa = document.querySelector('input[name=sec-audit]:checked').value;
//	   seccheck(sa);
//		e.preventDefault();
//	});


