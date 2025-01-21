import inquirer from 'inquirer'
import fs from 'fs'



const generateREADME = (response) => {
   return `# <${response.project}>

## Description

${response.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [License](#license)
- [Questions](#questions)

## Installation

${response.dependencies}


## Usage
 ${response.usage}

## License

${response.license}

## Contributions

${response.contribution}

## Tests

${response.test}

## Questions 

If you want to reach out to me my email is ${response.email} and to see more of my work, find my GitHub at ${response.username}.
`

}

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
        renderLicenseBadge(response.licence)
    })


    












    

     







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
