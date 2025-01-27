import inquirer from 'inquirer'
import fs from 'fs'
//THE ABOVE ALLOWS ME TO USE THE PROPERTIES AND QUALITIES OF THESE NPM PACKAGES. ALTHOUGH FS COMES WITH NODE, YOU STILL HAVE TO IMPORT IT. BUT INQUIRER NEEDS TO BE INSTALLED

//THE BELOW IS THE MARKDOWN FILE THAT WILL BE FILLED IN USING THE RESPONSES GATHERED IN THE INQUIRER SECTIION
const generateREADME = (response) => {
   return `# ${response.project}

## Description

${response.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [License](#license)
- [Badge](#badge)
- [Questions](#questions)

## Installation

${response.dependencies}


## Usage
 ${response.usage}

## License

${response.license}

## Badge
${renderLicenseBadge(response.license)}

## Contributions

${response.contribution}

## Tests

${response.test}

## Questions 

If you want to reach out to me my email is ${response.email} and to see more of my work, find my GitHub at ${response.username}. GitHub Link: https://github.com/rs0579 Walkthrough: 
`
}

//THIS FUNCTION IS SUPPOSED TO RENDER A BADGE FOR THE LICENSE.
function renderLicenseBadge(license) {
    if (license === "MIT"){
        return "![GitHub license](https://img.shields.io/badge/MIT-license-pink)"
    } else if (license === "apache - 2.0"){
        return "![GitHub license](https://img.shields.io/badge/apache_2.0-license-gold)"
    }else if (license === "ISC")
        return "![GitHub license](https://img.shields.io/badge/ISC-license-silver)"
        else if (license === "MS - PL") {
            return "![GitHub license](https://img.shields.io/badge/MS_--_PL-license-red)"
        } else if (license === "Unilicense"){
            return "![GitHub license](https://img.shields.io/badge/Unilicense-license-green)"
        }
}

//THESE ARE THE QUESTIONS THAT HAVE BEEN IMPORTED BY INQUIRER. 
inquirer
    .prompt([
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "username",
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email",

        },
        {
            type: "input",
            message: "What is your project's name?",
            name: "project",

        },
        {
            type: "input",
            message: "Please write a short description of your project.",
            name: "description"
        },
        {
            type: "list",
            message: "What kind of license should your project have",
            name: "license",
            choices: ['MIT', 'apache - 2.0', 'ISC', 'MS - PL', 'Unilicence'],

        },
        {
            type: "input",
            message: "What command should be run to install dependencies?",
            name: "dependencies",

        },
        {
            type: "input",
            message: "Are there tests to be run? If so, what are they?",
            name: "test",

        },
        {
            type: "input",
            message: "What does the user need to know about using the repo?",
            name: "usage",

        },
        {
            type: "input",
            message: "What does the user need to know about contributing to the repo?",
            name: "contribution",

        },
        
    ]).then((response) => {
        const mkREAD = generateREADME(response)
        fs.writeFile('README.md', mkREAD, (err) => err ? console.log("There's something off here") : console.log("Success!"));
    })

    // THE ABOVE .THEN IS LIKE THE RETURN OF THE PROMPT. AFTER I ANSWER THE QUESTION THEN I WANT THIS. THE FS IS AS FOLLOWS: FS WRITEFILE (WHICH CREATES A NEW FILE) FILENAME.MD (TYPE OF FILE AND ITS NAME), THE SOURCE OF THE CONTENT, WHERE WE'RE PULLING THE DATA FROM. AND FINALLY THE ERROR IN AN TERNARY OPERATOR.


    












    

     







    // {
    //     type: "input",
    //     message: "What's your makes your project stand out?",
    //     name: "stand",

    // },
    // {
    //     type: "input",
    //     message: "What is your motivation?",
    //     name: "motivation",

    // },
    // {
    //     type: "input",
    //     message: "why did you build the project?",
    //     name: "build",

    // },
    // {
    //     type: "input",
    //     message: "What did you learn?",
    //     name: "learn",

    // },
    // {
    //     type: "input",
    //     message: "What problem does it solve?",
    //     name: "solve",

    // },
    // {
    //     type: "input",
    //     message: "What are the steps required to use your app?",
    //     name: "usage",

    // },
    // {
    //     type: "confirm",
    //     message: "Are there any screenshots?",
    //     name: "screenshots",
    // },
