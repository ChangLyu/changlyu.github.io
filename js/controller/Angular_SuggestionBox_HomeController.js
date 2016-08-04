app.controller('HomeController',['$scope', 'suggestions',function($scope,suggestions){
    console.log('from home controller');
	$scope.posts=suggestions.posts;
    $scope.addSuggestion=function(){
    	//if input empty, don't submit
		if(!$scope.title || $scope.title === "") {
		return;
		} 
		//push suggestion posts in suggestions.js
		$scope.posts.push({
		title: $scope.title,
		upvotes: 0,
		});
		//after submit, clear input
		$scope.title = '';
    	};

    $scope.upVotes=function(index){
    	$scope.posts[index].upvotes+=1;
    }	
}]);