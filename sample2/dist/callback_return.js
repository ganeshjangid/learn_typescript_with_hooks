"use strict";
function addTwo(num1, num2) {
    return num1 + num2;
}
function printResult(num) {
    console.log("Result :", num);
}
function addTwoHandle(num1, num2, cb) {
    var result = num1 + num2;
    cb(result);
}
addTwoHandle(10, 20, function (result) {
    console.log(result);
});
function generateError(message, code) {
    throw { message: message, code: code };
}
generateError("Hello this is error ther", 200);
var result = printResult(addTwo(10, 20));
//console.log(result);
var combineValue;
combineValue = addTwo;
//combineValue=0;
//combineValue=printResult;
console.log(combineValue(10, 20));
//# sourceMappingURL=callback_return.js.map