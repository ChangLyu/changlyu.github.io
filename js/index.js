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

	$('.welcome h1').mouseenter(function(){
		$(this).animate({'fontSize' :'45px'}, 'fast');
	});
	$('.welcome h1').mouseleave(function(){
		$(this).animate({'fontSize' :'36px'}, 'fast');
	});

	$('.main a').hover(
		function(){
			$(this).addClass('active', 'fast',function(){
				if($(this).attr('id')==='html'){
				$(this).text('Single pages of HTML and CSS');
			}else if($(this).attr('id')==='jquery'){
				$(this).text('Little game and coming more!');
			}else{
				$(this).text('Two angular projects!');
			}
			});
	},
		function(){
			$(this).removeClass('active','fast',function(){
				if($(this).attr('id')==='html'){
				$(this).text('HTML&CSS');
			}else if($(this).attr('id')==='jquery'){
				$(this).text('Jquery&JS');
			}else{
				$(this).text('Angular');
			}
			});
	});

	$('.me p').click(function(){
		 var ele=$('.about');
		if( ele.css('display') == 'none')
  		   $('.about').show('slow');
		else
		{
   		  $('.about').hide('slow');   			
		}
/*      $('.about').toggle('slow'); not work in ie*/
	});

};
$(document).ready(main);