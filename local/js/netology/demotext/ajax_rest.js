$(document).ready(function () {
    $("#form").submit(function (event) {
		
       
	   var formData = {
            query: $("#ip").val(),
        };
        var url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/iplocate/address?ip=";
        var token = "da3b0fcc15737d8d1f2272405f82dd93aae9d200";

        $.ajax({
            type: "GET",
            url: url + formData.query,
            beforeSend: function(xhr) {
                xhr.setRequestHeader("Authorization", "Token "+ token)
            },
            data: {
				"Content-Type": "application/json",
				"Accept": "application/json",
				"Authorization": "Token " + token
			},
            dataType: "json",
            encode: true,
        }).done(function (result) {
           console.log(result);
		   
		   $("location").text(result.location.value);
        });
		
		


        event.preventDefault();
    });
});