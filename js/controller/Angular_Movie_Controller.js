app.controller('MainController',['$scope',function($scope){
	var temper;
	$scope.movies=[{
		background: "../img/movie/Gone-with-the-Wind.jpg",
		title:"Gone with the wind!",
		directors:"Victor Fleming, George Cukor",
		writers:"Margaret Mitchell",
		stars:"Clark Gable, Vivien Leigh, Thomas Mitchell...etc.",
		storyline:" Scarlett is a woman who can deal with a nation at war, Atlanta burning, the Union Army carrying off everything from her beloved Tara, the carpetbaggers who arrive after the war. Scarlett is beautiful. She has vitality. But Ashley, the man she has wanted for so long, is going to marry his placid cousin, Melanie. Mammy warns Scarlett to behave herself at the party at Twelve Oaks. There is a new man there that day, the day the Civil War begins. Rhett Butler. Scarlett does not know he is in the room when she pleads with Ashley to choose her instead of Melanie. Written by Dale O'Connor (daleoc@interaccess.com)",
		likes: 0,
		dislikes: 0
	},{
		background: "../img/movie/The-Truman-Show.jpg",
		title:"The Truman Show",
		directors:"Peter Weir",
		writers:"Andrew Niccol",
		stars:"Jim Carrey, Ed Harris, Laura Linney...etc.",
		storyline:" In this movie, Truman is a man whose life is a fake one... The place he lives is in fact a big studio with hidden cameras everywhere, and all his friends and people around him, are actors who play their roles in the most popular TV-series in the world: The Truman Show. Truman thinks that he is an ordinary man with an ordinary life and has no idea about how he is exploited. Until one day... he finds out everything. Will he react? Written by Chris Makrozahopoulos <makzax@hotmail.com>",
		likes:0,
		dislikes: 0
	},{
		background:"../img/movie/Lucy.jpg",
		title:"Lucy",
		directors:"Luc Besson",
		writers:"Luc Besson",
		stars:" Scarlett Johansson, Morgan Freeman, Min-sik Choi...etc.",
		storyline:" It was supposed to be a simple job. All Lucy had to do was deliver a mysterious briefcase to Mr. Jang. But immediately Lucy is caught up in a nightmarish deal where she is captured and turned into a drug mule for a new and powerful synthetic drug. When the bag she is carrying inside of her stomach leaks, Lucy's body undergoes unimaginable changes that begins to unlock her mind's full potential. With her new-found powers, Lucy turns into a merciless warrior intent on getting back at her captors. She receives invaluable help from Professor Norman, the leading authority on the human mind, and French police captain Pierre Del Rio. Written by LeiaSol",
		likes:0,
		dislikes: 0
	}];
	$scope.plusOne=function(index){
    	$scope.movies[index].likes+=1;
	};
	$scope.minusOne=function(index){
		$scope.movies[index].dislikes+=1;
	};
/*	$scope.showLikes=function(index){
	    temper=$scope.movies[index].likes;
		$scope.movies[index].likes={{likes}};
	};
	$scope.hideLikes=function(index){

	}*/

/*	var main=function(){
	$('.vote').hover(function($compile){
		$(this).html($compile('{{movie.likes}}')(scope));
	},function(){});
};

$(document).ready(main());
*/
}]);

