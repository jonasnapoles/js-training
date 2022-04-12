/**
 * The object works like an associative array of other languages;
 * This can create a property with key and value;
 * this salves a set of values for later use.
 * */

var obj = {
    name: "David",
    age: 27,
    occupation: "developer",
    worked: true,
};

console.log(obj);

console.log(typeof obj);

//access a property of the object

console.log(obj.name);
console.log(obj.age);
console.log(obj.occupation);

console.log("I'm "+ obj.age);

obj.name = "Carlos"; //change property

console.log(obj.name); 

obj.grade = true; //create property

console.log(obj);