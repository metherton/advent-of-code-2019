'use strict';


var ADVENT_OF_CODE = {};
const readline = require('readline');
const fs = require('fs');
const lines = [];
const rl = readline.createInterface({
  input: fs.createReadStream('day1-input.txt'),
  crlfDelay: Infinity
});
let lineNr = 0;

rl.on('line', (line) => {
  lineNr++;
  lines.push(line);
  if (lineNr == 100) {
      ADVENT_OF_CODE.calculateMass(lines);
  }
});


ADVENT_OF_CODE.calculateMass = (input) => {

    function sumFuel(amount, accumulator) {
        console.log(`amount: ${amount}, accumulator: ${accumulator}`);
        let result = Math.floor(amount / 3) - 2
        if (result <= 0) {
            console.log(`return result: ${result} & accumulator: ${accumulator}`)
            return accumulator;
        } else {
            return sumFuel(result, accumulator + result);
        }
    }

    const x1 = 0;
    let totalFuel = lines.map(function(x) {return sumFuel(x, 0)}).reduce((x1, x2) => x1 + x2);

    console.log(totalFuel);

}
