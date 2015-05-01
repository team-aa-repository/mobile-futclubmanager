//In a real-life application, you would typically externalize the server parameters in a config module.
angular.module('starter.services', ['ngResource'])
.factory('Session', function ($resource) {
    return $resource('http://localhost:5000/sessions/:sessionId');
});