var colors = require('colors');   // third party
var colorful = require('../utils/colorful'); // own modules
//exploring  module

console.log(module);

console.log(colors.green('hello')); // outputs green text
console.log(colors.red.underline('i like cake and pies')) // outputs red underlined text
console.log(colors.inverse('inverse the color')); // inverses the color
console.log(colors.rainbow('OMG Rainbows!')); // rainbow
console.log(colors.trap('Run the trap')); // Drops the bass


colorful.printRanbow("this is ranbow string");



