// TODO: Include packages needed for this application
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require ("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "github",
        message: "What is your Github username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your preferred email address or the address associated with your Github user?",
    },
    {
        type: "input",
        name: "title",
        message: "What is your project called?",
    },
    {
        type: "input",
        name: "description",
        message: "Please describe your project. What do you wish to create?",
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license should your project have?",
        choices: ["MIT", "APACHE2.0", "GPL3.0", "BSD3", "None"]
    },
    {
        type: "input",
        name: "installation",
        message: "What command should be run to install dependencies?",
        default: "npm i"
    },
    {
        type: "input",
        name: "test",
        message: "What command should be fired to run tests?",
        default: "npm test"
    },
    {
        type: "input",
        name: "usage",
        message: "What does the user need to know in order to effectively navigate and use this repository?",
    },
    {
        type: "input",
        name: "contributing",
        message: "What does the user need to know in order to make contributions to this repository?",
    }];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log("Generating README.md...");
        writeToFile("exampleREADME.md", generateMarkdown({ ...inquirerResponses}));
    });
}
console.log("Running...")
// Function call to initialize app
init();
