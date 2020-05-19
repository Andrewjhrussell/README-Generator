const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const markDown = require("./generateMarkdown");

inquirer
    .prompt([
    {
        type: "input",
        message: "Enter your GitHub username:",
        name: "username"
    }, 
    {
        type: "input",
        message: "Whats your link to your deploy github",
        name:"deploy"
    },
    { 
        type: "input",
        message: "What is the Title?",
        name: "title"
    },
    {
        type: "input",
        message: "Can you describe your project?",
        name: "description"
    },

    {
        type: "input",
        message: "How do you install it?",
        name:"installation",
        default: "npm i"
    },
    {
        type: "input",
        message: "How do you use it?",
        name:"usage"
    },
    {
        type: "list",
        message: "Can you give us license info?",
        name:"license",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
        type: "input",
        message:"How did you test it?",
        name: "test",
        default: "npm run test"
    },
    {
        type: "input",
        message:"What is your email?",
        name:"useremail"     
    },
    {
        type: "input",
        message:"How do you contribute to this project?",
        name:"contributing"     
    },



])
  .then(function(answers) {
    const queryUrl = `https://api.github.com/users/${answers.username}`;

    axios.get(queryUrl).then(function(res) {  
       

       const markDownText = markDown({...answers, ...res.data})
        
        fs.writeFile("readme.md", markDownText, function(err) {
            if (err) {
              throw err;
            }
            console.log("markdown created!")
          });
       
        
    })
    
    });
   
