/**
 * Created by TBtuo on 29/08/16.
 */


// var evenOrOdd = +process.argv[2];
// var evenOrOddKey = evenOrOdd % 2 === 0 ? "even" : "odd";
// var sum = +process.argv[3] + evenOrOdd;
// var obj = {};
// obj[evenOrOddKey] = evenOrOdd;
// obj[sum] = sum;
// console.log(obj);
console.log({
    [+process.argv[2] % 2 === 0 ? "even" : "odd"]: +process.argv[2],
    [+process.argv[2] + +process.argv[3]]: +process.argv[2] + +process.argv[3],
});