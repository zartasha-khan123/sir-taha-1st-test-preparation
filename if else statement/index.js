// QUESTION NO 1
import inquirer from "inquirer";
const person = await inquirer.prompt([{
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
const person_age = await inquirer.prompt([
    {
        name: "persons_age",
        type: "number",
        message: "Enter your age"
    }
]);
if (person_age.persons_age >= 18) {
    console.log("You are eligible to vote");
}
else if (person_age.persons_age < 18) {
    console.log("You are not eligible to vote");
}
else if (person_age.persons_age <= -0) {
    console.log("Enter a valid number");
}
else {
    console.log("you enter invalid numbers");
}
