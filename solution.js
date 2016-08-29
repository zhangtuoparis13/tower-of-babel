/**
 * Created by TBtuo on 29/08/16.
 */
// module with name
var arg1 = process.argv[2];
var arg2 = process.argv[3];

import {PI, sqrt, square} from  './solution-math';
console.log(PI);
console.log(sqrt(+arg1));
console.log(square(+arg2));