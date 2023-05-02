function keyboardLogic() {
  const state = [];
  const keys = document.querySelector("body > div > div");
  const input = document.querySelector("body > div > textarea");

  function calculateInputValue(stateC) {
    return stateC.join("");
  }
  keys.addEventListener("click", (e) => {
    e.preventDefault();
    //console.log(e.target.innerText === "shift");
    if  (e.target.innerText !== "shift"){
      state.push(e.target.innerText);
    }
    input.value = calculateInputValue(state);
  });

  let shiftLogic = function(){
    let shiftstate = false; 
    let shift = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(1)");
    let k0 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(1)");
    let k1 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(2)");
    let k2 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(3)");
    let k3 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(4)");
    let k4 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(5)");
    let k5 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(6)");
    let k6 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(7)");
    let k7 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(8)");
    let k8 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(9)");
    let k9 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(10)");
    let k10 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(11)");
    let k11 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(12)");
    let k12 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(13)");


    // document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(2)")

    let l0 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(2)");
    let l1 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(3)");
    let l2 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(4)");
    let l3 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(5)");
    let l4 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(6)");
    let l5 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(7)");
    let l6 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(8)");
    let l7 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(9)");
    let l8 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(10)");
    let l9 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(11)");
    let l10 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(12)");
    let l11 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(13)");
    let l12 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(14)");
   

    let z0 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(2)");
    let z1 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(3)");
    let z2 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(4)");
    let z3 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(5)");
    let z4 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(6)");
    let z5 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(7)");
    let z6 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(8)");
    let z7 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(9)");
    let z8 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(10)");
    let z9 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(11)");
    let z10 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(12)");
    
    let x0 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(2)");
    let x1 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(3)");
    let x2 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(4)");
    let x3 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(5)");
    let x4 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(6)");
    let x5 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(7)");
    let x6 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(8)");
    let x7 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(9)");
    let x8 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(10)");
    let x9 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(11)");


    shift.addEventListener('click', e=>{
      if (e.target.innerText === "shift"){
        shiftstate = !shiftstate;
      }
      if(shiftstate === true){
        e.target.style.backgroundColor = "red";
        k0.innerText = `~`; 
        k1.innerText = `!`; 
        k2.innerText = `@`; 
        k3.innerText = `#`; 
        k4.innerText = `$`; 
        k5.innerText = `%`; 
        k6.innerText = `^`;
        k7.innerText = `&`; 
        k8.innerText = `*`; 
        k9.innerText = `(`; 
        k10.innerText = `)`;
        k11.innerText = `_`
        k12.innerText = `+`

        l0.innerText = `Q`;
        l1.innerText = `W`;  
        l2.innerText = `E`;  
        l3.innerText = `R`;  
        l4.innerText = `T`;  
        l5.innerText = `Y`;  
        l6.innerText = `U`;  
        l7.innerText = `I`;  
        l8.innerText = `O`;  
        l9.innerText = `P`;  
        l10.innerText = `{`;  
        l11.innerText = `}`;
        l12.innerText = `|`;  
           
        z0.innerText = `A`
        z1.innerText = `S`
        z2.innerText = `D`
        z3.innerText = `F`
        z4.innerText = `G`
        z5.innerText = `H`
        z6.innerText = `J`
        z7.innerText = `K`
        z8.innerText = `L`
        z9.innerText = `:`
        z10.innerText = `"`

        x0.innerText = `Z`
        x1.innerText = `X`
        x2.innerText = `C`
        x3.innerText = `V`
        x4.innerText = `B`
        x5.innerText = `N`
        x6.innerText = `M`
        x7.innerText = `<`
        x8.innerText = `>`
        x9.innerText = `?`

      }else if (shiftstate === false) {
        e.target.style.backgroundColor = "#2f2f2fee";
        k0.innerText = '`';
        k1.innerText = `1`; 
        k2.innerText = `2`; 
        k3.innerText = `3`; 
        k4.innerText = `4`; 
        k5.innerText = `5`; 
        k6.innerText = `6`;
        k7.innerText = `7`; 
        k8.innerText = `8`; 
        k9.innerText = `9`; 
        k10.innerText = `0`; 
        k11.innerText = `-`; 
        k12.innerText = `=`;
        l0.innerText = `q`   

        l0.innerText = `q`;
        l1.innerText = `w`;  
        l2.innerText = `e`;  
        l3.innerText = `r`;  
        l4.innerText = `t`;  
        l5.innerText = `y`;  
        l6.innerText = `u`;  
        l7.innerText = `i`;  
        l8.innerText = `o`;  
        l9.innerText = `p`;  
        l10.innerText = `[`;  
        l11.innerText = `]`;
        l12.innerText = `\\`;  

        z0.innerText = `a`
        z1.innerText = `s`
        z2.innerText = `d`
        z3.innerText = `f`
        z4.innerText = `g`
        z5.innerText = `h`
        z6.innerText = `j`
        z7.innerText = `k`
        z8.innerText = `l`
        z9.innerText = `;`
        z10.innerText = `'`

        x0.innerText = `z`
        x1.innerText = `x`
        x2.innerText = `c`
        x3.innerText = `v`
        x4.innerText = `b`
        x5.innerText = `n`
        x6.innerText = `m`
        x7.innerText = `,`
        x8.innerText = `.`
        x9.innerText = `/`

      }
      console.log(shiftstate,);
    } )
  }
  shiftLogic();
}

export default keyboardLogic;
