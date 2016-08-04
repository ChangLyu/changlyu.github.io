app.controller('ReplyController',['$scope', 'suggestions','$routeParams',function($scope,suggestions,$routeParams){

	$scope.post=suggestions.posts[$routeParams.id];
	$scope.addComment=function(){
		//if input empty, don't submit
		if(!$scope.comment || $scope.comment === "") {
		return;
		}
 
		//push suggestion posts in suggestions.js
		$scope.post.comments.push({
		body: $scope.comment,
		upvotes: 0,
		});
 
//after submit, clear input
		$scope.comment = '';
	};
    $scope.upVotes=function(index){
    	$scope.post.comments[index].upvotes+=1;
    }	
}]);