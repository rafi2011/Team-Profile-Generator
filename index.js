 const fs = require('fs');
 const path = require('path');
 const Engineer = require('./lib/Engineer.js');
 const Intern = require('./lib/Intern.js');
 const Manager = require('./lib/Manager.js');
 
 
 const questions = require("./utils/questions.js");
 const inquirer = require("inquirer");
 const Employee = require("./lib/Employee");
 
 
 async function main () {
    console.log(questions.internQuestions)
    // htmlCardArray[];

    // generate manager 
        //ask questions
        //render new manager based on onject repo
        //push to htmlcard array
        //back to main menu
        
    // generate Intern
        // ask questions
        // render new manager based on object repo
        // push to html card array
        // back to main menu

    // generate Engineer
        //ask questions
        // render new manager based on object repo
        // push to html card array
        // back to main menu

    // main Menu questions
        //generate Intern
        //generate Engineer
        // bye

    // build html string

    function buildHTMLString(htmlCardArray){
        `!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <main class="container">
                ${htmlCardArry.join("")}
            </main>
        </body>
        </html>`
    }
    // save string to index.html

    // create a manager
        // ask 
        // generate html string from answers, and push to complete team
        // ask for 
        // switch
            // intern
            // engineer
            // done
    //



}
// start 

main();
// question object contains questions for prompts

