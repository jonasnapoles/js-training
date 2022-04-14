
console.log("before the if");

if(false){
    console.log("Opened test");
};

console.log("after the if");

//practical context

var age = 16;
var minimumAge = 18;

if (age > minimumAge) {
    console.log("You can drive");
}else{
    console.log("You can not drive");
}
