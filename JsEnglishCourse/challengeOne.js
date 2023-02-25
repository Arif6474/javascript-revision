// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/
// solution of challenge one
/*
const markMass = 78;
const jhonMass= 92;
const markHeight = 1.69;
const jhonHeight = 1.95;
*/

/*
const markMass = 95;
const jhonMass= 85;
const markHeight = 1.88;
const jhonHeight = 1.76;

const markHeigherBMI= markMass   / (markHeight ** 2)
const jhonHeigherBMI= jhonMass  / (jhonHeight ** 2)
const markHigherBMI = markHeigherBMI > jhonHeigherBMI
console.log(markHeigherBMI , jhonHeigherBMI ,markHigherBMI);
*/


////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

/*

// solution of challenge two
const markMass = 78;
const jhonMass= 92;
const markHeight = 1.69;
const jhonHeight = 1.95; 
// const markMass = 95;
// const jhonMass= 85;
// const markHeight = 1.88;
// const jhonHeight = 1.76;

const markHeigherBMI= markMass   / (markHeight ** 2)
const jhonHeigherBMI= jhonMass  / (jhonHeight ** 2)

if ( markHeigherBMI > jhonHeigherBMI) {
    console.log(`Mark's BMI (${markHeigherBMI}) is higher than John's! (${jhonHeigherBMI})`);
}else{
    console.log(`John's BMI (${markHeigherBMI}) is higher than Mark's! (${jhonHeigherBMI})`);
}
*/