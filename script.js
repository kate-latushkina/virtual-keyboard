import arrayLetters from './src/button.js';
import clickShift from './src/shiftKey.js';

if (localStorage.getItem('lang') === null) {
  localStorage.setItem('lang', 'ru');
}

let lang = localStorage.getItem('lang');

const main = document.createElement('main');
document.body.appendChild(main);
main.classList.add('container');


const textArea = document.createElement('textarea');
main.appendChild(textArea);
textArea.classList.add('text-container');
textArea.setAttribute('cols', 90)

textArea.addEventListener('blur', function () {
  textArea.focus();
})
textArea.focus();

const keyboard = document.createElement('div');
main.appendChild(keyboard);
keyboard.classList.add('keyboard')

const OS = document.createElement('p');
main.appendChild(OS);
OS.classList.add('text');
OS.innerHTML = 'Клавиатура создана в операционной системе Windows';

const changeLang = document.createElement('p');
main.appendChild(changeLang);
changeLang.classList.add('text');
changeLang.innerHTML = 'Для переключения языка комбинация: shift + alt или En/Ru для мыши';


// create lines on the keyboard
let line = document.createElement('div');
arrayLetters.forEach(key => {
  const keyButton = document.createElement('button');
  keyButton.classList.add(key['width']);
  keyButton.classList.add(key['code']);
  keyButton.classList.add(key['type']);
  keyButton.innerHTML = key['text'][lang];
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
const keyButton = document.querySelectorAll('button');

// not click button
textArea.addEventListener('keyup', function (element) {
  let code = element.code;
  arrayLetters.forEach(key => {
    if (code == 'ShiftLeft' || code == 'ShiftRight') {
      for (let i = 0; i < keyButton.length; i++) {
        if (keyButton[i].textContent = arrayLetters[i]['shiftText'][lang]) {
          keyButton[i].innerHTML = arrayLetters[i]['text'][lang];
        }
      }
    }
    if (code != 'CapsLock') {
      const keyButtonCode = document.querySelector(`.${key['code']}`);
      if (code == key['code']) {
        keyButtonCode.classList.remove('button-active')
      }
    }
  })
})



// click button
textArea.addEventListener('keydown', function (element) {
  let code = element.code;

  // CapsLock
  if (code == 'CapsLock') {
    
    if (capsLock.classList.contains('button-active')) {
      capsLock.classList.remove('button-active');
      for (let i = 0; i < keyButton.length; i++) {
        keyButton[i].innerHTML = arrayLetters[i]['text'][lang];
      }
    }
    else {
      capsLock.classList.add('button-active');
      for (let i = 0; i < keyButton.length; i++) {
        if (keyButton[i].classList.contains('word') || keyButton[i].classList.contains('alternative')) {
          keyButton[i].innerHTML = arrayLetters[i]['shiftText'][lang];
        }
      }
    }
  }

  // Tab
  if (code == 'Tab') {
    element.preventDefault();
    textArea.value += '    ';
  }

  // Alt
  if (code == 'AltLeft' || code == 'AltRight') {
    element.preventDefault();
  }
  //  ShiftLeft AND ShiftRight
  if (code == 'ShiftLeft' || code == 'ShiftRight') {
    clickShift(keyButton, code, lang);
  }

  // change language
  if (element.altKey && element.shiftKey) {
    if (localStorage.getItem('lang') === 'ru') {
      localStorage.removeItem('lang', 'ru')
      localStorage.setItem('lang', 'en');
    }
    else {
      localStorage.removeItem('lang', 'en')
      localStorage.setItem('lang', 'ru');
    }
    lang = localStorage.getItem('lang');
  }

  // another buttons 
  if (code != 'CapsLock') {
    const keyButtonCode = document.querySelector(`.${element['code']}`);
    keyButtonCode.classList.add('button-active');
  }
})


keyboard.addEventListener('mousedown', function (elem) {
  const elemCode = elem.srcElement.textContent;
  if (elem.which == 1) {
    // CapsLock
    if (elemCode == 'CapsLock') {
      if (capsLock.classList.contains('button-active')) {
        elem.target.classList.remove('button-active');
        for (let i = 0; i < keyButton.length; i++) {
          keyButton[i].innerHTML = arrayLetters[i]['text'][lang];
        }
      }
      else {
        elem.target.classList.add('button-active');
        for (let i = 0; i < keyButton.length; i++) {
          keyButton[i].innerHTML = arrayLetters[i]['shiftText'][lang];
        }
      }
    }

    // Win change language
    if (elemCode == 'En/Ru') {
      if (localStorage.getItem('lang') === 'ru') {
        localStorage.removeItem('lang', 'ru');
        localStorage.setItem('lang', 'en');
      }
      else {
        localStorage.removeItem('lang', 'en');
        localStorage.setItem('lang', 'ru');
      }
      lang = localStorage.getItem('lang');
      for (let i = 0; i < keyButton.length; i++) {
        keyButton[i].innerHTML = arrayLetters[i]['text'][lang];
      }
    }

    // Tab
    if (elemCode == 'Tab') {
      elem.preventDefault();
      textArea.value += '\t';
    }

    // Enter
    if (elemCode == 'ENTER') {
      textArea.value += '\n';
    }

    // Shift
    if (elemCode == 'Shift') {
      clickShift(keyButton, elem, lang);
      elem.target.classList.add('button-active');
    }

    // arrows
    if (elemCode == '◄') {
      elem.target.classList.add('button-active');
      if (textArea.selectionStart !== 0) {
        textArea.selectionStart--;
        textArea.selectionEnd--;
      }
    }
    if (elemCode == '►') {
      elem.target.classList.add('button-active');
      if (textArea.selectionStart != textArea.value.length) {
        textArea.selectionStart++;
        textArea.selectionEnd += 0;
      }
    }
    if (elemCode == '▲') {
      elem.target.classList.add('button-active');
      if (textArea.selectionStart != 0) {
        textArea.selectionStart -= 81;
        textArea.selectionEnd -= 81;
      }
    }
    if (elemCode == '▼') {
      elem.target.classList.add('button-active');
      if (textArea.selectionStart != textArea.value.length) {
        textArea.selectionStart += 81;
        textArea.selectionEnd += 0;
      }
    }


    // Backspace 
    if (elemCode == 'Backspace') {
      elem.target.classList.add('button-active');
      textArea.value = textArea.value.slice(0, -1);
    }

    else {
      if (elemCode != 'CapsLock' && elemCode != 'Backspace' && elemCode != 'Ctrl' && elemCode != 'ENTER' && elemCode != 'Tab'  && elemCode != 'Alt' && elemCode != 'En/Ru' && elemCode != 'Shift') {
        for (let i = 0; i < keyButton.length; i++) {
          if (elemCode == arrayLetters[i]['text'][lang]) {
            textArea.value += arrayLetters[i]['text'][lang];
            elem.target.classList.add('button-active');
          }
          if (elemCode == arrayLetters[i]['shiftText'][lang]) {
            textArea.value += arrayLetters[i]['shiftText'][lang];
            elem.target.classList.add('button-active');
          }
        }
      }
      if (elemCode == 'Ctrl' || elemCode == 'ENTER' || elemCode == 'Tab' || elemCode == 'Alt' || elemCode == 'En/Ru') {
        elem.target.classList.add('button-active');
      }
    }
  }
})

keyboard.addEventListener('mouseup', function (elem) {
  const elemCode = elem.srcElement.outerText;
  if (elemCode != 'CapsLock') {
    elem.target.classList.remove('button-active');
  }
  if (elemCode == 'Shift') {
    for (let i = 0; i < keyButton.length; i++) {
      if (keyButton[i].textContent = arrayLetters[i]['shiftText'][lang]) {
        keyButton[i].innerHTML = arrayLetters[i]['text'][lang];
      }
    }
  }
})