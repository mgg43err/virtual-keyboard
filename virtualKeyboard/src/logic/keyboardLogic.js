function keyboardLogic() {
  const state = [];
  const keys = document.querySelector("body > div > div");
  const input = document.querySelector("body > div > textarea");

  function calculateInputValue(stateC) {
    return stateC.join("");
  }
  keys.addEventListener("click", (e) => {
    e.preventDefault();
    state.push(e.target.innerText);
    /* console.log(state); */
    debugger;
    input.value = calculateInputValue(state);
    debugger;
  });
}

export default keyboardLogic;
