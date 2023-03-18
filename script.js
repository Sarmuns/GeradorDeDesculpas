var intro = ["sorry i can't come",'please forgive my abscence','this is going to sound crazy but','get this:',"i can't go because","i know you're going to hate me but","i was minding my own business and boom!","i feel terrible but","i regretfully cannot attend,","this is going to sound like an excuse but"]
var scapeGoat = [`my nephEw`,`the ghost of hitler`,"the Pope", "my ex", "a high school marching band", "Elton John", "a sad clown", "the kid from Air Bud", "a professional cricket team","my tinder date"]
var delay = [`just shit the bed`,`died in front of me`,"won't stop telling me knock knock jokes","is having a nervous breakdown","gave me syphilis","poured lemonade in my gas tank","stabbed me","found my box of human teeth","stole my bike","posted my nudes on instagram"]


function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function excuse() {
  const introIndex = Math.floor(Math.random() * intro.length);
  const scapeGoatIndex = Math.floor(Math.random() * scapeGoat.length);
  const delayIndex = Math.floor(Math.random() * delay.length);

  const message = `
    ${capitalizeFirstLetter(intro[introIndex])}
    ${scapeGoat[scapeGoatIndex]}
    ${delay[delayIndex]}
  `;

  document.getElementsByClassName('frase')[0].style.backgroundColor = '#5ead60';
  document.getElementById('excuse').innerHTML = message;
}