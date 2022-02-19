'use strict';

const drumBtn = document.querySelectorAll('.drum');

// Switch function to play different sounds for different input
const switchFunc = function(event) {
  switch (event) {
    case 'w':
      const tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case 'a':
      const tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
    break;

    case 's':
      const tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
    break;

    case 'd':
      const tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
    break;

    case 'j':
      const snare = new Audio('sounds/snare.mp3');
      snare.play();
    break;

    case 'k':
      const crash = new Audio('sounds/crash.mp3');
      crash.play();
    break;

    case 'l':
      const kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
    break;

    default: console.log();

  }
}

// Button Animation
const btnAnimation = function(btnCurrent) {
  const event = document.querySelector(`.${btnCurrent}`);
  event.classList.add('pressed');
  setTimeout(() => event.classList.remove('pressed'), 100);
}

// Function to handle click events
const handleClick = function() {
  const btn = this.innerHTML;
  switchFunc(btn);
  btnAnimation(btn);
}

// Function to handle key events
const handlePress = function(e) {
  const key = e.key;
  switchFunc(key);
  btnAnimation(key);
}

// Event Listeners
drumBtn.forEach(i => i.addEventListener('click', handleClick));
window.addEventListener('keydown', handlePress);


// function BellBoy (name, surname, dob, occupation) {
//   this.name = name;
//   this.surname = surname;
//   this.dob = dob;
//   this.occupation= occupation;
//   this.calcAge = function() {
//     return console.log(2022-dob);
//   }
// }
//
// const jackBellBoy = new BellBoy('Jacques', 'Till', 1995, 'Web Developer');
// const lienBellBoy = new BellBoy('Chereline', 'Till', 1992, 'English Teacher');
// jackBellBoy.calcAge();
// lienBellBoy.calcAge();
