app.factory('suggestions',[function(){
	var demoSuggesitons={
		posts: [
		{
			title: 'HTML, CSS, Jquery, Angular are front-end knowlesge!',
			upvotes: 15,
			comments:[],
		},{
			title: 'I will find job quickly!',
			upvotes: 9,
			comments:[],
		},{
			title: 'I will become a full-stack developer in five years!',
			upvotes: 7,
			comments:[],
		}]
	};
	return demoSuggesitons;
}]);