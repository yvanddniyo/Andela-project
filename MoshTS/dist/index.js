"use strict";
class UserAccount {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
const getLength = (obj) => {
    if (typeof obj === 'string') {
        return [obj];
    }
    return obj;
};
console.log(getLength(['yvan', 'yvan', 'yvan']));
const logPoint = (p) => {
    console.log(`${p.x}, ${p.y}`);
};
const point = { x: 12, y: 23 };
logPoint(point);
const updateAssignment = (assign, propsUpdate) => {
    return Object.assign(Object.assign({}, assign), propsUpdate);
};
const assign1 = {
    studentId: 'Yvan_30303',
    title: 'English',
    grade: 0
};
console.log(updateAssignment(assign1, { grade: 97 }));
function identity(arg) {
    return arg;
}
let result1 = identity(42);
let result2 = identity('hello');
