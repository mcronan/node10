var countries = require('../models/countriesModel.json')

var indexController = {
	index: function(req, res) {
		res.render('index');
	},

	countries: function(req, res) {
		res.send(countries);
	},

	search: function(req, res) {
		countries.filter(function(country) {
			if(req.body.dataSearch === country.name) {
				res.send(country);	
				// console.log(country)
			}
		})

	}
}


module.exports = indexController;