var app=angular.module('SuggestionBox',['ngRoute']);
app.config(function($routeProvider){
	$routeProvider.when('/',{
		controller: 'HomeController',
		templateUrl: '../js/views/Angular_SuggestionBox_Home.html'
	}).when('/reply/:id',{
		controller: 'ReplyController',
		templateUrl: '../js/views/Angular_SuggestionBox_Reply.html'
	}).otherwise({
		redirectTo: '/'
	});
});