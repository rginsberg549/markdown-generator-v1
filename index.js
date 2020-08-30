const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const lib = require("./utils/generateMarkdown.js")

const writeFileAsync = util.promisify(fs.writeFile);

const questions = [
    {
        type: "input",
        name: "name",
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
            '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0',
            '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
            '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
        ],
        filter: function (val) {
            return val
        }
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
