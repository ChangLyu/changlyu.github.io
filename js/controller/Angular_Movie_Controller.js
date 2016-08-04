app.controller('MainController',['$scope','moviesInformation',function($scope,moviesInformation){
	var temper;
	$scope.movies=moviesInformation.movies;
	$scope.plusOne=function(index){
    	$scope.movies[index].likes+=1;
	};
	$scope.minusOne=function(index){
		$scope.movies[index].dislikes+=1;
	};

}]);

