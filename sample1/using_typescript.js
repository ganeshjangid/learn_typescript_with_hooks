var button = document.querySelector("button");
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var addTwoNo = function (a, b) {
    console.log(typeof (a));
    console.log(typeof (b));
    return a + b;
};
//console.log(addTwoNo(10,20));
button.addEventListener("click", function () {
    var result = addTwoNo(+num1.value, +num2.value);
    console.log(result);
    //document.getElementById("showResult").innerHTML=result;
});
