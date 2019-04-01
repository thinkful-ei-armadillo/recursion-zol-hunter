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

// function makeTriangle(n) {
//   if (n === 0) {
//     return 0;
//   }
//   return n + makeTriangle(n - 1);
// }
// console.log(makeTriangle(5));

// function stringSplitter(date, index = 0) {
//   if (index === date.length) {
//     return '';
//   }
//   if (date.charAt(index) === '/') {
//     return '' + stringSplitter(date, index + 1);
//   }
//   return date.charAt(index) + stringSplitter(date, index + 1);
// }
// console.log(stringSplitter('12/12/2002'));

// function fibi(num) {
//     if(num === 0) return 0;
//     if(num === 1) return 1;

//     return fibi(num - 1) + fibi(num-2)
// }

// console.log(fibi(8));

// function factorial(num) {
//   if (num === 0) return 1;

//   return num * factorial(num - 1);
// }

// console.log(factorial(5));

function mazePath(maze, path = [], end = null, i = 0, arrIdx = 0) {
  if (end === 'e') {
    return path;
  }
  if (maze[arrIdx][i + 1] === ' ') {
    path.push('R');
    return mazePath(maze, path, end, i + 1, arrIdx);
  } else if (maze[arrIdx][i + 1] === '*') {
    path.push('D');
    return mazePath(maze, path, end, i, arrIdx + 1);
  } else if (maze[arrIdx].length - 1 === i) {
    path.push('D');
    return mazePath(maze, path, end, i, arrIdx + 1);
  } else {
    return mazePath(maze, path, (end = 'e'), i, arrIdx + 1);
  }
}

console.log(
  mazePath([
    ['S', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
  ])
);
