"use strict";
var addTwono = function (n1, n2, showResult, resultPharse) {
    var result = n1 + n2;
    if (showResult) {
        console.log(resultPharse + result);
    }
    else {
        return result;
    }
};
var num1;
num1 = 10;
var num2 = 10.5;
var printScript = true;
var resultPharse = "Result is  : ";
addTwono(num1, num2, printScript, resultPharse);
//# sourceMappingURL=basic.js.map