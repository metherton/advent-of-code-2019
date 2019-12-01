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
      console.log(lines);
      ADVENT_OF_CODE.calculateMass(lines);
  }
});


ADVENT_OF_CODE.calculateMass = (input) => {

    let x1 = 0;
    let totalFuel = lines.map(m => Math.floor(m / 3) - 2).reduce((x1, x2) => x1 + x2);
    console.log(totalFuel);

}
