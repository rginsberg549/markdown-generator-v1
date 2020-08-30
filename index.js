const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const lib = require("./utils/generateMarkdown.js")

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the name of your project?"
    }]);
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
