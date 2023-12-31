// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }

  return " ";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `\n* [License](#license)\n` ;
  }
  return " ";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License 
    
This project is licensed under the ${license} license.`
  }
  return " "
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  * [Installation](#Installation)
  
  * [Usage](#Usage)
  ${renderLicenseLink(data.license)}
  * [Contributing](#contributing)
  
  * [Tests](#tests)
  
  * [Questions](#questions)
  
  
  ## Installation
  To install necessary dependencies, run the following command: 
  \`\`\`
  ${data.installation}
  \`\`\`
  
  ## Usage 
  
  ${data.usage}
  
  ${renderLicenseSection(data.license)}
  
  ## Contributing 
  
  ${data.contributing}
  
  ## Tests 
  
  To run tests, run the following command: 
  
  \`\`\`
  ${data.test}
  \`\`\`
  
  
  ## Questions 
  
  Any questions about the repository? Feel free to open an issue, or send me an email at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}/).
  
  Thank you for stopping by! 
  
`;
}
  

module.exports = generateMarkdown;
