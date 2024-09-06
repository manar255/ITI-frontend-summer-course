console.log('hello world')

// task a
let varNumber: number = 5;
console.log(varNumber);

let varString: String = "Manar";
console.log(varString);

let varbool: boolean = true;
console.log(varbool);

let listNumber: number[] = [1, 2, 3, 5]
console.log(listNumber);

let person: [string, number] = ["Alice", 30];
console.log(person);

let randomValue: any = "Hello";
console.log(randomValue);

// task b
let id: number | string;

id = 101;
console.log(id);

id = "A101";
console.log(id);

// task c
function sum(a: number, b: number): number {

    return a + b;
}
console.log(sum(3, 5))

// task d
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}

function getDirectionMessage(direction: Direction): string {
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

console.log(getDirectionMessage(Direction.Up));    // Output: You are moving up!
console.log(getDirectionMessage(Direction.Left));  // Output: You are moving left!

// task e
interface Shape {
    area(): number;
}

class Rectangle implements Shape {
    constructor(public width: number, public height: number) {}

    area(): number {
        return this.width * this.height;
    }
}

class Square extends Rectangle {
    constructor(size: number) {
        super(size, size);
    }
}

const rectangle = new Rectangle(10, 5);
console.log("Rectangle Area:", rectangle.area()); // Output: Rectangle Area: 50

const square = new Square(7);
console.log("Square Area:", square.area()); // Output: Square Area: 49
