import Rectangle from "./Rectangle";

export default class Square extends Rectangle{
    constructor(width: number) { //переопределили конструктор, теперь он принимает только один параметр
        super(width, width);// вызываем конструктор скупер класса и передаем туда две ширины, чтобы получить квадрат
    }
}