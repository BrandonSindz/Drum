// Detecting Button Press
  
  
for (var i = 0; i < document.querySelectorAll
    (".drum").length; i++ ) {


 document.querySelectorAll(".drum")[i].addEventListener("click", function() {

  var buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
 });

}

// Detecting Keyboard Presses


document.addEventListener('keydown', function(event) {
   
   makeSound(event.key);
   buttonAnimation(event.key);
   
});

function makeSound(key) { 

   switch (key) {
      case "w":
         let beatw = new Audio('/sounds/crash.mp3');
         beatw.play();
         
         break;
      case "a":
let beata = new Audio('/sounds/kick-bass.mp3');
beata.play();
            
            break;
      case "s":
let beats = new Audio('/sounds/snare.mp3');
beats.play();
            
            break;
      case "d":
let beatd = new Audio('/sounds/tom-1.mp3');
beatd.play();
            
            break;
      case "j":
let beatj = new Audio('/sounds/tom-2.mp3');
beatj.play();
            
            break;
      case "k":
let beatk = new Audio('/sounds/tom-3.mp3');
beatk.play();

            
            break;
      case "l":
let beatl = new Audio('/sounds/tom-4.mp3');
beatl.play();
            
            break;
   
      default:
         console.log(key);
   }
   
}

function buttonAnimation(currentKey){
      var activeButton = document.querySelector("." + currentKey);
    
      activeButton.classList.add("pressed");
    
      setTimeout(function() {
        activeButton.classList.remove("pressed");
      }, 100);
}