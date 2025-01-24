// basic random number function
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sendData() {
  //collect data from form
}
//test function
function test() {
  console.log('just testing');
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('password-box').defaultValue = 'Password';
});
