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
    }]

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
