const lottoBox = document.querySelector(".number_div");

const maxnumber = [];
function makeNumber(){
  for(let i = 0; i< 7; i++){
    maxnumber.push(Math.floor(Math.random()*100)+1);
    // console.log(maxnumber);
    console.log(maxnumber);
    for(let c = 0; c< i; c++){
      if (maxnumber[i] ===  maxnumber[c]) {
          maxnumber.pop();
          i--;  
      }
  }
  console.log(maxnumber);
  }
  
  let numberText = document.createElement('p');
  numberText.innerHTML ='로또 넘버 : '+ maxnumber ;
  lottoBox.appendChild(numberText);
  maxnumber.length = 0;
}
console.log(maxnumber);

// LOTOPANEL.addEventListener("onclick", makeNumber);

