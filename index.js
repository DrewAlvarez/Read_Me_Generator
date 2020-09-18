let inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "Welcome to this README generator application.\n  Please enter the title of your readme.",
      name: "title"
    },
    {
      type: "input",
      message: "Please provide the description you wish to include.",
      name: "description"
    },
    {
      type: "input",
      message: "What are the instalation instructions?",
      name: "install"
    },
    {
      type: "input",
      message: "Please provide usage information.",
      name: "usageInfo"
    },
    {
      type: "input",
      message: "What are the contribution guidelines?",
      name: "guidelines"
    },
    {
      type: "input",
      message: "What are the testins tructions?",
      name: "test"
    }
  ])
  .then(function(response) {
    console.log(response)
  });