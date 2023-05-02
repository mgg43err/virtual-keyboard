import shiftLogic from './shiftLogic';
import capsLockLogic from './capsLockLogic';
import keyPressLogic from './keyPressLogic';

function keyboardLogic() {
  const state = [];
  const keys = document.querySelector('body > div > div');
  const input = document.querySelector('body > div > textarea');

  function calculateInputValue(stateC) {
    return stateC.join('');
  }
  keys.addEventListener('click', (e) => {
    e.preventDefault();
    // console.log(e.target.innerText === "shift");
    if (e.target.innerText !== 'shift' && e.target.innerText !== 'caps lock') {
      state.push(e.target.innerText);
    }

    input.value = calculateInputValue(state);
  });

  shiftLogic();
  capsLockLogic();
  keyPressLogic();
}

export default keyboardLogic;
