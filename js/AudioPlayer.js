var main=function(){
	var player=$('.player'),
		cover=$('.cover'),
		audio_part=$('.audio_part'),
		tracktime=$('#track'),
		play=$('#play'),
		mute=$('#mute'),
		close=$('#close');
		volume=$('#volume'),
		albulm=['../../sound/Heathens.mp3','../../sound/the city of sky.mp3','../../sound/wish_you_were_there.mp3',
		        '../../sound/Cheap Thrills.mp3','../../sound/Closer.mp3','../../sound/Cold Water.mp3'],
        albulm_img=['../../img/AudioPlayer/Heathens.jpg','../../img/AudioPlayer/the_city_in_sky.jpg','../../img/AudioPlayer/wish_you_were_here.jpg','../../img/AudioPlayer/cheap_thrills.jpg',
        			'../../img/AudioPlayer/closer.jpg','../../img/AudioPlayer/cold_water.jpg','../../img/AudioPlayer/Heathens.jpg'],
        song_names=['Heathens','The City Of Sky','Wish You Were There',
        			'Cheap Thrills', 'Closer','Cold Water'],
        play_method="repeat";
        currentPlayingIndex=0;
    var getTime=function(seconds){
    	var date=new Date(seconds*1000);
    	var mm=date.getUTCMinutes();
    	var ss=date.getSeconds();
    	if(mm<10){
    		mm="0"+mm;
    	}
    	if(ss<10){
    		ss="0"+ss;
    	}
    	return mm+":"+ss;
    }
	var trackupdate=function(){
		song.ontimeupdate=function(){
		    if(isNaN((song.currentTime/song.duration)*100)){
		    	tracktime.val(0);
		    	$('span#begin_time').html(getTime(0));
		    	$('span#left_time').html(getTime(0));

		    }else{
		   	tracktime.val((song.currentTime/song.duration)*100);
		   		$('span#begin_time').html(getTime(song.currentTime));
		   		$('span#left_time').html(getTime(song.duration-song.currentTime));
		   }

		};
	};

	var setPlayMethod=function(){
		if(play_method=="repeat"){
			song.addEventListener('ended',function(){
				tracktime.val(0);
				song.play();
			});
		}else if(play_method=="order"){
			song.addEventListener('ended',function(){
				if(currentPlayingIndex<5){
					currentPlayingIndex+=1;
				}else{
					currentPlayingIndex=0;
				}
	        reloadNewSong();
	    	});
		};
	}

	var setAlbulmName

/*default first song*/
	var song=new Audio('../../sound/Heathens.mp3');
	trackupdate();
	setPlayMethod();
  song.play();

    $('#list_icon').click(function(){
    	/*write a toggle */
		if($('#list').is(':visible')){
			$('#list').css('display','none');
		}else{
			$('#list').css('display','inline-block');
		}
    });

     $('li').on('click',function(){
     	currentPlayingIndex=$(this).index();
     	reloadNewSong();
     	
    });

    var reloadNewSong=function(){
    	song.pause();
    	tracktime.val(0);
    	song=new Audio(albulm[currentPlayingIndex]);  
    	setPlayMethod();
    	$('img.cover').attr('src',albulm_img[currentPlayingIndex]); 	
    	$('span#song_name').html(song_names[currentPlayingIndex]);
    	trackupdate();
       /* 触发播发*/
        song.load();
   	 	play.click();
   	 }

	play.click(function(){
		if(song.paused){
			song.play();
			play.html('pause');
	}else{
			song.pause();
			play.html('play');
		}
	 });

    $('span#method').click(function(){
       if($(this).html()==='repeat'){
       		play_method='order';
       		setPlayMethod();
       	 	$(this).html('order');
       }else if($(this).html()==='order'){
       		play_method='repeat';
       		setPlayMethod();
        	$(this).html('repeat');
       };
    });

   mute.click(function(){
   	if(!song.muted){	
   		song.muted=true;
   		mute.attr('src', '../../img/AudioPlayer/mute.png');
   	}else{
   		song.muted=false;
   		mute.attr('src', '../../img/AudioPlayer/speaker.png');
   	}
   });



   tracktime.on('input change',function(){
   	song.currentTime=(tracktime.val()/100)*song.duration;
   });

   volume.on('input change',function(){
   	   	song.volume=volume.val();
   });

   close.on('click',function(){
   	    song.load();
   	 	tracktime.val(0);
   	 	$('span#begin_time').html(getTime(0));
		$('span#left_time').html(getTime(0));
   	 	play.html('play');
   });

   $('img.cover').hover(function(){
	$('span#song_name').css('display','inline-block');
		},function(){
	$('span#song_name').css('display','none');
   });  
};
$(document).ready(main);

