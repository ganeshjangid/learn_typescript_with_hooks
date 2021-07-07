"use strict";
var combine = function (input1, input2) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + "  " + input2.toString();
    }
    return result;
};
var combineAge = combine(10, 20);
console.log(combineAge);
var combineString = combine("ganesh", "suthar");
console.log(combineString);
//# sourceMappingURL=union.js.map