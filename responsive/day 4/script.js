let greatUser = (name, msg = "Hello") => {
    console.log(`${msg} ${name}`)
}
greatUser('Ahmed')
greatUser('Manar', 'welcome')

//task 2
function calculateTotalPrice(price, quantity = 1) {
    return price * quantity;
}

calculateTotalPrice(100); // Should return 100
calculateTotalPrice(50, 3); // Should return 150



//task 3
let multiply = (a, b) => a * b
multiply(5, 6)

//task 4
let reverseString = (str) => str.split('').reverse().join('');;
console.log(reverseString("Manar"))


//task 5
let arr = [10, 524, 28, 3, 1, 6, 9]
console.log(arr.find((item) => item > 10))


//task 6
let filterStrings = (arr) => {
    console.log(arr.filter((item) => item.length < 5))
}
filterStrings(["apple", "banana", "kiwi", "plum"]);



//task 7
let doubleNumbers = (arr) => {
    console.log(arr.map(item => item * 2))
}
doubleNumbers([1, 2, 3]); // Should return [2, 4, 6]

//task 8
let arr2=[false,true,false,true]
console.log(arr2.some(item=>item ==true))
console.log(arr2.every(item=>item ==true))

//task 9
let x = 5, y = 6;
[x, y] = [y, x]
console.log(`x=${x} y=${y}`)


