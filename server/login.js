import readline from "readline-sync";

console.log("============================================");
console.log("==================login =======================");
console.log("================================================");

let username = readline.question("enter the username:");


let password =readline.question("Enter the password:",{hideEchoBack: true});


let age = readline.questionInt("Enter your age:");


let email =readline.questionEMail("Enter your email:");
console.log(username,password,age,email);

