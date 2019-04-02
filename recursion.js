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

// function mazePath(maze, arrIdx = 0, i = 0) {
//   if (maze[arrIdx][i] === 'e') {
//     return '';
//   }

//   if (maze[arrIdx + 1][i] === ' ' || maze[arrIdx + 1][i] === 'e') {
//     return 'D' + mazePath(maze, arrIdx + 1, i);
//   }

//   if (maze[arrIdx][i + 1] === ' ' || maze[arrIdx][i + 1] === 'e') {
//     return 'R' + mazePath(maze, arrIdx, i + 1);
//   }
// }

// let maze = [
//   [' ', ' ', ' ', '*', ' ', ' ', ' '],
//   ['*', '*', ' ', '*', ' ', '*', ' '],
//   [' ', ' ', ' ', ' ', ' ', ' ', ' '],
//   [' ', '*', '*', '*', '*', '*', ' '],
//   [' ', ' ', ' ', ' ', ' ', ' ', 'e']
// ];

// console.log(mazePath(maze));

// function allAnagrams(str) {
//   str = str.split('');
//   var count = {};

//   var permute = (sofar, rest) => {
//     if (!rest.length) {
//       count[sofar.join('')] = true;
//     } else {
//       for (let i = 0; i < rest.length; i++) {
//         let copy = rest.slice();
//         let next = sofar.concat(copy.splice(i, 1));
//         permute(next, copy);
//       }
//     }
//   };
//   permute([], str);
//   return Object.keys(count);
// }

// console.log(allAnagrams('east'));

const facebook = {
  Zuckerberg: {
    Schroepfer: {
      Bosworth: {
        Steve: {},
        Kyle: {},
        Andra: {}
      },
      Zhao: {
        Richie: {},
        Sofia: {},
        Jen: {}
      },
      Badros: {
        John: {},
        Mike: {},
        Pat: {}
      },
      Parikh: {
        Zach: {},
        Ryan: {},
        Tes: {}
      }
    },
    Schrage: {
      VanDyck: {
        Sabrina: {},
        Michelle: {},
        Josh: {}
      },
      Swain: {
        Blanch: {},
        Tom: {},
        Joe: {}
      },
      Frankovsky: {
        Jasee: {},
        Brian: {},
        Margaret: {}
      }
    },
    Sandberg: {
      Goler: {
        Eddie: {},
        Julie: {},
        Annie: {}
      },
      Hernandez: {
        Rowi: {},
        Inga: {},
        Morgan: {}
      },
      Moissinac: {
        Amy: {},
        Chuck: {},
        Vinni: {}
      },
      Kelley: {
        Eric: {},
        Ana: {},
        Wes: {}
      }
    }
  }
};

function organizationChart(data, depth = 0) {
  let indent = ' '.repeat(depth * 4);
  Object.keys(data).forEach(key => {
    console.log(indent + key);
    organizationChart(data[key], depth + 1);
  });
}

console.log(organizationChart(facebook));

// function binary(num) {
//   if (num === 0) {
//     return '';
//   }
//   return (num % 2) + binary(Math.floor(num / 2));
// }

// console.log(binary(5));
