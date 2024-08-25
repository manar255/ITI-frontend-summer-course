var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log('hello world');
// task a
var varNumber = 5;
console.log(varNumber);
var varString = "Manar";
console.log(varString);
var varbool = true;
console.log(varbool);
var listNumber = [1, 2, 3, 5];
console.log(listNumber);
var person = ["Alice", 30];
console.log(person);
var randomValue = "Hello";
console.log(randomValue);
// task b
var id;
id = 101;
console.log(id);
id = "A101";
console.log(id);
// task c
function sum(a, b) {
    return a + b;
}
console.log(sum(3, 5));
// task d
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
function getDirectionMessage(direction) {
    switch (direction) {
        case Direction.Up:
            return "You are moving up!";
        case Direction.Down:
            return "You are moving down!";
        case Direction.Left:
            return "You are moving left!";
        case Direction.Right:
            return "You are moving right!";
        default:
            return "Unknown direction!";
    }
}
console.log(getDirectionMessage(Direction.Up)); // Output: You are moving up!
console.log(getDirectionMessage(Direction.Left)); // Output: You are moving left!
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.area = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(size) {
        return _super.call(this, size, size) || this;
    }
    return Square;
}(Rectangle));
var rectangle = new Rectangle(10, 5);
console.log("Rectangle Area:", rectangle.area()); // Output: Rectangle Area: 50
var square = new Square(7);
console.log("Square Area:", square.area()); // Output: Square Area: 49
