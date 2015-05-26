angular.module('footStates', [])
	.config(['$stateProvider', function ($stateProvider) {
		var settings = {
            name: 'home',
            url: '/home',
            /*abstract: true,*/
            templateUrl: 'templates/home.html', 
            controller: 'LoginController'
		};
		
		/*var details = {
			name: 'settings.details',
			parent: settings,
			url: '',
			templateUrl: 'settings.details.html'
		};
		
		var quotes = {
			name: 'settings.quotes',
			parent: settings,
			url: '/quotes',
			templateUrl: 'settings.quotes.html'
		};*/
	
		$stateProvider
		.state(settings);
		/*.state(details)
		.state(quotes);*/
	
	}]);