const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const lib = require("./utils/generateMarkdown.js")

const writeFileAsync = util.promisify(fs.writeFile);

const questions = [
    {
        type: "input",
        name: "projectName",
        default: "Markdown File Generator",
        message: "What is the name of your project?"
    },
    {
        type: "input",
        name: "description",
        default: "A command-line README.md file generator.  Creates a README.md file through a series of prompts that follow industry best practices for project.",
        message: "Please describe your project"
    },
    {
        type: "checkbox",
        name: "licenses",
        message: "Please select which licenses you'd like to add. Choose all that apply to your project. Use the spacebar to select multiple licenses.",
        choices: [
            'I need to work in a community', 
            'I want it simple and permissive',
            'I care about sharing improvements',
            'I want to manually add my liceneses', 
            'I don\'t want to add any liceneses'
        ]
    },
    {
        type: "input",
        name: "installation",
        default: "N/A",
        message: "Please enter in your installation instructions"
    },
    {
        type: "input",
        name: "usage",
        default: "N/A",
        message: "Please describe how to use this"
    },
    {
        type: "input",
        name: "contributing",
        default: "N/A",
        message: "Please enter information for your contributors"
    },
    {
        type: "input",
        name: "tests",
        default: "N/A",
        message: "Describe any tests for your project"
    },
    {
        type: "input",
        name: "githubUsername",
        default: "N/A",
        message: "What is your Github Username?"
    },
    {
        type: "input",
        name: "email",
        default: "N/A",
        message: "What is your email?"
    }
]

function promptUser() {
  return inquirer.prompt(questions);
}



promptUser()
  .then(function(data) {
    const markDown = lib.generateMarkdown(data);

    return writeFileAsync("README.md", markDown);
  })
  .then(function() {
    console.log("Successfully wrote README.md");
  })
  .catch(function(err) {
    console.log(err);
  });
