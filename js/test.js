const lottoBox = document.querySelector(".number_div");

function makeNumber(){
  const maxnumber = [];
  while(maxnumber.length < 7){
    let number = parseInt(Math.random()*99)+1;
    if(maxnumber.indexOf(number) < 0){
      maxnumber.push(number);
    }
  // console.log(maxnumber);
  }
  let numberText = document.createElement('p');
  numberText.innerHTML ='로또 넘버 : '+ maxnumber ;
  lottoBox.appendChild(numberText);
  // maxnumber.length = 0;
}
// console.log(maxnumber);



// for(let i = 0; i< 7; i++){
  //   maxnumber.push(Math.floor(Math.random()*100)+1);
  //   // console.log(maxnumber);
  //   console.log(maxnumber);
  //   for(let j = 0; j< i; j++){
  //     if (maxnumber[i] ===  maxnumber[j]) {
  //         maxnumber.pop();
  //         i--;  
  //     }
  // }
// LOTOPANEL.addEventListener("onclick", makeNumber);

