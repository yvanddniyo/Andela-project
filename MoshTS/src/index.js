var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var UserAccount = /** @class */ (function () {
    function UserAccount(name, id) {
        this.name = name;
        this.id = id;
    }
    return UserAccount;
}());
// you can even define an function that takes string and array
var getLength = function (obj) {
    if (typeof obj === 'string') {
        return [obj];
    }
    return obj;
};
console.log(getLength(['yvan', 'yvan', 'yvan']));
var logPoint = function (p) {
    console.log("".concat(p.x, ", ").concat(p.y));
};
var point = { x: 12, y: 23 };
logPoint(point);
var updateAssignment = function (assign, propsUpdate) {
    return __assign(__assign({}, assign), propsUpdate);
};
var assign1 = {
    studentId: 'Yvan_30303',
    title: 'English',
    grade: 0
};
console.log(updateAssignment(assign1, { grade: 97 }));
