// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage instructions.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license are you using?',
        choices: ['MIT', 'APACHE', 'Boost', 'IBM', "N/A"]
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How do you contribute to this project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How do you test the progam?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the user email?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((response) => writeToFile('README.md', generateMarkdown({ ...response })))
        .then(() => console.log('README.md created!'))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();