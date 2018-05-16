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
					console.log(value.secaudit);
					console.log(value.bspecs);
					console.log(value.alanguages);
                    

					var id = value.id;
					var webtype = value.webtype;
					var secaudit = value.secaudit;
					var bspecs = value.bspecs;
					var alanguages = value.alanguages;

					$('#profile').append('<div class="person" id="p' + id + '"></div>');
					$('#p' + id).append(`
						<h3> ${id} </h3>
						<h4>Webtype: ${webtype}</h4>
						<h4>Security Audit: ${secaudit}</h4>
						<h4>Business Specifications: ${bspecs}</h4>
						<h4>Alternate Languages: ${alanguages}</h4>
					`);
				});
			}
		});
	}

// execute the function I just created on page load
	cardloading();
});
