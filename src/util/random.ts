export function getRandomInt(min: number, max: number): number {
    if(min == max) {
        max++;
    } else if (min > max) {
        [min, max] = [max, min]
    }
    return Math.trunc(min + Math.random() * (max - min));
}

const MIN_CODE = 97;
const MAX_CODE = 123;
export function getRandomText(textLength: number): string {
    let res: string = '';
    for (let i = 0; i < textLength; i++) {
        res += String.fromCharCode(getRandomInt(MIN_CODE, MAX_CODE));
    }
    return res;
}