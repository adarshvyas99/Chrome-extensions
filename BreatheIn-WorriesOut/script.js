let theExplanation = document.getElementById('the-explanation');
let About = document.getElementById('link-me');
let theCircle = document.getElementById('circle');
let popUp = document.querySelectorAll('.popup');
let closeButton = document.getElementById('close-explanation');

//clear circle animation
function clearKeyFrame() {
    theCircle.style.animationIterationCount = '0';
}
//clear the popup messages from circle
function clearPopUp() {
  for(let i = 0; i < popUp.length; i++) {
            popUp[i].style.display = 'none';
        }
}
//add explanation to circle
function addExplanation() {
  theExplanation.style.display = 'block';
}
//expand circle and make square
function expandSquare() {
  theCircle.style.width = '49vh';
  theCircle.style.height = '49vh';
  theCircle.style.marginTop = '-24.5vh'; 
  theCircle.style.marginLeft = '-24.5vh';
  theCircle.style.borderRadius = '0%';
}

//return css animation
function returnKeyFrame() {
    theCircle.style.animationIterationCount = 'infinite';
}
//return popup messages to circle
function returnPopUp() {
  for(let i = 0; i < popUp.length; i++) {
            popUp[i].style.display = 'block';
        }
}
//remove explanation from circle
function removeExplanation() {
  theExplanation.style.display = 'none';
}
//expand circle and make square
function contractCircle() {
  theCircle.style.width = '35vh';
  theCircle.style.height = '35vh';
  theCircle.style.marginTop = '-17.5vh'; 
  theCircle.style.marginLeft = '-17.5vh';
  theCircle.style.borderRadius = '50%';
}

/*------------LISTENER EVENTS---------------*/
//To expand circle and add explanation
About.addEventListener('click', function(){
  clearPopUp();
  addExplanation();
  expandSquare();
  clearKeyFrame();
});

//to reset back to regular breathing animation
closeButton.addEventListener('click', function(){
  returnPopUp();
  removeExplanation();
  contractCircle();
  returnKeyFrame()
});