import arrayLetters from './src/button.js';

const main = document.createElement('main');
document.body.appendChild(main);
main.classList.add('container');


const textArea = document.createElement('textarea');
main.appendChild(textArea);
textArea.classList.add('text-container');
textArea.focus();

const keyboard = document.createElement('div');
main.appendChild(keyboard);
keyboard.classList.add('keyboard')


console.log(arrayLetters);


// create lines on the keyboard
let line = document.createElement('div');
arrayLetters.forEach(key => {
  const keyButton = document.createElement('button');
  keyButton.classList.add(key['width']);
  keyButton.classList.add(key['code']);
  keyButton.innerHTML = key['text']['ru'];
  let lastKeyInLine = key['code'];
  if (lastKeyInLine == 'Backquote' || lastKeyInLine == 'Tab' || lastKeyInLine == 'CapsLock' || lastKeyInLine == 'ShiftLeft' || lastKeyInLine == 'ControlLeft') {
    line = document.createElement('div');
    keyboard.appendChild(line)
    line.classList.add('line')
    line.appendChild(keyButton);
  } else {
    line.appendChild(keyButton);
  } 
});

const capsLock = document.querySelector('.CapsLock');


// not click button
textArea.onkeyup = function (element) {
  let code = element.code;
  arrayLetters.forEach(key => {
    if (code != 'CapsLock') {
      const keyButtonCode = document.querySelector(`.${key['code']}`);
      if (code == key['code']) {
        keyButtonCode.classList.remove('button-active')
      }
    }
  })
}



// click button
textArea.onkeydown = function (element) {
  let code = element.code
  const keyButton = document.querySelectorAll('button');
  if (code == 'CapsLock') {
    if (capsLock.classList.contains('button-active')) {
      for (let i = 0; i < keyButton.length; i++) {
        keyButton[i].innerHTML = keyButton[i].outerText.toLowerCase();
      }
      capsLock.classList.remove('button-active');
    }
    else {
      for (let i = 0; i < keyButton.length; i++) {
        capsLock.classList.add('button-active');
        keyButton[i].innerHTML = keyButton[i].outerText.toUpperCase();
      }
    }
  }

  else {
    arrayLetters.forEach(key => { 
      if (code == key['code']) {
        const keyButtonCode = document.querySelector(`.${key['code']}`);
        keyButtonCode.classList.add('button-active');
      }
    })
  }
}


