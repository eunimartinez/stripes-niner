// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require('fs')

const generateMarkdown = require("./utils/generateMarkdown")


// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        name:'github',
        message: 'Enter your Username',
    },
    {
        type:'input',
        name:'title',
        message: 'Enter the title of the project',
    },
    {
        type:'input',
        name:'description',
        message: 'Enter the description of the project',
    },
    {
        type:'list',
        name:'license',
        message: 'What license does your project have, choose from below',
        choices: [
            'Apache 2.0',
            'MIT',
            'GPl 3.0',
            'none'
        ]
    },
    {
        type:'input',
        name:'installation',
        message: 'Enter give the intallation instructions of the project',
    },
    {
        type:'input',
        name:'usage',
        message: 'Enter give the usage instructions of the project',
    },
    {
        type:'input',
        name:'contribution',
        message: 'Enter give the contribution instructions of the project',
    },
    {
        type:'input',
        name:'testing',
        message: 'Enter give the testing instructions of the project',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if(err) throw new Error(err)

    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data => writeToFile("./generatedReadme/ReadMe.md",generateMarkdown(data)))
}

// Function call to initialize app
init();
