// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic']).run(function($ionicPlatform) {
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
});

/**
 * transform request factory.
 */

var transformData = function(data) {
	if ( ! angular.isObject( data ) ) {
		return( ( data == null ) ? "" : data.toString() );
	}
	var buffer = [];
	// Serialize each key in the object.
	for ( var name in data ) {
		if ( ! data.hasOwnProperty( name ) ) {
			continue;
		}
		var value = data[ name ];
		buffer.push(encodeURIComponent( name ) + "=" + encodeURIComponent( ( value == null ) ? "" : value )
		);
	}
	// Serialize the buffer and clean it up for transportation.
	return source = 
		buffer
		.join( "&" )
		.replace( /%20/g, "+" );
};
	
/**
 * Login controller.
 * */
app.controller('LoginController', function($http) {

	/**
	 * Login function.
	 */
	this.login = function login() {
		    this.authMsg = '';
		    this.m_username = 'admin';
		    this.m_password = 'admin';

		var request = $http({
			method: "POST",
			url: "http://soa-futclubmanager.herokuapp.com/api/oauth/token",
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'},
			transformRequest: transformData,
			data: {
				grant_type:'password',
				client_id:'android',
				client_secret:'SomeRandomCharsAndNumbers',
				username:'admin',
				password:'admin'
			}
		}).success(function (err, data) {
			$scope.login.authMsg = 'ehh';
			console.log(data);

		}).error(function (err, data) {
			$scope.login.authMsg = err;
			console.log("soa error");
		});
	};
});

