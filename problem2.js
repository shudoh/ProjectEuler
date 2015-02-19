// Problem 2 from Project Euler
// Each new term in the Fibonacci sequence is generated by adding
// the previous two terms. By starting with 1 and 2, the first 10
// terms will be:
//
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
//
// By considering the terms in the Fibonacci sequence whose values
// do not exceed four million, find the sum of the even-valued terms.
//
// Solution: 4613732

var a = 0;
var b = 1;
var c = 0;
var sum = 0;

var input = 4000000;

while (c < input) {
    if (c % 2 === 0) {
        sum += c;
    }
    var c = a + b;
    a = b;
    b = c;
}

console.log("Solution:", 4613732);
console.log(sum);