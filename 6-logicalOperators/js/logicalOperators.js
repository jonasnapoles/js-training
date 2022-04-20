/**
 * JavaScript Logical Operator
 * && or AND
 * There operators perform comparisons to return a true or false.
 * 
 * Uses condition and repetition statements, togetther with the comparision operators.
 * 
 *Logical operator && also know as AND. Any other results will return false.
 * 
 */

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