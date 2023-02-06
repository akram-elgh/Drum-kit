
for (let i = 0; i < document.querySelectorAll("button").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function(key) {
    triggerButton(this.innerHTML);
    addAnnimation(this.innerHTML);
    
  });
}
document.addEventListener("keydown", function(event){
  triggerButton(event.key);
  addAnnimation(event.key);
});
function triggerButton(key){
  var audio;
    switch (key) {
      case "w":
        audio = new Audio('sounds/tom-1.mp3');
        break;
      case "a":
        audio = new Audio("sounds/tom-2.mp3");
        break;
      case "s":
        audio = new Audio("sounds/tom-3.mp3");
        break;
      case "d":
        audio = new Audio("sounds/tom-4.mp3");
        break;
      case "j":
        audio = new Audio("sounds/snare.mp3");
        break;
      case "k":
        audio = new Audio("sounds/crash.mp3");
        break;
      case "l":
        audio = new Audio("sounds/kick-bass.mp3");
        break;      
      default:
        break;
    }
    audio.play();
}

function addAnnimation(key){
  document.querySelector("."+key).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("."+key).classList.remove("pressed");
  },100)
}
