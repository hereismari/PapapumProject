
$('.button').on('click', function() {

  document.body.style.backgroundImage = "url('Design/gif.gif')";
  $('body').append('<embed src="/home/dell/FindIggy/iggysounds/iggy_was_found.mp3" autostart="true" hidden="true" loop="false">');
  //var text = $('<div>fuck u</div>');
  $('body').css('background-image', 'Design/gif.gif');
  text.hide();
  text.appendTo('body');
  text.fadeIn();
  
  
(function makeDiv(){
    var divsize = ((Math.random()*100) + 50).toFixed();
    var color = '#'+ Math.round(0xffffff * Math.random()).toString(16);
    $newdiv = $('<div/>').css({
        'width': 10 +'px',
        'height': 10 +'px',
        'background-color': color,
    });
    
    var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
    var posy = (Math.random() * ($(document).height() - divsize)).toFixed();
    
    $newdiv.css({
        'position':'absolute',
        'left':posx+'px',
        'top':posy+'px',
        'display':'none'
    }).appendTo( 'body' ).fadeIn(100).delay(300).fadeOut(200, function(){
       $(this).remove();
       makeDiv(); 
    }); 
})();

});



