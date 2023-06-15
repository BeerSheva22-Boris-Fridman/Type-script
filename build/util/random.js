"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomText = exports.getRandomInt = void 0;
function getRandomInt(min, max) {
    var _a;
    if (min == max) {
        max++;
    }
    else if (min > max) {
        _a = [max, min], min = _a[0], max = _a[1];
    }
    return Math.trunc(min + Math.random() * (max - min));
}
exports.getRandomInt = getRandomInt;
var MIN_CODE = 97;
var MAX_CODE = 123;
function getRandomText(textLength) {
    var res = '';
    for (var i = 0; i < textLength; i++) {
        res += String.fromCharCode(getRandomInt(MIN_CODE, MAX_CODE));
    }
    return res;
}
exports.getRandomText = getRandomText;
//# sourceMappingURL=random.js.map