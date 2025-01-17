import inquirer from 'inquirer'
import fs from 'fs'

const generateREADME = (response) => {
    `# <${response.name}>

## Description
${response.desription}
Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

- ${response.motivation}
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

## Usage

Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    ```md
    ![alt text](assets/images/screenshot.png)
    ```

## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

## License

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

If your project has a lot of features, list them here.

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them here.`
}

inquirer
    .prompt([
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "username"
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email"

        },
        {
            type: "input",
            message: "What is your project's name?",
            name: "project"

        },
        {
            type: "input",
            message: "Please write a description of your project.",
            name: "description"

        },
        {
            type: "input",
            message: "What is your motivation?",
            name: "motivation"

        },
        {
            type: "input",
            message: "why did you build the project?",
            name: "build"

        },
        {
            type: "input",
            message: "What project does it solve?",
            name: "solve"

        },
        {
            type: "input",
            message: "What's your makes your project stand out?",
            name: "stand"

        },
        {
            type: "list",
            message: "What kind of license should your project have",
            name: "licence",
            choices: ['MIT', 'apache - 2.0', 'ISC', 'MS - PL', 'MPL - 2.0', 'Unilicence'],

        },
        {
            type: "input",
            message: "What command should be run to install dependencies?",
            name: "dependencies"

        },
        {
            type: "input",
            message: "What should be run to run tests?",
            name: "test"

        },
        {
            type: "input",
            message: "What does the user need to know about using the repo?",
            name: "repo"

        },
        {
            type: "input",
            message: "What did you learn?",
            name: "learn"

        },
        {
            type: "input",
            message: "What does the user need to know about contributing to the repo?",
            name: "contribution"

        },

    ]).then((resposne) => 

)