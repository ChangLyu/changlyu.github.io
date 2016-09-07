var main=function(){

    var maxNum;
    var minNum=0;
    var size_row;
    var size_colum;
    var colorArray=[];
    var begintime;
    var endtime;
    var backgroundChoose;

    /*cube generation*/
    $('span').click(function(){
       $('.main').hide();

       /*get the choosed value from front end*/
       var e = document.getElementById("chooseBox");
       var level=e.options[e.selectedIndex].text;
       var b = document.getElementById('background');
       var backgroundChoose=b.options[b.selectedIndex].text;

       if(level==="easy"){
        maxNum=5;
        size_row=6;
        size_colum=6;
        endtime='00:03:00';
        colorArray=['#66ffff','#b3ff66','#ff8c66','#99bbff','#ff80aa','#ffff66'];
        imgArray=['../img/lol/Ahri.png','../img/lol/Ashe.png','../img/lol/Blitzcrank.png','../img/lol/Diana.png','../img/lol/Ezreal.png','../img/lol/Janna.png'];
       }else if(level==="medium"){
        maxNum=9;
        size_row=10;
        size_colum=10;
        endtime='00:06:00';
        colorArray=['#66ffff','#b3ff66','#ff8c66','#99bbff','#ff80aa','#ffff66','#0040ff','#936c6c','#ffcccc','#ff0000'];
       imgArray=['../img/lol/Ahri.png','../img/lol/Ashe.png','../img/lol/Blitzcrank.png','../img/lol/Diana.png','../img/lol/Ezreal.png','../img/lol/Janna.png','../img/lol/Jinx.png','../img/lol/Leblanc.png','../img/lol/LeeSin.png','../img/lol/Lux.png'];
      
       }else {
        maxNum=15;
        size_row=16;
        size_colum=16;
        endtime='00:10:00';
        colorArray=['#66ffff','#b3ff66','#ff8c66','#99bbff','#ff80aa','#ffff66','#0040ff','#936c6c','#ffcccc','#ff0000','#000000','#ff6600','#b300b3','#adad85','#008000','#b37700'];
        imgArray=['../img/lol/Ahri.png','../img/lol/Ashe.png','../img/lol/Blitzcrank.png','../img/lol/Diana.png','../img/lol/Ezreal.png','../img/lol/Janna.png','../img/lol/Jinx.png','../img/lol/Leblanc.png','../img/lol/LeeSin.png','../img/lol/Lux.png','../img/lol/Malphite.png','../img/lol/MonkeyKing.png','../img/lol/Nautilus.png','../img/lol/Riven.png','../img/lol/Yasuo.png','../img/lol/TahmKench.png'];
      
       }

       var array=[];

       array=arrayGenerator(size_row*size_colum,minNum,maxNum,array);
       divGenerator(size_row,size_colum,colorArray,array,backgroundChoose);

      /* pass the begintime to get the time remaining*/
       begintime=Date.parse(new Date());
       $('body').prepend($('<div id="clock"></div>'));
       initializeClock('clock', begintime);


    });


/*   use on, and the parent must be existed already, child can be dynamically added*/


  

  $('body').on('click','.myClass', function(){
        /*once clicked add the sound*/
       var snd=new Audio('../../sound/Tiny Button Push-SoundBible.com-513260752.mp3');
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
                    $('.selected').hide(100,function(){
                        $(this).removeClass('selected');
                    }); 
                 $(this).hide(100);

               }else {
                 /*the second one clicked has different color as the first one*/
                 $('.selected').removeClass('selected');
                 $(this).addClass('selected');
               }
              }
        }
    });



     


    function arrayGenerator(size,minNum,maxNum,array){      
      /* n*m, need to create n*m div, but div must be pairs, so n*m/2 times to create random color*/
      for(var i=1; i<=size/2;i++){
        /*create random(0~5), and push it into arry twice, because the div must be pair*/
        var colorIndex=randomNumberCreate(minNum,maxNum);
        array.push(colorIndex);
        array.push(colorIndex);
      }
       /*now we alreay have a 36 index array , we need to shuffle it*/
       array=shuffle(array);
       console.log(array);
       return array;
    }

    function divGenerator(n,m,colorArray,array,backgroundChoose){

       /* index begins from 0*/
        for(i=0; i<=n*m-1; i++){
        if(i%n===0){
            var rowIndex=i;
            $('body').append($('<div></div>').addClass('row').attr('id',i));
        }
        if(backgroundChoose==="color"){
            $('div[id='+rowIndex+']').append( $('<div></div>').addClass('myClass').css('background-color',colorArray[array[i]]));
        }else{
             $('div[id='+rowIndex+']').append( $('<div></div>').addClass('myClass').css('background-image','url("'+imgArray[array[i]]+'")').css('background-size','cover'));
     
        }
       }
        
    }

    function randomNumberCreate(min,max){
    /*create random number*/
    var randomNumber=Math.floor(Math.random()*(max-min+1)+min); 
    return randomNumber;  
    }

    function shuffle(array){
        var currentIndex=array.length, randomIndex, pointer;
        while(currentIndex !==0){
            randomIndex=randomNumberCreate(0,currentIndex);
            currentIndex--;
            /*swap it*/
            pointer=array[currentIndex];
            array[currentIndex]=array[randomIndex];
            array[randomIndex]=pointer;
        }
        return array;
    }

    function getRemainingTime(begintime){
        var time=Date.parse(new Date())-begintime;;
        var seconds=Math.floor((time/1000)%60);
        var minutes=Math.floor((time/1000/60)%60);
        return {
            'total': time,
            'seconds': seconds,
            'minutes': minutes
        }
    }

    function initializeClock(id, begintime){
        var clock=document.getElementById(id);
        var timeintervarl=setInterval(function(){
            var time=getRemainingTime(begintime);
            /*if don't add 0 and slice, just show 0:0*/
            clock.innerHTML='time spend: &nbsp'+('0'+time.minutes).slice(-2)+':'+('0'+time.seconds).slice(-2);

            if(time.total<=0){
                clearInterval(timeinterval);
            }
        },1000);

    }
};
$(document).ready(main);




