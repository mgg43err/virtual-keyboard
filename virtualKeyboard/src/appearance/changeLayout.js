function changeLayout(keyboardWrapper) {
  const h1 = `The keyboard was created in the Linux/GNU operating system
    To switch the language combination: left meta + space`;
  const h1div = document.createElement('div');
  h1div.innerText = h1;
  keyboardWrapper.append(h1div);
}
export default changeLayout;
