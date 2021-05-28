// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var licVal = ``;
  switch (license) {
    case "MIT":
      licVal = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
      break;
    case "APACHE":
      licVal = `![License: APACHE](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
      break;
    case "Boost":
      licVal = `![License: Boost](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)`;
      break;
    case "IBM":
      licVal = `![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)`;
      break;
    default:
      licVal = ``;
  }

  return licVal;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var licVal = ``;
  switch (license) {
    case "MIT":
      licVal = `https://opensource.org/licenses/MIT`;
      break;
    case "APACHE":
      licVal = `https://opensource.org/licenses/Apache-2.0`;
      break;
    case "Boost":
      licVal = `https://www.boost.org/LICENSE_1_0.txt`;
      break;
    case "IBM":
      licVal = `https://opensource.org/licenses/IPL-1.0`;
      break;
    default:
      licVal = ``;
  }

  return licVal;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `${renderLicenseBadge(license)}
  * ${renderLicenseLink(license)}`;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
## Description 
${renderLicenseBadge(answers.license)}
  * ${answers.description}

## Table of Contents
  - [Installation](##installation)
  - [Usage](##usage)
  - [License](##license)
  - [Contributing](##contributing)
  - [Tests](##tests)
  - [Questions](##questions)

## Installation
  -${answers.installation}

## Usage
  -${answers.usage}

## License 
${renderLicenseSection(answers.license)}

## Contributing
  - ${answers.contributing}

## Tests
  - ${answers.tests}

## Questions
  * Username: ${answers.github}
    * Github: https://github.com/${answers.github}
  * Email: ${answers.email}`;
};

module.exports = generateMarkdown;
