
  // TODO: Store a reference to ALL the keys of our drumkit


var keys = document.querySelectorAll('div[data-key]')
// console.log(keys);
// console.log(typeof(keys[4].attributes[0].nodeValue))
// console.log(keys.length)

/*
  TODO: 
  1. Pressing a valid key will make a sound and put a glow around the 
  corresponding virtual key (don't worry if it stays there forever).
  2. Pressing a valid key rapidly and repeatedly should make rapid, 
  repeated sounds.
  3. Pressing a nonvalid key should not raise an error.
*/

/*
document.onkeydown = function(e) {
    var soundId = sounds[e.keyCode];
    if (soundId) document.getElementById(soundId).play();
    else console.log("key not mapped : code is", e.keyCode);
}

*/


function playSound(e) {
  // check if valid key
  // reset audio like in rick roll

  var aud = document.querySelector('audio[data-key="' + e.keyCode + '"]');
  aud.pause();
  aud.currentTime = 0;
  if(aud != undefined){
       aud.play();
    var key = document.querySelector('.key[data-key="' + e.keyCode +'"]');
   key.classList.add("playing");
  }
}


/* 
  The level at which an event is registered is important.
  Here, we want the pressing of a key to be registered on an application level
  i.e. the window will be 'listening' to this event.

  In other cases, we just want events to be registered at an element level.
  Keep this in mind when adding event listeners.
*/
window.addEventListener('keydown', playSound);

/*
  TODO: Finish the script so that the glow gets removed after you are 
  done pressing any valid key. 
  Everything else should work the same way as before.
*/

keys.forEach(function(key) {
  key.addEventListener('transitionend', function(e) {
    key.classList.remove('playing');
  });
});