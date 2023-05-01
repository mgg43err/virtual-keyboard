import keyboardButtnos from './keyboardButtons';
import changeLayout from './changeLayout';

function keyboardAppearance() {
  // let make keyboardContainer
  const body = document.querySelector('body');
  const keyboardContainer = document.createElement('div');
  keyboardContainer.classList.add('container-keyboard');
  body.prepend(keyboardContainer);
  // also we need to create an input field for our virtual keyboard
  const inputF = document.createElement('textarea');
  inputF.classList.add('input');
  keyboardContainer.prepend(inputF);
  // also we need a keyborad wrapper
  const keyboardWrapper = document.createElement('div');
  keyboardWrapper.classList.add('keyboard__wrapper');
  keyboardContainer.append(keyboardWrapper);

  keyboardButtnos(keyboardWrapper);
  changeLayout(keyboardContainer);
}

export default keyboardAppearance;
