$(document).on('ready', function () {

var myArray = ['hello'];


$('#countryLoader').on('click', function(){

	$.ajax({
		method : 'POST',
		url  : '/countries',
		success : function(data) {
				data.forEach(function(country) {
					// ul tag is in the jade file
					$('.countryList').append('<li>' + country.name + '</li>')
				})

		}
			
	})
 })

$('#search').on('click', function(){
	$.ajax({
		method: 'POST',
		url: '/search',
		data: {
			dataSearch : $('#userSearch').val()
		},
		success : function(country) {
			// console.log(country.name)
			$('#result').append('<li>' + country.name + '</li>')
		}
	})

})





})

