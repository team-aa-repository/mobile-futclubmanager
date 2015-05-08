// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic']).run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

/**
 * Login controller.
 * */
.controller('LoginController', ['$scope', '$http', function($scope, $http, transformRequestAsFormPost) {

	/**
	 * Login function.
	 */
	this.login = function login() {
		$scope.login.authMsg = '';
		$scope.login.m_username = 'admin';
		$scope.login.m_password = 'admin';

		var request = $http({
			method: "POST",
			url:"http://soa-futclubmanager.herokuapp.com/api/oauth/token",
			headers: {
				//'Authorization': 'Basic d2ViYXBwOnMzY3IzdA==',
			    'Content-Type': 'application/x-www-form-urlencoded'},
			    transformRequest: transformRequestAsFormPost,
			    data: {
			          grant_type:'password', 
			          client_id:'android',
			          client_secret:'SomeRandomCharsAndNumbers',
			          username:'admin',
			          password:'admin'
			    }
			}
		).success(function (err, data) {
			$scope.login.authMsg = 'ehh';
			console.log("deal with it bitch");

		}).error(function (err, data) {
			$scope.login.authMsg = err + ' ' + data;
			console.log("error you bitch");
		});
	};
}])

/**
 * transform request factory.
 */
.factory('transformRequestAsFormPost', function() {
		// I prepare the request data for the form post.
		function transformRequest(data, getHeaders) {
			var headers = getHeaders();
			// headers[ "Content-Type" ] = "application/x-www-form-urlencoded";
			return(serializeData(data));
		}

		// Return the factory value.
		return(transformRequest);

		function serializeData(data) {
			// If this is not an object, defer to native stringification.
			if (!angular.isObject(data)) {
				return((data == null) ? "" : data.toString());
			}
			var buffer = [];
			// Serialize each key in the object.
			for (var name in data) {
				if (!data.hasOwnProperty(name)) {
					continue;
				}
				var value = data[name];
				buffer.push(encodeURIComponent(name) +
					"=" +
					encodeURIComponent((value == null) ? "" : value)
				);
			}

			// Serialize the buffer and clean it up for transportation.
			var source = buffer
					.join("&")
					.replace(/%20/g, "+");
			return(source);
		}
})