function capsLockLogic(){
        let capsState = false; 
        let caps = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(1)")
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
        let z10 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(12)")
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
    
        caps.addEventListener('click', e=>{
          if (e.target.innerText === "caps lock"){
            capsState = !capsState;
          }
          if(capsState === true){
            e.target.style.backgroundColor = "red";
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
          }else if (capsState === false) {
            e.target.style.backgroundColor = "#2f2f2fee";
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
        }
    )
}

export default capsLockLogic;