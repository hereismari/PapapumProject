var posx;
var posy;

var on;

$(document).ready(function(){

    on = true;

    posx = (Math.random() * ($(document).width() - 10)).toFixed();
    posy = (Math.random() * ($(document).height() - 10)).toFixed();

    (function makeDiv(){

        $newdiv = $('<div id="papapum" style="cursor:pointer" />').css({
            'width': 50 +'px',
            'height': 50 +'px',
            'background-color': '#ffffff',
            'position':'absolute',
            'left':posx+'px',
            'top':posy+'px',
            'display':'none'
        });
        
        $newdiv.appendTo('body').fadeIn(100); 

    })();

  $('#papapum').on('click', function() {

    $("game_song").volume = 0;
    $(this).animate({
            left: (($(document).height())/4).toFixed(),
            top: (($(document).height())/20).toFixed(),
            height: '400px',
            width: '900px'
        },"slow");
            $('#papapum').append('<video autoplay width=900 height=400> <source src="Resources/Video/papapum.mp4" type="video/mp4">Your browser does not support the video tag.</video>');
  });

});

(function() {
    document.onmousemove = setSound;
    function setSound(event) {
        //if(on == false){
            var e = window.event;
            var mousex = e.clientX;
            var mousey = e.clientY;
            var dist = Math.sqrt((posx - mousex) * (posx - mousex) + (posy - mousey)*(posy - mousey));
            var volumeSong = 1 - Math.pow(2,Math.log(dist + 10)/Math.LN10)/10.0;
          //  document.write(volumeSong);
            var song = document.getElementById('game_song');
            song.volume = volumeSong;

         //   if(dist >= 750 &&  song.src != "file:///home/dell/PapapumProject/Resources/Music/calmFree.mp3"){
         //       song.src="Resources/Sound/calmFree.mp3";
         //   }
         //   else if (dist >= 300){
         //        song.src="Resources/Sound/when.mp3";
         //   }
         //   else
         //      song.src="Resources/Sound/live.mp3";

    }
})();