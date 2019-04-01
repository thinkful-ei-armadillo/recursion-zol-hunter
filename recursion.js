
// function countSheep(num){
//     if(num === 0) {
//         return console.log('All sheep jumped over the fence')
//     }
//     console.log('Another sheep jump over the fence')
//     return countSheep(num-1);
// }

// countSheep(3);

function powerCalculator(num, power){
    if(power < 0){
        return console.log('exponent should be >= 0')
    }

    if (power === 0){
        return 1;
    }

    return num * powerCalculator(num, power-1);
}

console.log(powerCalculator(10, 2));