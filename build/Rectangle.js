"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rectangle = (function () {
    function Rectangle(_width, _height) {
        this._width = _width;
        this._height = _height;
    }
    Rectangle.prototype.perimeter = function () {
        return (this._width + this._height) * 2;
    };
    Rectangle.prototype.square = function () {
        return this._height * this._width;
    };
    Object.defineProperty(Rectangle.prototype, "width", {
        get: function () {
            return this._width;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "height", {
        get: function () {
            return this._height;
        },
        enumerable: false,
        configurable: true
    });
    return Rectangle;
}());
exports.default = Rectangle;
//# sourceMappingURL=Rectangle.js.map