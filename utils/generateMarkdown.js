// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'Apache 2.0') {
    return `<a href="https://opensource.org/licenses/Apache-2.0" target="_blank">here</a>`
  }else  if(license === 'MIT') {
    return `<a href="https://opensource.org/licenses/MIT" target="_blank">here</a>`

  }else if(license === 'GPl 3.0') {
    return `<a href="https://www.gnu.org/licenses/gpl-3.0" target="_blank">here</a>`
  }else {
    return '  '
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//copywrite
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
    ## Table of Contents
    -[Description] (#description)
    -[Installation] (#installation)
    -[Usage] (#usage)
    -[Contribution] (#contribution)
    -[Testing] (#testing)

    ## Description
    ${data.description}


    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}

    ## Contribution
    ${data.contribution}

    ## Testing
    ${data.testing}

    ### Licensing
    This project has ${data.license} license

    ${renderLicenseLink(data.license)}

`;
}

module.exports = generateMarkdown;
