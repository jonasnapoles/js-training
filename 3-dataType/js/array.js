/**
 * Array are considered object in javascript, however they serve as a list;
 * Arrays can have a items of any data type;
 * It is not by key or value, but by index
 * 
 * arry => []
 * object => {}
 *  */

var arr = ["United", 10, {country: "Kingdom", worked: true, county: 'Cork'}];

console.log(arr);

var string = ['a', 'b', 'c', 'd']

console.log(string);

var int = [1, 2, 3, 4];
console.log(int);

console.log(arr[0]);

console.log(int[1]); //output position 1

arr[1] = 5; //change element

arr[0] = "Ireland";

console.log(arr);

console.log(typeof arr);

document.write("WELLCOME!");