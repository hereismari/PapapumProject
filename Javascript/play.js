
var posx;
var posy;

var clickedIggy;

var start;
var end;
var timeGame;

jQuery(document).ready(function(){

    preprocessVideo.style.visibility='hidden';
    document.getElementById('endMessage').style.visibility='hidden';
    document.getElementById('foundText').style.visibility='hidden';
    document.getElementById('timeText').style.visibility='hidden';
    document.getElementById('playAgain').style.visibility='hidden';
    document.getElementById('papapumLogo').style.visibility='hidden';
    document.getElementById('btn_fb').style.visibility='hidden';
    document.getElementById('btn_twitter').style.visibility='hidden';
    document.getElementById('shareText').style.visibility='hidden';

    clickedIggy = false;
    posx = (Math.random() * ($(document).width() - 10)).toFixed();
    posy = (Math.random() * ($(document).height() - 10)).toFixed();
    var songs = ["Resources/Music/calmFree.mp3","Resources/Music/live.mp3","Resources/Music/1xtra.mp3"];
    var index = Math.floor(Math.random() * 3) + 0;
    document.getElementById("game_song").src = songs[index];

    start = new Date().getTime();
    end = new Date().getTime();

    (function makeDiv(){

        $newdiv = $('<div id="papapum" style="cursor:pointer" />').css({
            'width': 50 +'px',
            'height': 50 +'px',
            'background-color': '#222',
            'position':'absolute',
            'left':posx+'px',
            'top':posy+'px',
            'display':'none',
            'visible' : 'false'
        });
        
        $newdiv.appendTo('body').fadeIn(5000); 

    })();

    (function() {
    document.onmousemove = setSound;
    function setSound(event) {
            var e = window.event;
            var mousex = e.clientX;
            var mousey = e.clientY;
            var dist = Math.sqrt((posx - mousex) * (posx - mousex) + (posy - mousey)*(posy - mousey));
            var volumeSong = 1 - Math.pow(2,Math.log(dist + 10)/Math.LN10)/10.0;
          //  document.write(volumeSong);
            var song = document.getElementById('game_song');
            song.volume = volumeSong;
     }
})();

  $('#papapum').on('click', function() {

    if(!clickedIggy){
        
        end = new Date().getTime();
        timeGame = end - start;        
        clickedIggy = true;
        document.onmousemove = endGame;
        document.getElementById('game_song').src = "#";

        $(this).animate({
                left: (($(document).width())/8).toFixed(),
                top: (($(document).height())/20).toFixed(),
                height: '400px',
                width: '900px'
            },"slow");
                $('#papapum').append(preprocessVideo);
                preprocessVideo.play();
                preprocessVideo.style.visibility='visible';
      
        }

        showEndGame();

  });

});

function endGame()
{
    
}

function showEndGame()
{
   
   setTimeout(function(){document.getElementById('papapumVideo').style.visibility='hidden';}, 8000);
   setTimeout(function(){document.getElementById('papapum').style.visibility='hidden';}, 8000);

   setTimeout(function(){document.getElementById('endMessage').style.visibility='visible';}, 8300);
   setTimeout(function(){document.getElementById('foundText').style.visibility='visible';}, 8600);

   document.getElementById('timeText').innerHTML = "Time: " + timeGame/1000 + ' seconds';
   setTimeout(function(){document.getElementById('timeText').style.visibility='visible';}, 9000);

   setTimeout(function(){document.getElementById('playAgain').style.visibility='visible';}, 9500);

   setTimeout(function(){document.getElementById('papapumLogo').style.visibility='visible';}, 9700);
   setTimeout(function(){document.getElementById('shareText').style.visibility='visible';}, 9900);
   setTimeout(function(){document.getElementById('btn_fb').style.visibility='visible';}, 10100);

   document.getElementById('btn_twitter').href = "http://twitter.com/share?text=I've found iggy in " + timeGame/1000 + " seconds!&url=http://www.findiggy.hol.es&hashtags=FindIggy"
   setTimeout(function(){document.getElementById('btn_twitter').style.visibility='visible';}, 10300);
   setTimeout(function()
        {
            document.getElementById('game_song').src="Resources/Sound/master.mp3"; 
            $('#game_song').animate({volume:0.5},5000);
        }, 10300);
  
}