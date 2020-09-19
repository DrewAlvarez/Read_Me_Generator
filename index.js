const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

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

    async function writeReadme() {
        try {
          const title = `# ${response.title}`;
          const description = `\n \n## Description\n${response.description}`;
          const readmeToWrite = title + description
      
          await writeFileAsync("README.md", readmeToWrite);
      
          console.log(`Your README has been created`)      
      
        } catch(err) {
          console.log(err)
        }
      }
      
      writeReadme();
  });