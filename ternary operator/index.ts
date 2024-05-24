// QUESTION NO 1

//1 Check if a Number is Even or Odd
// - Write a program that prompts the user to enter a number.
// - Use a ternary operator to check if the number is even or odd.
// - Print "The number is even." if it is even.
// - Print "The number is odd." if it is odd.
// - Handle cases where the user does not enter a number and print "Invalid input."


import inquirer from "inquirer";

const numbers = await inquirer.prompt([{

    name:"num1",
    type:"number",
    message:"Enter your number",
    choices:["2,4,6,8"]
}]);

numbers.num1 === 2 ? 
console.log("THIS IS EVEN NUMBER"):
numbers.num1 === 4 ?
console.log("THIS IS EVEN NUMBER"):
numbers.num1 === 6 ? 
console.log("THIS IS EVEN NUMBER"):
numbers.num1 === 6 ?
console.log("THIS IS EVEN NUMBER"):
numbers.num1 === 8 ?
console.log("THIS IS EVEN NUMBER"):
numbers.num1 % 3 === 0 ?
console.log("THIS IS ODD NUMBERS"):

console.log("INVALID NUMBER"); // WORK AS AN ELSE




// QUESTION NO 2

// Determine Age Group
// - Write a program that prompts the user to enter their age.
// - Use a ternary operator to determine the age group: "Child" if under 13, "Teenager" if between 13 
//and 19, and "Adult" if 20 or older.
// - Print the appropriate age group.
// - Handle cases where the age entered is less than 0 and print "Invalid age."


const age = await inquirer.prompt([{

    name: "answer",
    type:"number",
    message:"ENTER YOUR AGE"
}]);
age.answer <=13  ? console.log("you are child"):
age.answer <19 ? console.log("YOU ARE TEENAGER"):
age.answer >=20 ? console.log("YOU ARE ADULT"):
age.answer %0===0 ? console.log("PRINT APPRORIATE AGE"):
console.log("INVALID AGE");




