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
  keyButton.classList.add(key['type']);
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
  let code = element.code;
  const keyButton = document.querySelectorAll('button');
  if (code == 'CapsLock') {
    if (capsLock.classList.contains('button-active')) {
      capsLock.classList.remove('button-active');
      for (let i = 0; i < keyButton.length; i++) {
        if (keyButton[i].textContent = arrayLetters[i]['shiftText']['ru']) {
          keyButton[i].innerHTML = arrayLetters[i]['text']['ru'];
        }
      }
    }
    else {
      for (let i = 0; i < keyButton.length; i++) {
        capsLock.classList.add('button-active');
        if (keyButton[i].textContent == arrayLetters[i]['text']['ru']) {
          keyButton[i].innerHTML = arrayLetters[i]['shiftText']['ru'];
        }
      }
    }
  }
  else {
    if (code == element['code']) {
      const keyButtonCode = document.querySelector(`.${element['code']}`);
      keyButtonCode.classList.add('button-active');
    }
  }
}


