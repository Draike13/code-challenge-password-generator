let data = [];
let passwordBlock;

//function to collect data from form
function sendData(length, upLow, num, special) {
  data[0] = length;
  if (upLow === 'upper') {
    data[1] = 1;
  } else if (upLow === 'lower') {
    data[1] = 0;
  } else return console.error('nothing selected');

  if (num === 'number') {
    data[2] = 1;
  } else if (num === 'no-number') {
    data[2] = 0;
  } else return console.error('nothing selected');

  if (special === 'special') {
    data[3] = 1;
  } else if (special === 'basic') {
    data[3] = 0;
  } else return console.error('nothing selected');
}
//function to run the big logic for password generation and then call the sorter
function generatePassword() {
  passwordBlock = '';
  for (let i = 0; i < data.length; i++) {
    if (data[i]) {
      if (i === 0) {
        passwordBlock += password.letters;
      } else if (i === 1) {
        passwordBlock += password.capital;
      } else if (i === 2) {
        passwordBlock += password.numbers;
      } else if (i === 3) {
        passwordBlock += password.symbols;
      } else {
        alert('Look again, you missed something!');
      }
    }
  }
  passwordSort();
}

//function to sort the string for random characters and output the new password
function passwordSort() {
  let holding = [];
  for (let i = 0; i < data[0]; i++) {
    holding.push(passwordBlock[Math.floor(Math.random() * passwordBlock.length)]);
  }
  verifyPassword(holding);
}

//verification function to check if each set that is chosen(first loop) is contained in the holding array(second loop) then either breaking early and retrying with a new data set, or finishing and outputing the password
function verifyPassword(holding) {
  const keys = Object.keys(password);

  for (let i = 0; i < keys.length; i++) {
    if (!data[i]) continue;

    const set = password[keys[i]];
    let found = false;

    for (let char of set) {
      if (holding.includes(char)) {
        found = true;
        break;
      }
    }
    if (!found) {
      console.log('The password isnt strong enough...retrying!');
      passwordSort();
      return;
    }
  }
  document.getElementById('password-box').value = holding.join('');
  console.log(holding.join(''));
}

//functions for generating password at random
let password = {
  letters: 'abcdefghijklmnopqrstuvwxyz',
  get capital() {
    return this.letters.toUpperCase();
  },
  numbers: '0123456789',
  symbols: '!@#$%^&*()-',
};
