const arrayLetters = [
    {
        text: { en: '`', ru: 'ё' },
        width: 'small',
        shiftText: { en: '~', ru: 'Ё' },
        type: 'alternative',
        code: 'Backquote'
    },
    {
        text: { en: '1', ru: '1' },
        width: 'small',
        shiftText: { en: '!', ru: '!' },
        type: 'alternative',
        code: 'Digit1'
    },
    {
        text: { en: '2', ru: '2' },
        width: 'small',
        shiftText: { en: '@', ru: '""' },
        type: 'alternative',
        code: 'Digit2'
    },
    {
        text: { en: '3', ru: '3' },
        width: 'small',
        shiftText: { en: '#', ru: '№' },
        type: 'alternative',
        code: 'Digit3'
    },
    {
        text: { en: '4', ru: '4' },
        width: 'small',
        shiftText: { en: '$', ru: ';' },
        type: 'alternative',
        code: 'Digit4'
    },
    {
        text: { en: '5', ru: '5' },
        width: 'small',
        shiftText: { en: '%', ru: '%' },
        type: 'alternative',
        code: 'Digit5'
    },
    {
        text: { en: '6', ru: '6' },
        width: 'small',
        shiftText: { en: '^', ru: ':' },
        type: 'alternative',
        code: 'Digit6'
    },
    {
        text: { en: '7', ru: '7' },
        width: 'small',
        shiftText: { en: '&', ru: '?' },
        type: 'alternative',
        code: 'Digit7'
    },
    {
        text: { en: '8', ru: '8' },
        width: 'small',
        shiftText: { en: '*', ru: '*' },
        type: 'alternative',
        code: 'Digit8'
    },
    {
        text: { en: '9', ru: '9' },
        width: 'small',
        shiftText: { en: '(', ru: '(' },
        type: 'alternative',
        code: 'Digit9'
    },
    {
        text: { en: '0', ru: '0' },
        width: 'small',
        shiftText: { en: ')', ru: ')' },
        type: 'alternative',
        code: 'Digit0'
    },
    {
        text: { en: '-', ru: '-' },
        width: 'small',
        shiftText: { en: '_', ru: '_' },
        type: 'alternative',
        code: 'Minus'
    },
    {
        text: { en: '=', ru: '=' },
        width: 'small',
        shiftText: { en: '+', ru: '+' },
        type: 'alternative',
        code: 'Equal'
    },
    {
        text: { en: 'Backspace', ru: 'Backspace' },
        width: 'large',
        shiftText: { en: 'Backspace', ru: 'Backspace' },
        type: 'functional',
        code: 'Backspace'
    },
    {
        text: { en: 'Tab', ru: 'Tab' },
        width: 'medium',
        shiftText: { en: 'Tab', ru: 'Tab' },
        type: 'functional',
        code: 'Tab'
    },
    {
        text: { en: 'q', ru: 'й' },
        width: 'small',
        shiftText: { en: 'q', ru: 'Й' },
        type: 'word',
        code: 'KeyQ'
    },
    {
        text: { en: 'w', ru: 'ц' },
        width: 'small',
        shiftText: { en: 'w', ru: 'Ц' },
        type: 'word',
        code: 'KeyW'
    },
    {
        text: { en: 'e', ru: 'у' },
        width: 'small',
        shiftText: { en: 'e', ru: 'У' },
        type: 'word',
        code: 'KeyE'
    },
    {
        text: { en: 'r', ru: 'к' },
        width: 'small',
        shiftText: { en: 'r', ru: 'К' },
        type: 'word',
        code: 'KeyR'
    },
    {
        text: { en: 't', ru: 'е' },
        width: 'small',
        shiftText: { en: 't', ru: 'Е' },
        type: 'word',
        code: 'KeyT'
    },
    {
        text: { en: 'y', ru: 'н' },
        width: 'small',
        shiftText: { en: 'y', ru: 'Н' },
        type: 'word',
        code: 'KeyY'
    },
    {
        text: { en: 'u', ru: 'г' },
        width: 'small',
        shiftText: { en: 'u', ru: 'Г' },
        type: 'word',
        code: 'KeyU'
    },
    {
        text: { en: 'i', ru: 'ш' },
        width: 'small',
        shiftText: { en: 'i', ru: 'Ш' },
        type: 'word',
        code: 'KeyI'
    },
    {
        text: { en: 'o', ru: 'щ' },
        width: 'small',
        shiftText: { en: 'o', ru: 'Щ' },
        type: 'word',
        code: 'KeyO'
    },
    {
        text: { en: 'p', ru: 'з' },
        width: 'small',
        shiftText: { en: 'p', ru: 'З' },
        type: 'word',
        code: 'KeyP'
    },
    {
        text: { en: '[', ru: 'х' },
        width: 'small',
        shiftText: { en: '{', ru: 'Х' },
        type: 'alternative',
        code: 'BracketLeft'
    },
    {
        text: { en: ']', ru: 'ъ' },
        width: 'small',
        shiftText: { en: '}', ru: 'Ъ' },
        type: 'alternative',
        code: 'BracketRight'
    },
    {
        text: { en: '\\', ru: '\\' },
        width: 'small',
        shiftText: { en: '|', ru: '/' },
        type: 'alternative',
        code: 'Backslash'
    },
    {
        text: { en: 'DEL', ru: 'DEL' },
        width: 'medium',
        shiftText: { en: 'DEL', ru: 'DEL' },
        type: 'functional',
        code: 'Delete'
    },
    {
        text: { en: 'CapsLock', ru: 'CapsLock' },
        width: 'large',
        shiftText: { en: 'CapsLock', ru: 'CapsLock' },
        type: 'functional',
        code: 'CapsLock'
    },
    {
        text: { en: 'a', ru: 'ф' },
        width: 'small',
        shiftText: { en: 'a', ru: 'Ф' },
        type: 'word',
        code: 'KeyA'
    },
    {
        text: { en: 's', ru: 'ы' },
        width: 'small',
        shiftText: { en: 's', ru: 'Ы' },
        type: 'word',
        code: 'KeyS'
    },
    {
        text: { en: 'd', ru: 'в' },
        width: 'small',
        shiftText: { en: 'd', ru: 'В' },
        type: 'word',
        code: 'KeyD'
    },
    {
        text: { en: 'f', ru: 'а' },
        width: 'small',
        shiftText: { en: 'f', ru: 'А' },
        type: 'word',
        code: 'KeyF'
    },
    {
        text: { en: 'g', ru: 'п' },
        width: 'small',
        shiftText: { en: 'g', ru: 'П' },
        type: 'word',
        code: 'KeyG'
    },
    {
        text: { en: 'h', ru: 'р' },
        width: 'small',
        shiftText: { en: 'h', ru: 'Р' },
        type: 'word',
        code: 'KeyH'
    },
    {
        text: { en: 'j', ru: 'о' },
        width: 'small',
        shiftText: { en: 'j', ru: 'О' },
        type: 'word',
        code: 'KeyJ'
    },
    {
        text: { en: 'k', ru: 'л' },
        width: 'small',
        shiftText: { en: 'l', ru: 'Л' },
        type: 'word',
        code: 'KeyK'
    },
    {
        text: { en: 'l', ru: 'д' },
        width: 'small',
        shiftText: { en: 'l', ru: 'Д' },
        type: 'word',
        code: 'KeyL'
    },
    {
        text: { en: ';', ru: 'ж' },
        width: 'small',
        shiftText: { en: ':', ru: 'Ж' },
        type: 'alternative',
        code: 'Semicolon'
    },
    {
        text: { en: "''", ru: 'э' },
        width: 'small',
        shiftText: { en: "''", ru: 'Э' },
        type: 'alternative',
        code: 'Quote'
    },
    {
        text: { en: 'ENTER', ru: 'ENTER' },
        width: 'large',
        shiftText: { en: 'ENTER', ru: 'ENTER' },
        type: 'functional',
        code: 'Enter',
    },
    {
        text: { en: 'Shift', ru: 'Shift' },
        width: 'large',
        shiftText: { en: 'Shift', ru: 'Shift' },
        type: 'functional',
        code: 'ShiftLeft',
    },
    {
        text: { en: 'z', ru: 'я' },
        width: 'small',
        shiftText: { en: 'z', ru: 'Я' },
        type: 'word',
        code: 'KeyZ'
    },
    {
        text: { en: 'x', ru: 'ч' },
        width: 'small',
        shiftText: { en: 'x', ru: 'Ч' },
        type: 'word',
        code: 'KeyX'
    },
    {
        text: { en: 'c', ru: 'с' },
        width: 'small',
        shiftText: { en: 'c', ru: 'С' },
        type: 'word',
        code: 'KeyC'
    },
    {
        text: { en: 'v', ru: 'м' },
        width: 'small',
        shiftText: { en: 'v', ru: 'М' },
        type: 'word',
        code: 'KeyV'
    },
    {
        text: { en: 'b', ru: 'и' },
        width: 'small',
        shiftText: { en: 'b', ru: 'И' },
        type: 'word',
        code: 'KeyB'
    },
    {
        text: { en: 'n', ru: 'т' },
        width: 'small',
        shiftText: { en: 'n', ru: 'Т' },
        type: 'word',
        code: 'KeyN'
    },
    {
        text: { en: 'm', ru: 'ь' },
        width: 'small',
        shiftText: { en: 'm', ru: 'Ь' },
        type: 'word',
        code: 'KeyM'
    },
    {
        text: { en: ',', ru: 'б' },
        width: 'small',
        shiftText: { en: '<', ru: 'Б' },
        type: 'alternative',
        code: 'Comma'
    },
    {
        text: { en: '.', ru: 'ю' },
        width: 'small',
        shiftText: { en: '>', ru: 'Ю' },
        type: 'alternative',
        code: 'Period'
    },
    {
        text: { en: '/', ru: '.' },
        width: 'small',
        shiftText: { en: '?', ru: ',' },
        type: 'alternative',
        code: 'Slash'
    },
    {
        text: { en: '&#9650;', ru: '&#9650;' },
        width: 'small',
        shiftText: { en: '&#9650;', ru: '&#9650;' },
        type: 'functional',
        code: 'ArrowUp',
    },
    {
        text: { en: 'Shift', ru: 'Shift' },
        width: 'large',
        shiftText: { en: 'Shift', ru: 'Shift' },
        type: 'functional',
        code: 'ShiftRight',
    },
    {
        text: { en: 'Ctrl', ru: 'Ctrl' },
        width: 'medium',
        shiftText: { en: 'Ctrl', ru: 'Ctrl' },
        type: 'functional',
        code: 'ControlLeft',
    },
    {
        text: { en: 'Win', ru: 'Win' },
        width: 'medium',
        shiftText: { en: 'Win', ru: 'Win' },
        type: 'functional',
        code: 'OSLeft',
    },
    {
        text: { en: 'Alt', ru: 'Alt' },
        width: 'medium',
        shiftText: { en: 'Alt', ru: 'Alt' },
        type: 'functional',
        code: 'AltLeft',
    },
    {
        text: { en: ' ', ru: ' ' },
        width: 'x-large',
        shiftText: { en: ' ', ru: ' ' },
        type: 'word',
        code: 'Space',
    },
    {
        text: { en: 'Alt', ru: 'Alt' },
        width: 'medium',
        shiftText: { en: 'Alt', ru: 'Alt' },
        type: 'functional',
        code: 'AltRight',
    },
    {
        text: { en: '&#9668;', ru: '&#9668;' },
        width: 'small',
        shiftText: { en: '&#9668;', ru: '&#9668;' },
        type: 'functional',
        code: 'ArrowLeft',
    },
    {
        text: { en: '&#9660;', ru: '&#9660;' },
        width: 'small',
        shiftText: { en: '&#9660;', ru: '&#9660;' },
        type: 'functional',
        code: 'ArrowDown',
    },
    {
        text: { en: '&#9658;', ru: '&#9658;' },
        width: 'small',
        shiftText: { en: '&#9658;', ru: '&#9658;' },
        type: 'functional',
        code: 'ArrowRight',
    },
    {
        text: { en: 'Ctrl', ru: 'Ctrl' },
        width: 'medium',
        shiftText: { en: 'Ctrl', ru: 'Ctrl' },
        type: 'functional',
        code: 'ControlRight',
    },
];

export default arrayLetters;
