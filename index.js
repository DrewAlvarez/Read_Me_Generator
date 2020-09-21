const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

inquirer
  .prompt([
    {
        type: "input",
        message: "Welcome to this README generator application.\n  Please enter your Github username.",
        name: "github"
    },
    {
        type: "input",
        message: "Please enter a email address.",
        name: "email"
    },
    {
      type: "input",
      message: "Please enter the title of your readme.",
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
      message: "Please provide the usage information.",
      name: "usageInfo"
    },
    {
      type: "input",
      message: "What are your contribution guidelines",
      name: "contributions"
    },
    {
      type: "input",
      message: "What are the test instructions?",
      name: "test"
    },
    {
        type: "list",
        message: "Choose the license for your project.",
        choices: ["MIT License", "GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla Public License 2.0", "Boost Software License 1.0", "The Unlicense"],
        name: "license"
    }
  ])
  .then(function(response) {

    async function writeReadme() {
        try {
          const title = `# ${response.title}`;
          const description = `\n \n## Description\n \n${response.description}`;
          const tableOfCont = `\n \n## Table of Contents \n \n* [Installation](#Installation) \n* [Usage](#Usage) \n* [License](# License) \n* [Contributing](# Contributing) \n* [Tests](# Tests) \n* [Questions](# Questions)`;
          const install = `\n \n## Installation \n \n${response.install}`;
          const usageInfo = `\n \n## Usage \n \n${response.usageInfo}`;
          const license = `\n \n## License \n \n![Badge](https://img.shields.io/badge/license-${response.license}-blue)`;
          const contribution = `\n \n## Contributing \n \n${response.contributions}`;
          const test = `\n \n## Tests \n \n${response.test}`;
          const questions = `\n \n## Questions \n \n[Github Profile](https://github.com/${response.github}/) \n \nI can be contacted at this email: <${response.email}>`

          const readmeToWrite = title + description + tableOfCont + install + usageInfo + license + contribution + test + questions
      
          await writeFileAsync("README.md", readmeToWrite);
      
          console.log(`Your README has been created`)      
      
        } catch(err) {
          console.log(err)
        }
      }
      
      writeReadme();
  });