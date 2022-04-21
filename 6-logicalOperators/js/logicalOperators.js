/**
 * JavaScript Logical Operator
 * Logical operators are used to determine the logic between variables or values.
 * 
 * 
 *  && or AND
 * There operators perform comparisons to return a true or false.
 * 
 * Uses condition and repetition statements, togetther with the comparision operators.
 * 
 *Logical operator && also know as AND. Any other results will return false.
 * 
 *  || or OR
 * It will return true if one of the operations returns true, and therefore returns false only if both expressions are false.
 * 
 *  ! or NOT
 *  
 * This operator changes the result, consequently 
 */


 // && or AND
 var age = 17;

 var name = "Jenny";

 if(name == "Jenny" && age == 16){
     console.log("Jenny can join JavaScript class");
 } else {
     console.log("Invalid user");
 }

 // It is possible to use more validation
 if (1 == 1 && 3 > 1 && true) {
     console.log("accredited");
 }

// It is possible to separate the validations
 if ((1 == 1 && 3 > 4) && true) {
    console.log("Authorized");
} else if (name == "Jenny" && age >= 14) {
    console.log("Second authorized")
}

//  || or OR

if (name == "David" || age > 18) {
    console.log("You can join JavaScript lass");
}
//five validations, string, number and boolean
if (name == "Jenny" && 15 > 20 || 10 == 10) {
    console.log("First Test");
}
//This separates the first validations 
if ((name == "David"  || 13 > 20) && 10 == 10) {
    console.log("Second Test"); //This one did not call because && requires both to return true!
}else{
    console.log("This one did not because && requires both to return true!")
}
//Another example
if(name == "Jenny" && (18 < age || 20 == 20)){
    console.log("Third Test"); //This one called because both return true!
}

