/**
 * Created by TBtuo on 29/08/16.
 */

var arg1 = process.argv[2];
var arg2 = process.argv[3];

import MathHere from  './solution-math';
console.log(MathHere.PI);
console.log(MathHere.sqrt(+arg1));
console.log(MathHere.square(+arg2));