// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is the description of your project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the installation instructions of your project?',
        name: 'instructions',
    },
    {
        type: 'input',
        message: 'What is the usage information of your project?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines of your project?',
        name: 'contributions',
    },
    {
        type: 'input',
        message: 'What are the test instructions of your project?',
        name: 'test-instructions',
    },
    {
        type: 'list',
        message: 'What is the license of your project?',
        name: 'license-list',
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified License', 'BSD 3-Clause "New" or "Revised License', 'Boost Software License 1.0', ' Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    inquirer.prompt(questions).then((response) =>
    fs.appendFile('generatedReadme.md', `## ${JSON.stringify(response.title)}`,  (err) =>
      err ? console.error(err) : console.log('Commit logged!')
    ));;
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
