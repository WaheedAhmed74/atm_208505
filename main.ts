/*  Name : Waheed Ahmed
    email : waheedahmedsoomro@gmail.com
    Roll No : 208505
    Class Slot : Saturday (7:00 to 10:00)
*/
import inquirer from "inquirer";  // Import Inquirer for inquirer Functions

let myBalance: number = 100000; // Balance Amount
let myPincode: number = 2468; // ATM Pin Code

let pinflag:boolean = true;  // for Again and again prompt if wrong pin code attempt
while (pinflag === true){

let pinAns = await inquirer.prompt([{
    name: "atmpin",
    message: "Enter Your Pin Code",
    type: "number"
    }])

if (pinAns.atmpin === myPincode){
    console.log("You enter Correct Pin Code")
pinflag = false;
    let operation_answer = await inquirer.prompt([{
        name: "operation",
        message: "Select your option",
        type: "list",
        choices: ["withdrawl", "checkbalance"]
    }]);
    
let flag: boolean = true; //  for Again and again prompt if wrong amount attempt
   while (flag === true){

    if (operation_answer.operation === "withdrawl"){
        let amountdraw = await inquirer.prompt([{
            name: "amount",
            message: "Enter your Amount",
            type: "number",
        }])
        if (amountdraw.amount > 0 && amountdraw.amount <= myBalance){
            myBalance -= amountdraw.amount
            console.log("Your remaining Balance is " + myBalance)
            flag = false
        } else if (amountdraw.amount < 0){
            console.log ("You must enter correct figure amount")
            flag = true
        } else if (amountdraw.amount > myBalance){
            console.log("You Exceed your Balance Limit, Try Again")
            flag = true
        } else if (amountdraw.amount === 0){
            console.log("You Type 0 (ZERO), Try Again")
            flag = true
        }

    } else if (operation_answer.operation === "checkbalance") { 
        console.log(`Your balance is  ${myBalance}`)
        flag = false
   }
        
   }

} else {
    console.log("You enter Wrong Pin Code, Try again")
    pinflag = true;
}
}
