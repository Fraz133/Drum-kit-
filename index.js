
var allButtons=document.querySelectorAll("button"); //[1,2,3,4,5]
for(var i=0;i<allButtons.length;i++){
  allButtons[i].addEventListener("click",function(){
    var buttonInnerHTML=this.innerHTML;
    playSound(buttonInnerHTML);
    addAnimation(buttonInnerHTML);
  });
}

function playSound(key){
  switch(key){
      case "w":
      var audio = new Audio('./sounds/tom-1.mp3');
      audio.play();
      break;
      case "a":
      var audio = new Audio('./sounds/tom-2.mp3');
      audio.play();
      break;
      case "s":
      var audio = new Audio('./sounds/tom-3.mp3');
      audio.play();
      break;
      case "d":
      var audio = new Audio('./sounds/tom-4.mp3');
      audio.play();
      break;
      case "j":
      var audio = new Audio('./sounds/snare.mp3');
      audio.play();
      break;
      case "k":
      var audio = new Audio('./sounds/crash.mp3');
      audio.play();
      break;
      case "l":
      var audio = new Audio('./sounds/kick-bass.mp3');
      audio.play();
      break;
  }
}
document.addEventListener("keypress",function(event){
  playSound(event.key);
  addAnimation(event.key);
});

function addAnimation(currentkey) {
  var activeButton = document.querySelector("." + currentkey); // Correctly concatenate class name
  if (activeButton) { // Check if activeButton is not null
    activeButton.classList.add("pressed"); // Correct syntax without the dot
    setTimeout(function () {
      activeButton.classList.remove("pressed");
    }, 100); // Remove the class after 100ms
  }
}
