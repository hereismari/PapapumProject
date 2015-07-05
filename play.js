$(document).ready(function(){

  (function makeDiv(){

        var posx = (Math.random() * ($(document).width() - 10)).toFixed();
        var posy = (Math.random() * ($(document).height() - 10)).toFixed();

        $newdiv = $('<div/>').css({
            'width': 10 +'px',
            'height': 10 +'px',
            'background-color': '#666',
            'position':'absolute',
            'left':posx+'px',
            'top':posy+'px',
            'display':'none'
        });
        
        $newdiv.appendTo( 'body' ).fadeIn(100); 

    })();


  $('div').on('click', function() {

    document.body.style.backgroundImage = "url('Design/gif.gif')";
    $('body').append('<embed src="/home/dell/FindIggy/iggysounds/iggy_was_found.mp3" autostart="true" hidden="true" loop="false">');
    $('body').css('background-image', 'Design/gif.gif');
    $(this).animate({left: (($(document).width())/2).toFixed(),
            top: (($(document).height())/2).toFixed(),
            height: '150px',
            width: '150px'},"slow");
    //$('body').append('<iframe src="http://gifyoutube.com/embed/vq65Yj?autoplay=1" frameborder="0" scrolling="no" width="480" height="270" autostart="true" style="-webkit-backface-visibility: hidden;-webkit-transform: scale(1);" ></iframe>');
  });



});
