const arrayLetters = [
    {
        text: { en: '`', ru: 'ё' },
        width: 'small',
        altText: { en: '~', ru: 'ё' },
        type: 'alternative',
        code: 'Backquote'
    },
    {
        text: { en: '1', ru: '1' },
        width: 'small',
        altText: { en: '!', ru: '!' },
        type: 'alternative',
        code: 'Digit1'
    },
    {
        text: { en: '2', ru: '2' },
        width: 'small',
        altText: { en: '@', ru: '""' },
        type: 'alternative',
        code: 'Digit2'
    },
    {
        text: { en: '3', ru: '3' },
        width: 'small',
        altText: { en: '#', ru: '№' },
        type: 'alternative',
        code: 'Digit3'
    },
    {
        text: { en: '4', ru: '4' },
        width: 'small',
        altText: { en: '$', ru: ';' },
        type: 'alternative',
        code: 'Digit4'
    },
    {
        text: { en: '5', ru: '5' },
        width: 'small',
        altText: { en: '%', ru: '%' },
        type: 'alternative',
        code: 'Digit5'
    },
    {
        text: { en: '6', ru: '6' },
        width: 'small',
        altText: { en: '^', ru: ':' },
        type: 'alternative',
        code: 'Digi6'
    },
    {
        text: { en: '7', ru: '7' },
        width: 'small',
        altText: { en: '&', ru: '?' },
        type: 'alternative',
        code: 'Digit7'
    },
    {
        text: { en: '8', ru: '8' },
        width: 'small',
        altText: { en: '*', ru: '*' },
        type: 'alternative',
        code: 'Digit8'
    },
    {
        text: { en: '9', ru: '9' },
        width: 'small',
        altText: { en: '(', ru: '(' },
        type: 'alternative',
        code: 'Digit9'
    },
    {
        text: { en: '0', ru: '0' },
        width: 'small',
        altText: { en: ')', ru: ')' },
        type: 'alternative',
        code: 'Digit0'
    },
    {
        text: { en: '-', ru: '-' },
        width: 'small',
        altText: { en: '_', ru: '_' },
        type: 'alternative',
        code: 'Minus'
    },
    {
        text: { en: '=', ru: '=' },
        width: 'small',
        altText: { en: '+', ru: '+' },
        type: 'alternative',
        code: 'Equal'
    },
    {
        text: { en: 'Backspace', ru: 'Backspace' },
        width: 'large',
        altText: { en: 'Backspace', ru: 'Backspace' },
        type: 'functional',
        code: 'Backspace'
    },
    {
        text: { en: 'Tab', ru: 'Tab' },
        width: 'medium',
        altText: { en: 'Tab', ru: 'Tab' },
        type: 'functional',
        code: 'Tab'
    },
    {
        text: { en: 'q', ru: 'й' },
        width: 'small',
        altText: { en: 'q', ru: 'й' },
        type: 'word',
        code: 'KeyQ'
    },
    {
        text: { en: 'w', ru: 'ц' },
        width: 'small',
        altText: { en: 'w', ru: 'ц' },
        type: 'word',
        code: 'KeyW'
    },
    {
        text: { en: 'e', ru: 'у' },
        width: 'small',
        altText: { en: 'e', ru: 'у' },
        type: 'word',
        code: 'KeyE'
    },
    {
        text: { en: 'r', ru: 'к' },
        width: 'small',
        altText: { en: 'r', ru: 'к' },
        type: 'word',
        code: 'KeyR'
    },
    {
        text: { en: 't', ru: 'е' },
        width: 'small',
        altText: { en: 't', ru: 'е' },
        type: 'word',
        code: 'KeyT'
    },
    {
        text: { en: 'y', ru: 'н' },
        width: 'small',
        altText: { en: 'y', ru: 'н' },
        type: 'word',
        code: 'KeyY'
    },
    {
        text: { en: 'u', ru: 'г' },
        width: 'small',
        altText: { en: 'u', ru: 'г' },
        type: 'word',
        code: 'KeyU'
    },
    {
        text: { en: 'i', ru: 'ш' },
        width: 'small',
        altText: { en: 'i', ru: 'ш' },
        type: 'word',
        code: 'KeyI'
    },
    {
        text: { en: 'o', ru: 'щ' },
        width: 'small',
        altText: { en: 'o', ru: 'щ' },
        type: 'word',
        code: 'KeyO'
    },
    {
        text: { en: 'p', ru: 'з' },
        width: 'small',
        altText: { en: 'p', ru: 'з' },
        type: 'word',
        code: 'KeyP'
    },
    {
        text: { en: '[', ru: 'х' },
        width: 'small',
        altText: { en: '{', ru: 'х' },
        type: 'alternative',
        code: 'BracketLeft'
    },
    {
        text: { en: ']', ru: 'ъ' },
        width: 'small',
        altText: { en: '}', ru: 'ъ' },
        type: 'alternative',
        code: 'BracketRight'
    },
    {
        text: { en: '\\', ru: '\\' },
        width: 'small',
        altText: { en: '|', ru: '/' },
        type: 'alternative',
        code: 'Backslash'
    },
    {
        text: { en: 'DEL', ru: 'DEL' },
        width: 'medium',
        altText: { en: 'DEL', ru: 'DEL' },
        type: 'functional',
        code: 'Delete'
    },
    {
        text: { en: 'CapsLock', ru: 'CapsLock' },
        width: 'large',
        altText: { en: 'CapsLock', ru: 'CapsLock' },
        type: 'functional',
        code: 'CapsLock'
    },
    {
        text: { en: 'a', ru: 'ф' },
        width: 'small',
        altText: { en: 'a', ru: 'ф' },
        type: 'word',
        code: 'KeyA'
    },
    {
        text: { en: 's', ru: 'ы' },
        width: 'small',
        altText: { en: 's', ru: 'ы' },
        type: 'word',
        code: 'KeyS'
    },
    {
        text: { en: 'd', ru: 'в' },
        width: 'small',
        altText: { en: 'd', ru: 'в' },
        type: 'word',
        code: 'KeyD'
    },
    {
        text: { en: 'f', ru: 'а' },
        width: 'small',
        altText: { en: 'f', ru: 'а' },
        type: 'word',
        code: 'KeyF'
    },
    {
        text: { en: 'g', ru: 'п' },
        width: 'small',
        altText: { en: 'g', ru: 'п' },
        type: 'word',
        code: 'KeyG'
    },
    {
        text: { en: 'h', ru: 'р' },
        width: 'small',
        altText: { en: 'h', ru: 'р' },
        type: 'word',
        code: 'KeyH'
    },
    {
        text: { en: 'j', ru: 'о' },
        width: 'small',
        altText: { en: 'j', ru: 'о' },
        type: 'word',
        code: 'KeyJ'
    },
    {
        text: { en: 'k', ru: 'л' },
        width: 'small',
        altText: { en: 'l', ru: 'л' },
        type: 'word',
        code: 'KeyK'
    },
    {
        text: { en: 'l', ru: 'д' },
        width: 'small',
        altText: { en: 'l', ru: 'д' },
        type: 'word',
        code: 'KeyL'
    },
    {
        text: { en: ';', ru: 'ж' },
        width: 'small',
        altText: { en: ':', ru: 'ж' },
        type: 'alternative',
        code: 'Semicolon'
    },
    {
        text: { en: "''", ru: 'э' },
        width: 'small',
        altText: { en: "''", ru: 'э' },
        type: 'alternative',
        code: 'Quote'
    },
    {
        text: { en: 'ENTER', ru: 'ENTER' },
        width: 'large',
        altText: { en: 'ENTER', ru: 'ENTER' },
        type: 'functional',
        code: 'Enter',
    },
    {
        text: { en: 'Shift', ru: 'Shift' },
        width: 'large',
        altText: { en: 'Shift', ru: 'Shift' },
        type: 'functional',
        code: 'ShiftLeft',
    },
    {
        text: { en: 'z', ru: 'я' },
        width: 'small',
        altText: { en: 'z', ru: 'я' },
        type: 'word',
        code: 'KeyZ'
    },
    {
        text: { en: 'x', ru: 'ч' },
        width: 'small',
        altText: { en: 'x', ru: 'ч' },
        type: 'word',
        code: 'KeyX'
    },
    {
        text: { en: 'c', ru: 'с' },
        width: 'small',
        altText: { en: 'c', ru: 'с' },
        type: 'word',
        code: 'KeyC'
    },
    {
        text: { en: 'v', ru: 'м' },
        width: 'small',
        altText: { en: 'v', ru: 'м' },
        type: 'word',
        code: 'KeyV'
    },
    {
        text: { en: 'b', ru: 'и' },
        width: 'small',
        altText: { en: 'b', ru: 'и' },
        type: 'word',
        code: 'KeyB'
    },
    {
        text: { en: 'n', ru: 'т' },
        width: 'small',
        altText: { en: 'n', ru: 'т' },
        type: 'word',
        code: 'KeyN'
    },
    {
        text: { en: 'm', ru: 'ь' },
        width: 'small',
        altText: { en: 'm', ru: 'ь' },
        type: 'word',
        code: 'KeyM'
    },
    {
        text: { en: ',', ru: 'б' },
        width: 'small',
        altText: { en: '<', ru: 'б' },
        type: 'alternative',
        code: 'Comma'
    },
    {
        text: { en: '.', ru: 'ю' },
        width: 'small',
        altText: { en: '>', ru: 'ю' },
        type: 'alternative',
        code: 'Period'
    },
    {
        text: { en: '/', ru: '.' },
        width: 'small',
        altText: { en: '?', ru: ',' },
        type: 'alternative',
        code: 'Slash'
    },
    {
        text: { en: '&#9650;', ru: '&#9650;' },
        width: 'small',
        altText: { en: '&#9650;', ru: '&#9650;' },
        type: 'functional',
        code: 'ArrowUp',
    },
    {
        text: { en: 'Shift', ru: 'Shift' },
        width: 'large',
        altText: { en: 'Shift', ru: 'Shift' },
        type: 'functional',
        code: 'ShiftRight',
    },
    {
        text: { en: 'Ctrl', ru: 'Ctrl' },
        width: 'medium',
        altText: { en: 'Ctrl', ru: 'Ctrl' },
        type: 'functional',
        code: 'ControlLeft',
    },
    {
        text: { en: 'Win', ru: 'Win' },
        width: 'medium',
        altText: { en: 'Win', ru: 'Win' },
        type: 'functional',
        code: 'OSLeft',
    },
    {
        text: { en: 'Alt', ru: 'Alt' },
        width: 'medium',
        altText: { en: 'Alt', ru: 'Alt' },
        type: 'functional',
        code: 'AltLeft',
    },
    {
        text: { en: ' ', ru: ' ' },
        width: 'x-large',
        altText: { en: ' ', ru: ' ' },
        type: 'word',
        code: 'Space',
    },
    {
        text: { en: 'Alt', ru: 'Alt' },
        width: 'medium',
        altText: { en: 'Alt', ru: 'Alt' },
        type: 'functional',
        code: 'AltRight',
    },
    {
        text: { en: '&#9668;', ru: '&#9668;' },
        width: 'small',
        altText: { en: '&#9668;', ru: '&#9668;' },
        type: 'functional',
        code: 'ArrowLeft',
    },
    {
        text: { en: '&#9660;', ru: '&#9660;' },
        width: 'small',
        altText: { en: '&#9660;', ru: '&#9660;' },
        type: 'functional',
        code: 'ArrowDown',
    },
    {
        text: { en: '&#9658;', ru: '&#9658;' },
        width: 'small',
        altText: { en: '&#9658;', ru: '&#9658;' },
        type: 'functional',
        code: 'ArrowRight',
    },
    {
        text: { en: 'Ctrl', ru: 'Ctrl' },
        width: 'medium',
        altText: { en: 'Ctrl', ru: 'Ctrl' },
        type: 'functional',
        code: 'ControlRight',
    },
];

export default arrayLetters;
