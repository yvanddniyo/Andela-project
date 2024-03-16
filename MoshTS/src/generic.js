var getArray = function (inps) {
    return inps[0];
};
var numbers = [1, 3, 4, 5];
var resultNum = getArray(numbers);
var strings = ['hdb', 'ssd'];
var resultStr = getArray(strings);
console.log(resultNum);
console.log(resultStr);
var response = {
    data: {
        name: 'ke',
        age: 23
    },
    isError: false
};
// the identify function return anything that passed in 
var identify = function (arg) {
    return arg; // return only number coz we added the number in the as argument and specify what might return.
};
/* In the Generic we have a good way to implement where we can instead pass every type and return value corresponding to the value we have passed.*/
var ExampleGeneric = function (arg) {
    return arg;
};
var num = [2, 3, 4, 5];
console.log(ExampleGeneric(num));
