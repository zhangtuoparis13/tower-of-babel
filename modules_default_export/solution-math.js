/**
 * Created by TBtuo on 29/08/16.
 */
const PI = 3.141592;

var  _sqrt = function (s, x, last) {
    return x != last ? _sqrt(s, (x + s / x) / 2.0, x) : x;
};

// function sqrt(s) {
//     return _sqrt(s, s/2.0, 0.0);
// }

var sqrt = s => _sqrt(s, s/2.0, 0.0);
var square = x => x*x;
// function square (x) {
//     return x * x;
// }

export default {
    PI: PI,
    square: square,
    sqrt: sqrt
};