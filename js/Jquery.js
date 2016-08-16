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

	var value=$('.main h2').text();
	$('.main a').hover(
		function(){	
		if($(this).attr('id')==='cutecube'){
			$('.main h2').text('This is a little Javascript game using Jquery designed by myself!');
		}
		if($(this).attr('id')==='calculate'){
			$('.main h2').text('Easy calculator with the "+ - * /" operations and changable button colors. ');
		}
	
	
	},
	function(){  	
		$('.main h2').text(value);
		
	});
};
$(document).ready(main);