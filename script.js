let data = [];

// basic random number function
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//NOTE TO SELF
//what if i ran the if statements to determine what string to use, and the strings could even be prewritten. or better yet, combined at the time of selection from the object. need to change everything to a string and look at string combining.

//specific password letter function
function lettersOnly() {
  let holding = [];
  for (let i = 0; i < data[0]; i++) {
    holding.push(password.letters[Math.floor(Math.random() * 26)]);
  }
  console.log(holding.join(''));
}
function capitalLettersOnly() {
  let holdingC = [];
  for (let i = 0; i < data[0] / 2; i++) {
    holdingC.push(password.capital()[Math.floor(Math.random() * 26)]);
  }
  console.log(holdingC);
}
//password symbol funtion to set 1/4 of password to random symbols
function useSymbols() {
  let holdingS = [];
  for (let i = 0; i < data[0] / 4; i++) {
    holdingS.push(password.symbols[Math.floor(Math.random() * 11)]);
  }
  console.log(holdingS);
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
  data[0] = Number(length);
  if (upLow === 'upper') {
    data[1] = 0;
  } else if (upLow === 'lower') {
    data[1] = 1;
  } else return console.error('nothing selected');

  if (num === 'number') {
    data[2] = 0;
  } else if (num === 'no-number') {
    data[2] = 1;
  } else return console.error('nothing selected');

  if (special === 'special') {
    data[3] = 0;
  } else if (special === 'basic') {
    data[3] = 1;
  } else return console.error('nothing selected');

  console.log(data);
  //   console.log(`${length},${upLow},${num},${special}.`);
}
//test function
function test() {
  console.log('just testing');
}
//event listener to run something after the dom has loaded once. solves for 'null' response error
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('password-box').defaultValue = 'Password';
});
