let data = [];

// basic random number function
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//specific password letter function
function lettersOnly() {
  let holding = [];
  for (let i = 0; i < data[0]; i++) {
    console.log(password.letters[Math.floor(Math.random() * 26)]);
  }
  //   console.log(holding);
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
