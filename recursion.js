'use strict';
// function countSheep(num){
//     if(num === 0) {
//         return console.log('All sheep jumped over the fence')
//     }
//     console.log('Another sheep jump over the fence')
//     return countSheep(num-1);
// }

// countSheep(3);

// function powerCalculator(num, power){
//     if(power < 0){
//         return console.log('exponent should be >= 0')
//     }

//     if (power === 0){
//         return 1;
//     }

//     return num * powerCalculator(num, power-1);
// }

// console.log(powerCalculator(10, 2));

// function reverseString(str, index = 0) {
//   if (index === str.length - 1) {
//     return str.charAt(index);
//   }
//   return reverseString(str, index + 1) + str.charAt(index);
// }

// console.log(reverseString('hunter'));

function makeTriangle(n) {
  if (n === 0) {
    return 0;
  }
  const node = n;

  return makeTriangle(n);
}
