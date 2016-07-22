var main=function(){

	$('#menu').click(function(){
		var isVisible=$('.menu_list').is(':visible');

		if(isVisible){
			$('.menu_list').toggle('slow',function(){
				$('#menu').toggleClass('col-md-offset-3','slow');
			});
			
		}else{
		$('#menu').toggleClass('col-md-offset-3','slow',function(){
			$('.menu_list').toggle(	'slow');
		});
		}
		});
};
$(document).ready(main);