const shiftLogic = function () {
  let shiftstate = false;
  const shift = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(1)');
  const rightShift = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(13)');
  const k0 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(1)');
  const k1 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(2)');
  const k2 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(3)');
  const k3 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(4)');
  const k4 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(5)');
  const k5 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(6)');
  const k6 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(7)');
  const k7 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(8)');
  const k8 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(9)');
  const k9 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(10)');
  const k10 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(11)');
  const k11 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(12)');
  const k12 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(13)');
  const l0 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(2)');
  const l1 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(3)');
  const l2 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(4)');
  const l3 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(5)');
  const l4 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(6)');
  const l5 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(7)');
  const l6 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(8)');
  const l7 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(9)');
  const l8 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(10)');
  const l9 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(11)');
  const l10 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(12)');
  const l11 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(13)');
  const l12 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(14)');
  const z0 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(2)');
  const z1 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(3)');
  const z2 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(4)');
  const z3 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(5)');
  const z4 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(6)');
  const z5 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(7)');
  const z6 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(8)');
  const z7 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(9)');
  const z8 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(10)');
  const z9 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(11)');
  const z10 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(12)');

  const x0 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(2)');
  const x1 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(3)');
  const x2 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(4)');
  const x3 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(5)');
  const x4 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(6)');
  const x5 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(7)');
  const x6 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(8)');
  const x7 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(9)');
  const x8 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(10)');
  const x9 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(11)');

  shift.addEventListener('click', (e) => {
    if (e.target.innerText === 'shift') {
      shiftstate = !shiftstate;
    }
    if (shiftstate === true) {
      e.target.style.backgroundColor = 'red';
      k0.innerText = '~';
      k1.innerText = '!';
      k2.innerText = '@';
      k3.innerText = '#';
      k4.innerText = '$';
      k5.innerText = '%';
      k6.innerText = '^';
      k7.innerText = '&';
      k8.innerText = '*';
      k9.innerText = '(';
      k10.innerText = ')';
      k11.innerText = '_';
      k12.innerText = '+';
      l0.innerText = 'Q';
      l1.innerText = 'W';
      l2.innerText = 'E';
      l3.innerText = 'R';
      l4.innerText = 'T';
      l5.innerText = 'Y';
      l6.innerText = 'U';
      l7.innerText = 'I';
      l8.innerText = 'O';
      l9.innerText = 'P';
      l10.innerText = '{';
      l11.innerText = '}';
      l12.innerText = '|';
      z0.innerText = 'A';
      z1.innerText = 'S';
      z2.innerText = 'D';
      z3.innerText = 'F';
      z4.innerText = 'G';
      z5.innerText = 'H';
      z6.innerText = 'J';
      z7.innerText = 'K';
      z8.innerText = 'L';
      z9.innerText = ':';
      z10.innerText = '"';
      x0.innerText = 'Z';
      x1.innerText = 'X';
      x2.innerText = 'C';
      x3.innerText = 'V';
      x4.innerText = 'B';
      x5.innerText = 'N';
      x6.innerText = 'M';
      x7.innerText = '<';
      x8.innerText = '>';
      x9.innerText = '?';
    } else if (shiftstate === false) {
      e.target.style.backgroundColor = '#2f2f2fee';
      k0.innerText = '`';
      k1.innerText = '1';
      k2.innerText = '2';
      k3.innerText = '3';
      k4.innerText = '4';
      k5.innerText = '5';
      k6.innerText = '6';
      k7.innerText = '7';
      k8.innerText = '8';
      k9.innerText = '9';
      k10.innerText = '0';
      k11.innerText = '-';
      k12.innerText = '=';
      l0.innerText = 'q';
      l0.innerText = 'q';
      l1.innerText = 'w';
      l2.innerText = 'e';
      l3.innerText = 'r';
      l4.innerText = 't';
      l5.innerText = 'y';
      l6.innerText = 'u';
      l7.innerText = 'i';
      l8.innerText = 'o';
      l9.innerText = 'p';
      l10.innerText = '[';
      l11.innerText = ']';
      l12.innerText = '\\';
      z0.innerText = 'a';
      z1.innerText = 's';
      z2.innerText = 'd';
      z3.innerText = 'f';
      z4.innerText = 'g';
      z5.innerText = 'h';
      z6.innerText = 'j';
      z7.innerText = 'k';
      z8.innerText = 'l';
      z9.innerText = ';';
      z10.innerText = '\'';
      x0.innerText = 'z';
      x1.innerText = 'x';
      x2.innerText = 'c';
      x3.innerText = 'v';
      x4.innerText = 'b';
      x5.innerText = 'n';
      x6.innerText = 'm';
      x7.innerText = ',';
      x8.innerText = '.';
      x9.innerText = '/';
    }
  });
  rightShift.addEventListener('click', (e) => {
    if (e.target.innerText === 'shift') {
      shiftstate = !shiftstate;
    }
    if (shiftstate === true) {
      e.target.style.backgroundColor = 'red';
      k0.innerText = '~';
      k1.innerText = '!';
      k2.innerText = '@';
      k3.innerText = '#';
      k4.innerText = '$';
      k5.innerText = '%';
      k6.innerText = '^';
      k7.innerText = '&';
      k8.innerText = '*';
      k9.innerText = '(';
      k10.innerText = ')';
      k11.innerText = '_';
      k12.innerText = '+';
      l0.innerText = 'Q';
      l1.innerText = 'W';
      l2.innerText = 'E';
      l3.innerText = 'R';
      l4.innerText = 'T';
      l5.innerText = 'Y';
      l6.innerText = 'U';
      l7.innerText = 'I';
      l8.innerText = 'O';
      l9.innerText = 'P';
      l10.innerText = '{';
      l11.innerText = '}';
      l12.innerText = '|';
      z0.innerText = 'A';
      z1.innerText = 'S';
      z2.innerText = 'D';
      z3.innerText = 'F';
      z4.innerText = 'G';
      z5.innerText = 'H';
      z6.innerText = 'J';
      z7.innerText = 'K';
      z8.innerText = 'L';
      z9.innerText = ':';
      z10.innerText = '"';
      x0.innerText = 'Z';
      x1.innerText = 'X';
      x2.innerText = 'C';
      x3.innerText = 'V';
      x4.innerText = 'B';
      x5.innerText = 'N';
      x6.innerText = 'M';
      x7.innerText = '<';
      x8.innerText = '>';
      x9.innerText = '?';
    } else if (shiftstate === false) {
      e.target.style.backgroundColor = '#2f2f2fee';
      k0.innerText = '`';
      k1.innerText = '1';
      k2.innerText = '2';
      k3.innerText = '3';
      k4.innerText = '4';
      k5.innerText = '5';
      k6.innerText = '6';
      k7.innerText = '7';
      k8.innerText = '8';
      k9.innerText = '9';
      k10.innerText = '0';
      k11.innerText = '-';
      k12.innerText = '=';
      l0.innerText = 'q';
      l0.innerText = 'q';
      l1.innerText = 'w';
      l2.innerText = 'e';
      l3.innerText = 'r';
      l4.innerText = 't';
      l5.innerText = 'y';
      l6.innerText = 'u';
      l7.innerText = 'i';
      l8.innerText = 'o';
      l9.innerText = 'p';
      l10.innerText = '[';
      l11.innerText = ']';
      l12.innerText = '\\';
      z0.innerText = 'a';
      z1.innerText = 's';
      z2.innerText = 'd';
      z3.innerText = 'f';
      z4.innerText = 'g';
      z5.innerText = 'h';
      z6.innerText = 'j';
      z7.innerText = 'k';
      z8.innerText = 'l';
      z9.innerText = ';';
      z10.innerText = '\'';
      x0.innerText = 'z';
      x1.innerText = 'x';
      x2.innerText = 'c';
      x3.innerText = 'v';
      x4.innerText = 'b';
      x5.innerText = 'n';
      x6.innerText = 'm';
      x7.innerText = ',';
      x8.innerText = '.';
      x9.innerText = '/';
    }
  });
};

export default shiftLogic;
