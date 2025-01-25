// basic random number function
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//functions for generating password at random
let password = {
  letters: 'abcdefghijklmnopqrstuvwxyz',
  capital: function () {
    return this.letters.toUpperCase();
  },
  symbols: '!@#$%^&*()-',
  numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
};

function sendData(length, upLow, num, special) {
  //collect data from form
  console.log(`${length},${upLow},${num},${special}.`);
}
//test function
function test() {
  console.log('just testing');
}
//event listener to run something after the dom has loaded once. solves for 'null' response error
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('password-box').defaultValue = 'Password';
});
