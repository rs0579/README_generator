import inquirer from 'inquirer'
import fs from 'fs'

const generateREADME = (response) => {
   return `# <${response.project}>

## Description

- ${response.motivation}
- ${response.build}
- ${response.solve}
- ${response.learn}

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${response.dependencies}
${response.repo}

## Usage

${response.description}
${response.screenshots}

## Credits

${response.contribution}

## License

${response.licence}

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

If your project has a lot of features, list them here.

## How to Contribute

${response.contribute}

## Tests

${response.test}`
}

inquirer
    .prompt([

        {
            type: "input",
            message: "What is your project's name?",
            name: "project",

        },
        {
            type: "input",
            message: "Please write a description of your project.",
            name: "description",

        },
        {
            type: "list",
            message: "What kind of license should your project have",
            name: "licence",
            choices: ['MIT', 'apache - 2.0', 'ISC', 'MS - PL', 'MPL - 2.0', 'Unilicence'],

        },
        {
            type: "confirm",
            message: "Are there any screenshots?",
            name: "screenshots",
        },
        {
            type: "input",
            message: "What command should be run to install dependencies?",
            name: "dependencies",

        },
        {
            type: "input",
            message: "What should be run to run tests?",
            name: "test",

        },
        {
            type: "input",
            message: "What does the user need to know about using the repo?",
            name: "repo",

        },
        {
            type: "input",
            message: "What does the user need to know about contributing to the repo?",
            name: "contribution",

        },
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
            message: "What's your makes your project stand out?",
            name: "stand",

        },
        {
            type: "input",
            message: "What is your motivation?",
            name: "motivation",

        },
        {
            type: "input",
            message: "why did you build the project?",
            name: "build",

        },
        {
            type: "input",
            message: "What did you learn?",
            name: "learn",

        },
        {
            type: "input",
            message: "What problem does it solve?",
            name: "solve",

        },

    ]).then((response) => {
        const mkREAD = generateREADME(response)
        fs.writeFile('README.md', mkREAD, (err) => err ? console.log("There's something off here") : console.log("Success!"));
    })