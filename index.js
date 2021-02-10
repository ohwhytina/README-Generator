// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template');

// TODO: Create an array of questions for user input
const promptQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: 'What is your Github Username? (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter your Github Username!");
                    return false 
                }
            }
          },
          {
            type: 'input',
            name: 'reponame',
            message: 'What is the name of your Github repo? (Required)',
            validate: gitrepoInput => {
                if (gitrepoInput) {
                    return true;
                } else {
                    console.log("Please enter your Github repo name!");
                    return false 
                }
            }
          },
          {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log("Please enter a title for your project!");
                    return false 
                }
            }
          },
          {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log("Please enter description!");
                    return false 
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Describe the installation process (if any)',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Describe the project usage (if any)',
        },
        {
            type: 'checkbox',
            name: 'licenses',
            message: 'What license was used in this project(Check all that apply)',
            choices: ['Apache 2.0', 'MIT', 'Boost Software 1.0', 'Mozilla 2.0', 'GNU GPLv3']
        },
        {
            type: "input",
            name: "test",
            message: "Is there a test included?"
        },
        {
            type: 'input',
            name: 'contributor',
            message: 'Who are the contributors?',
        },
    ]);
};

promptQuestions()
    .then(readmeData => {
        const pageHTML = generatePage(readmeData);

        fs.writeFile('./README.md', pageHTML, err => {
            if (err) throw err;

            console.log('README complete! Check out readme!');
        });
    });