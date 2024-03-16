"use strict";
const getArray = (inps) => {
    return inps[0];
};
const numbers = [1, 3, 4, 5];
const resultNum = getArray(numbers);
const strings = ['hdb', 'ssd'];
const resultStr = getArray(strings);
console.log(resultNum);
console.log(resultStr);
const response = {
    data: {
        name: 'ke',
        age: 23
    },
    isError: false
};
const identify = (arg) => {
    return arg;
};
const ExampleGeneric = (arg) => {
    return arg;
};
let output = ExampleGeneric("myStuff");
let output2 = ExampleGeneric(false);
const num = ["f", "f", true, 20];
console.log(ExampleGeneric(num));
const loggingIdent = (arg) => {
    console.log(arg.length);
    return arg;
};
const loggingIdents = (arg) => {
    console.log(arg.length);
    return arg;
};
console.log(loggingIdents([1, 2, 3, 4]));
const myIdentity = (arg) => {
    return arg;
};
let myIdentitys = myIdentity;
let myIdentites = myIdentity;
const myIdentity2 = (arg) => {
    return arg;
};
let myIdentitys2 = myIdentity2;
const myIdentity3 = (arg) => {
    return arg;
};
let myIdentitys3 = myIdentity3;
class GenericNum {
}
let myGenericNum = new GenericNum();
myGenericNum.zeroValue = 0;
myGenericNum.add = function (x, y) {
    return x + y;
};
let stringNumeric = new GenericNum();
stringNumeric.zeroValue = "";
stringNumeric.add = function (x, y) {
    return x + y;
};
const logsIdent = (arg) => {
    console.log(arg.length);
    return arg;
};
const getProperty = (obj, key) => {
    return obj[key];
};
let x = { a: 1, b: 3, c: 5 };
getProperty(x, "c");
