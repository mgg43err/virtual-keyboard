function keyboardButtnos(wr) {
  const keyboardKeys1 = [
    '`',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    '-',
    '=',
    'backspace',
  ];
  const keyboardKeys2 = [
    'tab',
    'q',
    'w',
    'e',
    'r',
    't',
    'y',
    'u',
    'i',
    'o',
    'p',
    '[',
    ']',
    '\\',
  ];
  const keyboardKeys3 = [
    'caps lock',
    'a',
    's',
    'd',
    'f',
    'g',
    'h',
    'j',
    'k',
    'l',
    ';',
    '\'',
    'enter',
  ];
  const keyboardKeys4 = [
    'shift',
    'z',
    'x',
    'c',
    'v',
    'b',
    'n',
    'm',
    ',',
    '.',
    '/',
    '︿',
    'shift',
  ];
  const keyboardKeys5 = [
    'ctrl',
    'fn',
    '⌘',
    'alt',
    '',
    'alt',
    '〈',
    '﹀',
    '〉',
    'ctrl',
  ];
  const keyboardKeys1C = document.createElement('div');
  keyboardKeys1.map((x) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.innerText = x;
    keyboardKeys1C.append(button);
    return button;
  });
  wr.append(keyboardKeys1C);
  const keyboardKeys2C = document.createElement('div');
  keyboardKeys2.map((x) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.innerText = x;
    keyboardKeys2C.append(button);
    return button;
  });
  wr.append(keyboardKeys2C);
  const keyboardKeys3C = document.createElement('div');
  keyboardKeys3.map((x) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.innerText = x;
    keyboardKeys3C.append(button);
    return button;
  });
  wr.append(keyboardKeys3C);
  const keyboardKeys4C = document.createElement('div');
  keyboardKeys4.map((x) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.innerText = x;
    keyboardKeys4C.append(button);
    return button;
  });
  wr.append(keyboardKeys4C);
  const keyboardKeys5C = document.createElement('div');
  keyboardKeys5.map((x) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.innerText = x;
    keyboardKeys5C.append(button);
    return button;
  });
  wr.append(keyboardKeys5C);
  const i = document.querySelector('body > div > div').children;
  for (let x = 0; x < i.length; x += 1) {
    i[x].classList.add('keyRow');
    i[x].classList.add(`keyRow${x}`);
  }
}

export default keyboardButtnos;
