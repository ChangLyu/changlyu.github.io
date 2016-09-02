var main=function(){
	var player=$('.player'),
		cover=$('.cover'),
		audio_part=$('.audio_part'),
		tracktime=$('#track'),
		play=$('#play'),
		mute=$('#mute'),
		close=$('#close');
		volume=$('#volume');

	song=new Audio('../../sound/the city of sky.mp3');
 	tracktime.val(0);
		play.click(function(){
			if(song.paused){
				song.play();
				play.html('pause');
		}else{
				song.pause();
				play.html('play');
			}
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
   song.ontimeupdate=function(){
    if(isNaN((song.currentTime/song.duration)*100)){
    	tracktime.val(0);
    }else{
   	tracktime.val((song.currentTime/song.duration)*100);}
   };

   tracktime.on('input change',function(){
   	song.currentTime=(tracktime.val()/100)*song.duration;
   });

   volume.on('input change',function(){
   	   	song.volume=volume.val();
   });

   close.on('click',function(){
   	    song.load();
   	 	tracktime.val(0);
   	 	play.html('play');
   });

   



   
};
$(document).ready(main);