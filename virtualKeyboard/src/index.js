

// let make keyboardContainer 
let body = document.querySelector('body');

let keyboardContainer = document.createElement('div');
keyboardContainer.classList.add('container-keyboard');

body.prepend(keyboardContainer);

// also we need to create an input field for our virtual keyboard
let inputF = document.createElement('textarea');
inputF.classList.add('input')
keyboardContainer.prepend(inputF)

// also we need a keyborad wrapper 
let keyboardWrapper = document.createElement('div');
keyboardWrapper.classList.add('keyboard__wrapper');
keyboardContainer.append(keyboardWrapper)


