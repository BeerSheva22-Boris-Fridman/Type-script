"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Rectangle_1 = __importDefault(require("./Rectangle"));
var n = 10;
n = 20;
var num = 12;
num = 100;
num = "abc";
var array = [];
array.push('abc');
var ar1 = ['abc'];
ar1[0] = 'lmn';
var ar2 = [];
var map1 = new Map([["abc", 2]]);
console.log(map1.get("abc"));
console.log(map1.entries());
Array.from(map1.entries()).forEach(function (e) { return console.log("".concat(e[0], " -> ").concat(e[1])); });
function f(a) {
    return typeof a == "number" ? a * 2 : +(a + 2);
}
console.log(f("abc"));
var comp = function (num1, num2) {
    return num1 > num2 ? 1 : -1;
};
function displayPerson(prs) {
    prs.gender && console.log(prs.gender.substring(0, 3));
}
displayPerson({ id: 123, date: "2000-10-10", name: "Vasya", gender: "male" });
function cipher(text, key) {
    var result = "";
    for (var i = 0; i < text.length; i++) {
        var char = text[i];
        if (/[a-zA-Z]/.test(char)) {
            var isUpperCase = char === char.toUpperCase();
            var baseCharCode = isUpperCase ? "A".charCodeAt(0) : "a".charCodeAt(0);
            var offset = (char.charCodeAt(0) - baseCharCode + key) % 26;
            var shiftedCharCode = baseCharCode + offset;
            var shiftedChar = String.fromCharCode(shiftedCharCode);
            result += isUpperCase ? shiftedChar.toUpperCase() : shiftedChar;
        }
        else {
            result += char;
        }
    }
    return result;
}
function decipher(text, key) {
    return cipher(text, -key);
}
console.log(cipher("abc", 3));
var shape = new Rectangle_1.default(3, 4);
var width = shape.width;
//# sourceMappingURL=main.js.map