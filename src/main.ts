// const f = () => console.log("Hello world");
// f();

import Rectangle from "./Rectangle";

// for (let i = 0; i < 3; i++) {
//     setTimeout(()=>console.log(`kuku ${i}`)); 
// }

let n = 10;
n = 20;
let num: number | 'abc' = 12;
num = 100;
num = "abc";

const array: string[] = [];
array.push('abc');

const ar1: [string, number?] = ['abc'];//это массив состоящий из 2 элементов: одна строка 1 число
ar1[0] = 'lmn';

const ar2: Array<string> = [];//тоже самое что и array- массив строк

const map1: Map<string, number> = new Map([["abc", 2]]);
console.log(map1.get("abc"));
console.log(map1.entries());//это не массив
Array.from(map1.entries()).forEach(e => console.log(`${e[0]} -> ${e[1]}`));//это массив

function f(a: string | number): string | number {
    return typeof a == "number" ? a * 2 : +(a + 2);
}

console.log(f("abc"));

type Comparator<T = number> = (p1: T, p2: T) => number;//это функция и он может принять только функцию, справа это не стрелочная фнункция, это тип возвращаемых данных
//T = number> - дефолтное значение
let comp: Comparator<number> =
    function (num1: number, num2: number): number {
        return num1 > num2 ? 1 : -1;

    };

type Person = {id: number, date: Date|string, name: string, gender?:"male"|"female" };

function displayPerson(prs: Person): void {
    prs.gender && console.log(prs.gender.substring(0, 3));
}
//"strict": true в конфиге - тогда нельзя вызывать доп для необязательных полей
//чтобы все равно работало: вариант 1: prs.gender && console.log(prs.gender.substring(0, 3));
// вариант 2 console.log(prs.gender!.substring(0, 3)); - оставь, он там есть, но если нет - будет исключение

displayPerson({id: 123, date: "2000-10-10", name: "Vasya", gender: "male"});


// const f = () => console.log("hello");
// f();
// for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i));
// }

function cipher(text: string, key: number): string {
    let result = "";
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        // Шифрование только для букв латинского алфавита
        if (/[a-zA-Z]/.test(char)) {
            const isUpperCase = char === char.toUpperCase();
            const baseCharCode = isUpperCase ? "A".charCodeAt(0) : "a".charCodeAt(0);
            const offset = (char.charCodeAt(0) - baseCharCode + key) % 26;
            const shiftedCharCode = baseCharCode + offset;
            const shiftedChar = String.fromCharCode(shiftedCharCode);
            result += isUpperCase ? shiftedChar.toUpperCase() : shiftedChar;
        } else {
            result += char; // Если символ не является буквой, оставляем его без изменений
        }
    }
    return result;
}

function decipher(text: string, key: number): string {
    // Дешифрование — просто обратная операция к шифрованию
    // Здесь можно применить ту же логику, но с отрицательным значением ключа
    return cipher(text, -key);
}
console.log(cipher("abc",3));


const shape: Rectangle = new Rectangle (3, 4);
let width = shape.width;

// интерфейс шифр и дешиф, прин объект а возвр не текст с свойствами
//получ объект сайф с свойстваи, а возвращать текст
//у каждого свои ключи итд