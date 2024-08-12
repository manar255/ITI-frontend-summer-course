/*----------------task 1---------------*/
// var s = prompt('enter any string')
// let count = 0;
// for (let i = 0; i < s.length; i++) {
//     if (s[i] == 'e' || s[i] == 'E')
//         count++;
// }
// document.write(`count of 'e' in string = ${count}`);


/*----------------task 2---------------*/
// var s = prompt('enter any string')
// let flag = confirm("case sensintivity or not")

// if (flag != true) {
//     s=s.toLowerCase();
//     //console.log(s);
// }
// let flag2 = true;
// for(var i=0;i<s.length/2;i++)
//  {
//     if (s[i] != s[s.length - 1 - i]) {
//         flag2 = false;
//         break;
//     }
// }
// if (flag2) {
//     document.write(`string is palindrome`)
// }
// else{
//     document.write(`string is not palindrome`)
// }


/*----------------task 3---------------*/

// let x= Number(prompt())
// let y= Number(prompt())
// let z= Number(prompt())

// document.write(`<h1>adding => ${x} + ${y} + ${z} = ${x+y+z}<h1/>`)
// document.write(`<h1>Multiplying => ${x} * ${y} * ${z} = ${x*y*z}<h1/>`)
// document.write(`<h1>dividing => ${x} / ${y} / ${z} = ${x/y/z}<h1/>`)


/*----------------task 4---------------*/
// let arr = [55,98,78,26,41]

// document.write(`<h1>arr => ${arr.join()}<h1/>`)

// arr.sort();
// document.write(`<h1>arr after sort => ${arr.join()}<h1/>`)

// arr.sort(function(a, b){return b-a});
// document.write(`<h1>arr after sort in descending order => ${arr.join()}<h1/>`)



/*----------------task 5---------------*/

// let r = prompt("enter raduis")
// alert(`area of the circle = ${r*2*Math.PI}`)


/*----------------task 6---------------*/

// let n = prompt("enter value")
// alert(`square root = ${Math.pow(n ,2)}`)

/*----------------task 7---------------*/

// let a = Number(prompt("enter angle"))
// document.write(`<h1>cos ${a}o is  = ${Math.cos(a)}<h1/>`)