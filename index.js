// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is the description of your project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the installation instructions of your project?',
        name: 'instructions',
    },
    {
        type: 'input',
        message: 'What is the usage information of your project?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines of your project?',
        name: 'contributions',
    },
    {
        type: 'input',
        message: 'What are the test instructions of your project?',
        name: 'testInstructions',
    },
    {
        type: 'list',
        message: 'What is the license of your project?',
        name: 'licenseList',
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified License"', 'BSD 3-Clause "New" or "Revised License"', 'Boost Software License 1.0', ' Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v3.0', 'Mozilla Public License 2.0', 'The Unlicense'],
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
];



function renderLicenseBadge(license) {
switch (license) {
    case 'Apache License 2.0':
        return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        break;
    case 'GNU General Public License v3.0':
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
        break;
    case 'MIT License':
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        break;
    case 'BSD 2-Clause "Simplified License"':
        return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
        break;
    case 'BSD 3-Clause "New" or "Revised License"':
        return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
        break;
    case 'Boost Software License 1.0':
        return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
        break;
    case 'Creative Commons Zero v1.0 Universal':
        return "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)";
        break;
    case 'Eclipse Public License 2.0':
        return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
        break;
    case 'GNU Affero General Public License v3.0':
        return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
        break;
    case 'GNU General Public License v2.0':
        return "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
        break;
    case 'GNU Lesser General Public License v3.0':
        return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
        break;
    case 'Mozilla Public License 2.0':
        return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
        break;
    case 'The Unlicense':
        return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
        break;
}
}




inquirer.prompt(questions).then((response) =>
    fs.writeFile('Readme.md', 
`# ${(response.title)}
${renderLicenseBadge(response.licenseList)}

## Table of Contents
[Description](#description)
[Installation](#installation)
[Usage](#usage)
[License](#license)
[Contributing](#contributing)
[Tests](#tests)
[Questions](#questions)

<a name="description/>
## Description
${(response.description)}


<a name="installation"/>
## Installation
${(response.instructions)}

<a name="usage"/>
## Usage
${(response.usage)}

<a name="license"/>
## License
This project is licensed under the ${(response.licenseList)}

<a name="contributing"/>
## Contributing
${(response.contributions)}

<a name="tests"/>
## Tests
${(response.testInstructions)}

<a name="questions"/>
## Questions
My GitHub username is ${(response.username)}, and you can see more of my work at https://github.com/${(response.username)} 
You can also reach me at ${(response.email)}`,  (err) =>
      err ? console.error(err) : console.log('Generating README...')
    ));;


