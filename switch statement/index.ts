
//QUESTION NO 1
// Day of the Week
// - Write a program that prompts the user to enter a day of the week (e.g., "Monday").
// - Use a switch statement to print a different message for "Monday", "Friday", and weekends ("Saturday" and "Sunday").
// - Add a case for "Wednesday" that prints "Midweek day."
// - Use a default case to print "It's a regular weekday" for other days.

import inquirer from "inquirer";

const weekDays = await inquirer.prompt([{

     name:"answer1",
     type:"list",
     message:"Enter a day of the week",
     choices:['monday','tuesday','wednesday','thursday','friday','saturday','sunday']

}]);

       switch (weekDays.answer1){

    case  "monday":
    console.log("Monday is a working day");
    break;    

    case "tuesday":
        console.log("This is a working day");
        break;

       
       
    case "wednesday":
            console.log("This is midweek day");
            break;


    case "thursday":
                console.log("This is working day");
                break;


     case "friday":
                    console.log("This is short day");
                    break;


     case "saturday":
                        console.log("weekend");
                        break;


    case "sunday":
                            console.log("weekend");
                            break;


     default :
                            console.log("Its a regular weekday for other days");
                            break;
}




// QUESTION NO 2

// Fruit Prices
// - Write a program that prompts the user to enter a fruit name (e.g., "Apple").
// - Use a switch statement to print the price per pound for "Apple", "Banana", and "Cherry".
// - Add a case for "Orange" that prints "Oranges are $1.5 per pound."
// - Use a default case to print "Sorry, we don't have that fruit."


const fruits_names = await inquirer.prompt({
     name : "answer",
     type : "list",
     message:"Enter your fruit name",
     choices:['Apple','Banana','Cherry','Orange']

});


 switch (fruits_names.answer){

     case "Apple":
        console.log("Apple! \n The price per pound for apple is 5");
        break;

        case "Banana":
            console.log("banana! \n The price per pound for banana is 2");
            break;

            case "Cheery":
                console.log("cheery! \n The price of cheery is 4");
                break;

                case "Orange":
                    console.log("orange! \n The price of orange is 1.5");
                    break;

                    default:
                        console.log("sorry! we don't have that fruit");
                        break;

 }
   
