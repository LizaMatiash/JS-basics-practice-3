let convertType = 'miles';
let heading = document.querySelector('h1');
let intro = document.querySelector('p');
let answerDiv = document.getElementById('answer');
let form = document.getElementById('convert');

document.addEventListener('keydown', function(event) {
  let key = event.code;
  // alert(key);
  if (key === "KeyM") {
    convertType = 'miles';
    heading.innerHTML = 'Miles to Kilometers Converter';
    intro.innerHTML = 'Type in a number of miles and click the button to convert the distance to kilometers.';
  } else if (key === "KeyK") {
    convertType = 'kilometers';
    heading.innerHTML = 'Kilometers to Miles Converter';
    intro.innerHTML = 'Type in a number of kilometers and click the button to convert the distance to miles.';
  }
})

form.addEventListener('submit', function(event) {
  event.preventDefault();
  let distance = parseFloat(document.getElementById('distance').value);

  if (distance) {
    let converted = 0;
    if (convertType === 'miles') {
      converted = (distance * 1.609344).toFixed(3);
    } else {
      converted = (distance * 0.621371192).toFixed(3);
    }
    answer.innerHTML = `<h2>Inverted distance is ${converted} </h2>`;
  } else {
    answer.innerHTML = `<h2>You entered wrong number</h2>`;
  }

})
