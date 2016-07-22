var main=function(){
    var maxNum=6;
    var minNum=0;
    var colorArray=['#66ffff','#b3ff66','#ff8c66','#99bbff','#ff80aa','#ffff66','#d966ff'];
    $('span').click(function(){
       $('.btn').remove();
       for(var i=1; i<=70;i++ ){
         var random=randomNumberCreate(minNum,maxNum); 
          var color=colorArray[random]; 
       $('body').append( $('<div></div>').addClass('myClass').css('background-color',color));

       /*make all the element in the body be selectable,need to add select css in the css file*/               
   }
    });


/*   use on, and the parent must be existed already, child can be dynamically added*/
    $('body').on('click','.myClass',function(){

       var snd=new Audio('../sound/Tiny Button Push-SoundBible.com-513260752.mp3');
       snd.play();

        /*no element choosed before*/
        if($('.selected').length===0){
            $(this).addClass('selected');   
        }else if($('.selected').length===1){
            /*already one element is selected*/
            /*same element is clicked again then delete this*/
              if($(this).hasClass('selected')){
                  $(this).removeClass('selected');
              }else{
                /*click another one, make a judge if they have some color*/
               if($(this).css('background-color')===$('.selected').css('background-color')){
              /*  same color delete each other, then remove the '.selected' class*/
                 $('.selected').hide(500,function(){
                    $('.selected').removeClass('selected');
                 });
                 $(this).hide(500);
               }else {
                 /*the second one clicked has different color as the first one*/
                 $('.selected').removeClass('selected');
                 $(this).addClass('selected');
               }
              }
        }
    });
    function randomNumberCreate(min,max){
    /*create random number*/
    var randomNumber=Math.floor(Math.random()*(max-min+1)+min); 
    return randomNumber;  
}
};
$(document).ready(main);




