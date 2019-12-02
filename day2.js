'use strict';


var ADVENT_OF_CODE = {};
const readline = require('readline');
const fs = require('fs');
const lines = [];
const rl = readline.createInterface({
  input: fs.createReadStream('bla'),
  crlfDelay: Infinity
});
let lineNr = 0;

rl.on('line', (line) => {
  lineNr++;
  if (lineNr === 1) {
      ADVENT_OF_CODE.calculateInts(line.split(","));
  }
});


ADVENT_OF_CODE.calculateInts = (input) => {

    const ops = {1: (a, b) => {console.log(`plus: ${a} & ${b}`); return parseInt(input[a]) + parseInt(input[b])}, 2: (a, b) => {console.log(`times: ${a} & ${b}`); return parseInt(input[a]) * parseInt(input[b])}};

    function calcInts(i) {
        const index = parseInt(i);
        if (input[index] === 99) {
            return;
        }
        if (input[index] !== '1' && input[index] !== '2') {
         //   console.log(`Unknown op code found: ${input[index]}`);
            return;
        }
        if (index > input.length - 4) {
            return;
        }
        input[input[index + 3]] = ops[input[index]](parseInt(input[index + 1]), parseInt(input[index + 2]));
        calcInts(index + 4)

    }
    input[1] = '12';
    input[2] = '2';
 //   console.log(input);
    calcInts(0);
    console.log(`Answer is: ${input[0]}`)
 //   console.log(input);
}
