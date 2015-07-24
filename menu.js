function preload {

  var preload = new createjs.LoadQueue();
  preload.addEventListener("fileload", handleFileComplete);
  preload.loadFile("Resourcers/Video/papapum.mp4");
  preload.loadFile("Resourcers/Music/calmFree.mp3");
  preload.loadFile("Resourcers/Music/1xtra.mp3");
  preload.loadFile("Resourcers/Music/live.mp3");
  preload.loadFile("Resourcers/Music/leaveit.mp3");
  preload.loadFile("Resourcers/Sound/hot.mp3");
  preload.loadFile("Resourcers/Sound/master.mp3");
}

$(document).ready(function() {
	preload();
})();
