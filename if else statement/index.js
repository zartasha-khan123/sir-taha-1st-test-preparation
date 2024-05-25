// QUESTION NO 1
// Check if a Number is Positive, Negative, or Zero
// - Write a program that prompts the user to enter a number.
// - Use an if-else statement to check if the number is positive, negative, or zero.
// - Print the appropriate message based on the condition.
// - Check if a Person is Eligible to Vote
import inquirer from "inquirer";
let person = await inquirer.prompt([{
        name: "question1",
        type: "string",
        message: "enter the given mentioned values"
    }
]);
if (person.question1 === "positive" || person.question1 === "negative" || person.question1 === "zero") {
    console.log("you enter the correct values");
}
else {
    console.log("you enter wrong statement!\n you only enter nagetive, zero, positive");
}
// QUESTION NO 2
//Write a program that prompts the user to enter their age.
// - Use an if-else statement to check if the person is eligible to vote (age 18 or older).
// - Print "You are eligible to vote." if they are 18 or older.
// - Print "You are not eligible to vote." if they are younger than 18.
// - Additionally, handle cases where the age entered is less than 0 and print "Please enter a valid age."
let person_age = await inquirer.prompt([
    {
        name: "persons_age",
        type: "number",
        message: "Enter your age"
    }
]);
if (person_age.persons_age >= 18) {
    console.log("You are eligible to vote");
}
else if (person_age.persons_age < 18 && person_age.persons_age >= 0) {
    console.log("You are not eligible to vote");
}
else {
    console.log("you enter invalid numbers");
}
//sir ke trha krna ho tw
//qno1
let age = await inquirer.prompt([
    {
        name: "persons_age",
        type: "number",
        message: "Enter your age"
    }
]);
if (age.persons_age === 0) {
    console.log("zero ");
}
if (age.persons_age > 0) {
    console.log("positive");
}
if (age.persons_age < 0) {
    console.log("negative");
}
