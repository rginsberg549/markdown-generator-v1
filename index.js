const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const lib = require("./utils/generateMarkdown.js")

const writeFileAsync = util.promisify(fs.writeFile);

const questions = [
    {
        type: "input",
        name: "projectName",
        default: "",
        message: "What is the name of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please describe your project"
    },
    {
        type: "checkbox",
        name: "licenses",
        message: "Please select which licenses you'd like to add. Choose all that apply to your project. Use the spacebar to select multiple licenses.",
        choices: [
            '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
            '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
            '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
        ],
    },
    {
        type: "input",
        name: "installation",
        message: "Please enter in your installation instructions"
    },
    {
        type: "input",
        name: "usage",
        message: "Please describe how to use this"
    },
    {
        type: "input",
        name: "contributing",
        message: "Please enter information for your contributors"
    },
    {
        type: "input",
        name: "tests",
        message: "Describe any tests for your project"
    },
    {
        type: "input",
        name: "githubUsername",
        message: "What is your Github Username?"
    },
    {
        type: "input",
        name: "email",
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
